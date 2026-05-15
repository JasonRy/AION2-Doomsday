const ANGEL_SERVERS = [
  { serverId: 1001, serverName: "希埃爾" },
  { serverId: 1002, serverName: "奈薩肯" },
  { serverId: 1003, serverName: "白傑爾" },
  { serverId: 1004, serverName: "凱西內爾" },
  { serverId: 1005, serverName: "尤斯迪埃" },
  { serverId: 1006, serverName: "艾瑞爾" },
  { serverId: 1007, serverName: "普雷奇翁" },
  { serverId: 1008, serverName: "梅斯蘭泰達" },
  { serverId: 1009, serverName: "希塔尼耶" },
  { serverId: 1010, serverName: "納尼亞" },
  { serverId: 1011, serverName: "塔哈巴達" },
  { serverId: 1012, serverName: "路特斯" },
  { serverId: 1013, serverName: "菲爾諾斯" },
  { serverId: 1014, serverName: "達彌努" },
  { serverId: 1015, serverName: "卡薩卡" },
  { serverId: 1016, serverName: "巴卡爾摩" },
  { serverId: 1017, serverName: "天加隆" },
  { serverId: 1018, serverName: "科奇隆" },
];

const DEMON_SERVERS = [
  { serverId: 2001, serverName: "伊斯拉佩爾" },
  { serverId: 2002, serverName: "吉凱爾" },
  { serverId: 2003, serverName: "崔妮爾" },
  { serverId: 2004, serverName: "露梅爾" },
  { serverId: 2005, serverName: "瑪爾庫坦" },
  { serverId: 2006, serverName: "阿斯佩爾" },
  { serverId: 2007, serverName: "艾萊修奇卡" },
  { serverId: 2008, serverName: "布里特拉" },
  { serverId: 2009, serverName: "奈蒙" },
  { serverId: 2010, serverName: "哈達爾" },
  { serverId: 2011, serverName: "盧德萊" },
  { serverId: 2012, serverName: "鄔爾古倫" },
  { serverId: 2013, serverName: "默尼" },
  { serverId: 2014, serverName: "奧達爾" },
  { serverId: 2015, serverName: "簡卡卡" },
  { serverId: 2016, serverName: "克羅梅德" },
  { serverId: 2017, serverName: "奎靈" },
  { serverId: 2018, serverName: "巴巴隆" },
];

const SLOT_CN = {
  MainHand: "主手",
  SubHand: "副手",
  Torso: "胸甲",
  Pants: "腿甲",
  Helmet: "頭盔",
  Shoulder: "肩甲",
  Gloves: "手套",
  Boots: "長靴",
  Cape: "披風",
  Belt: "腰帶",
  Necklace: "項鍊",
  Earring1: "耳環1",
  Earring2: "耳環2",
  Ring1: "戒指1",
  Ring2: "戒指2",
  Bracelet1: "手鐲1",
  Bracelet2: "手鐲2",
  Rune1: "古文石1",
  Rune2: "古文石2",
  Amulet: "護身符",
  Arcana1: "卡牌1",
  Arcana2: "卡牌2",
  Arcana3: "卡牌3",
  Arcana4: "卡牌4",
  Arcana5: "卡牌5",
  Arcana6: "卡牌6",
};

const BASIC_TYPES = ["STR", "DEX", "INT", "CON", "AGI", "WIS"];
const PRIMARY_STAT_DEFS = [
  { key: "attack", label: "攻擊力", names: ["攻擊力", "攻击力"], ids: ["WeaponFixingDamage"] },
  { key: "extraAttack", label: "額外攻擊力", names: ["額外攻擊力", "额外攻击力"], ids: ["AdditionalWeaponFixingDamage", "AdditionalAttack", "AdditionalDamage"] },
  { key: "defense", label: "防禦力", names: ["防禦力", "防御力"], ids: ["Defense"] },
  { key: "extraDefense", label: "額外防禦力", names: ["額外防禦力", "额外防御力"], ids: ["AdditionalDefense"] },
  { key: "hit", label: "命中", names: ["命中"], ids: ["WeaponAccuracy", "HitRate"] },
  { key: "extraHit", label: "額外命中", names: ["額外命中", "命中增加"], ids: ["Accuracy"] },
  { key: "evasion", label: "迴避", names: ["迴避", "回避"], ids: ["EvasionBase"] },
  { key: "extraEvasion", label: "額外迴避", names: ["額外迴避", "迴避增加", "回避增加"], ids: ["Evasion"] },
  { key: "critical", label: "暴擊", names: ["暴擊", "暴击"], ids: ["Critical"] },
  { key: "criticalResist", label: "暴擊抵抗", names: ["暴擊抵抗", "暴击抵抗"], ids: ["CriticalResist"] },
  { key: "hp", label: "生命力", names: ["生命力", "HP"], ids: ["HP"] },
  { key: "mp", label: "精神力", names: ["精神力", "MP"], ids: ["MP"] },
  { key: "combatSpeed", label: "戰鬥速度", names: ["戰鬥速度", "战斗速度"], ids: ["CombatSpeed"] },
  { key: "moveSpeed", label: "移動速度", names: ["移動速度", "移动速度"], ids: ["MoveSpeed"] },
];
const PCT_STAT_DEFS = [
  { key: "pAttack",     label: "攻擊力增加",   names: ["攻擊力增加", "攻击力增加"],             ids: ["DamageRatio", "AttackRatio"] },
  { key: "pDefense",    label: "防禦力增加",   names: ["防禦力增加", "防御力增加"],             ids: ["DefenseRatio"] },
  { key: "pHit",        label: "命中增加",     names: ["命中增加"],                             ids: ["HitRateRatio", "AccuracyRatio"] },
  { key: "pEvasion",    label: "迴避增加",     names: ["迴避增加", "回避增加"],                 ids: ["EvasionRatio"] },
  { key: "pCritical",   label: "暴擊增加",     names: ["暴擊增加", "暴击增加"],                 ids: ["CriticalRatio"] },
  { key: "pCritResist", label: "暴擊抵抗增加", names: ["暴擊抵抗增加", "暴击抵抗增加"],         ids: ["CriticalResistRatio"] },
  { key: "pBlockPen",   label: "格擋貫穿增加", names: ["格擋貫穿增加", "格挡贯穿增加"],         ids: ["BlockPenetration"] },
  { key: "pBlock",      label: "格擋增加",     names: ["格擋增加", "格挡增加"],                 ids: ["BlockRate", "Block"] },
  { key: "pHp",         label: "生命力增加",   names: ["生命力增加", "HP增加"],                 ids: ["HPRatio"] },
  { key: "pMp",         label: "精神力增加",   names: ["精神力增加", "MP增加"],                 ids: ["MPRatio"] },
];
const OTHER_STAT_DEFS = [
  { key: "multiHit",          label: "多段打擊擊中",   names: ["多段打擊擊中", "多段打击击中"],         ids: ["MultiHit", "MultipleHit"],             isPct: true  },
  { key: "multiHitResist",    label: "多段打擊抵抗",   names: ["多段打擊抵抗", "多段打击抵抗"],         ids: ["MultiHitResist", "MultipleHitResist"],  isPct: true  },
  { key: "ironWallPen",       label: "鐵壁貫穿",       names: ["鐵壁貫穿", "铁壁贯穿"],                 ids: ["IronWallPenetration", "IronWallBreak"],  isPct: true  },
  { key: "ironWall",          label: "鐵壁",           names: ["鐵壁", "铁壁"],                         ids: ["IronWall", "IronWallRate"],             isPct: true  },
  { key: "regenPen",          label: "再生貫穿",       names: ["再生貫穿", "再生贯穿"],                 ids: ["RegenerationPenetration", "RegenBreak"], isPct: true  },
  { key: "regen",             label: "再生",           names: ["再生"],                                 ids: ["Regeneration", "Regen"],               isPct: true  },
  { key: "perfect",           label: "完美",           names: ["完美"],                                 ids: ["Perfect", "PerfectAttack"],            isPct: true  },
  { key: "perfectResist",     label: "完美抵抗",       names: ["完美抵抗"],                             ids: ["PerfectResist", "PerfectDefense"],      isPct: true  },
  { key: "powerStrike",       label: "強擊",           names: ["強擊", "强击"],                         ids: ["PowerStrike", "StrongAttack"],          isPct: true  },
  { key: "powerStrikeResist", label: "強擊抵抗",       names: ["強擊抵抗", "强击抵抗"],                 ids: ["PowerStrikeResist", "StrongAttackResist"], isPct: true },
  { key: "backCrit",          label: "後方暴擊",       names: ["後方暴擊", "后方暴击"],                 ids: ["BackCritical", "BackCrit"],             isPct: false },
  { key: "backCritResist",    label: "後方暴擊抵抗",   names: ["後方暴擊抵抗", "后方暴击抵抗"],         ids: ["BackCriticalResist", "BackCritResist"],  isPct: true  },
  { key: "blockPen",          label: "格擋貫穿",       names: ["格擋貫穿", "格挡贯穿"],                 ids: ["BlockPenetration", "BlockBreak"],       isPct: false },
  { key: "block",             label: "格擋",           names: ["格擋", "格挡"],                         ids: ["Block", "BlockRate"],                  isPct: false },
];
const HISTORY_KEY = "aion2-query-history";
const EQUIP_SLOT_ORDER = [
  "MainHand", "SubHand",
  "Helmet", "Shoulder",
  "Torso", "Belt",
  "Pants", "Gloves",
  "Cape", "Boots",
  "Necklace", "Amulet",
  "Earring1", "Earring2",
  "Ring1", "Ring2",
  "Bracelet1", "Bracelet2",
  "Rune1", "Rune2",
];
const NO_STONE_SLOTS = new Set(["Rune1", "Rune2", "Amulet"]);
const TRAD_MAP = {
  剑: "劍", 杀: "殺", 灵: "靈", 护: "護", 治: "治", 魔: "魔", 道: "道",
  星: "星", 龙: "龍", 龙王: "龍王", 闪: "閃", 耀: "耀", 无: "無",
  名: "名", 烟: "煙", 雨: "雨", 墨: "墨", 白: "白", 杰: "傑",
  优: "優", 战: "戰", 斗: "鬥", 圣: "聖", 谕: "諭", 宝: "寶",
  儿: "兒", 云: "雲", 风: "風", 雪: "雪", 双: "雙", 飞: "飛",
  头: "頭", 体: "體", 强: "強", 击: "擊", 净: "淨", 深: "深",
  渊: "淵", 装: "裝", 备: "備", 术: "術", 称: "稱", 号: "號",
  复: "復", 查: "查", 询: "詢", 结: "結", 果: "果",
};

