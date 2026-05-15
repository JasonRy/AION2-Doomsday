const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 4173);
const PUBLIC_DIR = path.join(__dirname, "public");
const NC_HOST = "tw.ncsoft.com";
const { toTraditional } = require(path.join(__dirname, "..", "miniprogram", "utils", "s2t.js"));

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

function ncPathFromRoute(url) {
  const qs = url.searchParams;
  if (url.pathname === "/api/search") {
    const keyword = qs.get("keyword");
    if (!keyword) return null;
    const params = new URLSearchParams({
      keyword,
      page: qs.get("page") || "1",
      size: qs.get("size") || "30",
    });
    if (qs.get("serverId")) params.set("serverId", qs.get("serverId"));
    if (qs.get("race") && qs.get("race") !== "0") params.set("race", qs.get("race"));
    return `/aion2/api/search/aion2tw/search/v2/character?${params.toString()}`;
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
  if (url.pathname === "/api/convert") {
    const text = url.searchParams.get("text") || "";
    send(res, 200, JSON.stringify({ result: toTraditional(text) }), {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    });
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
  if (url.pathname.startsWith("/api/")) {
    handleApi(req, res, url);
    return;
  }
  handleStatic(req, res, url);
});

server.listen(PORT, () => {
  console.log(`AION2 web MVP running at http://localhost:${PORT}`);
});
