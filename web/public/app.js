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
  { key: "cooldownReduce", label: "冷卻時間減少", names: ["冷卻時間減少", "冷却时间减少"], ids: ["CoolTimeReduce", "CooldownReduce", "CoolTimeReduction", "CooldownReduction"] },
];
const BASIC_COMBAT_STAT_DEFS = [
  { key: "penetration",      label: "貫穿",             names: ["貫穿", "贯穿"],                         ids: ["Penetration", "Pierce"],                   isPct: false, exactName: true },
  { key: "soulstoneDamage",  label: "封魂石額外傷害",   names: ["封魂石額外傷害", "封魂石额外伤害"],       ids: ["SoulStoneAdditionalDamage", "SoulStoneDamage"], isPct: false },
  { key: "criticalAttack",   label: "暴擊攻擊力",       names: ["暴擊攻擊力", "暴击攻击力"],               ids: ["CriticalAttack", "CriticalDamage"],        isPct: false },
  { key: "criticalDefense",  label: "暴擊防禦力",       names: ["暴擊防禦力", "暴击防御力"],               ids: ["CriticalDefense"],                         isPct: false },
  { key: "backAttack",       label: "後方攻擊力",       names: ["後方攻擊力", "后方攻击力"],               ids: ["BackAttack", "BackDamage"],                isPct: false },
  { key: "backDefense",      label: "後方防禦力",       names: ["後方防禦力", "后方防御力"],               ids: ["BackDefense"],                             isPct: false },
];
const BASIC_COMBAT_AMP_STAT_DEFS = [
  { key: "damageAmp",         label: "傷害增幅",       names: ["傷害增幅", "伤害增幅"],                         ids: ["AmplifyAllDamage", "DamageAmplify", "DamageAmp"], isPct: true },
  { key: "damageResist",      label: "傷害耐性",       names: ["傷害耐性", "伤害耐性"],                         ids: ["DecreaseDamage", "DamageResist", "DamageTolerance"], isPct: true },
  { key: "weaponDamageAmp",   label: "武器傷害增幅",   names: ["武器傷害增幅", "武器伤害增幅"],                 ids: ["AmplifyWeaponDamage", "WeaponDamageAmplify", "WeaponDamageAmp"], isPct: true },
  { key: "weaponDamageResist",label: "武器傷害耐性",   names: ["武器傷害耐性", "武器伤害耐性"],                 ids: ["DecreaseWeaponDamage", "WeaponDamageResist"], isPct: true },
  { key: "critDamageAmp",     label: "暴擊傷害增幅",   names: ["暴擊傷害增幅", "暴击伤害增幅"],                 ids: ["AmplifyCriticalDamage", "CriticalDamageAmplify", "CriticalDamageAmp"], isPct: true },
  { key: "critDamageResist",  label: "暴擊傷害耐性",   names: ["暴擊傷害耐性", "暴击伤害耐性"],                 ids: ["DecreaseCriticalDamage", "CriticalDamageResist"], isPct: true },
  { key: "backDamageAmp",     label: "後方傷害增幅",   names: ["後方傷害增幅", "后方伤害增幅"],                 ids: ["AmplifyBackAttack", "BackDamageAmplify", "BackDamageAmp"], isPct: true },
  { key: "backDamageResist",  label: "後方傷害耐性",   names: ["後方傷害耐性", "后方伤害耐性"],                 ids: ["DecreaseBackAttack", "BackDamageResist"], isPct: true },
];
const ENV_COMBAT_AMP_STAT_DEFS = [
  { key: "pveAttack", label: "PVE攻擊力", names: ["PVE攻擊力", "PVE攻击力"], ids: ["PvEWeaponFixingDamage", "PVEWeaponFixingDamage", "PvEAttack", "PVEAttack"], isPct: false },
  { key: "pveDefense", label: "PVE防禦力", names: ["PVE防禦力", "PVE防御力"], ids: ["PvEDefense", "PVEDefense"], isPct: false },
  { key: "pveHit", label: "PVE命中", names: ["PVE命中"], ids: ["PvEAccuracy", "PVEAccuracy", "PvEHitRate", "PVEHitRate"], isPct: false },
  { key: "pveEvasion", label: "PVE迴避", names: ["PVE迴避", "PVE回避"], ids: ["PvEEvasion", "PVEEvasion"], isPct: false },
  { key: "pveDamageAmp", label: "PVE傷害增幅", names: ["PVE傷害增幅", "PVE伤害增幅"], ids: ["PvEAmplifyDamage", "PVEAmplifyDamage"], isPct: true },
  { key: "pveDamageResist", label: "PVE傷害耐性", names: ["PVE傷害耐性", "PVE伤害耐性"], ids: ["PvEDecreaseDamage", "PVEDecreaseDamage", "PvEDamageResist", "PVEDamageResist"], isPct: true },
  { key: "bossAttack", label: "首領攻擊力", names: ["首領攻擊力", "首领攻击力"], ids: ["BossWeaponFixingDamage", "BossAttack"], isPct: false },
  { key: "bossDefense", label: "首領防禦力", names: ["首領防禦力", "首领防御力"], ids: ["BossDefense"], isPct: false },
  { key: "bossDamageAmp", label: "首領傷害增幅", names: ["首領傷害增幅", "首领伤害增幅"], ids: ["BossAmplifyDamage", "AmplifyBossDamage"], isPct: true },
  { key: "bossDamageResist", label: "首領傷害耐性", names: ["首領傷害耐性", "首领伤害耐性"], ids: ["BossDecreaseDamage", "DecreaseBossDamage", "BossDamageResist"], isPct: true },
  { key: "pvpAttack", label: "PVP攻擊力", names: ["PVP攻擊力", "PVP攻击力"], ids: ["PvPWeaponFixingDamage", "PVPWeaponFixingDamage", "PvPAttack", "PVPAttack"], isPct: false },
  { key: "pvpDefense", label: "PVP防禦力", names: ["PVP防禦力", "PVP防御力"], ids: ["PvPDefense", "PVPDefense"], isPct: false },
  { key: "pvpDamageAmp", label: "PVP傷害增幅", names: ["PVP傷害增幅", "PVP伤害增幅"], ids: ["PvPAmplifyDamage", "PVPAmplifyDamage"], isPct: true },
  { key: "pvpDamageResist", label: "PVP傷害耐性", names: ["PVP傷害耐性", "PVP伤害耐性"], ids: ["PvPDecreaseDamage", "PVPDecreaseDamage", "PvPDamageResist", "PVPDamageResist"], isPct: true },
  { key: "pvpHit", label: "PVP命中", names: ["PVP命中"], ids: ["PvPAccuracy", "PVPAccuracy", "PvPHitRate", "PVPHitRate"], isPct: false },
  { key: "pvpEvasion", label: "PVP迴避", names: ["PVP迴避", "PVP回避"], ids: ["PvPEvasion", "PVPEvasion"], isPct: false },
  { key: "pvpCritical", label: "PVP暴擊", names: ["PVP暴擊", "PVP暴击"], ids: ["PvPCritical", "PVPCritical"], isPct: false },
  { key: "pvpCriticalResist", label: "PVP暴擊抵抗", names: ["PVP暴擊抵抗", "PVP暴击抵抗"], ids: ["PvPCriticalResist", "PVPCriticalResist"], isPct: false },
];
const ABNORMAL_STAT_DEFS = [
  { key: "shockHit", label: "衝擊系擊中", names: ["衝擊系擊中", "冲击系击中"], ids: ["ShockHit", "ImpactHit"], isPct: true },
  { key: "pStatusResist", label: "異常狀態抵抗增加", names: ["異常狀態抵抗增加", "异常状态抵抗增加"], ids: ["AbnormalStatusResistRatio", "AbnormalResistRatio"], isPct: true },
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
const CLASS_PASSIVE_CONFIGS = {
  "殺星": {
    className: "殺星",
    skills: [
      {
        name: "第六感最大化",
        effects: [
          { bucket: "primary", key: "evasion", label: "回避", fixed: 200 },
          { bucket: "primary", key: "hp", label: "生命力", perLevel: 150 },
          { bucket: "pct", key: "pHp", label: "最大生命力", perLevel: 1.5 },
        ],
      },
      {
        name: "瞄準破綻",
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 100, perLevel: 10 },
        ],
      },
      {
        name: "背後強擊",
        effects: [
          { bucket: "basicCombatAmp", key: "backDamageAmp", label: "後方傷害增幅", base: 3, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅", base: 3, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅", base: 1.5, perLevel: 0.25 },
        ],
      },
      {
        name: "衝擊擊中",
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 11.2, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0.3, perLevel: 0.3 },
        ],
      },
      {
        name: "回生契約",
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 17, perLevel: 2 },
        ],
      },
      {
        name: "強襲姿態",
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅", base: 6, perLevel: 1 },
        ],
      },
    ],
  },
};
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
  snapshotTab: null,
  snapshots: {},
};