const state = {
  race: 0,
  serverId: 0,
  results: [],
  selectedId: "",
  selectedDetail: null,
  selectedAttack: null,
  detailTab: "equipment",
  history: [],
  loading: false,
  detailLoading: false,
};

let wingEffectCatalogPromise = null;

const els = {
  body: document.body,
  raceTabs: document.querySelector("#raceTabs"),
  serverSelect: document.querySelector("#serverSelect"),
  keywordInput: document.querySelector("#keywordInput"),
  convertButton: document.querySelector("#convertButton"),
  searchButton: document.querySelector("#searchButton"),
  historyPanel: document.querySelector("#historyPanel"),
  resultsList: document.querySelector("#resultsList"),
  resultCount: document.querySelector("#resultCount"),
  detailPanel: document.querySelector("#detailPanel"),
  statusText: document.querySelector("#statusText"),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  themeLabel: document.querySelector("#themeLabel"),
};

function html(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(value) {
  return typeof value === "string" ? value.replace(/<[^>]*>/g, "") : value;
}

function toNum(value) {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function allServers() {
  return ANGEL_SERVERS.concat(DEMON_SERVERS);
}

function serversForRace(race) {
  if (race === 1) return ANGEL_SERVERS;
  if (race === 2) return DEMON_SERVERS;
  return allServers();
}

function serverName(serverId) {
  return (allServers().find((server) => String(server.serverId) === String(serverId)) || {}).serverName || "";
}

function setStatus(text) {
  els.statusText.textContent = text;
}

function loadingMarkup(title, body = "") {
  return `
    <div class="loading-state" aria-live="polite">
      <div class="loading-orbit" aria-hidden="true"><span></span></div>
      <div>
        <p class="loading-title">${html(title)}<span class="loading-dots" aria-hidden="true"><i></i><i></i><i></i></span></p>
        ${body ? `<p class="loading-copy">${html(body)}</p>` : ""}
        <div class="loading-skeleton" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;
}

function toTraditional(value) {
  return String(value || "").split("").map((char) => TRAD_MAP[char] || char).join("");
}

function loadHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    state.history = Array.isArray(raw) ? raw.slice(0, 10) : [];
  } catch (_) {
    state.history = [];
  }
}

function saveHistory() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(state.history.slice(0, 10)));
}

function pushHistory(char) {
  const item = {
    characterId: char.characterId,
    characterName: char.characterName,
    serverId: char.serverId,
    serverName: char.serverName,
    className: char.className,
    race: char.race,
    level: char.level,
    savedAt: Date.now(),
  };
  state.history = [item].concat(state.history.filter((h) => h.characterId !== item.characterId)).slice(0, 10);
  saveHistory();
  renderHistory();
}

function renderHistory() {
  if (!state.history.length) {
    els.historyPanel.innerHTML = "";
    return;
  }
  els.historyPanel.innerHTML = `
    <div class="history-head">
      <span>查詢歷史</span>
      <button type="button" data-history-clear>清空</button>
    </div>
    <div class="history-list">
      ${state.history.map((item, index) => `
        <button type="button" class="history-chip race-${item.race}" data-history-index="${index}">
          <span>${item.race === 1 ? "天" : item.race === 2 ? "魔" : "?"}</span>
          <strong>${html(item.characterName)}</strong>
          <small>${html(item.serverName)}</small>
        </button>
      `).join("")}
    </div>
  `;
}

function renderServers() {
  const servers = serversForRace(state.race);
  const options = [`<option value="0">全部伺服器</option>`].concat(
    servers.map((server) => `<option value="${server.serverId}">${server.serverName}</option>`)
  );
  els.serverSelect.innerHTML = options.join("");
  if (!servers.some((server) => String(server.serverId) === String(state.serverId))) {
    state.serverId = 0;
  }
  els.serverSelect.value = String(state.serverId);
}

function cleanChar(raw) {
  let characterId = stripHtml(raw.characterId || raw.id || "");
  try { characterId = decodeURIComponent(characterId); } catch (_) {}
  return {
    characterId,
    serverId: raw.serverId,
    serverName: serverName(raw.serverId),
    characterName: stripHtml(raw.characterName || raw.name || ""),
    className: stripHtml(raw.className || raw.class || ""),
    race: raw.race || raw.raceId || 0,
    level: raw.level || raw.characterLevel || "",
  };
}

async function getJson(path, timeoutMs = 25000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  try {
    response = await fetch(path, { signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") throw new Error("request timeout");
    throw error;
  } finally {
    clearTimeout(timer);
  }
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    throw new Error(text.slice(0, 180) || error.message);
  }
  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}`);
  }
  return data;
}

