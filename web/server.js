const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

loadEnv(path.join(__dirname, ".env"));

const PORT = Number(process.env.PORT || 8080);
const PUBLIC_DIR = path.join(__dirname, "public");
const NC_HOST = "tw.ncsoft.com";
const { toTraditional } = require(path.join(__dirname, "..", "miniprogram", "utils", "s2t.js"));
let PrismaClient = null;
try {
  ({ PrismaClient } = require("@prisma/client"));
} catch (_) {}
const prisma = PrismaClient ? new PrismaClient() : null;
const DEV_USER_UUID = process.env.DEV_USER_UUID || "00000000-0000-4000-8000-000000000001";

const rateStore = new Map();
const RATE_LIMIT = 180;
const RATE_WINDOW_MS = 60_000;
const AUTO_REFRESH_ENABLED = process.env.AUTO_REFRESH_SNAPSHOTS !== "false";
const AUTO_REFRESH_AFTER_MS = Number(process.env.AUTO_REFRESH_AFTER_MS || 24 * 60 * 60 * 1000);
const AUTO_REFRESH_INTERVAL_MS = Number(process.env.AUTO_REFRESH_INTERVAL_MS || 60 * 60 * 1000);
const AUTO_REFRESH_BATCH_SIZE = Math.max(1, Math.min(20, Number(process.env.AUTO_REFRESH_BATCH_SIZE || 5)));
const AUTO_REFRESH_DELAY_MS = Number(process.env.AUTO_REFRESH_DELAY_MS || 2500);
let autoRefreshRunning = false;

const reloadClients = new Set();
let reloadTimer = null;
fs.watch(PUBLIC_DIR, { recursive: true }, () => {
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    for (const res of reloadClients) res.write("id: 1\ndata: reload\n\n");
  }, 80);
});

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eq = trimmed.indexOf("=");
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    const raw = trimmed.slice(eq + 1).trim();
    const value = raw.replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  });
}

function jsonHeaders(extra = {}) {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...extra,
  };
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) {
        reject(new Error("request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }
      try { resolve(JSON.parse(body)); } catch (_) { reject(new Error("invalid json body")); }
    });
    req.on("error", reject);
  });
}

async function currentUser() {
  if (!prisma) throw new Error("Prisma client is not ready. Run npm install and npm run db:generate.");
  return prisma.user.upsert({
    where: { uuid: DEV_USER_UUID },
    update: {},
    create: { uuid: DEV_USER_UUID },
  });
}

function sanitizeTemplateName(value, fallback) {
  const text = String(value || "").trim().slice(0, 12);
  return text || fallback;
}

function sanitizeTemplatePayload(body) {
  const templates = Array.isArray(body.templates) ? body.templates.slice(0, 3) : [];
  return {
    enabled: !!body.enabled,
    activeTemplate: Math.max(0, Math.min(2, Math.round(Number(body.activeTemplate) || 0))),
    templates: [0, 1, 2].map((index) => {
      const template = templates[index] || {};
      return {
        name: sanitizeTemplateName(template.name, `模板 ${index + 1}`),
        disks: Array.isArray(template.disks) ? template.disks : [],
      };
    }),
  };
}

async function handlePetTemplates(req, res) {
  if (!prisma) {
    send(res, 503, JSON.stringify({ success: false, error: "database is not configured" }), jsonHeaders());
    return;
  }
  const user = await currentUser();
  if (req.method === "GET") {
    const rows = await prisma.petTemplate.findMany({
      where: { userId: user.id },
      orderBy: { slotIndex: "asc" },
    });
    send(res, 200, JSON.stringify({
      success: true,
      userUuid: user.uuid,
      enabled: false,
      activeTemplate: 0,
      templates: rows.map((row) => ({ slotIndex: row.slotIndex, name: row.name, disks: row.data && row.data.disks ? row.data.disks : [] })),
    }), jsonHeaders());
    return;
  }

  if (req.method === "PUT") {
    const body = sanitizeTemplatePayload(await readJsonBody(req));
    await Promise.all(body.templates.map((template, slotIndex) => prisma.petTemplate.upsert({
      where: { userId_slotIndex: { userId: user.id, slotIndex } },
      update: { name: template.name, data: { disks: template.disks } },
      create: { userId: user.id, slotIndex, name: template.name, data: { disks: template.disks } },
    })));
    send(res, 200, JSON.stringify({ success: true, userUuid: user.uuid }), jsonHeaders());
    return;
  }

  send(res, 405, JSON.stringify({ success: false, error: "method not allowed" }), jsonHeaders({ Allow: "GET, PUT" }));
}