let wingEffectCatalogPromise = null;
let resultsCollapsed = false;

function setResultsCollapsed(collapse) {
  if (collapse === resultsCollapsed) return;
  resultsCollapsed = collapse;

  const panel = els.resultsPanel;
  const innerEls = [
    panel.querySelector(".panel-head h3"),
    panel.querySelector("#resultCount"),
    els.historyPanel,
    els.resultsList,
  ].filter(Boolean);
  const detailSide = document.querySelector(".detail-side");

  els.contentGrid.classList.toggle("results-collapsed", collapse);

  if (collapse) {
    gsap.timeline()
      .to(innerEls, { autoAlpha: 0, duration: 0.14, ease: "power1.in" })
      .set(innerEls, { display: "none" })
      .to(panel, { width: 32, duration: 0.38, ease: "power3.inOut" }, "-=0.04")
      .call(() => { if (detailSide) detailSide.classList.add("visible"); });
  } else {
    if (detailSide) detailSide.classList.remove("visible");
    gsap.timeline()
      .set(innerEls, { display: "" })
      .to(panel, { width: 430, duration: 0.38, ease: "power3.inOut", delay: 0.06 })
      .to(innerEls, { autoAlpha: 1, duration: 0.2, ease: "power1.out" }, "-=0.1");
  }
}

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
  resultsPanel: document.querySelector("#resultsPanel"),
  contentGrid: document.querySelector(".content-grid"),
  collapseResultsBtn: document.querySelector("#collapseResultsBtn"),
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