async function searchCharacters() {
  const keyword = els.keywordInput.value.trim();
  if (!keyword) {
    setStatus("請輸入角色名");
    els.keywordInput.focus();
    return;
  }

  state.loading = true;
  setStatus("查詢中...");
  els.searchButton.disabled = true;
  els.resultsList.innerHTML = loadingMarkup("查詢中", "正在匹配角色與伺服器資料。");

  try {
    const params = new URLSearchParams({
      keyword,
      page: "1",
      size: "30",
    });
    if (state.serverId) params.set("serverId", String(state.serverId));
    if (state.race) params.set("race", String(state.race));
    const data = await getJson(`/api/search?${params.toString()}`);
    const raw = Array.isArray(data) ? data : (data.list || data.characters || data.result || []);
    state.results = raw.map(cleanChar);
    renderResults();
    setStatus(state.results.length ? `找到 ${state.results.length} 筆` : "未找到結果");
  } catch (error) {
    els.resultsList.innerHTML = `<div class="error-box">查詢失敗：${html(error.message)}</div>`;
    els.resultCount.textContent = "0 筆";
    setStatus("查詢失敗");
  } finally {
    state.loading = false;
    els.searchButton.disabled = false;
  }
}

function renderResults() {
  els.resultCount.textContent = `${state.results.length} 筆`;
  if (!state.results.length) {
    els.resultsList.innerHTML = `<div class="empty-state"><div class="empty-mark">✦</div><p>未找到匹配角色</p></div>`;
    return;
  }

  els.resultsList.innerHTML = state.results.map((char, index) => `
    <button class="result-card race-${char.race} ${state.selectedId === char.characterId ? "active" : ""}"
      type="button" data-index="${index}">
      <span class="avatar-dot">${char.race === 1 ? "天" : char.race === 2 ? "魔" : "?"}</span>
      <span>
        <span class="char-name">${html(char.characterName)}</span>
        <span class="char-meta">
          <span>${html(char.serverName)}</span>
          <span>·</span>
          <span>${html(char.className)}</span>
          <span>Lv.${html(char.level)}</span>
        </span>
      </span>
      <span class="chevron">›</span>
    </button>
  `).join("");
}

async function loadDetail(char) {
  state.selectedId = char.characterId;
  state.detailTab = "equipment";
  state.detailLoading = true;
  renderResults();
  setStatus("載入詳情...");
  els.detailPanel.innerHTML = `<div class="detail-placeholder">${loadingMarkup("載入角色詳情", "正在讀取角色資訊、裝備與守護力資料。")}</div>`;

  try {
    const baseParams = new URLSearchParams({ characterId: char.characterId, serverId: char.serverId });
    const [info, equipment] = await Promise.all([
      getJson(`/api/info?${baseParams.toString()}`),
      getJson(`/api/equipment?${baseParams.toString()}`),
    ]);

    const statList = (info.stat && info.stat.statList) || [];
    const itemLevel = statList.filter((stat) => stat.type === "ItemLevel").reduce((sum, stat) => sum + (Number(stat.value) || 0), 0);
    const equipList = (equipment.equipment && equipment.equipment.equipmentList) || [];
    const [detailEquipItems, daevanionEntries, wingEffects] = await Promise.all([
      enrichEquipment(equipList, char),
      loadDaevanionEntries(info, char),
      resolveWingEffects(equipment),
    ]);
    const detail = normalizeDetail(info, equipment, itemLevel, detailEquipItems, daevanionEntries, wingEffects);
    const attributes = calcAttributes(detail);
    state.selectedDetail = detail;
    state.selectedAttack = attributes;
    renderDetail(detail, attributes);
    pushHistory({
      ...char,
      characterName: detail.profile.characterName || char.characterName,
      className: detail.profile.className || char.className,
      race: detail.profile.raceId || char.race,
      level: detail.profile.characterLevel || char.level,
      serverName: detail.profile.serverName || char.serverName,
      serverId: detail.profile.serverId || char.serverId,
    });
    setStatus("詳情已載入");
  } catch (error) {
    els.detailPanel.innerHTML = `<div class="error-box">詳情載入失敗：${html(error.message)}</div>`;
    setStatus("詳情失敗");
  } finally {
    state.detailLoading = false;
  }
}

async function enrichEquipment(equipList, char) {
  const queue = equipList.map(async (item) => {
    const params = new URLSearchParams({
      id: item.id,
      enchantLevel: String((item.enchantLevel || 0) + (item.exceedLevel || 0)),
      characterId: char.characterId,
      serverId: char.serverId,
      slotPos: item.slotPos,
    });
    try {
      const detail = await getJson(`/api/equipment-item?${params.toString()}`);
      const godStone = Array.isArray(detail.godStoneStat) ? detail.godStoneStat[0] : detail.godStoneStat;
      return {
        ...item,
        mainStatsNormal: (detail.mainStats || []).filter((stat) => !stat.exceed),
        mainStatsExceed: (detail.mainStats || []).filter((stat) => stat.exceed),
        subStats: detail.subStats || [],
        soulBindRate: detail.soulBindRate ?? 0,
        soulBindStats: normalizeSoulBindStats(detail),
        magicStoneStat: Array.isArray(detail.magicStoneStat) ? detail.magicStoneStat : (detail.magicStoneStat ? [detail.magicStoneStat] : []),
        subSkills: Array.isArray(detail.subSkills) ? detail.subSkills : [],
        set: detail.set || null,
        godStoneStat: godStone ? {
          icon: godStone.icon || "",
          name: godStone.name || "",
          grade: godStone.grade || "",
          statList: normalizeGodStoneStats(godStone),
        } : null,
        sourcesText: (Array.isArray(detail.sources) ? detail.sources : [])
          .map((source) => typeof source === "string" ? source : (source.name || source.desc || ""))
          .filter(Boolean)
          .join(" · "),
      };
    } catch (_) {
      return {
        ...item,
        mainStatsNormal: [],
        mainStatsExceed: [],
        subStats: [],
        soulBindStats: [],
        magicStoneStat: [],
        subSkills: [],
        set: null,
        godStoneStat: null,
        sourcesText: "",
      };
    }
  });
  return Promise.all(queue);
}