function checkRate(ip) {
  const now = Date.now();
  let e = rateStore.get(ip);
  if (!e || now >= e.resetAt) {
    e = { count: 0, resetAt: now + RATE_WINDOW_MS };
    rateStore.set(ip, e);
  }
  e.count++;
  return e.count > RATE_LIMIT ? Math.ceil((e.resetAt - now) / 1000) : 0;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, e] of rateStore) if (now >= e.resetAt) rateStore.delete(ip);
}, 300_000).unref();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function proxyNcsoft(apiPath) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: NC_HOST,
      path: apiPath,
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "zh-TW,zh;q=0.9",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://tw.ncsoft.com/aion2/",
      },
    }, (upstream) => {
      let body = "";
      upstream.on("data", (chunk) => { body += chunk; });
      upstream.on("end", () => {
        resolve({
          status: upstream.statusCode || 502,
          body,
          type: upstream.headers["content-type"] || "application/json; charset=utf-8",
        });
      });
    });

    req.on("error", reject);
    req.setTimeout(15000, () => {
      req.destroy(new Error("request timeout 15s"));
    });
    req.end();
  });
}

function parseNcJson(body) {
  return JSON.parse(String(body || "{}").replace(/\0/g, "").trim() || "{}");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchNcJson(apiPath) {
  const upstream = await proxyNcsoft(apiPath);
  if (upstream.status >= 400) throw new Error(`NCSoft API returned HTTP ${upstream.status}`);
  return parseNcJson(upstream.body);
}

function inferRaceFromServerId(serverId) {
  const id = Number(serverId);
  if (id >= 1000 && id < 2000) return "1";
  if (id >= 2000 && id < 3000) return "2";
  return "";
}

function ncSearchPath(qs, raceOverride = "") {
  const keyword = qs.get("keyword");
  if (!keyword) return null;
  const params = new URLSearchParams({
    keyword,
    page: qs.get("page") || "1",
    size: qs.get("size") || "30",
    sort: qs.get("sort") || "desc",
  });
  if (qs.get("serverId")) params.set("serverId", qs.get("serverId"));
  const race = raceOverride || (qs.get("race") && qs.get("race") !== "0" ? qs.get("race") : inferRaceFromServerId(qs.get("serverId")));
  if (race) params.set("race", race);
  return `/aion2/api/search/character?${params.toString()}`;
}

async function handleCharacterSearch(req, res, url) {
  const qs = url.searchParams;
  const hasRace = qs.get("race") && qs.get("race") !== "0";
  const hasServer = !!qs.get("serverId");
  const inferredRace = inferRaceFromServerId(qs.get("serverId"));
  const races = hasRace || hasServer ? [qs.get("race") || inferredRace].filter(Boolean) : ["1", "2"];

  try {
    const responses = await Promise.all(races.map((race) => proxyNcsoft(ncSearchPath(qs, race))));
    const lists = [];
    let total = 0;
    let status = 200;
    for (const response of responses) {
      status = response.status >= 400 ? response.status : status;
      const data = parseNcJson(response.body);
      if (Array.isArray(data.list)) lists.push(...data.list);
      total += Number(data.pagination && data.pagination.total || data.list && data.list.length || 0);
    }
    send(res, status, JSON.stringify({
      list: lists,
      pagination: {
        page: Number(qs.get("page") || 1),
        size: Number(qs.get("size") || 30),
        total,
        endPage: Math.max(1, ...responses.map((response) => {
          try {
            return Number((parseNcJson(response.body).pagination || {}).endPage || 1);
          } catch (_) {
            return 1;
          }
        })),
      },
    }), {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=30",
    });
  } catch (error) {
    send(res, 502, JSON.stringify({ success: false, error: error.message }), jsonHeaders());
  }
}

function intOrNull(value) {
  const num = Number(value);
  return Number.isFinite(num) ? Math.round(num) : null;
}

function textOrNull(value, max = 160) {
  const text = String(value || "").trim();
  return text ? text.slice(0, max) : null;
}

function hashText(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  const salt = process.env.ANALYTICS_HASH_SALT || DEV_USER_UUID;
  return crypto.createHash("sha256").update(`${salt}:${text}`).digest("hex");
}

function requestIp(req) {
  return ((req.headers["x-forwarded-for"] || "").split(",")[0].trim()) || req.socket.remoteAddress || "";
}

function sanitizeAnalyticsBody(body) {
  const profile = body.profile || {};
  const detail = body.detail || {};
  const characterId = textOrNull(body.characterId || profile.characterId || detail.characterId, 512);
  const characterName = textOrNull(body.characterName || profile.characterName || detail.characterName, 80);
  return {
    characterId,
    characterName,
    serverId: intOrNull(body.serverId || profile.serverId || detail.serverId),
    serverName: textOrNull(body.serverName || profile.serverName || detail.serverName, 80),
    race: intOrNull(body.race || profile.raceId || profile.race || detail.race),
    className: textOrNull(body.className || profile.className || detail.className, 80),
    level: intOrNull(body.level || profile.characterLevel || profile.level || detail.level),
    combatPower: intOrNull(body.combatPower || profile.combatPower),
    itemLevel: intOrNull(body.itemLevel || detail.itemLevel),
    snapshotType: textOrNull(body.snapshotType, 24),
    querySource: textOrNull(body.querySource || "detail", 40) || "detail",
    queryKeyword: textOrNull(body.queryKeyword, 120),
    profileJson: body.profile || null,
    equipmentJson: body.equipment || null,
    analysisJson: body.analysis || null,
    detailJson: body.detail || null,
  };
}

async function recordCharacterNameSnapshot(data) {
  if (!prisma || !data.characterId || !data.characterName || !data.serverId) return;
  await prisma.characterNameSnapshot.upsert({
    where: {
      characterId_serverId_characterName: {
        characterId: data.characterId,
        serverId: data.serverId,
        characterName: data.characterName,
      },
    },
    update: {
      serverName: data.serverName,
      race: data.race,
      className: data.className,
      level: data.level,
      seenCount: { increment: 1 },
    },
    create: {
      characterId: data.characterId,
      serverId: data.serverId,
      characterName: data.characterName,
      serverName: data.serverName,
      race: data.race,
      className: data.className,
      level: data.level,
    },
  });
}

async function handleCharacterAnalytics(req, res) {
  if (!prisma) {
    send(res, 503, JSON.stringify({ success: false, error: "database is not configured" }), jsonHeaders());
    return;
  }
  if (req.method !== "POST") {
    send(res, 405, JSON.stringify({ success: false, error: "method not allowed" }), jsonHeaders({ Allow: "POST" }));
    return;
  }

  const body = sanitizeAnalyticsBody(await readJsonBody(req));
  if (!body.characterId || !body.characterName) {
    send(res, 400, JSON.stringify({ success: false, error: "characterId and characterName are required" }), jsonHeaders());
    return;
  }

  let user = null;
  try {
    user = await currentUser();
  } catch (_) {}

  await prisma.characterQueryLog.create({
    data: {
      userId: user ? user.id : null,
      characterId: body.characterId,
      characterName: body.characterName,
      serverId: body.serverId,
      serverName: body.serverName,
      race: body.race,
      className: body.className,
      level: body.level,
      combatPower: body.combatPower,
      itemLevel: body.itemLevel,
      snapshotType: body.snapshotType,
      querySource: body.querySource,
      queryKeyword: body.queryKeyword,
      clientIpHash: hashText(requestIp(req)),
      userAgentHash: hashText(req.headers["user-agent"] || ""),
    },
  });
  await recordCharacterNameSnapshot(body);

  if (body.detailJson || body.analysisJson || body.profileJson || body.equipmentJson) {
    await prisma.characterSnapshot.create({
      data: {
        userId: user ? user.id : null,
        characterId: body.characterId,
        characterName: body.characterName,
        serverId: body.serverId,
        serverName: body.serverName,
        race: body.race,
        className: body.className,
        level: body.level,
        combatPower: body.combatPower,
        itemLevel: body.itemLevel,
        snapshotType: body.snapshotType,
        profileJson: body.profileJson,
        equipmentJson: body.equipmentJson,
        analysisJson: body.analysisJson,
        detailJson: body.detailJson,
      },
    });
  }

  send(res, 200, JSON.stringify({ success: true }), jsonHeaders());
}

function profileFromInfo(info, fallback = {}) {
  const profile = info.profile || info.character || info.characterInfo || info;
  return {
    characterId: fallback.characterId || profile.characterId || "",
    characterName: profile.characterName || profile.name || fallback.characterName || "",
    serverId: intOrNull(profile.serverId || fallback.serverId),
    serverName: textOrNull(profile.serverName || fallback.serverName, 80),
    race: intOrNull(profile.raceId || profile.race || fallback.race),
    className: textOrNull(profile.className || fallback.className, 80),
    level: intOrNull(profile.characterLevel || profile.level || fallback.level),
    combatPower: intOrNull(profile.combatPower || fallback.combatPower),
    profile,
  };
}

async function refreshCharacterSnapshot(row) {
  const characterId = row.characterId;
  const serverId = row.serverId;
  if (!characterId || !serverId) return false;
  const params = `lang=zh&characterId=${encodeURIComponent(characterId)}&serverId=${encodeURIComponent(serverId)}`;
  const [info, equipment] = await Promise.all([
    fetchNcJson(`/aion2/api/character/info?${params}`),
    fetchNcJson(`/aion2/api/character/equipment?${params}`),
  ]);
  const profile = profileFromInfo(info, row);
  const characterName = profile.characterName || row.characterName;
  const refreshMeta = {
    characterId,
    characterName,
    serverId: profile.serverId || serverId,
    serverName: profile.serverName || row.serverName,
    race: profile.race || row.race,
    className: profile.className || row.className,
    level: profile.level || row.level,
  };
  await prisma.characterQueryLog.create({
    data: {
      userId: row.userId || null,
      characterId,
      characterName,
      serverId: refreshMeta.serverId,
      serverName: refreshMeta.serverName,
      race: refreshMeta.race,
      className: refreshMeta.className,
      level: refreshMeta.level,
      combatPower: profile.combatPower || row.combatPower,
      itemLevel: row.itemLevel || null,
      snapshotType: row.snapshotType || null,
      querySource: "auto-refresh",
      queryKeyword: null,
      clientIpHash: null,
      userAgentHash: null,
    },
  });
  await recordCharacterNameSnapshot(refreshMeta);
  await prisma.characterSnapshot.create({
    data: {
      userId: row.userId || null,
      characterId,
      characterName,
      serverId: refreshMeta.serverId,
      serverName: refreshMeta.serverName,
      race: refreshMeta.race,
      className: refreshMeta.className,
      level: refreshMeta.level,
      combatPower: profile.combatPower || row.combatPower,
      itemLevel: row.itemLevel || null,
      snapshotType: row.snapshotType || null,
      profileJson: profile.profile || info,
      equipmentJson: equipment,
      analysisJson: null,
      detailJson: {
        source: "auto-refresh",
        info,
        equipment,
      },
    },
  });
  return true;
}

async function autoRefreshSnapshots() {
  if (!prisma || !AUTO_REFRESH_ENABLED || autoRefreshRunning) return;
  autoRefreshRunning = true;
  try {
    const staleBefore = new Date(Date.now() - AUTO_REFRESH_AFTER_MS);
    const candidates = await prisma.characterQueryLog.findMany({
      distinct: ["characterId", "serverId"],
      where: {
        characterId: { not: "" },
        serverId: { not: null },
        querySource: { not: "auto-refresh" },
      },
      orderBy: { createdAt: "desc" },
      take: AUTO_REFRESH_BATCH_SIZE * 4,
    });

    let refreshed = 0;
    for (const row of candidates) {
      if (refreshed >= AUTO_REFRESH_BATCH_SIZE) break;
      const latestSnapshot = await prisma.characterSnapshot.findFirst({
        where: { characterId: row.characterId, serverId: row.serverId },
        orderBy: { createdAt: "desc" },
        select: { createdAt: true },
      });
      if (latestSnapshot && latestSnapshot.createdAt > staleBefore) continue;
      try {
        const ok = await refreshCharacterSnapshot(row);
        if (ok) refreshed += 1;
      } catch (error) {
        console.warn(`[analytics] auto refresh failed for ${row.characterName || row.characterId}: ${error.message}`);
      }
      if (refreshed < AUTO_REFRESH_BATCH_SIZE) await sleep(AUTO_REFRESH_DELAY_MS);
    }
    if (refreshed) console.log(`[analytics] auto refreshed ${refreshed} character snapshot(s)`);
  } catch (error) {
    console.warn(`[analytics] auto refresh skipped: ${error.message}`);
  } finally {
    autoRefreshRunning = false;
  }
}

function rankingCandidatePaths(qs) {
  const params = new URLSearchParams({
    lang: "zh",
    rankingContentsType: qs.get("rankingContentsType") || "1",
    rankingType: qs.get("rankingType") || "0",
    serverId: qs.get("serverId") || "1001",
    page: qs.get("page") || "1",
    size: qs.get("size") || "100",
    sort: qs.get("sort") || "desc",
  });
  if (qs.get("searchCharacterName")) params.set("searchCharacterName", qs.get("searchCharacterName"));
  if (qs.get("className")) params.set("className", qs.get("className"));

  const query = params.toString();
  return [
    `/aion2/api/ranking/list?${query}`,
    `/aion2/api/ranking?${query}`,
    `/aion2/api/character/ranking?${query}`,
    `/aion2/api/character/ranking/list?${query}`,
  ];
}

async function handleRanking(req, res, url) {
  const errors = [];
  for (const path of rankingCandidatePaths(url.searchParams)) {
    try {
      const upstream = await proxyNcsoft(path);
      const body = String(upstream.body || "").replace(/\0/g, "").trim();
      if (upstream.status < 400 && body) {
        send(res, 200, body, {
          "Content-Type": upstream.type.includes("json") ? upstream.type : "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=30",
          "X-AION2-Ranking-Path": path.split("?")[0],
        });
        return;
      }
      errors.push(`${path.split("?")[0]} -> HTTP ${upstream.status}`);
    } catch (error) {
      errors.push(`${path.split("?")[0]} -> ${error.message}`);
    }
  }
  send(res, 502, JSON.stringify({
    success: false,
    error: "ranking api not available",
    tried: errors,
  }), jsonHeaders());
}

function ncPathFromRoute(url) {
  const qs = url.searchParams;
  if (url.pathname === "/api/search") {
    return ncSearchPath(qs);
  }

  if (url.pathname === "/api/info") {
    const characterId = qs.get("characterId");
    const serverId = qs.get("serverId");
    if (!characterId || !serverId) return null;
    return `/aion2/api/character/info?lang=zh&characterId=${encodeURIComponent(characterId)}&serverId=${encodeURIComponent(serverId)}`;
  }

  if (url.pathname === "/api/equipment") {
    const characterId = qs.get("characterId");
    const serverId = qs.get("serverId");
    if (!characterId || !serverId) return null;
    return `/aion2/api/character/equipment?lang=zh&characterId=${encodeURIComponent(characterId)}&serverId=${encodeURIComponent(serverId)}`;
  }

  if (url.pathname === "/api/equipment-item") {
    const required = ["id", "enchantLevel", "characterId", "serverId", "slotPos"];
    if (required.some((key) => !qs.get(key))) return null;
    const params = new URLSearchParams({
      lang: "zh",
      id: qs.get("id"),
      enchantLevel: qs.get("enchantLevel"),
      characterId: qs.get("characterId"),
      serverId: qs.get("serverId"),
      slotPos: qs.get("slotPos"),
    });
    return `/aion2/api/character/equipment/item?${params.toString()}`;
  }

  if (url.pathname === "/api/daevanion") {
    const required = ["characterId", "serverId", "boardId"];
    if (required.some((key) => !qs.get(key))) return null;
    const params = new URLSearchParams({
      lang: "zh",
      characterId: qs.get("characterId"),
      serverId: qs.get("serverId"),
      boardId: qs.get("boardId"),
    });
    return `/aion2/api/character/daevanion/detail?${params.toString()}`;
  }

  return null;
}

async function handleApi(req, res, url) {
  if (url.pathname === "/api/pet-templates") {
    try {
      await handlePetTemplates(req, res);
    } catch (error) {
      send(res, 500, JSON.stringify({ success: false, error: error.message }), jsonHeaders());
    }
    return;
  }

  if (url.pathname === "/api/analytics/character-query") {
    try {
      await handleCharacterAnalytics(req, res);
    } catch (error) {
      send(res, 500, JSON.stringify({ success: false, error: error.message }), jsonHeaders());
    }
    return;
  }

  if (url.pathname !== "/api/convert") {
    const ip = ((req.headers["x-forwarded-for"] || "").split(",")[0].trim()) || req.socket.remoteAddress || "unknown";
    const wait = checkRate(ip);
    if (wait > 0) {
      send(res, 429, JSON.stringify({ success: false, error: `請求過於頻繁，請 ${wait} 秒後再試` }), {
        "Content-Type": "application/json; charset=utf-8",
        "Retry-After": String(wait),
        "Cache-Control": "no-store",
      });
      return;
    }
  }

  if (url.pathname === "/api/convert") {
    const text = url.searchParams.get("text") || "";
    send(res, 200, JSON.stringify({ result: toTraditional(text) }), {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    });
    return;
  }

  if (url.pathname === "/api/search") {
    await handleCharacterSearch(req, res, url);
    return;
  }

  if (url.pathname === "/api/ranking") {
    await handleRanking(req, res, url);
    return;
  }

  const ncPath = ncPathFromRoute(url);
  if (!ncPath) {
    send(res, 400, JSON.stringify({ success: false, error: "invalid api request" }), {
      "Content-Type": "application/json; charset=utf-8",
    });
    return;
  }

  try {
    const upstream = await proxyNcsoft(ncPath);
    const isJson = upstream.type.includes("json");
    const upstreamBody = String(upstream.body || "").replace(/\0/g, "").trim();
    const body = upstreamBody || JSON.stringify({
      success: false,
      error: `NCSoft API returned HTTP ${upstream.status}`,
    });
    send(res, upstream.status, body, {
      "Content-Type": upstreamBody && isJson ? upstream.type : "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=30",
    });
  } catch (error) {
    send(res, 502, JSON.stringify({ success: false, error: error.message }), {
      "Content-Type": "application/json; charset=utf-8",
    });
  }
}

function handleStatic(req, res, url) {
  const filePath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const resolved = path.resolve(PUBLIC_DIR, `.${filePath}`);
  if (!resolved.startsWith(PUBLIC_DIR)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(resolved, (error, data) => {
    if (error) {
      fs.readFile(path.join(PUBLIC_DIR, "index.html"), (fallbackError, fallback) => {
        if (fallbackError) send(res, 404, "Not found");
        else send(res, 200, fallback, { "Content-Type": contentTypes[".html"] });
      });
      return;
    }
    const ext = path.extname(resolved).toLowerCase();
    send(res, 200, data, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/dev-reload") {
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });
    res.write(":\n\n");
    if (req.headers["last-event-id"]) res.write("id: 1\ndata: reload\n\n");
    reloadClients.add(res);
    req.on("close", () => reloadClients.delete(res));
    return;
  }

  if (url.pathname.startsWith("/api/")) {
    handleApi(req, res, url);
    return;
  }
  handleStatic(req, res, url);
});

server.listen(PORT, () => {
  console.log(`AION2 web MVP running at http://localhost:${PORT}`);
  if (AUTO_REFRESH_ENABLED) {
    setTimeout(autoRefreshSnapshots, 30_000).unref();
    setInterval(autoRefreshSnapshots, AUTO_REFRESH_INTERVAL_MS).unref();
  }
});