function formatTime(ts) {
  if (!ts) return "—";
  const d = new Date(ts);
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
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

function detectSnapshotType(detail) {
  const PVP_KEYWORDS = ["百夫長", "千夫長", "軍團長", "百夫长", "千夫长", "军团长"];
  const hasGearKeyword = (detail.detailEquipItems || [])
    .filter((item) => !isCardItem(item))
    .some((item) => PVP_KEYWORDS.some((kw) => (item.name || "").includes(kw)));
  const hasSetBonus = (detail.detailEquipItems || [])
    .filter(isCardItem)
    .some((item) => {
      const set = item.set;
      if (!set) return false;
      const equipped = toNum(set.equippedCount);
      return (set.bonuses || []).some((b) => toNum(b.degree) > 0 && equipped >= toNum(b.degree));
    });
  return hasGearKeyword && hasSetBonus ? "pvp" : "pve";
}

function saveSnapshot(characterId, type, detail, analysis) {
  const key = `aion2-snap-${characterId}`;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (_) {}
  saved[type] = { savedAt: Date.now(), detail, analysis };
  try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {
    console.warn("快照保存失敗（儲存空間不足）:", e);
  }
  return saved;
}

function loadSnapshots(characterId) {
  const key = `aion2-snap-${characterId}`;
  try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (_) { return {}; }
}

function currentViewDetail() {
  const snap = state.snapshotTab && state.snapshots[state.snapshotTab];
  return snap ? snap.detail : state.selectedDetail;
}

function currentViewAnalysis() {
  const snap = state.snapshotTab && state.snapshots[state.snapshotTab];
  return snap ? snap.analysis : state.selectedAttack;
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
    const snapType = detectSnapshotType(detail);
    state.snapshots = saveSnapshot(char.characterId, snapType, detail, attributes);
    state.snapshotTab = snapType;
    renderDetail(currentViewDetail(), currentViewAnalysis());
    if (window.innerWidth > 980) setResultsCollapsed(true);
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
        growthStats: normalizeGrowthStats(detail),
        magicStoneStat: Array.isArray(detail.magicStoneStat) ? detail.magicStoneStat : (detail.magicStoneStat ? [detail.magicStoneStat] : []),
        subSkills: Array.isArray(detail.subSkills) ? detail.subSkills : [],
        set: detail.set || null,
        categoryName: detail.categoryName || item.categoryName || "",
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
        growthStats: [],
        magicStoneStat: [],
        subSkills: [],
        set: null,
        categoryName: item.categoryName || "",
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

function normalizeGrowthStats(detail) {
  return []
    .concat(Array.isArray(detail.growthStats) ? detail.growthStats : [])
    .concat(Array.isArray(detail.growthStat) ? detail.growthStat : (detail.growthStat ? [detail.growthStat] : []))
    .concat(Array.isArray(detail.growthStatList) ? detail.growthStatList : [])
    .concat(Array.isArray(detail.growthOptions) ? detail.growthOptions : [])
    .concat(Array.isArray(detail.growthOptionStats) ? detail.growthOptionStats : [])
    .concat(Array.isArray(detail.enhanceGrowthStats) ? detail.enhanceGrowthStats : []);
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
      if (desc && /[\d.]+%?/.test(desc)) entries.push({ boardName: board.name || board.id, desc });
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
  const basicCombatValues = Object.fromEntries(BASIC_COMBAT_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
  const basicCombatAmpValues = Object.fromEntries(BASIC_COMBAT_AMP_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
  const envCombatAmpValues = Object.fromEntries(ENV_COMBAT_AMP_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
  const abnormalValues = Object.fromEntries(ABNORMAL_STAT_DEFS.map((def) => [def.key, { ...def, flat: 0, pct: 0, count: 0, sources: [] }]));
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

  function addConfiguredValue(targetMap, key, value, isPct, sourceLabel, detailLabel) {
    const target = targetMap[key];
    const parsed = toNum(value);
    if (!target || !Number.isFinite(parsed) || parsed === 0) return;
    if (isPct) target.pct += parsed; else target.flat += parsed;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (isPct) source.pct += parsed; else source.flat += parsed;
    source.details.push({ label: detailLabel, value: parsed, isPct });
  }

  function configuredEffectValue(effect, level) {
    if (typeof effect.fixed !== "undefined") return toNum(effect.fixed);
    return toNum(effect.base) + toNum(effect.perLevel) * level;
  }

  function applyClassPassiveEffects() {
    const className = (detail.profile && detail.profile.className) || "";
    const config = CLASS_PASSIVE_CONFIGS[className];
    if (!config) return;
    const skills = detail.detailSkillPassive || [];
    config.skills.forEach((skillConfig) => {
      const skill = skills.find((item) => item.name === skillConfig.name);
      if (!skill || skill.acquired === 0) return;
      const level = Math.max(0, toNum(skill.skillLevel));
      if (!level) return;
      const sourceLabel = `被動技能 · ${skillConfig.name} Lv.${level}`;
      skillConfig.effects.forEach((effect) => {
        const value = configuredEffectValue(effect, level);
        const detailLabel = `職業配置：${effect.label}`;
        if (effect.bucket === "primary") addValue(effect.key, value, false, sourceLabel, detailLabel);
        else if (effect.bucket === "pct") addConfiguredValue(pctValues, effect.key, value, true, sourceLabel, detailLabel);
        else if (effect.bucket === "basicCombatAmp") addConfiguredValue(basicCombatAmpValues, effect.key, value, true, sourceLabel, detailLabel);
        else if (effect.bucket === "envCombatAmp") addConfiguredValue(envCombatAmpValues, effect.key, value, true, sourceLabel, detailLabel);
        else if (effect.bucket === "abnormal") addConfiguredValue(abnormalValues, effect.key, value, true, sourceLabel, detailLabel);
        else if (effect.bucket === "other") addConfiguredValue(otherValues, effect.key, value, true, sourceLabel, detailLabel);
      });
    });
  }

  function matchMetric(stat, sourceType = "") {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "").trim();
    if (/PVE|PvE|PVP|PvP|首領|首领/.test(name) || /PvE|PvP|PVE|PVP|Boss/i.test(id)) return null;
    if (/武器傷害增幅|武器伤害增幅|武器傷害耐性|武器伤害耐性|暴擊傷害增幅|暴击伤害增幅|暴擊傷害耐性|暴击伤害耐性|後方傷害增幅|后方伤害增幅|後方傷害耐性|后方伤害耐性|傷害增幅|伤害增幅|傷害耐性|伤害耐性/.test(name)) return null;
    if (/封魂石額外傷害|封魂石额外伤害|暴擊攻擊力|暴击攻击力|暴擊防禦力|暴击防御力|後方攻擊力|后方攻击力|後方防禦力|后方防御力/.test(name) || name === "貫穿" || name === "贯穿") return null;
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

  function matchAbnormalMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "");
    const exact = ABNORMAL_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return ABNORMAL_STAT_DEFS.find((def) => def.names.some((n) => name.includes(n))) || null;
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

  function matchBasicCombatMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "").trim();
    const exact = BASIC_COMBAT_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return BASIC_COMBAT_STAT_DEFS.find((def) => def.names.some((n) => {
      if (def.exactName) return name === n;
      return name.includes(n);
    })) || null;
  }

  function matchBasicCombatAmpMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "").trim();
    if (/PVE|PvE|PVP|PvP|首領|首领/.test(name) || /PvE|PvP|PVE|PVP|Boss/i.test(id)) return null;
    const exact = BASIC_COMBAT_AMP_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return BASIC_COMBAT_AMP_STAT_DEFS.find((def) => def.names.some((n) => {
      if ((n === "傷害增幅" || n === "伤害增幅") && /武器|暴擊|暴击|後方|后方/.test(name)) return false;
      if ((n === "傷害耐性" || n === "伤害耐性") && /武器|暴擊|暴击|後方|后方/.test(name)) return false;
      return name.includes(n);
    })) || null;
  }

  function matchEnvCombatAmpMetric(stat) {
    const id = String(stat.id || "");
    const name = String(stat.name || stat.desc || "").trim();
    const exact = ENV_COMBAT_AMP_STAT_DEFS.find((def) => def.ids.includes(id));
    if (exact) return exact;
    return ENV_COMBAT_AMP_STAT_DEFS.find((def) => def.names.some((n) => name.includes(n))) || null;
  }

  function usesStonePointAmp(sourceType) {
    return sourceType === "magicstone" || sourceType === "godstone";
  }

  function addEnvCombatAmpStat(stat, sourceLabel, detailKind, sourceType = "") {
    if (!stat) return false;
    const def = matchEnvCombatAmpMetric(stat);
    if (!def) return false;
    const name = String(stat.name || stat.desc || "");
    const rawVal = String(stat.value ?? "");
    const rawExtra = String(stat.extra ?? "");
    let num = toNum(rawVal.replace("%", "")) + toNum(rawExtra.replace("%", ""));
    if (usesStonePointAmp(sourceType) && def.isPct && !rawVal.includes("%") && !rawExtra.includes("%")) {
      num = num / 100;
    }
    if (!Number.isFinite(num) || num === 0) return true;
    const target = envCombatAmpValues[def.key];
    if (def.isPct) target.pct += num; else target.flat += num;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (def.isPct) source.pct += num; else source.flat += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: def.isPct });
    return true;
  }

  function addBasicCombatAmpStat(stat, sourceLabel, detailKind, sourceType = "") {
    if (!stat) return false;
    const def = matchBasicCombatAmpMetric(stat);
    if (!def) return false;
    const name = String(stat.name || stat.desc || "");
    const rawVal = String(stat.value ?? "");
    const rawExtra = String(stat.extra ?? "");
    let num = toNum(rawVal.replace("%", "")) + toNum(rawExtra.replace("%", ""));
    if (usesStonePointAmp(sourceType) && !rawVal.includes("%") && !rawExtra.includes("%")) {
      num = num / 100;
    }
    if (!Number.isFinite(num) || num === 0) return true;
    const target = basicCombatAmpValues[def.key];
    target.pct += num;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    source.pct += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: true });
    return true;
  }

  function addBasicCombatStat(stat, sourceLabel, detailKind) {
    if (!stat) return false;
    const def = matchBasicCombatMetric(stat);
    if (!def) return false;
    const name = String(stat.name || stat.desc || "");
    const rawVal = String(stat.value ?? "");
    const rawExtra = String(stat.extra ?? "");
    const apiHasPct = rawVal.includes("%") || rawExtra.includes("%");
    const usePct = apiHasPct || def.isPct;
    const num = toNum(rawVal.replace("%", "")) + toNum(rawExtra.replace("%", ""));
    if (!Number.isFinite(num) || num === 0) return true;
    const target = basicCombatValues[def.key];
    if (usePct) target.pct += num; else target.flat += num;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (usePct) source.pct += num; else source.flat += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: usePct });
    return true;
  }

  function addAbnormalStat(stat, sourceLabel, detailKind) {
    if (!stat) return false;
    const def = matchAbnormalMetric(stat);
    if (!def) return false;
    const name = String(stat.name || stat.desc || "");
    const rawVal = String(stat.value ?? "");
    const rawExtra = String(stat.extra ?? "");
    const apiHasPct = rawVal.includes("%") || rawExtra.includes("%");
    const usePct = apiHasPct || def.isPct;
    const num = toNum(rawVal.replace("%", "")) + toNum(rawExtra.replace("%", ""));
    if (!Number.isFinite(num) || num === 0) return true;
    const target = abnormalValues[def.key];
    if (usePct) target.pct += num; else target.flat += num;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (usePct) source.pct += num; else source.flat += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: usePct });
    return true;
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
    if (addEnvCombatAmpStat(stat, sourceLabel, detailKind, sourceType)) return;
    if (addAbnormalStat(stat, sourceLabel, detailKind)) return;
    if (isPct && matchPctMetric(stat)) {
      addPctStat(stat, sourceLabel, detailKind, cap);
      return;
    }
    const metric = matchMetric(stat, sourceType);
    if (!metric) {
      if (addBasicCombatAmpStat(stat, sourceLabel, detailKind, sourceType)) return;
      if (addBasicCombatStat(stat, sourceLabel, detailKind)) return;
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
    const text = desc.trim();
    if (/[，,、]/.test(text) && !/^[^，,、]+時[，,、]/.test(text)) {
      text.split(/[，,、]/).forEach((part) => addDesc(part.trim(), sourceLabel, detailKind, sourceType, cap));
      return;
    }
    const match = text.match(/^(?:(.+?時)[，,]?)?(.+?)\s*([+-]?[\d.]+%?)$/);
    if (!match) return;
    const condition = match[1] ? `（${match[1].trim()}）` : "";
    let name = match[2].trim();
    const value = match[3].trim();
    if (!value.includes("%") && /^(攻擊力|攻击力|防禦力|防御力|命中|迴避|回避|暴擊|暴击|暴擊抵抗|暴击抵抗)增加$/.test(name)) {
      name = name.replace(/增加$/, "");
    }
    addStat({ name, value }, sourceLabel, `${detailKind}${condition}`, sourceType, cap);
  }

  function addActiveSetBonuses() {
    const seen = new Set();
    (detail.detailEquipItems || []).forEach((item) => {
      const set = item.set;
      const key = set && (set.id || set.name);
      if (!set || seen.has(key)) return;
      seen.add(key);
      const equippedCount = toNum(set.equippedCount);
      const setType = isCardItem(item) ? "卡牌套裝" : "裝備套裝";
      (set.bonuses || []).forEach((bonus) => {
        const degree = toNum(bonus.degree);
        if (!degree || equippedCount < degree) return;
        (bonus.descriptions || []).forEach((desc) => {
          addDesc(String(desc), `${setType} · ${set.name || "套裝"}`, `${degree}件效果`);
        });
      });
    });
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
    (item.growthStats || []).forEach((stat) => addStat(stat, sourceLabel, "成長"));
    (item.magicStoneStat || []).forEach((stat) => addStat(stat, sourceLabel, "魔石", "magicstone"));
    if (item.godStoneStat && item.godStoneStat.statList) {
      item.godStoneStat.statList.forEach((stat) => {
        if (stat.value || stat.extra) addStat(stat, sourceLabel, "靈石", "godstone");
        else addDesc(stat.desc || stat.name || "", sourceLabel, "靈石", "godstone");
      });
    }
  });
  addActiveSetBonuses();

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
  applyClassPassiveEffects();

  return {
    primaryStats: PRIMARY_STAT_DEFS.map((def) => values[def.key]),
    pctStats: PCT_STAT_DEFS.map((def) => pctValues[def.key]),
    basicCombatStats: BASIC_COMBAT_STAT_DEFS.map((def) => basicCombatValues[def.key]),
    basicCombatAmpStats: BASIC_COMBAT_AMP_STAT_DEFS.map((def) => basicCombatAmpValues[def.key]),
    envCombatAmpStats: ENV_COMBAT_AMP_STAT_DEFS.map((def) => envCombatAmpValues[def.key]),
    abnormalStats: ABNORMAL_STAT_DEFS.map((def) => abnormalValues[def.key]),
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

function renderCombatPanel(analysis) {
  const isPvp = state.snapshotTab === "pvp";

  function gs(arr, key) {
    return arr.find((s) => s.key === key) || { flat: 0, pct: 0 };
  }
  const pri = (k) => gs(analysis.primaryStats, k);
  const pct = (k) => gs(analysis.pctStats, k);
  const env = (k) => gs(analysis.envCombatAmpStats, k);
  const amp = (k) => gs(analysis.basicCombatAmpStats, k);
  const other = (k) => gs(analysis.otherStats, k);

  const attack   = Math.round((pri("attack").flat + pri("extraAttack").flat) * (1 + pct("pAttack").pct / 100));
  const defense  = Math.round((pri("defense").flat + pri("extraDefense").flat) * (1 + pct("pDefense").pct / 100));
  const envHit   = isPvp ? env("pvpHit").flat : env("pveHit").flat;
  const hit      = Math.round((pri("hit").flat + pri("extraHit").flat) * (1 + pct("pHit").pct / 100)) + envHit;
  const envEvasion = isPvp ? env("pvpEvasion").flat : env("pveEvasion").flat;
  const evasion = Math.round((pri("evasion").flat + pri("extraEvasion").flat) * (1 + pct("pEvasion").pct / 100)) + envEvasion;
  const envCrit  = isPvp ? env("pvpCritical").flat : 0;
  const critical = Math.round(pri("critical").flat * (1 + pct("pCritical").pct / 100)) + envCrit;
  const envCritResist = isPvp ? env("pvpCriticalResist").flat : 0;
  const criticalResist = Math.round(pri("criticalResist").flat * (1 + pct("pCritResist").pct / 100)) + envCritResist;
  const hp = Math.round(pri("hp").flat * (1 + pct("pHp").pct / 100));
  const mp = Math.round(pri("mp").flat * (1 + pct("pMp").pct / 100));
  const damageAmp    = isPvp ? env("pvpDamageAmp").pct    : env("pveDamageAmp").pct;
  const damageResist = isPvp ? env("pvpDamageResist").pct : env("pveDamageResist").pct;
  const weaponAmp = amp("weaponDamageAmp").pct;
  const weaponResist = amp("weaponDamageResist").pct;
  const critAmp   = amp("critDamageAmp").pct;
  const critResist = amp("critDamageResist").pct;
  const multiHit = other("multiHit").pct;
  const multiHitResist = other("multiHitResist").pct;
  const powerStrike = other("powerStrike").pct;
  const powerStrikeResist = other("powerStrikeResist").pct;
  const ironWall = other("ironWall").pct;
  const ironWallPen = other("ironWallPen").pct;
  const csFlat = pri("combatSpeed").flat, csPct = pri("combatSpeed").pct;
  const msFlat = pri("moveSpeed").flat,   msPct = pri("moveSpeed").pct;

  const fi = (v) => v ? String(Math.round(v)) : "—";
  const fp = (v) => v ? `${Math.round(v * 10) / 10}%` : "—";
  const fnum = (v) => Math.round(v * 10) / 10;
  const hasTipValue = (value) => value !== undefined && value !== null && value !== "" && value !== "—" && value !== "0" && value !== "0%";
  const statParts = (items) => items.filter((item) => hasTipValue(item.value)).map((item) => `${item.label} ${item.value}`);
  const tip = (formula, items) => [formula].concat(statParts(items)).join("\n");
  const envCritLabel = isPvp ? "PVP暴擊" : "專項暴擊";
  const envCritResistLabel = isPvp ? "PVP暴擊抵抗" : "專項暴擊抵抗";
  const fspd = (f, p) => {
    const parts = [];
    if (f) parts.push(String(Math.round(f)));
    if (p) parts.push(`+${Math.round(p * 10) / 10}%`);
    return parts.length ? parts.join(" / ") : "—";
  };

  const stats = [
    { label: "攻擊力", value: fi(attack), gold: true, tooltip: tip("(攻擊力 + 額外攻擊力) × 攻擊力增加%", [
      { label: "攻擊力", value: fi(pri("attack").flat) },
      { label: "額外攻擊力", value: fi(pri("extraAttack").flat) },
      { label: "攻擊力增加", value: fp(pct("pAttack").pct) },
    ]) },
    { label: "防禦力", value: fi(defense), tooltip: tip("(防禦力 + 額外防禦力) × 防禦力增加%", [
      { label: "防禦力", value: fi(pri("defense").flat) },
      { label: "額外防禦力", value: fi(pri("extraDefense").flat) },
      { label: "防禦力增加", value: fp(pct("pDefense").pct) },
    ]) },
    { label: "多段打擊擊中", value: fp(multiHit), tooltip: tip("其他手段：多段打擊擊中", [{ label: "多段打擊擊中", value: fp(multiHit) }]) },
    { label: "多段打擊抵抗", value: fp(multiHitResist), tooltip: tip("其他手段：多段打擊抵抗", [{ label: "多段打擊抵抗", value: fp(multiHitResist) }]) },
    { label: isPvp ? "PVP命中" : "命中", value: fi(hit), tooltip: tip("(命中 + 額外命中) × 命中增加% + 專項命中", [
      { label: "命中", value: fi(pri("hit").flat) },
      { label: "額外命中", value: fi(pri("extraHit").flat) },
      { label: "命中增加", value: fp(pct("pHit").pct) },
      { label: isPvp ? "PVP命中" : "PVE命中", value: fi(envHit) },
    ]) },
    { label: "迴避", value: fi(evasion), tooltip: tip("(迴避 + 額外迴避) × 迴避增加% + 專項迴避", [
      { label: "迴避", value: fi(pri("evasion").flat) },
      { label: "額外迴避", value: fi(pri("extraEvasion").flat) },
      { label: "迴避增加", value: fp(pct("pEvasion").pct) },
      { label: isPvp ? "PVP迴避" : "PVE迴避", value: fi(envEvasion) },
    ]) },
    { label: isPvp ? "PVP暴擊" : "暴擊", value: fi(critical), tooltip: tip("暴擊 × 暴擊增加% + 專項暴擊", [
      { label: "暴擊", value: fi(pri("critical").flat) },
      { label: "暴擊增加", value: fp(pct("pCritical").pct) },
      { label: envCritLabel, value: fi(envCrit) },
    ]) },
    { label: "暴擊抵抗", value: fi(criticalResist), tooltip: tip("暴擊抵抗 × 暴擊抵抗增加% + 專項暴擊抵抗", [
      { label: "暴擊抵抗", value: fi(pri("criticalResist").flat) },
      { label: "暴擊抵抗增加", value: fp(pct("pCritResist").pct) },
      { label: envCritResistLabel, value: fi(envCritResist) },
    ]) },
    { label: isPvp ? "PVP增幅" : "PVE增幅", value: fp(damageAmp), tooltip: tip(isPvp ? "PVP相關增幅：PVP傷害增幅" : "PVE相關增幅：PVE傷害增幅", [{ label: isPvp ? "PVP傷害增幅" : "PVE傷害增幅", value: fp(damageAmp) }]) },
    { label: isPvp ? "PVP耐性" : "PVE耐性", value: fp(damageResist), tooltip: tip(isPvp ? "PVP相關增幅：PVP傷害耐性" : "PVE相關增幅：PVE傷害耐性", [{ label: isPvp ? "PVP傷害耐性" : "PVE傷害耐性", value: fp(damageResist) }]) },
    { label: "武器傷害增幅", value: fp(weaponAmp), tooltip: tip("基礎戰鬥增幅：武器傷害增幅", [{ label: "武器傷害增幅", value: fp(weaponAmp) }]) },
    { label: "武器傷害耐性", value: fp(weaponResist), tooltip: tip("基礎戰鬥增幅：武器傷害耐性", [{ label: "武器傷害耐性", value: fp(weaponResist) }]) },
    { label: "暴擊傷害增幅", value: fp(critAmp), tooltip: tip("基礎戰鬥增幅：暴擊傷害增幅", [{ label: "暴擊傷害增幅", value: fp(critAmp) }]) },
    { label: "暴擊傷害耐性", value: fp(critResist), tooltip: tip("基礎戰鬥增幅：暴擊傷害耐性", [{ label: "暴擊傷害耐性", value: fp(critResist) }]) },
    { label: "強擊", value: fp(powerStrike), tooltip: tip("其他手段：強擊", [{ label: "強擊", value: fp(powerStrike) }]) },
    { label: "強擊抵抗", value: fp(powerStrikeResist), tooltip: tip("其他手段：強擊抵抗", [{ label: "強擊抵抗", value: fp(powerStrikeResist) }]) },
    { label: "鐵壁貫穿", value: fp(ironWallPen), tooltip: tip("其他手段：鐵壁貫穿", [{ label: "鐵壁貫穿", value: fp(ironWallPen) }]) },
    { label: "鐵壁", value: fp(ironWall), tooltip: tip("其他手段：鐵壁", [{ label: "鐵壁", value: fp(ironWall) }]) },
    { label: "生命力", value: fi(hp), tooltip: tip("生命力 × 生命力增加%", [
      { label: "生命力", value: fi(pri("hp").flat) },
      { label: "生命力增加", value: fp(pct("pHp").pct) },
    ]) },
    { label: "精神力", value: fi(mp), tooltip: tip("精神力 × 精神力增加%", [
      { label: "精神力", value: fi(pri("mp").flat) },
      { label: "精神力增加", value: fp(pct("pMp").pct) },
    ]) },
    { label: "戰鬥速度", value: fspd(csFlat, csPct), tooltip: tip("戰鬥速度：固定值 / 百分比", [
      { label: "固定值", value: csFlat ? String(fnum(csFlat)) : "" },
      { label: "百分比", value: csPct ? fp(csPct) : "" },
    ]) },
    { label: "移動速度", value: fspd(msFlat, msPct), tooltip: tip("移動速度：固定值 / 百分比", [
      { label: "固定值", value: msFlat ? String(fnum(msFlat)) : "" },
      { label: "百分比", value: msPct ? fp(msPct) : "" },
    ]) },
  ];

  return `
    <div class="combat-panel">
      <div class="combat-panel-head">
        <span>${isPvp ? "PVP" : "PVE"} 戰鬥面板</span>
      </div>
      <div class="combat-grid">
        ${stats.map((s) => `
          <div class="combat-stat${s.tooltip ? " has-tooltip" : ""}" ${s.tooltip ? `data-tooltip="${html(s.tooltip)}"` : ""}>
            <span class="combat-label">${html(s.label)}</span>
            <strong class="combat-value${s.gold ? " gold" : ""}">${html(s.value)}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

const BASIC_PANEL_ORDER = [
  { type: "STR", label: "威力" },
  { type: "DEX", label: "敏捷" },
  { type: "AGI", label: "精確" },
  { type: "WIS", label: "意志" },
  { type: "INT", label: "知識" },
  { type: "CON", label: "體力" },
];

const SECONDARY_PANEL_ORDER = ["正義", "自由", "幻象", "生命", "時間", "破壞", "死亡", "智慧", "命運", "空間"];

function renderSidePanels(detail, analysis) {
  return `
    ${renderCombatPanel(analysis)}
    ${renderStatOverviewPanel("基礎能力", BASIC_PANEL_ORDER.map((def) => {
      const stat = (detail.detailStatBasic || []).find((item) => item.type === def.type || item.name === def.label);
      return statOverviewItem(def.label, stat);
    }), "basic")}
    ${renderStatOverviewPanel("屬性轉換", SECONDARY_PANEL_ORDER.map((label) => {
      const stat = findSecondaryStat(detail.detailStatSecondary || [], label);
      return statOverviewItem(label, stat);
    }), "secondary")}
  `;
}

function findSecondaryStat(stats, label) {
  return stats.find((stat) => stat.name === label);
}

function statOverviewItem(label, stat) {
  const value = stat ? (stat.value ?? stat.statValue ?? stat.totalValue ?? "-") : "-";
  const tooltip = statTooltip(stat);
  return { label, value: value || "-", tooltip };
}

function statTooltip(stat) {
  if (!stat || !Array.isArray(stat.statSecondList) || !stat.statSecondList.length) return "";
  return stat.statSecondList.map((item) => {
    if (item && typeof item === "object") {
      const name = item.name || item.desc || item.type || item.id || "轉化";
      const value = [item.value, item.extra].filter((v) => v !== undefined && v !== null && v !== "" && v !== "0" && v !== "0%").join(" / ");
      return value ? `${name} ${value}` : String(name);
    }
    return String(item);
  }).filter(Boolean).join("\n");
}

function renderStatOverviewPanel(title, items, mode) {
  return `
    <div class="side-stat-panel side-stat-panel--${html(mode)}">
      <div class="side-stat-head">${html(title)}</div>
      <div class="side-stat-grid">
        ${items.map((item) => `
          <div class="side-stat-cell${item.tooltip ? " has-tooltip" : ""}" ${item.tooltip ? `data-tooltip="${html(item.tooltip)}"` : ""}>
            <span>${html(item.label)}</span>
            <strong>${html(item.value)}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
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

      <nav class="snapshot-tabs" aria-label="快照切換">
        ${["pve", "pvp"].map((type) => {
          const snap = state.snapshots[type];
          const label = type === "pvp" ? "PVP" : "PVE";
          const isActive = state.snapshotTab === type;
          if (snap) {
            return `<button type="button" class="snapshot-tab${isActive ? " active" : ""}" data-snapshot-tab="${type}">${html(label)}<span class="snap-time">${html(formatTime(snap.savedAt))}</span></button>`;
          }
          return `<button type="button" class="snapshot-tab snapshot-tab--empty" disabled>${html(label)}<span class="snap-time">—</span></button>`;
        }).join("")}
      </nav>

      <div class="detail-body">
        <div class="detail-main">
          <nav class="detail-tabs" aria-label="角色詳情分頁">
            <button type="button" class="${state.detailTab === "equipment" ? "active" : ""}" data-detail-tab="equipment">裝備</button>
            <button type="button" class="${state.detailTab === "attack" ? "active" : ""}" data-detail-tab="attack">屬性分析</button>
          </nav>
          <div class="tab-content">
            ${state.detailTab === "attack" ? renderAttributeAnalysis(analysis) : renderEquipment(detail.detailEquipItems)}
          </div>
        </div>
        <div class="detail-side${resultsCollapsed ? " visible" : ""}">
          ${renderSidePanels(detail, analysis)}
        </div>
      </div>
    </article>
  `;
}

function renderAttributeAnalysis(analysis) {
  const activePctStats = analysis.pctStats.filter((s) => s.count > 0);
  const activeBasicCombatStats = analysis.basicCombatStats.filter((s) => s.count > 0);
  const allBasicCombatStats = analysis.basicCombatStats;
  const activeBasicCombatAmpStats = analysis.basicCombatAmpStats.filter((s) => s.count > 0);
  const allBasicCombatAmpStats = analysis.basicCombatAmpStats;
  const pveAmpStats = analysis.envCombatAmpStats.filter((s) => s.key.startsWith("pve") || s.key.startsWith("boss"));
  const pvpAmpStats = analysis.envCombatAmpStats.filter((s) => s.key.startsWith("pvp"));
  const activePveAmpStats = pveAmpStats.filter((s) => s.count > 0);
  const activePvpAmpStats = pvpAmpStats.filter((s) => s.count > 0);
  const activeAbnormalStats = analysis.abnormalStats.filter((s) => s.count > 0);
  const allAbnormalStats = analysis.abnormalStats;
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
            <h4 class="section-title">基礎戰鬥</h4>
            <span>${activeBasicCombatStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${allBasicCombatStats.map((stat) => `
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
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">基礎戰鬥增幅</h4>
            <span>${activeBasicCombatAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${allBasicCombatAmpStats.map((stat) => `
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
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">PVE相關增幅</h4>
            <span>${activePveAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${pveAmpStats.map((stat) => `
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
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">PVP相關增幅</h4>
            <span>${activePvpAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${pvpAmpStats.map((stat) => `
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
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">異常狀態</h4>
            <span>${activeAbnormalStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${allAbnormalStats.map((stat) => `
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

        ${renderEquipSetSection(equipmentItems)}

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
  const base = SLOT_CN[item.slotPosName] || item.slotPosName || "";
  const category = equipmentCategoryLabel(item);
  return category ? `${base}-${category}` : base;
}

function equipmentCategoryLabel(item) {
  if (!["MainHand", "SubHand"].includes(item.slotPosName)) return "";
  const category = String(item.categoryName || "").trim();
  if (!category || category === "Equip" || category === "裝備" || category === "装备") return "";
  return category;
}

function renderCompactEquipItem(item) {
  const soulBlock = renderSoulBindLines(item);
  const growthBlock = renderGrowthLines(item);
  const magicBlock = renderMagicStoneLines(item);
  const wordBlocks = [soulBlock, growthBlock, magicBlock].filter(Boolean).join("");
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
          ${wordBlocks ? `<div class="equip-word-cols ${[soulBlock, growthBlock, magicBlock].filter(Boolean).length === 1 ? "single" : ""}">${wordBlocks}</div>` : ""}
          ${item.sourcesText ? `<div class="equip-source">${html(item.sourcesText)}</div>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderSoulBindLines(item) {
  const stats = Array.isArray(item.soulBindStats) ? item.soulBindStats : [];
  const skills = Array.isArray(item.subSkills) ? item.subSkills : [];
  if (!stats.length && !skills.length) return "";
  const rateText = item.soulBindRate
    ? `${html(item.soulBindRate)}%`
    : "";
  const statLines = stats.map(renderSoulWordLine).join("");
  const skillLines = skills.map(renderSoulSkillLine).join("");
  return `
    <section class="equip-word-block soul-block">
      <div class="equip-word-head">
        <h5>靈魂刻印</h5>
        ${rateText ? `<strong class="soul-rate">${rateText}</strong>` : ""}
      </div>
      ${statLines}${skillLines}
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

function renderSoulSkillLine(skill) {
  const level = skill.level ?? skill.skillLevel ?? "";
  return `
    <div class="equip-word-line soul-word soul-skill-word">
      <span>${html(skill.name || "技能刻印")}</span>
      ${level !== "" ? `<strong>Lv.${html(level)}</strong>` : ""}
    </div>
  `;
}

function renderGrowthLines(item) {
  const stats = Array.isArray(item.growthStats) ? item.growthStats : [];
  if (!stats.length) return "";
  return `
    <section class="equip-word-block growth-block">
      <h5>成長</h5>
      ${stats.map((stat) => renderEquipWordLine(stat, stat.grade || stat.gradeName || item.grade)).join("")}
    </section>
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

function renderEquipSetSection(equipItems) {
  const sets = [];
  const seen = new Set();
  const setIcon = {};
  equipItems.forEach((item) => {
    const set = item.set;
    if (!set) return;
    const key = set.id || set.name;
    if (!seen.has(key)) {
      seen.add(key);
      sets.push(set);
    }
    if (!setIcon[key] && item.icon) setIcon[key] = item.icon;
  });
  if (!sets.length) return "";

  return `
    <section class="info-block">
      <div class="block-head">
        <h4 class="section-title">PVP套裝</h4>
      </div>
      <section class="set-summary">
        <div class="set-summary-head">
          <strong>套裝效果</strong>
          <span>${sets.length} 組</span>
        </div>
        <div class="pvp-set-list">
          ${sets.map((set) => {
            const key = set.id || set.name;
            const icon = setIcon[key];
            const equipped = toNum(set.equippedCount);
            const bonuses = set.bonuses || [];
            const maxDegree = Math.max(0, ...bonuses.map((b) => toNum(b.degree)));
            const total = maxDegree || "?";
            return `
              <article class="card-item">
                ${icon ? `<img class="card-icon grade-Epic" src="${html(icon)}" alt="" />` : ""}
                <div class="card-body">
                  <div class="card-title-line">
                    <strong>${html(set.name || "套裝")}</strong>
                    <span>${html(equipped)}/${html(total)} 件</span>
                  </div>
                  ${bonuses.length ? `
                    <div class="card-detail-lines">
                      ${bonuses.map((bonus) => {
                        const degree = toNum(bonus.degree);
                        const active = equipped >= degree && degree > 0;
                        const descs = (bonus.descriptions || []).join("、");
                        return `<span class="${active ? "set-bonus-active" : ""}">${html(degree)}件 ${html(descs)}</span>`;
                      }).join("")}
                    </div>
                  ` : ""}
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    </section>
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
        ${sets.map((set) => {
          const equipped = toNum(set.equippedCount);
          const maxDegree = Math.max(0, ...(set.bonuses || []).map((b) => toNum(b.degree)));
          return `
          <article class="set-summary-card">
            <div class="set-title">${html(set.name || "套裝")} <span>${html(equipped)}/${html(maxDegree || "?")}</span></div>
            ${(set.bonuses || []).map((bonus) => {
              const degree = toNum(bonus.degree);
              const active = degree > 0 && equipped >= degree;
              return `
              <div class="set-bonus${active ? " set-bonus-active" : ""}">
                <b>${html(bonus.degree)}件</b>
                <span>${html((bonus.descriptions || []).join(" / "))}</span>
              </div>`;
            }).join("")}
          </article>
        `}).join("")}
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
    const snapButton = event.target.closest("[data-snapshot-tab]");
    if (snapButton) {
      const snapType = snapButton.dataset.snapshotTab;
      if (!state.snapshots[snapType]) return;
      state.snapshotTab = snapType;
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const button = event.target.closest("[data-detail-tab]");
    if (!button || !state.selectedDetail) return;
    state.detailTab = button.dataset.detailTab;
    renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.collapseResultsBtn.addEventListener("click", () => {
    setResultsCollapsed(!resultsCollapsed);
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