async function loadWingEffectCatalog() {
  if (!wingEffectCatalogPromise) {
    wingEffectCatalogPromise = fetch("/data/wing-effects.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { effectsByWingId: {} }))
      .catch(() => ({ effectsByWingId: {} }));
  }
  return wingEffectCatalogPromise;
}

async function resolveWingEffects(equipment) {
  const wing = equipment && equipment.petwing && equipment.petwing.wing;
  if (!wing) return null;
  const catalog = await loadWingEffectCatalog();
  const byId = catalog.effectsByWingId || {};
  return byId[String(wing.id)] || Object.values(byId).find((item) => item.name === wing.name) || null;
}

function normalizeSoulBindStats(detail) {
  const explicit = []
    .concat(Array.isArray(detail.soulBindStats) ? detail.soulBindStats : [])
    .concat(Array.isArray(detail.soulBindStat) ? detail.soulBindStat : (detail.soulBindStat ? [detail.soulBindStat] : []));
  return explicit.length ? explicit : (Array.isArray(detail.subStats) ? detail.subStats : []);
}

function normalizeGodStoneStats(godStone) {
  const list = Array.isArray(godStone.statList) ? godStone.statList : (Array.isArray(godStone.stats) ? godStone.stats : []);
  if (list.length) return list;
  return godStone.desc ? [{ name: godStone.desc, value: "", grade: godStone.grade }] : [];
}

async function loadDaevanionEntries(info, char) {
  const boards = (info.daevanion && info.daevanion.boardList) || [];
  const results = await Promise.all(boards.map(async (board) => {
    const params = new URLSearchParams({
      characterId: char.characterId,
      serverId: char.serverId,
      boardId: board.id,
    });
    try {
      const data = await getJson(`/api/daevanion?${params.toString()}`);
      return { board, data };
    } catch (_) {
      return { board, data: null };
    }
  }));

  const entries = [];
  results.forEach(({ board, data }) => {
    if (!data || !Array.isArray(data.openStatEffectList)) return;
    data.openStatEffectList.forEach((effect) => {
      const desc = String(effect.desc || "");
      const match = desc.match(/(?:攻擊力增加|攻击力增加|防禦力增加|防御力增加|命中增加|迴避增加|回避增加|暴擊抵抗增加|暴击抵抗增加|暴擊增加|暴击增加|格擋貫穿增加|格挡贯穿增加|格擋增加|格挡增加|生命力增加|精神力增加|HP增加|MP增加|多段打擊擊中|多段打击击中|多段打擊抵抗|多段打击抵抗|鐵壁貫穿|铁壁贯穿|鐵壁|铁壁|再生貫穿|再生贯穿|再生|完美抵抗|完美|強擊抵抗|強擊|强击抵抗|强击|後方暴擊抵抗|後方暴擊|后方暴击抵抗|后方暴击|格擋貫穿|格挡贯穿|格擋|格挡|額外攻擊力|额外攻击力|PVE攻擊力|PVE攻击力|首領攻擊力|首领攻击力|額外防禦力|额外防御力|額外命中|额外命中|額外迴避|额外回避|暴擊抵抗|暴击抵抗|暴擊|暴击|生命力|精神力|戰鬥速度|战斗速度|移動速度|移动速度|HP|MP)\s*\+?([\d.]+%?)/);
      if (match) {
        const value = toNum(match[1]);
        if (value > 0) entries.push({ boardName: board.name || board.id, desc, value });
      }
    });
  });
  return entries;
}

function normalizeDetail(info, equipment, itemLevel, detailEquipItems, daevanionEntries, wingEffects) {
  const statList = (info.stat && info.stat.statList) || [];
  const allSkills = (equipment.skill && equipment.skill.skillList) || [];
  const titleList = (info.title && info.title.titleList) || [];
  const titleGroups = ["Attack", "Defense", "Etc"].map((category) => ({
    category,
    label: { Attack: "攻擊称号", Defense: "防禦称号", Etc: "其他称号" }[category],
    items: titleList.filter((title) => (title.equipCategory || "Etc") === category),
  })).filter((group) => group.items.length);

  return {
    info,
    profile: info.profile || {},
    itemLevel,
    detailEquipItems,
    detailStatBasic: statList.filter((stat) => BASIC_TYPES.includes(stat.type)),
    detailStatSecondary: statList
      .filter((stat) => stat.type !== "ItemLevel" && !BASIC_TYPES.includes(stat.type))
      .map((stat) => ({ ...stat, name: String(stat.name || "").split("[")[0].trim() })),
    detailSkillActive: allSkills.filter((skill) => skill.category === "Active"),
    detailSkillPassive: allSkills.filter((skill) => skill.category === "Passive"),
    detailSkillDp: allSkills.filter((skill) => skill.category === "Dp"),
    detailTitleGroups: titleGroups,
    detailDaevanionEntries: daevanionEntries,
    petwing: equipment.petwing || {},
    wingEffects,
  };
}

function calcAttack(detail) {
  const slotMap = {};
  const groups = [];

  function getGroup(key, label, itemName = "") {
    if (!slotMap[key]) {
      slotMap[key] = { key, label, itemName, entries: [], flatSub: 0, pctSub: 0 };
      groups.push(slotMap[key]);
    }
    return slotMap[key];
  }

  function addEntry(group, label, value, isPct) {
    const rounded = isPct ? Math.round(value * 100) / 100 : Math.round(value * 10) / 10;
    if (rounded !== 0) group.entries.push({ label, value: rounded, isPct });
  }

  function parseDescToGroup(desc, group) {
    if (!desc || typeof desc !== "string") return;
    if (/額外攻擊力|额外攻击力|PVE攻擊力|PVE攻击力|首領攻擊力|首领攻击力/.test(desc)) return;
    const pct = desc.match(/(?:攻擊力增加|攻击力增加)\s*\+?([\d.]+)%/);
    if (pct) {
      addEntry(group, desc.trim(), toNum(pct[1]), true);
      return;
    }
    const flat = desc.match(/(?:攻擊力|攻击力)\s*\+?([\d.]+)(?![%增加])/);
    if (flat) addEntry(group, desc.trim(), toNum(flat[1]), false);
  }

  function parseStatToGroup(stat, group) {
    if (!stat || !stat.name) return;
    const name = stat.name;
    if (/額外攻擊力|额外攻击力|PVE攻擊力|PVE攻击力|首領攻擊力|首领攻击力/.test(name)) return;
    if (!name.includes("攻擊力") && !name.includes("攻击力")) return;
    const isPct = name.includes("增加");
    const value = toNum(stat.value) + toNum(stat.extra);
    addEntry(group, name, value, isPct);
  }

  (detail.detailEquipItems || []).forEach((item) => {
    const slotLabel = SLOT_CN[item.slotPosName] || item.slotPosName || String(item.slotPos);
    const group = getGroup(`slot_${item.slotPos}`, item.name || slotLabel, slotLabel);

    (item.mainStatsNormal || []).forEach((stat) => {
      const id = stat.id || "";
      const extra = toNum(stat.extra);
      const value = toNum(stat.value);
      const minValue = toNum(stat.minValue);
      if (id === "WeaponFixingDamage") {
        const base = minValue > 0 ? (minValue + value) / 2 : value;
        addEntry(group, "裝備攻擊力", base, false);
        addEntry(group, "強化攻擊力", extra, false);
      } else if (id === "DamageRatio") {
        addEntry(group, "攻擊力增加%", value + extra, true);
      } else {
        parseStatToGroup(stat, group);
      }
    });

    (item.mainStatsExceed || []).forEach((stat) => {
      const extra = toNum(stat.extra);
      if (stat.id === "WeaponFixingDamage") addEntry(group, "突破攻擊力", extra, false);
      else if (stat.id === "DamageRatio") addEntry(group, "突破攻擊力增加%", extra, true);
      else parseStatToGroup(stat, group);
    });

    (item.subStats || []).forEach((stat) => parseStatToGroup(stat, group));
    (item.magicStoneStat || []).forEach((stone) => {
      const name = stone.name || "";
      const value = toNum(stone.value);
      const isAtk = name.includes("攻擊力") || name.includes("攻击力");
      const isPct = name.includes("攻擊力增加") || name.includes("攻击力增加");
      if (stone.id === "WeaponFixingDamage" || (isAtk && !isPct)) addEntry(group, `魔石·${name || "攻擊力"}`, value, false);
      else if (isPct) addEntry(group, `魔石·${name}`, value, true);
      else parseDescToGroup(stone.desc || name, group);
    });

    if (item.godStoneStat && item.godStoneStat.statList) {
      item.godStoneStat.statList.forEach((stone) => parseDescToGroup(stone.desc || stone.name || "", group));
    }
  });

  if (detail.detailDaevanionEntries.length) {
    const group = getGroup("daevanion", "守護力");
    detail.detailDaevanionEntries.forEach((entry) => addEntry(group, entry.boardName, entry.value, false));
  }

  const charGroup = getGroup("char", "能力值");
  addEntry(charGroup, "角色等級攻擊力", 61, false);
  detail.detailStatBasic.concat(detail.detailStatSecondary).forEach((stat) => {
    (stat.statSecondList || []).forEach((desc) => parseDescToGroup(desc, charGroup));
  });

  const titleGroup = getGroup("title", "称号");
  detail.detailTitleGroups.forEach((group) => {
    group.items.forEach((title) => {
      (title.equipStatList || []).forEach((stat) => parseDescToGroup(stat.desc || "", titleGroup));
    });
  });

  const activeGroups = groups.filter((group) => group.entries.length > 0);
  activeGroups.forEach((group) => {
    group.flatSub = Math.round(group.entries.filter((entry) => !entry.isPct).reduce((sum, entry) => sum + entry.value, 0));
    group.pctSub = Math.round(group.entries.filter((entry) => entry.isPct).reduce((sum, entry) => sum + entry.value, 0) * 10) / 10;
  });

  const flatTotal = activeGroups.reduce((sum, group) => sum + group.flatSub, 0);
  const pctTotal = Math.round(activeGroups.reduce((sum, group) => sum + group.pctSub, 0) * 10) / 10;
  return {
    hasData: activeGroups.length > 0,
    flatTotal,
    pctTotal,
    result: Math.round(flatTotal * (1 + pctTotal / 100)),
    groups: activeGroups,
  };
}

function calcAttributes(detail) {
  const values = Object.fromEntries(PRIMARY_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
  const pctValues = Object.fromEntries(PCT_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
  const otherValues = Object.fromEntries(OTHER_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));

  function findSource(target, sourceLabel) {
    let source = target.sources.find((item) => item.label === sourceLabel);
    if (!source) {
      source = { label: sourceLabel, flat: 0, pct: 0, details: [] };
      target.sources.push(source);
    }
    return source;
  }

  function addValue(key, value, isPct, sourceLabel = "其他來源", detailLabel = "能力值") {
    const target = values[key];
    const parsed = toNum(value);
    const allowPct = key === "combatSpeed" || key === "moveSpeed";
    if (!target || !Number.isFinite(parsed) || parsed === 0 || (isPct && !allowPct)) return;
    if (isPct) target.pct += parsed;
    else target.flat += parsed;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (isPct) source.pct += parsed;
    else source.flat += parsed;
    source.details.push({ label: detailLabel, value: parsed, isPct });
  }

  function matchMetric(stat, sourceType = "") {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "");
    if (/暴擊攻擊力|暴击攻击力|暴擊傷害|暴击伤害|傷害增幅|伤害增幅|攻擊力增加|攻击力增加/.test(name)) return null;
    const exact = PRIMARY_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) {
      if (sourceType === "magicstone" && exact.key === "hit") return PRIMARY_STAT_DEFS.find((d) => d.key === "extraHit");
      if (sourceType === "magicstone" && exact.key === "evasion") return PRIMARY_STAT_DEFS.find((d) => d.key === "extraEvasion");
      return exact;
    }
    if (/PVE攻擊力|PVE攻击力|首領攻擊力|首领攻击力|PVP|PvP/.test(name)) return null;
    if (/額外攻擊力|额外攻击力/.test(name)) return values.extraAttack;
    const nameDef = PRIMARY_STAT_DEFS.find((def) => def.names.some((candidate) => {
      if (candidate === "命中" && name.includes("額外命中")) return false;
      if ((candidate === "迴避" || candidate === "回避") && (name.includes("額外迴避") || name.includes("迴避增加") || name.includes("回避增加"))) return false;
      if ((candidate === "攻擊力" || candidate === "攻击力") && /增加|額外|额外|PVE|首領|首领/.test(name)) return false;
      if ((candidate === "防禦力" || candidate === "防御力") && /增加|額外|额外/.test(name)) return false;
      if (candidate === "暴擊" && name.includes("暴擊抵抗")) return false;
      if ((candidate === "生命力" || candidate === "HP") && name.includes("恢復")) return false;
      if ((candidate === "精神力" || candidate === "MP") && /恢復|消耗/.test(name)) return false;
      return name.includes(candidate);
    }));
    if (nameDef && sourceType === "magicstone" && nameDef.key === "evasion") return PRIMARY_STAT_DEFS.find((d) => d.key === "extraEvasion");
    return nameDef;
  }

  function matchPctMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "");
    if (/PVP|PvP/.test(name)) return null;
    const exact = PCT_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return PCT_STAT_DEFS.find((def) => def.names.some((n) => name.includes(n))) || null;
  }

  function matchOtherMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "");
    if (/PVP|PvP/.test(name)) return null;
    const exact = OTHER_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return OTHER_STAT_DEFS.find((def) => def.names.some((n) => {
      if ((n === "格擋" || n === "格挡") && /貫穿|贯穿/.test(name)) return false;
      if ((n === "鐵壁" || n === "铁壁") && /貫穿|贯穿/.test(name)) return false;
      if (n === "再生" && /貫穿|贯穿/.test(name)) return false;
      if (n === "完美" && name.includes("抵抗")) return false;
      if ((n === "強擊" || n === "强击") && name.includes("抵抗")) return false;
      if ((n === "後方暴擊" || n === "后方暴击") && name.includes("抵抗")) return false;
      return name.includes(n);
    })) || null;
  }

  function addOtherStat(stat, sourceLabel, detailKind) {
    if (!stat) return;
    const def = matchOtherMetric(stat);
    if (!def) return;
    const name = String(stat.name || stat.desc || "");
    const rawVal = String(stat.value ?? "");
    const rawExtra = String(stat.extra ?? "");
    const apiHasPct = rawVal.includes("%") || rawExtra.includes("%");
    const usePct = apiHasPct || def.isPct;
    const num = toNum(rawVal.replace("%", "")) + toNum(rawExtra.replace("%", ""));
    if (!Number.isFinite(num) || num === 0) return;
    const target = otherValues[def.key];
    if (usePct) target.pct += num; else target.flat += num;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (usePct) source.pct += num; else source.flat += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: usePct });
  }

  function addPctStat(stat, sourceLabel, detailKind, cap = Infinity) {
    if (!stat) return;
    const def = matchPctMetric(stat);
    if (!def) return;
    const name = String(stat.name || stat.desc || "");
    const num = toNum(String(stat.value ?? "").replace("%", "")) + toNum(String(stat.extra ?? "").replace("%", ""));
    if (!Number.isFinite(num) || num === 0) return;
    const target = pctValues[def.key];
    const source = findSource(target, sourceLabel);
    const allowed = isFinite(cap) ? Math.min(num, Math.max(0, cap - source.pct)) : num;
    if (allowed === 0) return;
    target.pct += allowed;
    target.count += 1;
    source.pct += allowed;
    source.details.push({ label: `${detailKind} · ${name}`, value: allowed, isPct: true });
  }

  function addStat(stat, sourceLabel = "其他來源", detailKind = "能力值", sourceType = "", cap = Infinity) {
    if (!stat) return;
    const name = String(stat.name || stat.desc || "");
    const value = stat.value ?? "";
    const extra = stat.extra ?? "";
    const isPct = String(value).includes("%") || String(extra).includes("%") || name.includes("增加");
    if (isPct && matchPctMetric(stat)) {
      addPctStat(stat, sourceLabel, detailKind, cap);
      return;
    }
    const metric = matchMetric(stat, sourceType);
    if (!metric) {
      addOtherStat(stat, sourceLabel, detailKind);
      return;
    }
    if (stat.id === "WeaponFixingDamage" && stat.minValue && stat.value) {
      const base = Math.round((toNum(stat.minValue) + toNum(stat.value)) / 2) + toNum(stat.extra);
      addValue(metric.key, base, false, sourceLabel, `${detailKind} · ${name}`);
      return;
    }
    const total = toNum(value) + toNum(extra);
    addValue(metric.key, total, isPct, sourceLabel, `${detailKind} · ${name}`);
  }

  function addDesc(desc, sourceLabel = "其他來源", detailKind = "能力值", sourceType = "", cap = Infinity) {
    if (!desc || typeof desc !== "string") return;
    const match = desc.match(/^(.+?)\s*([+-]?[\d.]+%?)/);
    if (!match) return;
    addStat({ name: match[1].trim(), value: match[2].trim() }, sourceLabel, detailKind, sourceType, cap);
  }

  function itemSourceLabel(item) {
    const totalEnchant = toNum(item.enchantLevel) + toNum(item.exceedLevel);
    const prefix = [slotLabel(item), totalEnchant ? `+${totalEnchant}` : ""].filter(Boolean).join(" ");
    return `${prefix ? `${prefix} ` : ""}${item.name || "未知裝備"}`;
  }

  (detail.detailEquipItems || []).forEach((item) => {
    const sourceLabel = itemSourceLabel(item);
    []
      .concat(item.mainStatsNormal || [])
      .concat(item.mainStatsExceed || [])
      .forEach((stat) => addStat(stat, sourceLabel, "基礎能力值"));
    (item.subStats || []).forEach((stat) => addStat(stat, sourceLabel, "靈魂刻印"));
    (item.magicStoneStat || []).forEach((stat) => addStat(stat, sourceLabel, "魔石", "magicstone"));
    if (item.godStoneStat && item.godStoneStat.statList) {
      item.godStoneStat.statList.forEach((stat) => addDesc(stat.desc || stat.name || "", sourceLabel, "靈石"));
    }
  });

  detail.detailStatBasic.forEach((stat) => {
    const sourceLabel = `能力值 · ${stat.name || stat.type}`;
    (stat.statSecondList || []).forEach((item) => {
      if (item && typeof item === "object") {
        addStat({ id: item.id || item.type || "", name: item.name || item.desc || "", value: item.value, extra: item.extra }, sourceLabel, "派生能力", "", 20);
      } else {
        addDesc(String(item), sourceLabel, "派生能力", "", 20);
      }
    });
  });
  detail.detailStatSecondary.forEach((stat) => {
    const sourceLabel = `能力值 · ${stat.name || stat.type}`;
    (stat.statSecondList || []).forEach((item) => {
      if (item && typeof item === "object") {
        addStat({ id: item.id || item.type || "", name: item.name || item.desc || "", value: item.value, extra: item.extra }, sourceLabel, "派生能力");
      } else {
        addDesc(String(item), sourceLabel, "派生能力");
      }
    });
  });
  detail.detailStatSecondary.forEach((stat) => {
    const def = PRIMARY_STAT_DEFS.find((d) => d.ids.includes(stat.type || ""));
    if (!def || !["combatSpeed", "moveSpeed"].includes(def.key)) return;
    const value = toNum(stat.value);
    if (value > 0) addValue(def.key, value, false, "角色轉換", `屬性轉換 · ${stat.name || stat.type}`);
  });
  detail.detailTitleGroups.forEach((group) => {
    group.items.forEach((title) => (title.equipStatList || []).forEach((stat) => addDesc(stat.desc || "", `稱號 · ${title.name || "稱號"}`, "稱號")));
  });
  detail.detailDaevanionEntries.forEach((entry) => addDesc(entry.desc || `額外攻擊力 +${entry.value}`, "守護力", entry.boardName || "守護力", "daevanion"));
  extractWingStats(detail).forEach((stat) => {
    const wingName = (detail.petwing && detail.petwing.wing && detail.petwing.wing.name) || (detail.wingEffects && detail.wingEffects.name) || "翅膀";
    addStat(stat, `翅膀 · ${wingName}`, "佩戴效果", "wing");
  });
  const level = toNum((detail.profile || {}).characterLevel);
  if (level === 45) addValue("extraAttack", 61, false, "角色等級", "基礎能力值 · Lv.45");
  if (level === 45) addValue("extraDefense", 450, false, "角色等級", "基礎能力值 · Lv.45");
  if (level === 45) addValue("hp", 4702, false, "角色等級", "基礎能力值 · Lv.45");

  return {
    primaryStats: PRIMARY_STAT_DEFS.map((def) => values[def.key]),
    pctStats: PCT_STAT_DEFS.map((def) => pctValues[def.key]),
    otherStats: OTHER_STAT_DEFS.map((def) => otherValues[def.key]),
  };
}

