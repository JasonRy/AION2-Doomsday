const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
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
      if (body.length > 1024 * 1024) {
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
      const data = JSON.parse(String(response.body || "{}").replace(/\0/g, "").trim() || "{}");
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
            return Number((JSON.parse(response.body || "{}").pagination || {}).endPage || 1);
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
});