function extractWingStats(detail) {
  const wing = detail.petwing && detail.petwing.wing;
  const manualStats = detail.wingEffects && Array.isArray(detail.wingEffects.effectStats) ? detail.wingEffects.effectStats : [];
  const apiStats = wing ? []
    .concat(Array.isArray(wing.statList) ? wing.statList : [])
    .concat(Array.isArray(wing.stats) ? wing.stats : [])
    .concat(Array.isArray(wing.equipStatList) ? wing.equipStatList : []) : [];
  return manualStats.concat(apiStats).filter(Boolean);
}

function formatAttrValue(stat) {
  const parts = [];
  if (stat.flat) parts.push(String(Math.round(stat.flat * 10) / 10));
  if (stat.pct) parts.push(`${Math.round(stat.pct * 10) / 10}%`);
  return parts.length ? parts.join(" / ") : "-";
}

function formatSourceValue(source) {
  const parts = [];
  if (source.flat) parts.push(`+${Math.round(source.flat * 10) / 10}`);
  if (source.pct) parts.push(`+${Math.round(source.pct * 10) / 10}%`);
  return parts.join(" / ");
}

function renderAttrSources(stat) {
  if (!stat.sources.length) return `<p class="attr-empty">暫無來源明細</p>`;
  return `
    <div class="attr-sources">
      ${stat.sources.map((source) => `
        <article class="attr-source">
          <div class="attr-source-head">
            <span>${html(source.label)}</span>
            <strong>${html(formatSourceValue(source))}</strong>
          </div>
          <div class="attr-source-lines">
            ${aggregateSourceDetails(source.details).map((entry) => `
              <div class="attr-source-line">
                <span>${html(entry.label)}</span>
                <strong>+${html(Math.round(entry.value * 10) / 10)}${entry.isPct ? "%" : ""}</strong>
              </div>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function aggregateSourceDetails(details) {
  const map = new Map();
  details.forEach((entry) => {
    const label = String(entry.label || "").split(" · ")[0] || "能力值";
    const key = `${label}:${entry.isPct ? "pct" : "flat"}`;
    const current = map.get(key) || { label, value: 0, isPct: entry.isPct };
    current.value += entry.value;
    map.set(key, current);
  });
  return Array.from(map.values());
}

function renderDetail(detail, analysis) {
  const profile = detail.profile || {};
  els.detailPanel.innerHTML = `
    <article>
      <section class="profile-card race-${profile.raceId || profile.race || ""}">
        <div>
          <div class="profile-meta">
            <span>${html(profile.serverName || serverName(profile.serverId))}</span>
            <span>·</span>
            <span>${html(profile.raceName || "")}</span>
            <span>·</span>
            <span>${html(profile.className || "")}</span>
          </div>
          <h3 class="profile-name">${html(profile.characterName || "未知角色")}</h3>
          <div class="profile-title">${html(profile.titleName || "未裝備称号")}</div>
          <div class="profile-stats">
            <div class="stat-chip"><span>戰力</span><strong class="gold">${html(profile.combatPower || "-")}</strong></div>
            <div class="stat-chip"><span>道具等級</span><strong>${html(detail.itemLevel || "-")}</strong></div>
            <div class="stat-chip"><span>角色等級</span><strong>${html(profile.characterLevel || "-")}</strong></div>
          </div>
        </div>
        ${profile.profileImage ? `<img class="profile-avatar" src="${html(profile.profileImage)}" alt="${html(profile.characterName)}" />` : `<div class="profile-avatar"></div>`}
      </section>

      <nav class="detail-tabs" aria-label="角色詳情分頁">
        <button type="button" class="${state.detailTab === "equipment" ? "active" : ""}" data-detail-tab="equipment">裝備</button>
        <button type="button" class="${state.detailTab === "attack" ? "active" : ""}" data-detail-tab="attack">屬性分析</button>
      </nav>
      <div class="tab-content">
        ${state.detailTab === "attack" ? renderAttributeAnalysis(analysis) : renderEquipment(detail.detailEquipItems)}
      </div>
    </article>
  `;
}

function renderAttributeAnalysis(analysis) {
  const activePctStats = analysis.pctStats.filter((s) => s.count > 0);
  const activeOtherStats = analysis.otherStats.filter((s) => s.count > 0);
  const allOtherStats = analysis.otherStats;
  return `
    <section class="detail-section">
      <div class="block-stack">
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">主要能力值</h4>
            <span>${analysis.primaryStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${analysis.primaryStats.map((stat) => `
              <details class="attr-card">
                <summary>
                  <span>${html(stat.label)}</span>
                  <strong>${html(formatAttrValue(stat))}</strong>
                </summary>
                ${renderAttrSources(stat)}
              </details>
            `).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">百分比增加</h4>
            <span>${activePctStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${activePctStats.length ? activePctStats.map((stat) => `
              <details class="attr-card">
                <summary>
                  <span>${html(stat.label)}</span>
                  <strong>${html(formatAttrValue(stat))}</strong>
                </summary>
                ${renderAttrSources(stat)}
              </details>
            `).join("") : `<p class="attr-empty">暫無百分比增加數值</p>`}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">其他手段</h4>
            <span>${activeOtherStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${allOtherStats.map((stat) => `
              <details class="attr-card${stat.count === 0 ? " attr-card--empty" : ""}">
                <summary>
                  <span>${html(stat.label)}</span>
                  <strong>${html(formatAttrValue(stat))}</strong>
                </summary>
                ${renderAttrSources(stat)}
              </details>
            `).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderEquipment(items) {
  const equipmentItems = items.filter((item) => !isCardItem(item)).sort(compareEquipSlots);
  const cardItems = items.filter(isCardItem);
  return `
    <section class="detail-section">
      <div class="block-stack">
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">裝備</h4>
            <span>${equipmentItems.length} 件</span>
          </div>
          ${equipmentItems.length ? `<div class="compact-equip-grid">${equipmentItems.map(renderCompactEquipItem).join("")}</div>` : `<p class="muted">暫無裝備資料</p>`}
        </section>

        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">卡牌</h4>
            <span>${cardItems.length} 張</span>
          </div>
          ${cardItems.length ? `
            <div class="card-grid">${cardItems.map(renderCardItem).join("")}</div>
            ${renderCardSetSummary(cardItems)}
          ` : `<p class="muted">暫無卡牌資料</p>`}
        </section>

        ${renderSkills(state.selectedDetail)}
      </div>
    </section>
  `;
}

function compareEquipSlots(a, b) {
  const aIndex = EQUIP_SLOT_ORDER.indexOf(a.slotPosName);
  const bIndex = EQUIP_SLOT_ORDER.indexOf(b.slotPosName);
  const safeA = aIndex === -1 ? 999 : aIndex;
  const safeB = bIndex === -1 ? 999 : bIndex;
  if (safeA !== safeB) return safeA - safeB;
  return Number(a.slotPos || 0) - Number(b.slotPos || 0);
}

function isCardItem(item) {
  const slot = String(item.slotPosName || "");
  return slot.startsWith("Arcana");
}

function slotLabel(item) {
  return SLOT_CN[item.slotPosName] || item.slotPosName || "";
}

function renderCompactEquipItem(item) {
  const soulBlock = renderSoulBindLines(item);
  const magicBlock = renderMagicStoneLines(item);
  return `
    <article class="compact-equip-item">
      <div class="equip-card-main">
        <div class="equip-icon-stack">
          ${item.icon ? `<img class="equip-icon grade-${html(item.grade)}" src="${html(item.icon)}" alt="" />` : `<div class="equip-icon grade-${html(item.grade)}"></div>`}
          <span class="slot-ribbon">${html(slotLabel(item))}</span>
        </div>
        <div class="compact-equip-body">
          <div class="equip-title">
            ${item.exceedLevel ? `<span class="tag">${html(item.exceedLevel)}突</span>` : ""}
            ${item.enchantLevel ? `<span class="tag">+${html(item.enchantLevel)}</span>` : ""}
            <strong class="grade-${html(item.grade)}">${html(item.name || "未知裝備")}</strong>
          </div>
          <div class="equip-grade-line">${html(item.grade || "")}</div>
          <div class="equip-word-cols ${magicBlock ? "" : "single"}">
            ${soulBlock}
            ${magicBlock}
          </div>
          ${item.sourcesText ? `<div class="equip-source">${html(item.sourcesText)}</div>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderSoulBindLines(item) {
  const stats = Array.isArray(item.soulBindStats) ? item.soulBindStats : [];
  const rateLine = item.soulBindRate
    ? `<div class="equip-word-line soul-word"><span>刻印率</span><strong>${html(item.soulBindRate)}%</strong></div>`
    : "";
  const statLines = stats.map(renderSoulWordLine).join("");
  const lines = `${rateLine}${statLines}` || `<div class="equip-word-empty">暫無詞條</div>`;
  return `
    <section class="equip-word-block soul-block">
      <h5>靈魂刻印</h5>
      ${lines}
    </section>
  `;
}

function renderSoulWordLine(stat) {
  const name = stat.desc || stat.name || "詞條";
  const value = stat.value || stat.extra || "";
  return `
    <div class="equip-word-line soul-word">
      <span>${html(name)}</span>
      ${value ? `<strong>${html(value)}</strong>` : ""}
    </div>
  `;
}

function renderMagicStoneLines(item) {
  if (NO_STONE_SLOTS.has(item.slotPosName)) return "";
  const magicLines = (item.magicStoneStat || [])
    .map((stone) => renderEquipWordLine(stone, stone.grade || stone.gradeName || item.grade))
    .join("");
  const godStoneLines = item.godStoneStat ? `
    <div class="equip-godstone">
      ${item.godStoneStat.icon ? `<img src="${html(item.godStoneStat.icon)}" alt="" />` : ""}
      <div>
        <strong class="grade-${html(item.godStoneStat.grade || item.grade || "")}">${html(item.godStoneStat.name || "靈石")}</strong>
        ${(item.godStoneStat.statList || []).map((stat) => renderEquipWordLine(stat, stat.grade || item.godStoneStat.grade || item.grade)).join("")}
      </div>
    </div>
  ` : "";
  if (!magicLines && !godStoneLines) return "";
  return `
    <section class="equip-word-block magic-block">
      <h5>魔石/靈石</h5>
      ${magicLines}${godStoneLines}
    </section>
  `;
}

function renderEquipWordLine(stat, grade) {
  const name = stat.desc || stat.name || "詞條";
  const value = stat.value || stat.extra || "";
  return `
    <div class="equip-word-line">
      <span class="grade-${html(grade || "")}">${html(name)}</span>
      ${value ? `<strong class="grade-${html(grade || "")}">${html(value)}</strong>` : ""}
    </div>
  `;
}

function renderCardItem(item) {
  const mainStats = (item.mainStatsNormal || []).slice(0, 3);
  const subSkills = (item.subSkills || []).slice(0, 4);
  return `
    <article class="card-item">
      ${item.icon ? `<img class="card-icon grade-${html(item.grade)}" src="${html(item.icon)}" alt="" />` : `<div class="card-icon grade-${html(item.grade)}"></div>`}
      <div class="card-body">
        <div class="card-title-line">
          <strong class="grade-${html(item.grade)}">${html(item.name || "未知卡牌")}</strong>
          <span>${html(slotLabel(item))}${item.enchantLevel ? ` · +${html(item.enchantLevel)}` : ""}</span>
        </div>
        ${mainStats.length ? `<div class="card-detail-lines">${mainStats.map((stat) => `<span>${html(stat.name)} ${html(stat.value || "")}${stat.extra && stat.extra !== "0" ? `(+${html(stat.extra)})` : ""}</span>`).join("")}</div>` : ""}
        ${subSkills.length ? `<div class="card-skill-list">${subSkills.map((skill) => `<span>${html(skill.name)} Lv.${html(skill.level ?? "-")}</span>`).join("")}</div>` : ""}
      </div>
    </article>
  `;
}

function renderCardSetSummary(cardItems) {
  const sets = [];
  const seen = new Set();
  cardItems.forEach((item) => {
    const set = item.set;
    if (!set || seen.has(set.id || set.name)) return;
    seen.add(set.id || set.name);
    sets.push(set);
  });
  if (!sets.length) return "";

  return `
    <section class="set-summary">
      <div class="set-summary-head">
        <strong>套裝效果</strong>
        <span>${sets.length} 組</span>
      </div>
      <div class="set-summary-list">
        ${sets.map((set) => `
          <article class="set-summary-card">
            <div class="set-title">${html(set.name || "套裝")} <span>${html(set.equippedCount || 0)}/${html((set.items || []).length || "-")}</span></div>
            ${(set.bonuses || []).map((bonus) => `
              <div class="set-bonus">
                <b>${html(bonus.degree)}件</b>
                <span>${html((bonus.descriptions || []).join(" / "))}</span>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSkills(detail) {
  if (!detail) return "";
  const groups = [
    { title: "主動技能", items: detail.detailSkillActive },
    { title: "被動技能", items: detail.detailSkillPassive },
    { title: "烙印技能", items: detail.detailSkillDp },
  ].filter((group) => group.items && group.items.length);

  if (!groups.length) {
    return `
      <section class="info-block">
        <div class="block-head"><h4 class="section-title">技能</h4><span>0 個</span></div>
        <p class="muted">暫無技能資料</p>
      </section>
    `;
  }

  return `
    <section class="info-block">
      <div class="block-head"><h4 class="section-title">技能</h4><span>${groups.reduce((sum, group) => sum + group.items.length, 0)} 個</span></div>
      <div class="skill-blocks">
        ${groups.map((group) => `
          <section class="skill-group">
            <h5>${group.title}</h5>
            <div class="skill-grid">
              ${group.items.map(renderSkillItem).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSkillItem(skill) {
  return `
    <article class="skill-item">
      ${skill.icon ? `<img class="skill-icon" src="${html(skill.icon)}" alt="" />` : `<div class="skill-icon"></div>`}
      <div>
        <strong>${html(skill.name || "未知技能")}</strong>
        <span>Lv.${html(skill.skillLevel ?? "-")}</span>
      </div>
    </article>
  `;
}

function renderEquipItem(item) {
  const stats = []
    .concat((item.mainStatsNormal || []).map((stat) => ({ ...stat, kind: "main" })))
    .concat((item.mainStatsExceed || []).map((stat) => ({ ...stat, kind: "exceed" })))
    .concat((item.subStats || []).map((stat) => ({ ...stat, kind: "sub" })))
    .slice(0, 12);

  return `
    <article class="equip-item">
      ${item.icon ? `<img class="equip-icon grade-${html(item.grade)}" src="${html(item.icon)}" alt="" />` : `<div class="equip-icon grade-${html(item.grade)}"></div>`}
      <div>
        <div class="equip-title">
          ${item.enchantLevel ? `<span class="tag">+${html(item.enchantLevel)}</span>` : ""}
          ${item.exceedLevel ? `<span class="tag">${html(item.exceedLevel)}突破</span>` : ""}
          <strong class="grade-${html(item.grade)}">${html(item.name || "未知裝備")}</strong>
        </div>
        <div class="equip-slot">${html(item.slotPosName || "")}</div>
        <div class="stat-lines">
          ${stats.map((stat) => `
            <div class="stat-line">
              <span>${html(stat.kind === "exceed" ? `突破 · ${stat.name}` : stat.name)}</span>
              <strong>${html(stat.value || "")}${stat.extra && stat.extra !== "0" ? ` (+${html(stat.extra)})` : ""}</strong>
            </div>
          `).join("")}
          ${(item.magicStoneStat || []).slice(0, 4).map((stone) => `
            <div class="stat-line">
              <span>魔石 · ${html(stone.name || "")}</span>
              <strong>${html(stone.value || "")}</strong>
            </div>
          `).join("")}
          ${item.sourcesText ? `<div class="stat-line"><span>獲得處</span><strong>${html(item.sourcesText)}</strong></div>` : ""}
        </div>
      </div>
    </article>
  `;
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light", isLight);
  els.themeIcon.textContent = isLight ? "☼" : "☾";
  els.themeLabel.textContent = isLight ? "淺色" : "深色";
  localStorage.setItem("aion2-theme", theme);
}

function bindEvents() {
  els.raceTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-race]");
    if (!button) return;
    state.race = Number(button.dataset.race);
    els.raceTabs.querySelectorAll("button").forEach((btn) => btn.classList.toggle("active", btn === button));
    renderServers();
  });

  els.serverSelect.addEventListener("change", () => {
    state.serverId = Number(els.serverSelect.value);
  });

  els.convertButton.addEventListener("click", async () => {
    const value = els.keywordInput.value;
    if (!value) {
      els.keywordInput.focus();
      return;
    }
    els.convertButton.disabled = true;
    try {
      const data = await getJson(`/api/convert?text=${encodeURIComponent(value)}`, 8000);
      els.keywordInput.value = data.result || toTraditional(value);
    } catch (_) {
      els.keywordInput.value = toTraditional(value);
    } finally {
      els.convertButton.disabled = false;
      els.keywordInput.focus();
    }
  });

  els.searchButton.addEventListener("click", searchCharacters);
  els.keywordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") searchCharacters();
  });

  els.resultsList.addEventListener("click", (event) => {
    const card = event.target.closest(".result-card");
    if (!card) return;
    const char = state.results[Number(card.dataset.index)];
    if (char) loadDetail(char);
  });

  els.historyPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-history-clear]")) {
      state.history = [];
      saveHistory();
      renderHistory();
      return;
    }
    const button = event.target.closest("[data-history-index]");
    if (!button) return;
    const item = state.history[Number(button.dataset.historyIndex)];
    if (!item) return;
    state.results = [item];
    state.selectedId = "";
    state.race = item.race || 0;
    state.serverId = item.serverId || 0;
    els.keywordInput.value = item.characterName || "";
    els.raceTabs.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.race) === state.race);
    });
    renderServers();
    renderResults();
    loadDetail(item);
  });

  els.detailPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-detail-tab]");
    if (!button || !state.selectedDetail) return;
    state.detailTab = button.dataset.detailTab;
    renderDetail(state.selectedDetail, state.selectedAttack);
  });

  els.themeToggle.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("light") ? "dark" : "light");
  });
}

renderServers();
loadHistory();
renderHistory();
applyTheme(localStorage.getItem("aion2-theme") || "dark");
bindEvents();
