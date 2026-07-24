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

const CLASS_OPTIONS = [
  { id: "0", label: "所有職業", names: [] },
  { id: "2", label: "劍星", names: ["劍星"] },
  { id: "3", label: "守護星", names: ["守護星"] },
  { id: "4", label: "弓星", names: ["弓星"] },
  { id: "5", label: "殺星", names: ["殺星"] },
  { id: "6", label: "精靈星", names: ["精靈星"] },
  { id: "7", label: "魔道星", names: ["魔道星"] },
  { id: "8", label: "治癒星", names: ["治癒星"] },
  { id: "9", label: "護法星", names: ["護法星"] },
  { id: "12", label: "拳星", names: ["拳星"] },
];

const RANKING_TYPES = [
  { key: "abyss", label: "深淵", contentsType: 1 },
  { key: "arenaOfSolitude", label: "孤獨競技場", contentsType: 5 },
  { key: "arenaOfCooperation", label: "協力競技場", contentsType: 6 },
  { key: "nightmare", label: "惡夢", contentsType: 3 },
  { key: "transcendence", label: "超越", contentsType: 4 },
  { key: "ascensionTrial", label: "覺醒戰", contentsType: 21 },
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
  Pendant: "吊墜",
  Brooch1: "胸針1",
  Brooch2: "胸針2",
  Rune1: "古文石1",
  Rune2: "古文石2",
  Amulet: "護身符",
};

const BASIC_TYPES = ["STR", "DEX", "INT", "CON", "AGI", "WIS"];
const SNAPSHOT_SCHEMA_VERSION = 4;
const PRIMARY_STAT_DEFS = [
  { key: "attack", label: "攻擊力", names: ["攻擊力", "攻击力"], ids: ["WeaponFixingDamage"] },
  { key: "extraAttack", label: "額外攻擊力", names: ["額外攻擊力", "额外攻击力"], ids: ["AdditionalWeaponFixingDamage", "AdditionalAttack", "AdditionalDamage"] },
  { key: "defense", label: "防禦力", names: ["防禦力", "防御力"], ids: ["Defense", "ArmorDefense"] },
  { key: "extraDefense", label: "額外防禦力", names: ["額外防禦力", "额外防御力"], ids: ["AdditionalDefense"] },
  { key: "hit", label: "命中", names: ["命中"], ids: ["WeaponAccuracy", "HitRate"] },
  { key: "extraHit", label: "額外命中", names: ["額外命中", "命中增加"], ids: ["Accuracy"] },
  { key: "evasion", label: "迴避", names: ["迴避", "回避"], ids: ["EvasionBase"] },
  { key: "extraEvasion", label: "額外迴避", names: ["額外迴避", "迴避增加", "回避增加"], ids: ["Evasion"] },
  { key: "critical", label: "暴擊", names: ["暴擊", "暴击"], ids: ["Critical"] },
  { key: "criticalResist", label: "暴擊抵抗", names: ["暴擊抵抗", "暴击抵抗"], ids: ["CriticalResist"] },
  { key: "hp", label: "生命力", names: ["生命力", "HP"], ids: ["HP", "HPMax"] },
  { key: "mp", label: "精神力", names: ["精神力", "MP"], ids: ["MP", "MPMax"] },
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
  { key: "pHp",         label: "生命力增加",   names: ["生命力增加", "HP增加"],                 ids: ["HPRatio", "MaxHPRatio"] },
  { key: "pMp",         label: "精神力增加",   names: ["精神力增加", "MP增加"],                 ids: ["MPRatio"] },
  { key: "cooldownReduce", label: "冷卻時間減少", names: ["冷卻時間減少", "冷却时间减少", "冷卻時間", "冷却时间", "冷卻CD", "冷却CD", "Cooldown Reduction", "Skill Cooldown Reduction"], ids: ["CoolTimeReduce", "CooldownReduce", "CoolTimeReduction", "CooldownReduction", "SkillCoolTimeReduce", "SkillCooldownReduce", "SkillCoolTimeReduction", "SkillCooldownReduction"] },
];
const BASIC_COMBAT_STAT_DEFS = [
  { key: "penetration",      label: "貫穿",             names: ["貫穿", "贯穿"],                         ids: ["Penetration", "Pierce", "DefensePierce"],  isPct: false, exactName: true },
  { key: "soulstoneDamage",  label: "封魂石額外傷害",   names: ["封魂石額外傷害", "封魂石额外伤害"],       ids: ["SoulStoneAdditionalDamage", "SoulStoneDamage", "SealStoneAddDamage"], isPct: false },
  { key: "criticalAttack",   label: "暴擊攻擊力",       names: ["暴擊攻擊力", "暴击攻击力"],               ids: ["CriticalAttack", "CriticalDamage"],        isPct: false },
  { key: "criticalDefense",  label: "暴擊防禦力",       names: ["暴擊防禦力", "暴击防御力"],               ids: ["CriticalDefense"],                         isPct: false },
  { key: "frontAttack",      label: "前方攻擊力",       names: ["前方攻擊力", "前方攻击力"],               ids: ["FrontAttack", "FrontDamage"],              isPct: false },
  { key: "frontDefense",     label: "前方防禦力",       names: ["前方防禦力", "前方防御力"],               ids: ["FrontAttackDefense", "FrontDefense"],      isPct: false },
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
  { key: "frontDamageAmp",    label: "前方傷害增幅",   names: ["前方傷害增幅", "前方伤害增幅"],                 ids: ["AmplifyFrontAttack", "AmplifyFrontDamage", "FrontDamageAmplify", "FrontDamageAmp", "FrontalDamageAmplify", "FrontalDamageAmp"], isPct: true },
  { key: "frontDamageResist", label: "前方傷害耐性",   names: ["前方傷害耐性", "前方伤害耐性"],                 ids: ["DecreaseFrontAttack", "DecreaseFrontDamage", "FrontDamageResist", "FrontDamageResistance", "FrontalDamageResist", "FrontalDamageResistance"], isPct: true },
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
  { key: "shockResist", label: "衝擊系抵抗", names: ["衝擊系抵抗", "冲击系抵抗"], ids: ["ShockResist", "ImpactResist", "ShockPropertyResist"], isPct: true },
  { key: "spiritHit", label: "精神系擊中", names: ["精神系擊中", "精神系击中"], ids: ["SpiritHit", "MentalHit"], isPct: true },
  { key: "spiritResist", label: "精神系抵抗", names: ["精神系抵抗"], ids: ["SpiritResist", "MentalResist"], isPct: true },
  { key: "bodyResist", label: "肉體系抵抗", names: ["肉體系抵抗", "肉体系抵抗"], ids: ["BodyResist", "PhysicalResist", "BodyPropertyResist"], isPct: true },
  { key: "propertyHit", label: "屬性系擊中", names: ["屬性系擊中", "属性系击中", "肉體系及精神系擊中", "肉体系及精神系击中"], ids: ["PropertyHit", "BodySpiritHit"], isPct: true },
  { key: "statusHit", label: "異常狀態擊中", names: ["異常狀態擊中", "异常状态击中"], ids: ["AbnormalStatusHit", "AbnormalHit"], isPct: true },
  { key: "pStatusResist", label: "異常狀態抵抗增加", names: ["異常狀態抵抗增加", "异常状态抵抗增加", "異常狀態抵抗", "异常状态抵抗"], ids: ["AbnormalStatusResistRatio", "AbnormalResistRatio"], isPct: true },
];
const OTHER_STAT_DEFS = [
  { key: "flightPower",       label: "飛行力",         names: ["飛行力", "飞行力"],                       ids: ["FP", "FPMax", "FlightPower"],              isPct: false },
  { key: "maxAction",         label: "最大行動力",     names: ["最大行動力", "最大行动力"],               ids: ["MaxActionPoint", "ActionPointMax", "MaxActionPower"], isPct: false },
  { key: "flightRegen",        label: "飛行力自然恢復", names: ["飛行力自然恢復", "飞行力自然恢复"],       ids: ["SPRegen", "FlightPowerRegen"],              isPct: false },
  { key: "battleHpRegen",      label: "戰鬥中生命力自然恢復", names: ["戰鬥中生命力自然恢復", "战斗中生命力自然恢复"], ids: ["BattleHPRegen"], isPct: false },
  { key: "battleMpRegen",      label: "戰鬥中精神力自然恢復", names: ["戰鬥中精神力自然恢復", "战斗中精神力自然恢复"], ids: ["BattleMPRegen"], isPct: false },
  { key: "battleFlightRegen",  label: "戰鬥中飛行力自然恢復", names: ["戰鬥中飛行力自然恢復", "战斗中飞行力自然恢复"], ids: ["BattleSPRegen"], isPct: false },
  { key: "restHpRegen",        label: "休息中生命力自然恢復", names: ["休息中生命力自然恢復", "休息中生命力自然恢复"], ids: ["RestHPRegen"], isPct: false },
  { key: "restMpRegen",        label: "休息中精神力自然恢復", names: ["休息中精神力自然恢復", "休息中精神力自然恢复"], ids: ["RestMPRegen"], isPct: false },
  { key: "restFlightRegen",    label: "休息中飛行力自然恢復", names: ["休息中飛行力自然恢復", "休息中飞行力自然恢复"], ids: ["RestSPRegen"], isPct: false },
  { key: "weaponDamage",       label: "武器傷害",       names: ["武器傷害", "武器伤害"],                 ids: ["WeaponDamage"], isPct: false },
  { key: "mpRegen",           label: "精神力自然恢復", names: ["精神力自然恢復", "精神力自然恢复"],         ids: ["NaturalMPRegen", "MPRegen"],               isPct: false },
  { key: "mpCostReduce",      label: "精神力消耗量減少", names: ["精神力消耗量減少", "精神力消耗量减少"],   ids: ["MPUseDecrease", "MpCostReduction"],        isPct: true  },
  { key: "multiHit",          label: "多段打擊擊中",   names: ["多段打擊擊中", "多段打击击中"],         ids: ["MultiHit", "MultipleHit", "AdditionalHitRate"], isPct: true  },
  { key: "multiHitResist",    label: "多段打擊抵抗",   names: ["多段打擊抵抗", "多段打击抵抗"],         ids: ["MultiHitResist", "MultipleHitResist"],  isPct: true  },
  { key: "ironWallPen",       label: "鐵壁貫穿",       names: ["鐵壁貫穿", "铁壁贯穿"],                 ids: ["IronWallPenetration", "IronWallBreak"],  isPct: true  },
  { key: "ironWall",          label: "鐵壁",           names: ["鐵壁", "铁壁"],                         ids: ["IronWall", "IronWallRate"],             isPct: true  },
  { key: "regenPen",          label: "再生貫穿",       names: ["再生貫穿", "再生贯穿"],                 ids: ["RegenerationPenetration", "RegenBreak"], isPct: true  },
  { key: "regen",             label: "再生",           names: ["再生"],                                 ids: ["Regeneration", "Regen"],               isPct: true  },
  { key: "healingReceived",    label: "所受治療量",     names: ["所受治療量", "受到治療量"],             ids: ["HealingReceived", "ReceivedHealing"],   isPct: true  },
  { key: "hpRegen",            label: "生命力自然恢復", names: ["生命力自然恢復", "生命力自然恢复"],     ids: ["NaturalHPRegen", "HPRegen"],           isPct: false },
  { key: "hpPotionRate",       label: "生命力藥水恢復率", names: ["生命力藥水恢復率", "生命力药水恢复率"], ids: ["HPPotionRate", "HPPotionRecoveryRate"], isPct: true },
  { key: "hpPotionRegen",      label: "生命力藥水恢復量", names: ["生命力藥水恢復量", "生命力药水恢复量"], ids: ["HPPotionRegen", "HPPotionRecovery"],    isPct: false },
  { key: "perfect",           label: "完美",           names: ["完美"],                                 ids: ["Perfect", "PerfectAttack"],            isPct: true  },
  { key: "perfectResist",     label: "完美抵抗",       names: ["完美抵抗"],                             ids: ["PerfectResist", "PerfectDefense"],      isPct: true  },
  { key: "powerStrike",       label: "強擊",           names: ["強擊", "强击"],                         ids: ["PowerStrike", "StrongAttack", "HardHit"], isPct: true  },
  { key: "powerStrikeResist", label: "強擊抵抗",       names: ["強擊抵抗", "强击抵抗"],                 ids: ["PowerStrikeResist", "StrongAttackResist"], isPct: true },
  { key: "backCrit",          label: "後方暴擊",       names: ["後方暴擊", "后方暴击"],                 ids: ["BackCritical", "BackCrit"],             isPct: false },
  { key: "backCritResist",    label: "後方暴擊抵抗",   names: ["後方暴擊抵抗", "后方暴击抵抗"],         ids: ["BackCriticalResist", "BackCritResist"],  isPct: true  },
  { key: "blockPen",          label: "格擋貫穿",       names: ["格擋貫穿", "格挡贯穿"],                 ids: ["BlockPenetration", "BlockBreak"],       isPct: false },
  { key: "block",             label: "格擋",           names: ["格擋", "格挡"],                         ids: ["Block", "BlockRate"],                  isPct: false },
  { key: "maxRage",           label: "最大憤怒",       names: ["最大憤怒", "最大愤怒"],                 ids: ["MaxRage", "RageMax"],                  isPct: false },
  { key: "spiritPveDamageAmp", label: "精靈PVE傷害增幅", names: ["精靈PVE傷害增幅", "精灵PVE伤害增幅"], ids: ["SpiritPveDamageAmp"], isPct: true },
  { key: "spiritPvpDamageAmp", label: "精靈PVP傷害增幅", names: ["精靈PVP傷害增幅", "精灵PVP伤害增幅"], ids: ["SpiritPvpDamageAmp"], isPct: true },
  { key: "spiritPerfect",      label: "精靈完美",       names: ["精靈完美", "精灵完美"],                 ids: ["SpiritPerfect"], isPct: true },
  { key: "spiritDefensePct",   label: "精靈防禦力",     names: ["精靈防禦力", "精灵防御力"],             ids: ["SpiritDefensePct"], isPct: true },
  { key: "spiritCritDamageAmp", label: "精靈暴擊傷害增幅", names: ["精靈暴擊傷害增幅", "精灵暴击伤害增幅"], ids: ["SpiritCritDamageAmp"], isPct: true },
];
const CLASS_PASSIVE_CONFIGS = {
  "劍星": {
    className: "劍星",
    skills: [
      {
        name: "生存姿態",
        aliases: ["生存姿态"],
        effects: [
          { bucket: "primary", key: "hp", label: "生命力增加", base: 0, perLevel: 200 },
          { bucket: "pct", key: "pHp", label: "最大生命力額外增加", base: 5, perLevel: 2 },
          { bucket: "other", key: "hpRegen", label: "生命力自然恢復額外增加", base: 0, perLevel: 20, isPct: false },
          { bucket: "envCombatAmp", key: "pveDamageResist", label: "PVE傷害耐性增加", base: 5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageResist", label: "PVP傷害耐性增加", base: 2.5, perLevel: 0.25 },
        ],
      },
      {
        name: "保護盔甲",
        aliases: ["保护盔甲"],
        notes: ["格擋成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "block", label: "格擋增加", fixed: 200, isPct: false },
        ],
      },
      {
        name: "掌握弱點",
        aliases: ["掌握弱点"],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
          { bucket: "other", key: "perfect", label: "完美增加", base: 0, perLevel: 0.5 },
        ],
      },
      {
        name: "攻擊準備",
        aliases: ["攻击准备"],
        effects: [
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅增加", base: 5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅增加", base: 2.5, perLevel: 0.25 },
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 0, perLevel: 2 },
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
        ],
      },
      {
        name: "衝擊擊中",
        aliases: ["冲击击中"],
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 10, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "老練反擊",
        aliases: ["老练反击"],
        notes: [
          "格擋成功後 20 秒內自己及小隊 PVE/PVP 傷害增幅為觸發效果，未計入常駐屬性。",
          "觸發增幅效果不與守護星的激昂效果重複套用。",
        ],
        effects: [
          { bucket: "basicCombatAmp", key: "frontDamageAmp", label: "前方傷害增幅增加", base: 0, perLevel: 0.4 },
        ],
      },
      {
        name: "生存意志",
        aliases: ["生存意志"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pveDamageResist", label: "PVE傷害耐性增加", base: 10, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pvpDamageResist", label: "PVP傷害耐性增加", base: 5, perLevel: 1 },
        ],
      },
    ],
  },
  "守護星": {
    className: "守護星",
    skills: [
      {
        name: "體力強化",
        aliases: ["体力强化"],
        effects: [
          { bucket: "primary", key: "hp", label: "生命力增加", base: 0, perLevel: 250 },
          { bucket: "pct", key: "pHp", label: "最大生命力額外增加", base: 5, perLevel: 2.5 },
          { bucket: "other", key: "healingReceived", label: "所受治療量額外增加", base: 5, perLevel: 1 },
        ],
      },
      {
        name: "庇護盾牌",
        aliases: ["庇护盾牌"],
        notes: ["格擋成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "block", label: "格擋增加", fixed: 200, isPct: false },
        ],
      },
      {
        name: "斷罪加護",
        aliases: ["断罪加护"],
        notes: [
          "攻擊命中時 10 秒內獲得斷罪加護為觸發效果，未計入常駐屬性。",
          "斷罪加護期間攻擊命中追加傷害為觸發效果，未計入常駐屬性。",
        ],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
        ],
      },
      {
        name: "銅牆鐵壁",
        aliases: ["铜墙铁壁"],
        effects: [
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 5, perLevel: 2 },
          { bucket: "other", key: "ironWall", label: "鐵壁增加", base: 0, perLevel: 1 },
        ],
      },
      {
        name: "衝擊擊中",
        aliases: ["冲击击中"],
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 10, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "激昂",
        aliases: ["激昂"],
        notes: [
          "格擋成功後 20 秒內自己及小隊 PVE/PVP 傷害增幅為觸發效果，未計入常駐屬性。",
          "觸發增幅效果不與劍星老練反擊效果重複套用。",
        ],
        effects: [
          { bucket: "basicCombatAmp", key: "frontDamageAmp", label: "前方傷害增幅增加", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "生存意志",
        aliases: ["生存意志"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pveDamageResist", label: "PVE傷害耐性增加", base: 10, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pvpDamageResist", label: "PVP傷害耐性增加", base: 5, perLevel: 1 },
        ],
      },
    ],
  },
  "弓星": {
    className: "弓星",
    skills: [
      {
        name: "警戒之眼",
        aliases: ["警戒之眼"],
        notes: ["迴避成功時立即恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "evasion", label: "迴避增加", fixed: 200 },
          { bucket: "pct", key: "pHp", label: "最大生命力增加", base: 5, perLevel: 1 },
        ],
      },
      {
        name: "風之活力",
        aliases: ["风之活力"],
        notes: ["受到攻擊時短時間移動速度增加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "maxAction", label: "最大行動力增加", base: 0, perLevel: 15, isPct: false },
        ],
      },
      {
        name: "集中之眼",
        aliases: ["集中之眼"],
        effects: [
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅增加", base: 0, perLevel: 1 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅增加", base: 0, perLevel: 0.5 },
          { bucket: "other", key: "powerStrike", label: "強擊增加", base: 0, perLevel: 0.2 },
        ],
      },
      {
        name: "獵人決心",
        aliases: ["猎人决心"],
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅增加", base: 5, perLevel: 1 },
        ],
      },
      {
        name: "抵抗決心",
        aliases: ["抵抗决心"],
        effects: [
          { bucket: "abnormal", key: "bodyResist", label: "肉體系抵抗增加", base: 10, perLevel: 1.5 },
          { bucket: "abnormal", key: "shockResist", label: "衝擊系抵抗增加", base: 10, perLevel: 1.5 },
        ],
      },
      {
        name: "回生契約",
        aliases: ["回生契约"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加與低生命力恢復為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
        ],
      },
    ],
  },
  "精靈星": {
    className: "精靈星",
    skills: [
      {
        name: "精靈打擊",
        aliases: ["精灵打击"],
        effects: [
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅增加", base: 5, perLevel: 1 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅增加", base: 2.5, perLevel: 0.5 },
          { bucket: "other", key: "perfect", label: "完美增加", base: 0, perLevel: 0.4 },
          { bucket: "other", key: "spiritPveDamageAmp", label: "精靈PVE傷害增幅增加", base: 5, perLevel: 1 },
          { bucket: "other", key: "spiritPvpDamageAmp", label: "精靈PVP傷害增幅增加", base: 2.5, perLevel: 0.5 },
          { bucket: "other", key: "spiritPerfect", label: "精靈完美增加", base: 0, perLevel: 0.4 },
        ],
      },
      {
        name: "精靈保護",
        aliases: ["精灵保护"],
        effects: [
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 0, perLevel: 2 },
          { bucket: "other", key: "spiritDefensePct", label: "精靈防禦力增加", base: 0, perLevel: 2 },
        ],
      },
      {
        name: "侵蝕",
        aliases: ["侵蚀"],
        notes: ["暴擊擊中時追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
        ],
      },
      {
        name: "精神集中",
        aliases: ["精神集中"],
        effects: [
          { bucket: "abnormal", key: "spiritHit", label: "精神系擊中增加", base: 10, perLevel: 1 },
          { bucket: "other", key: "powerStrike", label: "強擊增加", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "精靈交流",
        aliases: ["精灵交流"],
        notes: ["攻擊擊中時恢復自己和精靈生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
        ],
      },
      {
        name: "元素集結",
        aliases: ["元素集结"],
        notes: ["每次精靈技能攻擊擊中會疊加暴擊傷害增幅；因持續時間覆蓋冷卻，本站按滿 5 層戰鬥常駐計入。"],
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅（元素集結滿層）", base: 5, perLevel: 0.5 },
          { bucket: "other", key: "spiritCritDamageAmp", label: "精靈暴擊傷害增幅（元素集結滿層）", base: 5, perLevel: 0.5 },
        ],
      },
      {
        name: "回生契約",
        aliases: ["回生契约"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加與低生命力恢復為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
        ],
      },
    ],
  },
  "治癒星": {
    className: "治癒星",
    skills: [
      {
        name: "溫暖加護",
        aliases: ["温暖加护"],
        effects: [
          { bucket: "pct", key: "pHp", label: "最大生命力增加", base: 5, perLevel: 1 },
          { bucket: "pct", key: "pMp", label: "最大精神力增加", base: 5, perLevel: 2 },
        ],
      },
      {
        name: "主神加護",
        aliases: ["主神加护"],
        notes: ["格擋成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "block", label: "格擋增加", fixed: 200, isPct: false },
        ],
      },
      {
        name: "主神恩寵",
        aliases: ["主神恩宠"],
        notes: ["每次攻擊擊中目標時追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 95, perLevel: 5 },
          { bucket: "other", key: "powerStrike", label: "強擊增加", base: 0, perLevel: 0.2 },
        ],
      },
      {
        name: "治癒力強化",
        aliases: ["治愈力强化"],
        notes: ["根據攻擊力等比額外增加的治癒力為派生效果，暫未單獨折算。"],
        effects: [
          { bucket: "other", key: "healingReceived", label: "治癒增幅增加", base: 8, perLevel: 2 },
        ],
      },
      {
        name: "不死庇幕",
        aliases: ["不死庇幕"],
        effects: [
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 0, perLevel: 2 },
          { bucket: "primary", key: "criticalResist", label: "暴擊抵抗增加", base: 90, perLevel: 10 },
        ],
      },
      {
        name: "大地恩寵",
        aliases: ["大地恩宠"],
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅增加", base: 2.5, perLevel: 0.5 },
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
        ],
      },
      {
        name: "生存意志",
        aliases: ["生存意志"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pveDamageResist", label: "PVE傷害耐性增加", base: 10, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pvpDamageResist", label: "PVP傷害耐性增加", base: 5, perLevel: 1 },
        ],
      },
    ],
  },
  "護法星": {
    className: "護法星",
    skills: [
      {
        name: "生命祝福",
        aliases: ["生命祝福"],
        effects: [
          { bucket: "primary", key: "hp", label: "生命力增加", base: 0, perLevel: 150 },
          { bucket: "pct", key: "pHp", label: "最大生命力額外增加", base: -1.25, perLevel: 1.75 },
          { bucket: "other", key: "healingReceived", label: "治癒增幅額外增加", base: 4, perLevel: 1 },
        ],
      },
      {
        name: "十字防禦",
        aliases: ["十字防御"],
        notes: ["格擋成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "block", label: "格擋增加", fixed: 200, isPct: false },
        ],
      },
      {
        name: "鼓吹咒語",
        aliases: ["鼓吹咒语"],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
          { bucket: "other", key: "perfect", label: "完美增加", base: 0, perLevel: 0.5 },
        ],
      },
      {
        name: "攻擊準備",
        aliases: ["攻击准备"],
        effects: [
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅增加", base: 5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅增加", base: 2.5, perLevel: 0.25 },
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 0, perLevel: 2 },
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
        ],
      },
      {
        name: "衝擊擊中",
        aliases: ["冲击击中"],
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 10, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "生存意志",
        aliases: ["生存意志"],
        notes: ["受擊後 5 秒內異常狀態抵抗疊加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pveDamageResist", label: "PVE傷害耐性增加", base: 10, perLevel: 2 },
          { bucket: "envCombatAmp", key: "pvpDamageResist", label: "PVP傷害耐性增加", base: 5, perLevel: 1 },
        ],
      },
      {
        name: "風之約定",
        aliases: ["风之约定"],
        notes: [
          "暴擊擊中時追加傷害為觸發效果，未計入常駐屬性。",
          "暴擊傷害增幅按官方 10/20/30 級基準線性折算：Lv.1 為 5.7%，每級增加 0.7%。",
        ],
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅（風之約定）", base: 5, perLevel: 0.7 },
        ],
      },
    ],
  },
  "殺星": {
    className: "殺星",
    skills: [
      {
        name: "第六感最大化",
        aliases: ["第六感最大化"],
        notes: ["迴避成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "evasion", label: "回避", fixed: 200 },
          { bucket: "primary", key: "hp", label: "生命力", perLevel: 150 },
          { bucket: "pct", key: "pHp", label: "最大生命力", perLevel: 1.5 },
        ],
      },
      {
        name: "瞄準破綻",
        aliases: ["瞄准破绽"],
        notes: ["暴擊擊中時 10 秒內攻擊力增加為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
        ],
      },
      {
        name: "背後強擊",
        aliases: ["背后强击"],
        effects: [
          { bucket: "basicCombatAmp", key: "backDamageAmp", label: "後方傷害增幅", base: 2.5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅", base: 2.5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅", base: 1.25, perLevel: 0.25 },
        ],
      },
      {
        name: "衝擊擊中",
        aliases: ["冲击击中"],
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 10, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "回生契約",
        aliases: ["回生契约"],
        notes: ["受擊疊加抵抗與低血恢復為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
        ],
      },
      {
        name: "強襲姿態",
        aliases: ["强袭姿态"],
        effects: [
          { bucket: "basicCombatAmp", key: "critDamageAmp", label: "暴擊傷害增幅", base: 5, perLevel: 1 },
        ],
      },
    ],
  },
  "魔道星": {
    className: "魔道星",
    skills: [
      {
        name: "火花長袍",
        aliases: ["火花长袍"],
        effects: [
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅", base: 0, perLevel: 1 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅", base: 0, perLevel: 0.5 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.2 },
        ],
      },
      {
        name: "冷氣長袍",
        aliases: ["冷气长袍"],
        notes: ["受擊時賦予遲緩效果為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "pct", key: "pDefense", label: "防禦力增加", base: 0, perLevel: 1 },
          { bucket: "primary", key: "criticalResist", label: "暴擊抵抗增加", base: 50, perLevel: 5 },
        ],
      },
      {
        name: "強化恩惠",
        aliases: ["强化恩惠"],
        notes: ["普攻追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅（預設精神力25%以上常駐）", fixed: 20 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅（預設精神力25%以上常駐）", fixed: 10 },
        ],
      },
      {
        name: "回生契約",
        aliases: ["回生契约"],
        notes: ["受擊疊加抵抗與低血恢復為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
        ],
      },
      {
        name: "大地長袍",
        aliases: ["大地长袍"],
        effects: [
          { bucket: "pct", key: "pMp", label: "最大精神力增加", base: 5, perLevel: 2 },
          { bucket: "other", key: "mpRegen", label: "精神力自然恢復", base: 0, perLevel: 5 },
          { bucket: "primary", key: "critical", label: "暴擊增加（預設精神力50%以上常駐）", base: 100, perLevel: 5 },
        ],
      },
      {
        name: "精氣吸收",
        aliases: ["精气吸收"],
        notes: ["普攻命中恢復精神力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "propertyHit", label: "肉體系及精神系擊中增加", base: 11, perLevel: 1 },
        ],
      },
      {
        name: "抵抗恩惠",
        aliases: ["抵抗恩惠"],
        effects: [
          { bucket: "abnormal", key: "spiritResist", label: "精神系抵抗增加", base: 10, perLevel: 1.5 },
          { bucket: "abnormal", key: "shockResist", label: "衝擊系抵抗增加", base: 10, perLevel: 1.5 },
        ],
      },
    ],
  },
  "拳星": {
    className: "拳星",
    skills: [
      {
        name: "維持戰線",
        aliases: ["维持战线"],
        notes: ["格擋成功時恢復生命力為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "block", label: "格擋增加", fixed: 200, isPct: false },
        ],
      },
      {
        name: "正面突破",
        aliases: ["正面突破"],
        notes: ["前方攻擊時追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "primary", key: "hit", label: "命中增加", fixed: 100 },
          { bucket: "primary", key: "critical", label: "暴擊增加", base: 90, perLevel: 10 },
        ],
      },
      {
        name: "精神轉換",
        aliases: ["精神转换"],
        notes: ["按當前最大精神力與精神力自然恢復折算後計入常駐屬性。"],
        effects: [],
        conversions: [
          { sourceBucket: "primary", sourceKey: "mp", targetBucket: "primary", targetKey: "hp", label: "最大精神力轉換最大生命力", base: 45, perLevel: 5 },
          { sourceBucket: "other", sourceKey: "mpRegen", targetBucket: "other", targetKey: "hpRegen", label: "精神力自然恢復轉換生命力自然恢復", base: 9.5, perLevel: 0.5 },
        ],
      },
      {
        name: "威勢",
        aliases: ["威势"],
        effects: [
          { bucket: "basicCombatAmp", key: "frontDamageAmp", label: "前方傷害增幅", base: 2.5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pveDamageAmp", label: "PVE傷害增幅", base: 2.5, perLevel: 0.5 },
          { bucket: "envCombatAmp", key: "pvpDamageAmp", label: "PVP傷害增幅", base: 1.25, perLevel: 0.25 },
        ],
      },
      {
        name: "暴走增幅",
        aliases: ["暴走增幅"],
        notes: ["日常按一般狀態計入；暴走狀態下攻擊力/防禦力加成互換為另一組數值。"],
        effects: [
          { bucket: "pct", key: "pAttack", label: "攻擊力增加（一般狀態；暴走狀態為 2+等級×0.5%）", base: 1.2, perLevel: 0.3 },
          { bucket: "pct", key: "pDefense", label: "防禦力增加（一般狀態；暴走狀態為 1.2+等級×0.3%）", base: 2, perLevel: 0.5 },
        ],
      },
      {
        name: "衝擊擊中",
        aliases: ["冲击击中"],
        effects: [
          { bucket: "abnormal", key: "shockHit", label: "衝擊系擊中", base: 10, perLevel: 1.2 },
          { bucket: "other", key: "powerStrike", label: "強擊", base: 0, perLevel: 0.3 },
        ],
      },
      {
        name: "巨大憤怒",
        aliases: ["巨大愤怒"],
        notes: ["暴走狀態每秒消耗憤怒為狀態消耗提示，未計入常駐屬性。"],
        effects: [
          { bucket: "other", key: "maxRage", label: "最大憤怒增加", base: 0, perLevel: 25, isPct: false },
        ],
      },
      {
        name: "衝擊打",
        aliases: ["冲击打"],
        notes: ["目標為衝擊系或眩暈狀態時的追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [],
      },
      {
        name: "回生契約",
        aliases: ["回生契约"],
        notes: ["受擊疊加抵抗與低血恢復為觸發效果，未計入常駐屬性。"],
        effects: [
          { bucket: "abnormal", key: "pStatusResist", label: "異常狀態抵抗增加", base: 15, perLevel: 2 },
        ],
      },
      {
        name: "輕量化",
        aliases: ["轻量化"],
        notes: ["命中生命力高於50%的目標時追加傷害為觸發效果，未計入常駐屬性。"],
        effects: [],
      },
    ],
  },
};
const HISTORY_KEY = "aion2-query-history";
const FAVORITES_KEY = "aion2-favorite-characters";
const PET_SIM_KEY = "aion2-pet-simulator";
const WING_BONUS_KEY = "aion2-wing-bonus-enabled";
const WING_SELECTION_KEY = "aion2-wing-selection";
const WING_LEVEL_KEY = "aion2-wing-levels";
const WARDROBE_BONUS_KEY = "aion2-wardrobe-bonus-enabled";
const WARDROBE_CONFIG_KEY = "aion2-wardrobe-config";
const TITLE_BONUS_KEY = "aion2-title-bonus-enabled";
const TITLE_SELECTION_KEY = "aion2-title-selection";
const WARDROBE_CATEGORIES = [
  { key: "weapon", label: "武器", max: 250, source: "主武器", parts: [{ key: "MainHand", label: "主武器" }], stats: [{ statKey: "attack", label: "主武器基礎攻擊力", value: 25 }] },
  { key: "armor", label: "防具", max: 500, source: "頭盔、肩甲、上衣、下衣、手套、鞋子、披風", parts: [
    { key: "Helmet", label: "頭盔" },
    { key: "Shoulder", label: "肩甲" },
    { key: "Torso", label: "上衣" },
    { key: "Pants", label: "下衣" },
    { key: "Gloves", label: "手套" },
    { key: "Boots", label: "鞋子" },
    { key: "Cape", label: "披風" },
  ], stats: [{ statKey: "defense", label: "防具基礎防禦力", value: 50 }] },
  { key: "accessory", label: "飾品", max: 250, source: "項鍊、耳環、戒指", parts: [
    { key: "Necklace", label: "項鍊" },
    { key: "Earring", label: "耳環" },
    { key: "Ring", label: "戒指" },
  ], stats: [{ statKey: "attack", label: "飾品基礎攻擊力", value: 25 }, { statKey: "defense", label: "飾品基礎防禦力", value: 25 }] },
];
const PET_DISK_TYPES = {
  normal: "普通盤",
  special: "特殊盤",
};
const PET_STAT_OPTIONS = [
  { key: "block", label: "格擋", bucket: "otherStats", statKey: "block", max: 50, maxCount: 9, isPct: false },
  { key: "extraEvasion", label: "額外迴避", bucket: "primaryStats", statKey: "extraEvasion", max: 40, maxCount: 9, isPct: false },
  { key: "criticalResist", label: "暴擊抵抗", bucket: "primaryStats", statKey: "criticalResist", max: 30, maxCount: 9, isPct: false },
  { key: "hp", label: "生命力", bucket: "primaryStats", statKey: "hp", max: 200, maxCount: 9, isPct: false },
  { key: "extraHit", label: "額外命中", bucket: "primaryStats", statKey: "extraHit", max: 40, maxCount: 9, isPct: false },
  { key: "extraAttack", label: "額外攻擊力", bucket: "primaryStats", statKey: "extraAttack", max: 16, maxCount: 3, isPct: false },
  { key: "maxAttack", label: "最大攻擊力", bucket: "primaryStats", statKey: "attack", max: 20, maxCount: 3, isPct: false, scale: 0.5, note: "按平均攻擊力折算 50%" },
  { key: "bossAttack", label: "首領攻擊力", bucket: "envCombatAmpStats", statKey: "bossAttack", max: 20, maxCount: 9, isPct: false },
  { key: "critical", label: "暴擊", bucket: "primaryStats", statKey: "critical", max: 30, maxCount: 9, isPct: false },
  { key: "pveDamageAmp", label: "PVE傷害增幅", bucket: "envCombatAmpStats", statKey: "pveDamageAmp", max: 3, maxCount: 2, isPct: true },
  { key: "pveDamageResist", label: "PVE傷害耐性", bucket: "envCombatAmpStats", statKey: "pveDamageResist", max: 3, maxCount: 1, isPct: true },
  { key: "weaponDamageResist", label: "武器傷害耐性", bucket: "basicCombatAmpStats", statKey: "weaponDamageResist", max: 2.4, maxCount: 1, isPct: true },
  { key: "critDamageResist", label: "暴擊傷害耐性", bucket: "basicCombatAmpStats", statKey: "critDamageResist", max: 2.4, maxCount: 1, isPct: true },
  { key: "backDamageResist", label: "後方傷害耐性", bucket: "basicCombatAmpStats", statKey: "backDamageResist", max: 2.4, maxCount: 1, isPct: true },
  { key: "damageResist", label: "傷害耐性", bucket: "basicCombatAmpStats", statKey: "damageResist", max: 2.4, maxCount: 1, isPct: true },
  { key: "powerStrike", label: "強擊", bucket: "otherStats", statKey: "powerStrike", max: 2.4, maxCount: 2, isPct: true },
  { key: "perfect", label: "完美", bucket: "otherStats", statKey: "perfect", max: 2.4, maxCount: 2, isPct: true },
  { key: "damageAmp", label: "傷害增幅", bucket: "basicCombatAmpStats", statKey: "damageAmp", max: 2.4, maxCount: 2, isPct: true },
  { key: "backDamageAmp", label: "後方傷害增幅", bucket: "basicCombatAmpStats", statKey: "backDamageAmp", max: 3, maxCount: 2, isPct: true },
  { key: "critDamageAmp", label: "暴擊傷害增幅", bucket: "basicCombatAmpStats", statKey: "critDamageAmp", max: 3, maxCount: 2, isPct: true },
  { key: "weaponDamageAmp", label: "武器傷害增幅", bucket: "basicCombatAmpStats", statKey: "weaponDamageAmp", max: 2.4, maxCount: 2, isPct: true },
  { key: "ironWall", label: "鐵壁", bucket: "otherStats", statKey: "ironWall", max: 2.4, maxCount: 1, isPct: true },
];
const PET_SPECIAL_OVERRIDES = {
  extraHit: { max: 0, maxCount: 0 },
  extraAttack: { maxCount: 6 },
  maxAttack: { maxCount: 6 },
};
const PET_SPECIAL_ONLY_OPTIONS = [
  { key: "penetration", label: "貫穿", bucket: "basicCombatStats", statKey: "penetration", max: 160, maxCount: 9, isPct: false },
];
const WING_BONUS_EFFECT_OPTIONS = {
  "攻擊力": { label: "攻擊力", bucket: "primaryStats", statKey: "attack", isPct: false },
  "防禦力": { label: "防禦力", bucket: "primaryStats", statKey: "defense", isPct: false },
  "命中": { label: "命中", bucket: "primaryStats", statKey: "hit", isPct: false },
  "迴避": { label: "迴避", bucket: "primaryStats", statKey: "evasion", isPct: false },
  "額外攻擊力": { label: "額外攻擊力", bucket: "primaryStats", statKey: "extraAttack", isPct: false },
  "額外防禦力": { label: "額外防禦力", bucket: "primaryStats", statKey: "extraDefense", isPct: false },
  "強擊": { label: "強擊", bucket: "otherStats", statKey: "powerStrike", isPct: true, scale: 0.01 },
  "傷害增幅": { label: "傷害增幅", bucket: "basicCombatAmpStats", statKey: "damageAmp", isPct: true, scale: 0.01 },
  "傷害耐性": { label: "傷害耐性", bucket: "basicCombatAmpStats", statKey: "damageResist", isPct: true, scale: 0.01 },
  "武器傷害增幅": { label: "武器傷害增幅", bucket: "basicCombatAmpStats", statKey: "weaponDamageAmp", isPct: true, scale: 0.01 },
  "PVE攻擊力": { label: "PVE攻擊力", bucket: "envCombatAmpStats", statKey: "pveAttack", isPct: false },
  "PVE防禦力": { label: "PVE防禦力", bucket: "envCombatAmpStats", statKey: "pveDefense", isPct: false },
  "PVE命中": { label: "PVE命中", bucket: "envCombatAmpStats", statKey: "pveHit", isPct: false },
  "PVE傷害增幅": { label: "PVE傷害增幅", bucket: "envCombatAmpStats", statKey: "pveDamageAmp", isPct: true, scale: 0.01 },
  "PVE傷害耐性": { label: "PVE傷害耐性", bucket: "envCombatAmpStats", statKey: "pveDamageResist", isPct: true, scale: 0.01 },
  "首領攻擊力": { label: "首領攻擊力", bucket: "envCombatAmpStats", statKey: "bossAttack", isPct: false },
  "首領防禦力": { label: "首領防禦力", bucket: "envCombatAmpStats", statKey: "bossDefense", isPct: false },
  "首領傷害增幅": { label: "首領傷害增幅", bucket: "envCombatAmpStats", statKey: "bossDamageAmp", isPct: true, scale: 0.01 },
  "首領傷害耐性": { label: "首領傷害耐性", bucket: "envCombatAmpStats", statKey: "bossDamageResist", isPct: true, scale: 0.01 },
  "暴擊": { label: "暴擊", bucket: "primaryStats", statKey: "critical", isPct: false },
  "暴擊抵抗": { label: "暴擊抵抗", bucket: "primaryStats", statKey: "criticalResist", isPct: false },
  "額外命中": { label: "額外命中", bucket: "primaryStats", statKey: "extraHit", isPct: false },
  "額外迴避": { label: "額外迴避", bucket: "primaryStats", statKey: "extraEvasion", isPct: false },
  "貫穿": { label: "貫穿", bucket: "basicCombatStats", statKey: "penetration", isPct: false },
  "前方攻擊力": { label: "前方攻擊力", bucket: "basicCombatStats", statKey: "frontAttack", isPct: false },
  "前方防禦力": { label: "前方防禦力", bucket: "basicCombatStats", statKey: "frontDefense", isPct: false },
  "前方傷害增幅": { label: "前方傷害增幅", bucket: "basicCombatAmpStats", statKey: "frontDamageAmp", isPct: true, scale: 0.01 },
  "後方攻擊力": { label: "後方攻擊力", bucket: "basicCombatStats", statKey: "backAttack", isPct: false },
  "後方暴擊抵抗": { label: "後方暴擊抵抗", bucket: "otherStats", statKey: "backCritResist", isPct: false },
  "所受治療量": { label: "所受治療量", bucket: "otherStats", statKey: "healingReceived", isPct: true, scale: 0.01 },
  "異常狀態擊中": { label: "異常狀態擊中", bucket: "abnormalStats", statKey: "statusHit", isPct: true, scale: 0.01 },
  "異常狀態抵抗": { label: "異常狀態抵抗", bucket: "abnormalStats", statKey: "pStatusResist", isPct: true, scale: 0.01 },
  "衝擊系擊中": { label: "衝擊系擊中", bucket: "abnormalStats", statKey: "shockHit", isPct: true, scale: 0.01 },
  "衝擊系抵抗": { label: "衝擊系抵抗", bucket: "abnormalStats", statKey: "shockResist", isPct: true, scale: 0.01 },
  "精神系擊中": { label: "精神系擊中", bucket: "abnormalStats", statKey: "spiritHit", isPct: true, scale: 0.01 },
  "精神系抵抗": { label: "精神系抵抗", bucket: "abnormalStats", statKey: "spiritResist", isPct: true, scale: 0.01 },
  "肉體系抵抗": { label: "肉體系抵抗", bucket: "abnormalStats", statKey: "bodyResist", isPct: true, scale: 0.01 },
  "屬性系擊中": { label: "屬性系擊中", bucket: "abnormalStats", statKey: "propertyHit", isPct: true, scale: 0.01 },
  "最大攻擊力": { label: "最大攻擊力", bucket: "primaryStats", statKey: "attack", isPct: false, scale: 0.5, note: "按平均攻擊力折算 50%" },
  "格擋": { label: "格擋", bucket: "otherStats", statKey: "block", isPct: false },
  "格擋貫穿": { label: "格擋貫穿", bucket: "otherStats", statKey: "blockPen", isPct: false },
  "鐵壁": { label: "鐵壁", bucket: "otherStats", statKey: "ironWall", isPct: true, scale: 0.01 },
  "暴擊攻擊力": { label: "暴擊攻擊力", bucket: "basicCombatStats", statKey: "criticalAttack", isPct: false },
  "再生": { label: "再生", bucket: "otherStats", statKey: "regen", isPct: true, scale: 0.01 },
  "生命力": { label: "生命力", bucket: "primaryStats", statKey: "hp", isPct: false },
  "精神力": { label: "精神力", bucket: "primaryStats", statKey: "mp", isPct: false },
  "戰鬥速度": { label: "戰鬥速度", bucket: "primaryStats", statKey: "combatSpeed", isPct: true, scale: 0.01 },
  "移動速度": { label: "移動速度", bucket: "primaryStats", statKey: "moveSpeed", isPct: true, scale: 0.01 },
  "飛行力": { label: "飛行力", bucket: "otherStats", statKey: "flightPower", isPct: false, scale: 0.01 },
  "最大行動力": { label: "最大行動力", bucket: "otherStats", statKey: "maxAction", isPct: false },
  "生命力自然恢復": { label: "生命力自然恢復", bucket: "otherStats", statKey: "hpRegen", isPct: false },
  "生命力藥水恢復率": { label: "生命力藥水恢復率", bucket: "otherStats", statKey: "hpPotionRate", isPct: true, scale: 0.01 },
  "生命力藥水恢復量": { label: "生命力藥水恢復量", bucket: "otherStats", statKey: "hpPotionRegen", isPct: false },
  "精神力自然恢復": { label: "精神力自然恢復", bucket: "otherStats", statKey: "mpRegen", isPct: false },
  "精神力消耗量減少": { label: "精神力消耗量減少", bucket: "otherStats", statKey: "mpCostReduce", isPct: true, scale: 0.01 },
  "冷卻時間減少": { label: "冷卻時間減少", bucket: "pctStats", statKey: "cooldownReduce", isPct: true, scale: 0.01 },
  "完美": { label: "完美", bucket: "otherStats", statKey: "perfect", isPct: true, scale: 0.01 }
};
const TITLE_STAT_KEY_MAP = {
  accuracy: "額外命中", additionalhitrate: "多段打擊擊中", additionalhitresistrate: "多段打擊抵抗", critical: "暴擊", criticalresist: "暴擊抵抗", hpmax: "生命力", mpmax: "精神力", defense: "防禦力", evasion: "額外迴避", combatspeed: "戰鬥速度", movespeed: "移動速度",
  pveadddamage: "PVE攻擊力", pvedamagedefense: "PVE防禦力", pveaccuracy: "PVE命中", pveevasion: "PVE迴避", pveamplifydamage: "PVE傷害增幅", pvedecreasedamage: "PVE傷害耐性",
  pvpadddamage: "PVP攻擊力", pvpdamagedefense: "PVP防禦力", pvpaccuracy: "PVP命中", pvpevasion: "PVP迴避", pvpcritical: "PVP暴擊", pvpcriticalresist: "PVP暴擊抵抗", pvpamplifydamage: "PVP傷害增幅", pvpdecreasedamage: "PVP傷害耐性",
  bossnpcamplifydamage: "首領傷害增幅", bossnpcdecreasedamage: "首領傷害耐性", bossnpcadddamage: "首領攻擊力", bossnpcdamagedefense: "首領防禦力",
  amplifyalldamage: "傷害增幅", decreasedamage: "傷害耐性", amplifyweapondamage: "武器傷害增幅", decreaseweapondamage: "武器傷害耐性", amplifycriticaldamage: "暴擊傷害增幅", decreasecriticaldamage: "暴擊傷害耐性", amplifybackattack: "後方傷害增幅", decreasebackattack: "後方傷害耐性", amplifyfrontattack: "前方傷害增幅", decreasefrontattack: "前方傷害耐性",
  backattackdamage: "後方攻擊力", backattackdefense: "後方防禦力", frontattackdamage: "前方攻擊力", frontattackdefense: "前方防禦力", frontattackcritical: "後方暴擊", frontattackcriticalresist: "後方暴擊抵抗", backattackcritical: "後方暴擊", backattackcriticalresist: "後方暴擊抵抗",
  defensepierce: "貫穿", sealstoneadddamage: "封魂石額外傷害", criticaladddamage: "暴擊攻擊力", criticaldamagedefense: "暴擊防禦力", block: "格擋", blockpierce: "格擋貫穿", ironwall: "鐵壁", hardhit: "強擊", hardhitresist: "強擊抵抗", perfect: "完美", perfectresist: "完美抵抗",
  flyspeed: "飛行力", spmax: "飛行力", spregen: "飛行力自然恢復", battlehpregen: "戰鬥中生命力自然恢復", battlempregen: "戰鬥中精神力自然恢復", battlespregen: "戰鬥中飛行力自然恢復", resthpregen: "休息中生命力自然恢復", restmpregen: "休息中精神力自然恢復", restspregen: "休息中飛行力自然恢復", weapondamage: "武器傷害", ignorerestoration: "再生貫穿", maxhpratio: "生命力增加", maxmpratio: "精神力增加", hpregen: "生命力自然恢復", hppotionrate: "生命力藥水恢復率", hppotionregen: "生命力藥水恢復量", mpregen: "精神力自然恢復", mpusedecrease: "精神力消耗量減少", cooltimedecrease: "冷卻時間減少", restoration: "再生", fixingdamage: "攻擊力"
};
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
  "Brooch1", "Brooch2",
  "Rune1", "Rune2",
];
const MOBILE_EQUIP_COLUMNS = [
  [
    { slot: "MainHand", label: "武器" },
    { slot: "Helmet", label: "頭盔" },
    { slot: "Torso", label: "上衣" },
    { slot: "Pants", label: "下裝" },
    { slot: "Cape", label: "披風" },
    { slot: "Earring1", label: "耳環" },
    { slot: "Necklace", label: "項鍊" },
    { slot: "Ring1", label: "戒指" },
    { slot: "Brooch1", label: "胸針" },
    { slot: "Rune1", label: "古文石" },
  ],
  [
    { slot: "SubHand", label: "臂甲" },
    { slot: "Shoulder", label: "肩甲" },
    { slot: "Belt", label: "腰帶" },
    { slot: "Gloves", label: "手套" },
    { slot: "Boots", label: "鞋子" },
    { slot: "Earring2", label: "耳環" },
    { slot: "Amulet", label: "護身符" },
    { slot: "Ring2", label: "戒指" },
    { slot: "Brooch2", label: "胸針" },
    { slot: "Rune2", label: "古文石" },
  ],
];
const NO_STONE_SLOTS = new Set(["Rune1", "Rune2", "Amulet", "Pendant"]);
const LOWER_EQUIP_SLOTS = new Set(["Pendant"]);
const TRAD_MAP = {
  剑: "劍", 杀: "殺", 灵: "靈", 护: "護", 治: "治", 魔: "魔", 道: "道",
  星: "星", 龙: "龍", 龙王: "龍王", 闪: "閃", 耀: "耀", 无: "無",
  名: "名", 烟: "煙", 雨: "雨", 墨: "墨", 白: "白", 杰: "傑",
  优: "優", 战: "戰", 斗: "鬥", 圣: "聖", 谕: "諭", 宝: "寶",
  儿: "兒", 云: "雲", 风: "風", 雪: "雪", 双: "雙", 飞: "飛",
  头: "頭", 体: "體", 强: "強", 击: "擊", 净: "淨", 深: "深",
  渊: "淵", 装: "裝", 备: "備", 术: "術", 称: "稱", 号: "號",
  复: "復", 查: "查", 询: "詢", 结: "結", 果: "果",
  绝: "絕", 孙: "孫", 劳: "勞",
};
let simpleToTraditionalMap = { ...TRAD_MAP };
let traditionalToSimpleMap = Object.fromEntries(Object.entries(simpleToTraditionalMap).map(([simple, traditional]) => [traditional, simple]));

const state = {
  race: 0,
  serverId: 0,
  results: [],
  hasSearched: false,
  searchToken: 0,
  selectedId: "",
  selectedChar: null,
  selectedDetail: null,
  selectedAttack: null,
  detailTab: "equipment",
  history: [],
  favorites: [],
  loading: false,
  detailLoading: false,
  snapshotTab: null,
  snapshots: {},
  mobileIconMode: false,
  petSimulator: loadPetSimulatorConfig(),
  wingBonusEnabled: loadWingBonusEnabled(),
  selectedWingIds: loadSelectedWingIds(),
  wingLevels: loadWingLevels(),
  wingSelectionInitialized: hasSavedWingSelection(),
  wardrobeBonusEnabled: loadWardrobeBonusEnabled(),
  wardrobeConfig: loadWardrobeConfig(),
  wardrobeUndoStack: [],
  wardrobeActiveUndo: null,
  titleBonusEnabled: loadTitleBonusEnabled(),
  selectedTitleIds: loadSelectedTitleIds(),
  titleSelectionInitialized: hasSavedTitleSelection(),
  activeTitleCategory: "attack",
  activeTitleRace: "light",
  titleSearchKeyword: "",
  titleSearchFocused: false,
  titleSearchCursor: 0,
  titleSearchComposing: false,
  titleHoldingSummaryCollapsed: true,
  wingBonusCatalog: null,
  titleCatalog: null,
  view: viewFromHash(location.hash),
  ranking: {
    activeType: "abyss",
    race: 1,
    serverId: 1001,
    classId: "0",
    keyword: "",
    rows: [],
    season: null,
    loading: false,
    error: "",
    officialEmpty: false,
  },
};

let wingEffectCatalogPromise = null;
let wingBonusCatalogPromise = null;
let titleCatalogPromise = null;
let s2tMapPromise = null;
let resultsCollapsed = false;
let lastDetailLoadTime = 0;
const DETAIL_COOLDOWN_MS = 5000;

function refreshIcons() {
  if (!window.lucide || typeof window.lucide.createIcons !== "function") return;
  window.lucide.createIcons();
}

function hideFloatingTooltip() {
  document.querySelector(".floating-tooltip")?.remove();
}

function showFloatingTooltip(anchor, text) {
  hideFloatingTooltip();
  const content = String(text || "").trim();
  if (!anchor || !content) return;
  const tooltip = document.createElement("div");
  tooltip.className = "floating-tooltip";
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length > 18) {
    const maxRows = Math.max(12, Math.floor((window.innerHeight - 48) / 22));
    const columnCount = Math.min(4, Math.ceil(lines.length / maxRows));
    const rowCount = Math.ceil(lines.length / columnCount);
    tooltip.classList.add("is-long");
    tooltip.style.setProperty("--tooltip-rows", String(rowCount));
    tooltip.innerHTML = lines.map((line) => `<span>${html(line)}</span>`).join("");
  } else {
    tooltip.textContent = content;
  }
  document.body.appendChild(tooltip);

  const gap = 8;
  const margin = 10;
  const anchorRect = anchor.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const availableTop = anchorRect.top - margin;
  const availableBottom = window.innerHeight - anchorRect.bottom - margin;
  const placeBottom = availableBottom >= tooltipRect.height || availableBottom > availableTop;
  let top = placeBottom ? anchorRect.bottom + gap : anchorRect.top - tooltipRect.height - gap;
  let left = anchorRect.left;
  left = Math.min(Math.max(left, margin), window.innerWidth - tooltipRect.width - margin);
  top = Math.min(Math.max(top, margin), window.innerHeight - tooltipRect.height - margin);
  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;
  tooltip.dataset.placement = placeBottom ? "bottom" : "top";
}

function updateBackToTopVisibility() {
  if (!els.backToTopBtn) return;
  const show = window.scrollY > 360;
  els.backToTopBtn.classList.toggle("visible", show);
}

function setCollapseButtonIcon() {
  if (!els.collapseResultsBtn) return;
  els.collapseResultsBtn.innerHTML = `<i data-lucide="${resultsCollapsed ? "panel-left-open" : "panel-left-close"}" aria-hidden="true"></i>`;
  els.collapseResultsBtn.title = resultsCollapsed ? "展開搜索結果" : "收起搜索結果";
  refreshIcons();
}

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
  setCollapseButtonIcon();

  if (collapse) {
    gsap.timeline()
      .to(innerEls, { autoAlpha: 0, duration: 0.14, ease: "power1.in" })
      .set(innerEls, { display: "none" })
      .to(panel, { width: 44, duration: 0.38, ease: "power3.inOut" }, "-=0.04")
      .call(() => { if (detailSide) detailSide.classList.add("visible"); });
  } else {
    if (detailSide) detailSide.classList.remove("visible");
    gsap.timeline()
      .set(innerEls, { display: "" })
      .to(panel, { width: 430, duration: 0.38, ease: "power3.inOut", delay: 0.06 })
      .to(innerEls, { autoAlpha: 1, duration: 0.2, ease: "power1.out" }, "-=0.1");
  }
}

function resetSearchPageLayout() {
  resultsCollapsed = false;
  if (els.contentGrid) els.contentGrid.classList.remove("results-collapsed");
  const panel = els.resultsPanel;
  if (panel) panel.style.width = "";
  [
    panel && panel.querySelector(".panel-head h3"),
    panel && panel.querySelector("#resultCount"),
    els.historyPanel,
    els.resultsList,
  ].filter(Boolean).forEach((el) => {
    el.style.display = "";
    el.style.opacity = "";
    el.style.visibility = "";
  });
  document.querySelectorAll(".detail-side.visible").forEach((el) => el.classList.remove("visible"));
  setCollapseButtonIcon();
}

const els = {
  body: document.body,
  raceTabs: document.querySelector("#raceTabs"),
  serverSelect: document.querySelector("#serverSelect"),
  keywordInput: document.querySelector("#keywordInput"),
  convertButton: document.querySelector("#convertButton"),
  resetSearchButton: document.querySelector("#resetSearchButton"),
  searchButton: document.querySelector("#searchButton"),
  historyPanel: document.querySelector("#historyPanel"),
  resultsList: document.querySelector("#resultsList"),
  resultCount: document.querySelector("#resultCount"),
  resultsPanelHead: document.querySelector("#resultsPanelHead"),
  clearResultsBtn: document.querySelector("#clearResultsBtn"),
  detailPanel: document.querySelector("#detailPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  contentGrid: document.querySelector(".content-grid"),
  collapseResultsBtn: document.querySelector("#collapseResultsBtn"),
  viewEyebrow: document.querySelector("#viewEyebrow"),
  viewTitle: document.querySelector("#viewTitle"),
  globalBreadcrumb: document.querySelector("#globalBreadcrumb"),
  statusText: document.querySelector("#statusText"),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  themeLabel: document.querySelector("#themeLabel"),
  navCharacter: document.querySelector("#navCharacter"),
  navRanking: document.querySelector("#navRanking"),
  navSimulationGroup: document.querySelector("#navSimulationGroup"),
  navWings: document.querySelector("#navWings"),
  navPetInsight: document.querySelector("#navPetInsight"),
  navWardrobe: document.querySelector("#navWardrobe"),
  navTitles: document.querySelector("#navTitles"),
  characterDetailView: document.querySelector("#characterDetailView"),
  rankingView: document.querySelector("#rankingView"),
  wingSimulatorView: document.querySelector("#wingSimulatorView"),
  petInsightView: document.querySelector("#petInsightView"),
  wardrobeView: document.querySelector("#wardrobeView"),
  titleSimulatorView: document.querySelector("#titleSimulatorView"),
  wingCatalogList: document.querySelector("#wingCatalogList"),
  wingSelectionCount: document.querySelector("#wingSelectionCount"),
  selectAllWingsBtn: document.querySelector("#selectAllWingsBtn"),
  clearWingsBtn: document.querySelector("#clearWingsBtn"),
  petInsightContent: document.querySelector("#petInsightContent"),
  wardrobeContent: document.querySelector("#wardrobeContent"),
  titleCatalogList: document.querySelector("#titleCatalogList"),
  titleSelectionCount: document.querySelector("#titleSelectionCount"),
  selectAllTitlesBtn: document.querySelector("#selectAllTitlesBtn"),
  clearTitlesBtn: document.querySelector("#clearTitlesBtn"),
  rankingTabs: document.querySelector("#rankingTabs"),
  rankingStatus: document.querySelector("#rankingStatus"),
  rankingRaceSelect: document.querySelector("#rankingRaceSelect"),
  rankingServerSelect: document.querySelector("#rankingServerSelect"),
  rankingClassSelect: document.querySelector("#rankingClassSelect"),
  rankingKeywordInput: document.querySelector("#rankingKeywordInput"),
  rankingSearchButton: document.querySelector("#rankingSearchButton"),
  rankingTableBody: document.querySelector("#rankingTableBody"),
  backToTopBtn: document.querySelector("#backToTopBtn"),
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
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

function serverByNameHint(value) {
  const hint = stripHtml(value || "").trim();
  if (!hint) return null;
  return allServers().find((server) => {
    const name = server.serverName || "";
    return name === hint || name.startsWith(hint) || hint.startsWith(name);
  }) || null;
}

function parseKeywordServerHint(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(.+?)\[([^\]]+)\]$/);
  if (!match) return { keyword: text, server: null };
  return {
    keyword: match[1].trim(),
    server: serverByNameHint(match[2]),
  };
}

function setStatus(text) {
  els.statusText.textContent = text;
}

function viewHash(view) {
  return view === "ranking" ? "#ranking"
    : view === "wings" ? "#wings"
      : view === "petInsight" ? "#pet-insight"
        : view === "titles" ? "#titles"
          : view === "wardrobe" ? "#wardrobe"
            : view === "characterDetail" ? "#character-detail"
            : "#characters";
}

function viewFromHash(hash) {
  if (hash === "#ranking") return "ranking";
  if (hash === "#wings" || hash === "#wing-simulator") return "wings";
  if (hash === "#pet-insight") return "petInsight";
  if (hash === "#titles" || hash === "#title-simulator") return "titles";
  if (hash === "#wardrobe") return "wardrobe";
  if (hash === "#character-detail" || hash === "#characterDetail") return "characterDetail";
  return "characters";
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

async function loadS2TMap() {
  if (!s2tMapPromise) {
    s2tMapPromise = fetch("/data/s2t-map.json", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        const map = data && data.simpleToTraditional && typeof data.simpleToTraditional === "object" ? data.simpleToTraditional : null;
        if (map) {
          simpleToTraditionalMap = { ...simpleToTraditionalMap, ...map };
          traditionalToSimpleMap = Object.fromEntries(Object.entries(simpleToTraditionalMap).map(([simple, traditional]) => [traditional, simple]));
        }
        return simpleToTraditionalMap;
      })
      .catch(() => simpleToTraditionalMap);
  }
  return s2tMapPromise;
}

function toTraditional(value) {
  return String(value || "").split("").map((char) => simpleToTraditionalMap[char] || char).join("");
}

function toSimplified(value) {
  return String(value || "").split("").map((char) => traditionalToSimpleMap[char] || char).join("");
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

function loadFavorites() {
  try {
    const raw = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    state.favorites = Array.isArray(raw) ? raw.slice(0, 20) : [];
  } catch (_) {
    state.favorites = [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites.slice(0, 20)));
}

function toStoredCharacter(char) {
  return {
    characterId: char.characterId,
    characterName: char.characterName,
    serverId: char.serverId,
    serverName: char.serverName || serverName(char.serverId),
    className: char.className,
    race: char.race,
    level: char.level,
    profileImage: char.profileImage || char.avatar || char.image || "",
    combatPower: char.combatPower || "",
  };
}

function isFavoriteCharacter(characterId) {
  return state.favorites.some((item) => item.characterId === characterId);
}

function toggleFavoriteCharacter(char) {
  if (!char || !char.characterId) return;
  if (isFavoriteCharacter(char.characterId)) {
    state.favorites = state.favorites.filter((item) => item.characterId !== char.characterId);
  } else {
    state.favorites = [{ ...toStoredCharacter(char), savedAt: Date.now() }]
      .concat(state.favorites.filter((item) => item.characterId !== char.characterId))
      .slice(0, 20);
  }
  saveFavorites();
  renderHistory();
  renderResults();
  refreshIcons();
}

function pushHistory(char) {
  const item = { ...toStoredCharacter(char), savedAt: Date.now() };
  state.history = [item].concat(state.history.filter((h) => h.characterId !== item.characterId)).slice(0, 10);
  saveHistory();
  renderHistory();
}

function renderMiniCharacterCard(item, index, type) {
  const favorited = isFavoriteCharacter(item.characterId);
  const raceLabel = item.race === 1 ? "天" : item.race === 2 ? "魔" : "?";
  const serverText = `${raceLabel}${item.serverName ? ` · ${item.serverName}` : ""}`;
  return `
    <div class="history-card race-${item.race}">
      <button type="button" class="history-chip" data-${type}-index="${index}" title="查看角色">
        <span class="history-avatar">
          ${item.profileImage ? `<img src="${html(item.profileImage)}" alt="" />` : `<b>${html(raceLabel)}</b>`}
        </span>
        <span class="history-info">
          <strong>${html(item.characterName)}</strong>
          <small>${html(serverText)}${item.level ? ` · Lv.${html(item.level)}` : ""}</small>
          <em>戰力 ${html(item.combatPower ? formatKm(item.combatPower) : "-")}</em>
        </span>
      </button>
      <button type="button" class="favorite-button ${favorited ? "active" : ""}" data-favorite-${type}-index="${index}" title="${favorited ? "取消收藏" : "收藏角色"}" aria-label="${favorited ? "取消收藏" : "收藏角色"}">
        <i data-lucide="star" aria-hidden="true"></i>
      </button>
    </div>
  `;
}

function renderHistory() {
  if (!state.history.length && !state.favorites.length) {
    els.historyPanel.innerHTML = "";
    return;
  }
  els.historyPanel.innerHTML = `
    ${state.favorites.length ? `
      <div class="history-head">
        <span>收藏角色</span>
      </div>
      <div class="history-list">
        ${state.favorites.map((item, index) => renderMiniCharacterCard(item, index, "favorite")).join("")}
      </div>
    ` : ""}
    ${state.history.length ? `
      <div class="history-head">
        <span>查詢歷史</span>
        <button type="button" data-history-clear>清空</button>
      </div>
      <div class="history-list">
        ${state.history.map((item, index) => renderMiniCharacterCard(item, index, "history")).join("")}
      </div>
    ` : ""}
  `;
  refreshIcons();
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

function setView(view) {
  state.view = view === "ranking" ? "ranking"
    : view === "wings" ? "wings"
      : view === "petInsight" ? "petInsight"
        : view === "titles" ? "titles"
          : view === "wardrobe" ? "wardrobe"
            : view === "characterDetail" ? "characterDetail"
            : "characters";
  const isSimulationView = ["wings", "petInsight", "titles", "wardrobe"].includes(state.view);
  document.querySelectorAll(".character-search-view").forEach((el) => { el.hidden = state.view !== "characters"; });
  if (els.characterDetailView) els.characterDetailView.hidden = state.view !== "characterDetail";
  if (els.rankingView) els.rankingView.hidden = state.view !== "ranking";
  if (els.wingSimulatorView) els.wingSimulatorView.hidden = state.view !== "wings";
  if (els.petInsightView) els.petInsightView.hidden = state.view !== "petInsight";
  if (els.wardrobeView) els.wardrobeView.hidden = state.view !== "wardrobe";
  if (els.titleSimulatorView) els.titleSimulatorView.hidden = state.view !== "titles";
  els.navCharacter.classList.toggle("active", state.view === "characters" || state.view === "characterDetail");
  els.navRanking.classList.toggle("active", state.view === "ranking");
  if (els.navSimulationGroup) els.navSimulationGroup.open = isSimulationView || els.navSimulationGroup.open;
  if (els.navWings) els.navWings.classList.toggle("active", state.view === "wings");
  if (els.navPetInsight) els.navPetInsight.classList.toggle("active", state.view === "petInsight");
  if (els.navWardrobe) els.navWardrobe.classList.toggle("active", state.view === "wardrobe");
  if (els.navTitles) els.navTitles.classList.toggle("active", state.view === "titles");
  if (els.viewEyebrow) els.viewEyebrow.textContent = state.view === "ranking" ? "Official Ranking" : isSimulationView ? "Data Simulation" : state.view === "characterDetail" ? "Character Detail" : "Character Search";
  if (els.viewTitle) {
    els.viewTitle.textContent = state.view === "ranking" ? "排名"
      : state.view === "wings" ? "翅膀"
        : state.view === "petInsight" ? "寵物理解度"
          : state.view === "titles" ? "稱號"
            : state.view === "wardrobe" ? "衣櫃"
              : state.view === "characterDetail" ? "角色詳情"
              : "角色查詢";
  }
  if (els.globalBreadcrumb) {
    if (state.view === "characterDetail") {
      els.globalBreadcrumb.hidden = false;
      els.globalBreadcrumb.innerHTML = `
        <button type="button" data-back-to-search>角色查詢</button>
        <span>/</span>
        <strong>角色詳情</strong>
      `;
    } else {
      els.globalBreadcrumb.hidden = true;
      els.globalBreadcrumb.innerHTML = "";
    }
  }
  if (location.hash !== viewHash(state.view)) history.replaceState(null, "", viewHash(state.view));
  setStatus(state.view === "ranking" ? "查看排名" : state.view === "wings" ? "選擇翅膀" : state.view === "petInsight" ? "待補充" : state.view === "titles" ? "選擇稱號" : state.view === "wardrobe" ? "待補充" : state.view === "characterDetail" ? "角色詳情" : "待查詢");
  if (state.view === "characters") resetSearchPageLayout();
  if (state.view === "ranking" && !state.ranking.rows.length && !state.ranking.loading) loadRanking();
  if (state.view === "wings") {
    loadWingBonusCatalog().then(() => renderWingSimulator());
  }
  if (state.view === "petInsight") {
    renderPetInsightSimulator();
  }
  if (state.view === "wardrobe") {
    renderWardrobeView();
  }
  if (state.view === "titles") {
    loadTitleCatalog().then(() => renderTitleSimulator());
  }
}

function renderRankingControls() {
  if (!els.rankingTabs) return;
  els.rankingTabs.innerHTML = RANKING_TYPES.map((type) => `
    <button type="button" class="${state.ranking.activeType === type.key ? "active" : ""}" data-ranking-type="${html(type.key)}">
      ${html(type.label)}
    </button>
  `).join("");
  state.ranking.race = Number(state.ranking.serverId) >= 2000 ? 2 : 1;
  const rankingServers = state.ranking.race === 2 ? DEMON_SERVERS : ANGEL_SERVERS;
  if (!rankingServers.some((server) => Number(server.serverId) === Number(state.ranking.serverId))) {
    state.ranking.serverId = rankingServers[0] ? rankingServers[0].serverId : state.ranking.serverId;
  }
  els.rankingRaceSelect.value = String(state.ranking.race);
  els.rankingServerSelect.innerHTML = rankingServers.map((server) => `
    <option value="${server.serverId}">${server.serverName}</option>
  `).join("");
  els.rankingServerSelect.value = String(state.ranking.serverId);
  els.rankingClassSelect.innerHTML = CLASS_OPTIONS.map((job) => `<option value="${html(job.id)}">${html(job.label)}</option>`).join("");
  els.rankingClassSelect.value = state.ranking.classId;
  els.rankingKeywordInput.value = state.ranking.keyword;
}

function wingStatText(stat) {
  const option = WING_BONUS_EFFECT_OPTIONS[stat.effect] || WING_BONUS_EFFECT_OPTIONS[stat.key];
  const value = option ? wingBonusValue(stat, option) : toNum(String(stat.value || "").replace("%", ""));
  const rounded = Math.round(value * 10) / 10;
  return `${stat.effect || stat.key} ${rounded > 0 ? "+" : ""}${rounded}${option && option.isPct ? "%" : ""}`;
}

function renderWingStatRow(label, stats, className) {
  const content = stats.length
    ? stats.map((stat) => `<span>${html(wingStatText(stat))}</span>`).join("")
    : `<span>-</span>`;
  return `
    <div class="wing-stat-row ${className}">
      <b>${html(label)}</b>
      <div>${content}</div>
    </div>
  `;
}

function renderPetInsightSimulator() {
  if (!els.petInsightContent) return;
  els.petInsightContent.innerHTML = `
    <div class="wing-sim-head">
      <div>
        <h3>寵物理解度</h3>
        <p>調整寵物盤模板；PVE 戰鬥面板開啟寵物後，會套用這裡保存的數據。</p>
      </div>
    </div>
    ${renderPetSimulatorEditor()}
  `;
}

function wardrobeValue(key) {
  const category = WARDROBE_CATEGORIES.find((item) => item.key === key);
  const max = category ? category.max : 0;
  return clampInt((state.wardrobeConfig || {})[key], 0, max);
}

function wardrobePartKey(category, part) {
  return `${category.key}:${part.key}`;
}

function wardrobePartValue(category, part) {
  const key = wardrobePartKey(category, part);
  const saved = (state.wardrobeConfig || {})[key];
  return clampInt(saved === undefined ? wardrobeValue(category.key) : saved, 0, category.max);
}

function wardrobeCategoryAverageValue(category) {
  const parts = category.parts && category.parts.length ? category.parts : [{ key: category.key }];
  const total = parts.reduce((sum, part) => sum + wardrobePartValue(category, part), 0);
  return parts.length ? total / parts.length : 0;
}

function wardrobePercent(category, stat, part = null) {
  if (!category || !stat) return 0;
  const value = part ? wardrobePartValue(category, part) : wardrobeCategoryAverageValue(category);
  return value / category.max * stat.value;
}

function formatWardrobePct(value) {
  return `${Math.round(toNum(value) * 10) / 10}%`;
}

function wardrobeCollectionPercent(category) {
  const parts = category.parts && category.parts.length ? category.parts : [{ key: category.key }];
  const ratios = parts.map((part) => {
    const value = wardrobePartValue(category, part);
    return category.max ? value / category.max : 0;
  });
  const average = ratios.length ? ratios.reduce((sum, value) => sum + value, 0) / ratios.length : 0;
  return Math.max(0, Math.min(100, average * 100));
}

function renderWardrobeCollectionRings() {
  return `
    <div class="wardrobe-collection">
      ${WARDROBE_CATEGORIES.map((category) => {
        const percent = Math.round(wardrobeCollectionPercent(category) * 10) / 10;
        return `
          <div class="wardrobe-ring-card">
            <div class="wardrobe-ring" style="--value:${html(percent)}" data-wardrobe-ring="${html(category.key)}">
              <span>${html(percent)}%</span>
            </div>
            <strong>${html(category.label)}</strong>
            <small>${html(category.key === "weapon" ? "單項收集度" : "部位平均收集度")}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function wardrobeRuleText(category, stat) {
  return `${stat.label} × ${formatWardrobePct(wardrobePercent(category, stat))}`;
}

function renderWardrobePartControl(category, part) {
  const value = wardrobePartValue(category, part);
  const percent = category.max ? value / category.max * 100 : 0;
  return `
    <div class="wardrobe-part-row">
      <div class="wardrobe-part-meta">
        <span>${html(part.label)}</span>
        <strong class="wardrobe-part-value">${html(value)}/${html(category.max)}P</strong>
      </div>
      <input class="wardrobe-range" style="--range-percent:${html(percent)}%" type="range" min="0" max="${html(category.max)}" step="1" value="${html(value)}" data-wardrobe-part-range="${html(wardrobePartKey(category, part))}" />
    </div>
  `;
}

function renderWardrobeBulkControl(category) {
  if (category.key === "weapon") return "";
  const value = Math.round(wardrobeCategoryAverageValue(category));
  const percent = category.max ? value / category.max * 100 : 0;
  return `
    <div class="wardrobe-bulk-row">
      <div class="wardrobe-part-meta">
        <span>整體收集度</span>
        <strong class="wardrobe-bulk-value">${html(value)}/${html(category.max)}P</strong>
      </div>
      <input class="wardrobe-range wardrobe-bulk-range" style="--range-percent:${html(percent)}%" type="range" min="0" max="${html(category.max)}" step="1" value="${html(value)}" data-wardrobe-bulk-range="${html(category.key)}" />
    </div>
  `;
}

function renderWardrobeSummary() {
  return `
    <div class="wardrobe-summary">
      ${WARDROBE_CATEGORIES.map((category) => {
        const value = Math.round(wardrobeCategoryAverageValue(category) * 10) / 10;
        return `
          <span class="wardrobe-summary-chip wardrobe-summary-${html(category.key)}" data-wardrobe-summary="${html(category.key)}">
            <b data-wardrobe-summary-average>${html(category.label)}平均 ${html(value)}/${html(category.max)}P</b>
            <span class="wardrobe-summary-effects" data-wardrobe-summary-effects>
              ${category.stats.map((stat) => `
                <i>${html(stat.label)}</i>
                <strong>× ${html(formatWardrobePct(wardrobePercent(category, stat)))}</strong>
              `).join("")}
            </span>
          </span>
        `;
      }).join("")}
    </div>
  `;
}

function wardrobeDisplayAverage(category) {
  return Math.round(wardrobeCategoryAverageValue(category) * 10) / 10;
}

function wardrobeDisplayPercent(category) {
  return Math.round(wardrobeCollectionPercent(category) * 10) / 10;
}

function wardrobeSummaryEffectsHtml(category) {
  return category.stats.map((stat) => `
    <i>${html(stat.label)}</i>
    <strong>× ${html(formatWardrobePct(wardrobePercent(category, stat)))}</strong>
  `).join("");
}

function updateWardrobeLiveDisplays(category = null) {
  const root = els.wardrobeContent || document;
  const categories = category ? [category] : WARDROBE_CATEGORIES;
  categories.forEach((item) => {
    const average = wardrobeDisplayAverage(item);
    const percent = wardrobeDisplayPercent(item);
    const ring = root.querySelector(`[data-wardrobe-ring="${item.key}"]`);
    if (ring) {
      ring.style.setProperty("--value", percent);
      const ringValue = ring.querySelector("span");
      if (ringValue) ringValue.textContent = `${percent}%`;
    }
    const cardAverage = root.querySelector(`[data-wardrobe-average="${item.key}"]`);
    if (cardAverage) cardAverage.textContent = `平均 ${average}P`;
    const summary = root.querySelector(`[data-wardrobe-summary="${item.key}"]`);
    if (summary) {
      const summaryAverage = summary.querySelector("[data-wardrobe-summary-average]");
      if (summaryAverage) summaryAverage.textContent = `${item.label}平均 ${average}/${item.max}P`;
      const summaryEffects = summary.querySelector("[data-wardrobe-summary-effects]");
      if (summaryEffects) summaryEffects.innerHTML = wardrobeSummaryEffectsHtml(item);
    }
  });
}

function renderWardrobeView() {
  if (!els.wardrobeContent) return;
  els.wardrobeContent.innerHTML = `
    <div class="wing-sim-head">
      <div>
        <h3>衣櫃</h3>
        <p>設定三類衣櫃分數；PVE 戰鬥面板開啟衣櫃後，會按裝備基礎能力折算為固定數值。</p>
      </div>
      <div class="wing-sim-actions">
        <button type="button" data-wardrobe-max>滿分</button>
        <button type="button" data-wardrobe-reset>重置</button>
      </div>
    </div>
    ${renderWardrobeCollectionRings()}
    ${renderWardrobeSummary()}
    <div class="wardrobe-grid">
      ${WARDROBE_CATEGORIES.map((category) => {
        const average = wardrobeDisplayAverage(category);
        return `
          <article class="wardrobe-card">
            <div class="wardrobe-card-head">
              <div>
                <h4>${html(category.label)}</h4>
                <small>${html(category.source)}</small>
              </div>
              <strong class="wardrobe-average-value" data-wardrobe-average="${html(category.key)}">平均 ${html(average)}P</strong>
            </div>
            ${renderWardrobeBulkControl(category)}
            <div class="wardrobe-part-list">
              ${(category.parts || [{ key: category.key, label: category.label }]).map((part) => renderWardrobePartControl(category, part)).join("")}
            </div>
            <div class="wardrobe-effects">
              ${category.stats.map((stat) => `<span>${html(wardrobeRuleText(category, stat))}</span>`).join("")}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderWingSimulator() {
  if (!els.wingCatalogList) return;
  const rows = wingCatalogRows();
  ensureDefaultWingSelection();
  const selected = selectedWingSet();
  if (els.wingSelectionCount) els.wingSelectionCount.textContent = `${selected.size} / ${rows.length}`;
  if (!rows.length) {
    els.wingCatalogList.innerHTML = loadingMarkup("翅膀資料載入中", "正在讀取本地翅膀資料表。");
    return;
  }
  els.wingCatalogList.innerHTML = rows.map((wing) => {
    const id = wingId(wing);
    const checked = selected.has(id);
    const level = wingLevel(id, wing);
    const holdingStats = wingHoldingStats(wing, level);
    const enchantStats = wingEnchantStats(wing, level);
    const levelOptions = Array.from({ length: (Number(wing.maxLevel) || 10) + 1 }, (_, index) => `
      <option value="${index}" ${index === level ? "selected" : ""}>+${index}</option>
    `).join("");
    return `
      <article class="wing-card${checked ? " selected" : ""}">
        <img class="wing-icon" src="${html(wing.icon || "")}" alt="" />
        <div class="wing-info">
          <div class="wing-title">
            <strong>${html(wing.name)}</strong>
            <select class="wing-level-select" data-wing-level="${html(id)}" aria-label="${html(wing.name)} 強化等級">
              ${levelOptions}
            </select>
          </div>
        </div>
        <label class="wing-check">
          <input type="checkbox" data-wing-select="${html(id)}" ${checked ? "checked" : ""} />
          <span></span>
        </label>
        <div class="wing-stats">
          ${renderWingStatRow("持有效果", holdingStats, "wing-stat-row--base")}
          ${renderWingStatRow(`強化效果 +${level}`, enchantStats, "wing-stat-row--enchant")}
        </div>
      </article>
    `;
  }).join("");
}


function titleId(row) {
  return String(row && (row.titleId || row.id || row.name) || "");
}

async function loadTitleCatalog() {
  if (!titleCatalogPromise) {
    titleCatalogPromise = fetch("/data/title-catalog.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { titles: [] }))
      .catch(() => ({ titles: [] }));
  }
  state.titleCatalog = await titleCatalogPromise;
  ensureDefaultTitleSelection();
  return state.titleCatalog;
}

function titleCatalogRows() {
  return ((state.titleCatalog || {}).titles || []).filter(Boolean);
}

async function ensureTitleCatalogReady() {
  if (!state.titleBonusEnabled || state.titleCatalog) return;
  await loadTitleCatalog();
}

function selectedTitleSet() {
  return new Set((state.selectedTitleIds || []).map(String));
}

function ensureDefaultTitleSelection() {
  if (state.titleSelectionInitialized) return;
  state.selectedTitleIds = [];
  state.titleSelectionInitialized = true;
  saveSelectedTitleIds();
}

function titleRaceLabel(race) {
  return { light: "天族", dark: "魔族", all: "通用" }[String(race || "").toLowerCase()] || "通用";
}

function titleRaceKey(row) {
  const race = String((row && row.race) || "all").toLowerCase();
  return race === "light" || race === "dark" ? race : "all";
}

function titleRaceFilterLabel(race) {
  return { all: "全部", light: "天族", dark: "魔族" }[String(race || "all").toLowerCase()] || "全部";
}

function titleVisibleByRace(row, race) {
  const filter = String(race || "all").toLowerCase();
  if (filter === "all") return true;
  const rowRace = titleRaceKey(row);
  return rowRace === "all" || rowRace === filter;
}

function titleCountRaceScope(activeRace, selectedIds = selectedTitleSet()) {
  const race = String(activeRace || "all").toLowerCase();
  if (race === "light" || race === "dark") return race;
  return selectedTitleRace(selectedIds) || "light";
}

function titleRowsForCountScope(rows, race) {
  return rows.filter((row) => titleVisibleByRace(row, race));
}

function selectedTitleRace(selectedIds) {
  const ids = selectedIds || selectedTitleSet();
  const selectedRows = titleCatalogRows().filter((row) => ids.has(titleId(row)));
  const hasLight = selectedRows.some((row) => titleRaceKey(row) === "light");
  const hasDark = selectedRows.some((row) => titleRaceKey(row) === "dark");
  if (hasLight && !hasDark) return "light";
  if (hasDark && !hasLight) return "dark";
  return "";
}

function selectedOppositeTitleRace(selectedIds, nextRace) {
  const race = String(nextRace || "").toLowerCase();
  if (race !== "light" && race !== "dark") return "";
  const opposite = race === "light" ? "dark" : "light";
  const ids = selectedIds || selectedTitleSet();
  return titleCatalogRows().some((row) => titleRaceKey(row) === opposite && ids.has(titleId(row))) ? opposite : "";
}

function clearSelectedTitleRace(ids, race) {
  const targetRace = String(race || "").toLowerCase();
  if (targetRace !== "light" && targetRace !== "dark") return ids;
  titleCatalogRows().forEach((row) => {
    if (titleRaceKey(row) === targetRace) ids.delete(titleId(row));
  });
  return ids;
}

function clearCommonSelectedTitles(ids) {
  titleCatalogRows().forEach((row) => {
    if (titleRaceKey(row) === "all") ids.delete(titleId(row));
  });
  return ids;
}

function showAppConfirm({ title = "確認操作", message = "", confirmLabel = "繼續", cancelLabel = "取消" } = {}) {
  return new Promise((resolve) => {
    document.querySelector(".app-confirm-backdrop")?.remove();
    const backdrop = document.createElement("div");
    backdrop.className = "app-confirm-backdrop";
    backdrop.innerHTML = `
      <section class="app-confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="appConfirmTitle">
        <button type="button" class="app-confirm-close" data-confirm-cancel aria-label="關閉">
          <i data-lucide="x" aria-hidden="true"></i>
        </button>
        <div class="app-confirm-icon">
          <i data-lucide="triangle-alert" aria-hidden="true"></i>
        </div>
        <div class="app-confirm-content">
          <h3 id="appConfirmTitle">${html(title)}</h3>
          <p>${html(message)}</p>
        </div>
        <div class="app-confirm-actions">
          <button type="button" class="secondary-button app-confirm-cancel" data-confirm-cancel>${html(cancelLabel)}</button>
          <button type="button" class="primary-button app-confirm-submit" data-confirm-ok>${html(confirmLabel)}</button>
        </div>
      </section>
    `;

    const finish = (result) => {
      document.removeEventListener("keydown", onKeyDown);
      backdrop.remove();
      resolve(result);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") finish(false);
      if (event.key === "Enter") finish(true);
    };

    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop || event.target.closest("[data-confirm-cancel]")) finish(false);
      if (event.target.closest("[data-confirm-ok]")) finish(true);
    });

    document.body.appendChild(backdrop);
    refreshIcons();
    document.addEventListener("keydown", onKeyDown);
    backdrop.querySelector("[data-confirm-ok]")?.focus();
  });
}

function confirmTitleRaceSwitch(nextRace, currentRace) {
  if (!nextRace || !currentRace || nextRace === currentRace) return Promise.resolve(true);
  return showAppConfirm({
    title: "切換稱號陣營",
    message: `當前已選中${titleRaceLabel(currentRace)}稱號，勾選${titleRaceLabel(nextRace)}稱號後會清空${titleRaceLabel(currentRace)}目前勾選內容。是否繼續？`,
    confirmLabel: "繼續",
    cancelLabel: "取消",
  });
}

function titleCategoryLabelLocal(category) {
  const key = String(category || "").toLowerCase();
  return { attack: "攻擊稱號", defense: "防禦稱號", utility: "其他稱號", special: "特殊稱號", "": "特殊稱號" }[key] || "特殊稱號";
}

function titleCategoryIcon(category) {
  const key = String(category || "").toLowerCase();
  if (key === "attack") return "https://assets.playnccdn.com/static-aion2/characters/img/info/title_icon_attack.png";
  if (key === "defense") return "https://assets.playnccdn.com/static-aion2/characters/img/info/title_icon_defense.png";
  return "https://assets.playnccdn.com/static-aion2/characters/img/info/title_icon_etc.png";
}

function titleIconUrl(icon) {
  const src = String(icon || "").trim();
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("assets/")) return `https://assets.playnccdn.com/static-aion2-gamedata/resources/${src.split("/").pop()}`;
  return src;
}

function optionFromDefinition(def, bucket) {
  if (!def) return null;
  return { label: def.label, bucket, statKey: def.key, isPct: !!def.isPct, scale: def.isPct ? 0.01 : 1 };
}

function titleOptionForKey(key) {
  const normalized = String(key || "").toLowerCase();
  const label = TITLE_STAT_KEY_MAP[normalized];
  if (label && WING_BONUS_EFFECT_OPTIONS[label]) return WING_BONUS_EFFECT_OPTIONS[label];
  const byLabel = (defs, bucket) => optionFromDefinition(defs.find((def) => def.label === label), bucket);
  return byLabel(PRIMARY_STAT_DEFS, "primaryStats")
    || byLabel(PCT_STAT_DEFS, "pctStats")
    || byLabel(BASIC_COMBAT_STAT_DEFS, "basicCombatStats")
    || byLabel(BASIC_COMBAT_AMP_STAT_DEFS, "basicCombatAmpStats")
    || byLabel(ENV_COMBAT_AMP_STAT_DEFS, "envCombatAmpStats")
    || byLabel(ABNORMAL_STAT_DEFS, "abnormalStats")
    || byLabel(OTHER_STAT_DEFS, "otherStats")
    || null;
}

function titleStatRows(stats, group) {
  return Object.entries(stats || {})
    .filter(([, value]) => Number(value) !== 0)
    .map(([key, value]) => ({ key, effect: (titleOptionForKey(key) || {}).label || key, value: Number(value), group }));
}

function titleStatText(stat) {
  const option = titleOptionForKey(stat.key);
  const value = option ? wingBonusValue(stat, option) : toNum(stat.value);
  const rounded = Math.round(value * 10) / 10;
  return `${stat.effect || stat.key} ${rounded > 0 ? "+" : ""}${rounded}${option && option.isPct ? "%" : ""}`;
}

function normalizeTitleSearchText(value) {
  return toTraditional(String(value || "")).toLowerCase().replace(/\s+/g, "");
}

function titleSearchVariants(value) {
  const raw = normalizeTitleSearchText(value);
  return raw ? [raw] : [];
}

function highlightTitleSearchMatch(value, keyword) {
  const text = String(value || "");
  const query = titleSearchVariants(keyword)[0];
  if (!text || !query) return html(text);
  const chars = Array.from(text);
  const normalizedChars = chars.map((char) => normalizeTitleSearchText(char));
  let result = "";
  for (let i = 0; i < chars.length; i += 1) {
    let combined = "";
    let end = i;
    while (end < chars.length && combined.length < query.length) {
      combined += normalizedChars[end];
      end += 1;
    }
    if (combined === query) {
      result += `<mark class="title-search-hit">${html(chars.slice(i, end).join(""))}</mark>`;
      i = end - 1;
    } else {
      result += html(chars[i]);
    }
  }
  return result;
}

function syncTitleSearchInput(search) {
  if (!search) return "";
  const cursor = search.selectionStart ?? search.value.length;
  const traditional = toTraditional(search.value);
  if (search.value !== traditional) {
    search.value = traditional;
    const nextCursor = Math.min(traditional.length, cursor);
    try { search.setSelectionRange(nextCursor, nextCursor); } catch (_) {}
  }
  return traditional;
}

function titleMatchesSearch(row, keyword) {
  const queries = titleSearchVariants(keyword);
  if (!queries.length) return true;
  const statText = [
    ...titleStatRows(row.holdingStats, "holding").map(titleStatText),
    ...titleStatRows(row.equipStats, "equip").map(titleStatText),
  ].join(" ");
  const haystacks = titleSearchVariants([
    row.name,
    row.description,
    titleRaceLabel(row.race),
    titleCategoryLabelLocal(row.equipCategory),
    statText,
  ].join(" "));
  return queries.some((query) => haystacks.some((haystack) => haystack.includes(query)));
}

function titleStatSortIndex(key) {
  const option = titleOptionForKey(key);
  const label = option ? option.label : String(key || "");
  const allDefs = [
    ...PRIMARY_STAT_DEFS,
    ...PCT_STAT_DEFS,
    ...BASIC_COMBAT_STAT_DEFS,
    ...BASIC_COMBAT_AMP_STAT_DEFS,
    ...ENV_COMBAT_AMP_STAT_DEFS,
    ...ABNORMAL_STAT_DEFS,
    ...OTHER_STAT_DEFS,
  ];
  const index = allDefs.findIndex((def) => def.key === (option || {}).statKey || def.label === label);
  return index < 0 ? 999 : index;
}

function titleStatSortKey(row) {
  return [
    ...titleStatRows(row.holdingStats, "holding"),
    ...titleStatRows(row.equipStats, "equip"),
  ]
    .map((stat) => {
      const option = titleOptionForKey(stat.key);
      const value = option ? wingBonusValue(stat, option) : toNum(stat.value);
      return {
        group: stat.group === "holding" ? 0 : 1,
        index: titleStatSortIndex(stat.key),
        value: Math.abs(value),
        label: stat.effect || stat.key,
      };
    })
    .sort((a, b) => (
      a.group - b.group
      || a.index - b.index
      || b.value - a.value
      || String(a.label).localeCompare(String(b.label), "zh-Hant")
    ));
}

function compareTitleRowsByStats(a, b) {
  const left = titleStatSortKey(a);
  const right = titleStatSortKey(b);
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const l = left[index];
    const r = right[index];
    if (!l && r) return 1;
    if (l && !r) return -1;
    if (!l && !r) break;
    const diff = l.group - r.group
      || l.index - r.index
      || r.value - l.value
      || String(l.label).localeCompare(String(r.label), "zh-Hant");
    if (diff) return diff;
  }
  return Number(a.grade || 0) - Number(b.grade || 0)
    || String(a.name || "").localeCompare(String(b.name || ""), "zh-Hant")
    || String(titleId(a)).localeCompare(String(titleId(b)));
}

function sameTitleEffectKey(row) {
  return [
    row.name || titleId(row),
    row.equipCategory || "",
    JSON.stringify(row.holdingStats || {}),
    JSON.stringify(row.equipStats || {}),
  ].join("|");
}

function renderTitleStatRow(label, stats, className, keyword = "") {
  const content = stats.length ? stats.map((stat) => `<span>${highlightTitleSearchMatch(titleStatText(stat), keyword)}</span>`).join("") : `<span>-</span>`;
  return `
    <div class="wing-stat-row ${className}">
      <b>${highlightTitleSearchMatch(label, keyword)}</b>
      <div>${content}</div>
    </div>
  `;
}

function selectedTitleHoldingSummary(selectedIds = selectedTitleSet()) {
  const totals = new Map();
  titleCatalogRows()
    .filter((row) => selectedIds.has(titleId(row)))
    .forEach((row) => {
      titleStatRows(row.holdingStats, "holding").forEach((stat) => {
        const option = titleOptionForKey(stat.key);
        const key = option ? option.statKey : stat.key;
        const value = option ? wingBonusValue(stat, option) : toNum(stat.value);
        const current = totals.get(key) || {
          key,
          label: (option && option.label) || stat.effect || stat.key,
          isPct: !!(option && option.isPct),
          value: 0,
          count: 0,
          sources: [],
        };
        current.value += value;
        current.count += 1;
        current.sources.push({ name: row.name || "稱號", value, isPct: !!(option && option.isPct) });
        totals.set(key, current);
      });
    });
  return Array.from(totals.values())
    .filter((item) => Number(item.value) !== 0)
    .sort(sortTitleHoldingSummary);
}

const TITLE_SUMMARY_GROUPS = [
  {
    key: "generalAttack",
    label: "通用攻擊向",
    keys: [
      "attack", "extraAttack", "hit", "extraHit", "critical",
      "penetration", "soulstoneDamage", "criticalAttack", "frontAttack", "backAttack",
      "multiHit", "ironWallPen", "regenPen",
      "damageAmp", "weaponDamageAmp", "critDamageAmp", "backDamageAmp", "frontDamageAmp",
      "shockHit", "statusHit", "hardHit", "perfect",
    ],
  },
  {
    key: "generalDefense",
    label: "通用防禦向",
    keys: [
      "defense", "extraDefense", "evasion", "extraEvasion", "criticalResist",
      "hp", "mp", "damageResist", "weaponDamageResist", "critDamageResist", "backDamageResist", "frontDamageResist",
      "frontDefense", "backDefense", "criticalDefense", "multiHitResist", "ironWall", "hardHitResist", "perfectResist",
    ],
  },
  {
    key: "pve",
    label: "PVE",
    keys: [
      "pveAttack", "pveDefense", "pveHit", "pveEvasion", "pveCritical", "pveCriticalResist",
      "pveDamageAmp", "pveDamageResist", "bossAttack", "bossDefense", "bossDamageAmp", "bossDamageResist",
    ],
  },
  {
    key: "pvp",
    label: "PVP",
    keys: [
      "pvpAttack", "pvpDefense", "pvpHit", "pvpEvasion", "pvpCritical", "pvpCriticalResist",
      "pvpDamageAmp", "pvpDamageResist",
    ],
  },
  { key: "other", label: "其他類", keys: [] },
];

function titleSummaryGroupForKey(key) {
  return TITLE_SUMMARY_GROUPS.find((group) => group.key !== "other" && group.keys.includes(key)) || TITLE_SUMMARY_GROUPS[TITLE_SUMMARY_GROUPS.length - 1];
}

function titleSummarySortRank(item) {
  const groupIndex = TITLE_SUMMARY_GROUPS.findIndex((group) => group.key === titleSummaryGroupForKey(item.key).key);
  const allDefs = [
    ...PRIMARY_STAT_DEFS,
    ...PCT_STAT_DEFS,
    ...BASIC_COMBAT_STAT_DEFS,
    ...BASIC_COMBAT_AMP_STAT_DEFS,
    ...ENV_COMBAT_AMP_STAT_DEFS,
    ...ABNORMAL_STAT_DEFS,
    ...OTHER_STAT_DEFS,
  ];
  const defIndex = allDefs.findIndex((def) => def.key === item.key);
  return [groupIndex < 0 ? 99 : groupIndex, defIndex < 0 ? 999 : defIndex, item.label];
}

function sortTitleHoldingSummary(a, b) {
  const left = titleSummarySortRank(a);
  const right = titleSummarySortRank(b);
  if (left[0] !== right[0]) return left[0] - right[0];
  if (left[1] !== right[1]) return left[1] - right[1];
  return String(left[2]).localeCompare(String(right[2]), "zh-Hant");
}

function titleSummarySourceText(item) {
  return item.sources
    .map((source) => {
      const value = Math.round(source.value * 10) / 10;
      return `${source.name}：${value > 0 ? "+" : ""}${formatNumber(value)}${source.isPct ? "%" : ""}`;
    })
    .join("\n");
}

function renderSelectedTitleHoldingSummary(selectedIds) {
  const summary = selectedTitleHoldingSummary(selectedIds);
  const selectedCount = selectedIds.size;
  const collapsed = !!state.titleHoldingSummaryCollapsed;
  const grouped = TITLE_SUMMARY_GROUPS.map((group) => ({
    ...group,
    items: summary.filter((item) => titleSummaryGroupForKey(item.key).key === group.key),
  })).filter((group) => group.items.length);
  return `
    <section class="title-selected-summary${collapsed ? " collapsed" : ""}">
      <div class="title-selected-summary-head">
        <div>
          <strong>已選持有效果</strong>
          <span>${selectedCount} 個稱號 · ${summary.length} 項效果</span>
        </div>
        <button type="button" data-title-summary-toggle aria-expanded="${collapsed ? "false" : "true"}">
          <i data-lucide="${collapsed ? "chevron-down" : "chevron-up"}" aria-hidden="true"></i>
          <span>${collapsed ? "展開" : "收起"}</span>
        </button>
      </div>
      <div class="title-selected-summary-body">
        ${summary.length ? grouped.map((group) => `
          <div class="title-selected-summary-section">
            <h5>${html(group.label)}</h5>
            <div class="title-selected-summary-grid">
              ${group.items.map((item) => {
                const value = Math.round(item.value * 10) / 10;
                const sourceText = titleSummarySourceText(item);
                return `
                  <div class="title-selected-summary-item has-tooltip" tabindex="0" data-tooltip="${html(sourceText)}">
                    <span>${html(item.label)}</span>
                    <strong>${value > 0 ? "+" : ""}${html(formatNumber(value))}${item.isPct ? "%" : ""}</strong>
                    <small>${item.count} 個來源</small>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `).join("") : `<p>尚未選擇帶有持有效果的稱號。</p>`}
      </div>
    </section>
  `;
}

function renderTitleSimulator() {
  if (!els.titleCatalogList) return;
  const rows = titleCatalogRows();
  const selected = selectedTitleSet();
  if (!rows.length) {
    if (els.titleSelectionCount) els.titleSelectionCount.textContent = "0 / 0";
    els.titleCatalogList.innerHTML = loadingMarkup("稱號資料載入中", "正在讀取本地稱號資料表。");
    return;
  }
  const activeRace = ["light", "dark", "all"].includes(state.activeTitleRace) ? state.activeTitleRace : "light";
  state.activeTitleRace = activeRace;
  const countRace = titleCountRaceScope(activeRace, selected);
  const countRows = titleRowsForCountScope(rows, countRace);
  const selectedInScope = countRows.filter((row) => selected.has(titleId(row))).length;
  if (els.titleSelectionCount) els.titleSelectionCount.textContent = `${selectedInScope} / ${countRows.length}`;
  const keyword = String(state.titleSearchKeyword || "");
  const searchedRows = rows.filter((row) => titleMatchesSearch(row, keyword));
  const visibleRows = searchedRows.filter((row) => titleVisibleByRace(row, activeRace));
  const groups = ["attack", "defense", "utility", "special"].map((category) => ({
    category,
    rows: visibleRows
      .filter((row) => String(row.equipCategory || "special").toLowerCase() === category)
      .sort(compareTitleRowsByStats),
  }));
  const activeCategory = groups.some((group) => group.category === state.activeTitleCategory)
    ? state.activeTitleCategory
    : "attack";
  state.activeTitleCategory = activeCategory;
  const activeGroup = groups.find((group) => group.category === activeCategory) || groups[0];
  const activeGroupAllSelected = activeGroup.rows.length > 0 && activeGroup.rows.every((row) => selected.has(titleId(row)));
  els.titleCatalogList.innerHTML = `
    <div class="title-search-bar">
      <label>
        <span>搜尋稱號</span>
        <input type="search" value="${html(keyword)}" placeholder="輸入稱號、效果或描述" data-title-search />
      </label>
      ${keyword ? `<button type="button" data-title-search-clear>清空</button>` : ""}
    </div>
    ${renderSelectedTitleHoldingSummary(selected)}
    <div class="title-race-filter">
      ${["light", "dark", "all"].map((race) => `
        <button type="button" class="${race === activeRace ? "active" : ""}" data-title-race="${html(race)}">
          <span>${html(titleRaceFilterLabel(race))}</span>
          <b>${searchedRows.filter((row) => titleVisibleByRace(row, race)).length}</b>
        </button>
      `).join("")}
    </div>
    <div class="title-category-tabs">
      ${groups.map((group) => `
        <button type="button" class="${group.category === activeCategory ? "active" : ""}" data-title-category="${html(group.category)}">
          <img src="${html(titleCategoryIcon(group.category))}" alt="" />
          <span>${html(titleCategoryLabelLocal(group.category))}</span>
          <b>${group.rows.length}</b>
        </button>
      `).join("")}
    </div>
    <section class="title-group">
      <div class="title-group-head">
        <h4>${html(titleCategoryLabelLocal(activeGroup.category))}</h4>
        <div>
          <span>${activeGroup.rows.length} 個</span>
          <button type="button" class="${activeGroupAllSelected ? "selected" : ""}" data-title-toggle-category="${html(activeGroup.category)}" aria-pressed="${activeGroupAllSelected ? "true" : "false"}">
            ${activeGroupAllSelected ? "取消本類" : "全選本類"}
          </button>
        </div>
      </div>
      <div class="title-card-grid">
        ${activeGroup.rows.map((row) => {
            const id = titleId(row);
            const checked = selected.has(id);
            const holdingStats = titleStatRows(row.holdingStats, "holding");
            const equipStats = titleStatRows(row.equipStats, "equip");
            return `
              <article class="title-card${checked ? " selected" : ""}">
                <label class="wing-check title-check">
                  <input type="checkbox" data-title-select="${html(id)}" ${checked ? "checked" : ""} />
                  <span></span>
              </label>
              <div class="title-card-main">
                <div class="title-card-name">
                    <strong class="grade-${html(row.grade || "")}">${highlightTitleSearchMatch(row.name || "稱號", keyword)}</strong>
                    <small>${highlightTitleSearchMatch(titleRaceLabel(row.race), keyword)} · ${highlightTitleSearchMatch(titleCategoryLabelLocal(row.equipCategory), keyword)}</small>
                    ${row.description ? `<p class="title-card-description">${highlightTitleSearchMatch(row.description, keyword)}</p>` : ""}
                  </div>
                </div>
                <div class="wing-stats title-stats">
                  ${renderTitleStatRow("持有效果", holdingStats, "wing-stat-row--base", keyword)}
                  ${renderTitleStatRow("裝備效果", equipStats, "wing-stat-row--enchant", keyword)}
                </div>
              </article>
            `;
          }).join("")}
      </div>
    </section>
  `;
  refreshIcons();
  if (state.titleSearchFocused) {
    const search = els.titleCatalogList.querySelector("[data-title-search]");
    if (search) {
      search.focus();
      const cursor = Math.min(search.value.length, state.titleSearchCursor ?? search.value.length);
      try { search.setSelectionRange(cursor, cursor); } catch (_) {}
    }
  }
}

function addTitleValue(analysis, row) {
  titleStatRows(row.holdingStats, "holding").forEach((stat) => {
    const option = titleOptionForKey(stat.key);
    if (!option) return;
    addSimulatedValue(analysis, option, wingBonusValue(stat, option), 1, `稱號模擬 · ${row.name}`, `持有效果 · ${option.label}`);
  });
}

function activeTitleRows() {
  const selected = selectedTitleSet();
  const deduped = new Map();
  titleCatalogRows().filter((row) => selected.has(titleId(row))).forEach((row) => {
    const key = sameTitleEffectKey(row);
    if (!deduped.has(key)) deduped.set(key, row);
  });
  return Array.from(deduped.values());
}

async function selectTitleRowsByScope({ category = "", mode = "select" } = {}) {
  const race = state.activeTitleRace || "light";
  const ids = selectedTitleSet();
  const targetRows = titleCatalogRows()
    .filter((row) => !category || String(row.equipCategory || "special").toLowerCase() === category)
    .filter((row) => titleVisibleByRace(row, race))
    .filter((row) => titleMatchesSearch(row, state.titleSearchKeyword));
  const shouldClear = mode === "toggle" && targetRows.length > 0 && targetRows.every((row) => ids.has(titleId(row)));
  const rowsToAdd = shouldClear ? [] : targetRows;
  const targetRaces = new Set(rowsToAdd.map(titleRaceKey).filter((rowRace) => rowRace === "light" || rowRace === "dark"));
  if (race === "all" && targetRaces.size > 1) {
    window.alert("請先選擇天族或魔族篩選後再批量選擇稱號，避免同時勾選天魔稱號。");
    return;
  }
  const nextRace = targetRaces.values().next().value || "";
  const currentRace = selectedOppositeTitleRace(ids, nextRace) || selectedTitleRace(ids);
  if (nextRace && currentRace && currentRace !== nextRace) {
    if (!(await confirmTitleRaceSwitch(nextRace, currentRace))) return;
    clearSelectedTitleRace(ids, currentRace);
  }
  targetRows.forEach((row) => {
    const id = titleId(row);
    if (shouldClear) ids.delete(id);
    else ids.add(id);
  });
  state.selectedTitleIds = Array.from(ids);
  state.titleSelectionInitialized = true;
  saveSelectedTitleIds();
  renderTitleSimulator();
  if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
}

function activeSimulationHref() {
  if (state.wardrobeBonusEnabled) return "#wardrobe";
  if (state.petSimulator.enabled) return "#pet-insight";
  if (state.titleBonusEnabled) return "#titles";
  return "#wings";
}
function rankingTypeDef() {
  return RANKING_TYPES.find((type) => type.key === state.ranking.activeType) || RANKING_TYPES[0];
}

function normalizeRankingRows(data) {
  const source = data && (data.rankingList || data.list || data.result || data.characters || []);
  return Array.isArray(source) ? source.map((row, index) => {
    const record = row || {};
    const extra = record.extraDataMap || {};
    const win = record.winCount ?? extra.winCount ?? "";
    const lose = record.loseCount ?? extra.loseCount ?? "";
    const winRate = record.winRate ?? extra.winRate ?? "";
    return {
      rank: record.rank ?? record.ranking ?? record.rankNo ?? index + 1,
      previousRank: record.previousRank ?? record.prevRank ?? record.lastSeasonRank ?? record.beforeRank ?? "-",
      name: stripHtml(record.characterName || record.name || record.character || ""),
      guild: stripHtml(record.guildName || record.legionName || record.guild || record.legion || ""),
      className: stripHtml(record.className || record.jobName || record.class || record.job || ""),
      score: record.rankingPoint ?? record.rankPoint ?? record.score ?? record.point ?? record.points ?? "",
      grade: record.gradeName || record.rankGradeName || record.grade || "",
      gradeIcon: record.gradeIcon || record.rankGradeIcon || "",
      kill: record.killCount ?? extra.killCount ?? record.kills ?? record.k ?? "",
      death: record.deathCount ?? extra.deathCount ?? record.deaths ?? record.d ?? "",
      assist: record.assistCount ?? extra.assistCount ?? record.assists ?? record.a ?? "",
      win,
      lose,
      winRate,
      characterId: record.characterId || record.encryptedCharacterId || "",
      serverId: record.serverId || state.ranking.serverId,
      raw: record,
    };
  }) : [];
}

function formatRankNumber(value) {
  if (value === "" || value === null || value === undefined) return "-";
  const num = Number(String(value).replaceAll(",", ""));
  return Number.isFinite(num) ? num.toLocaleString("en-US") : String(value);
}

function rankingRecordLabel(type = rankingTypeDef()) {
  if (type.key === "abyss") return "戰績";
  if (type.key === "arenaOfSolitude" || type.key === "arenaOfCooperation") return "勝率";
  if (type.key === "ascensionTrial") return "";
  return "最佳紀錄";
}

function rankingGradeLabel(type = rankingTypeDef()) {
  return type.key === "abyss" ? "套用階級" : "賽季階級";
}

function rankingGradeMarkup(row) {
  const label = row.grade || "-";
  if (!row.gradeIcon) return html(label);
  return `
    <span class="ranking-grade">
      <img src="${html(row.gradeIcon)}" alt="" loading="lazy" />
      <span>${html(label)}</span>
    </span>
  `;
}

function rankingRecordMarkup(row, type = rankingTypeDef()) {
  if (type.key === "abyss") {
    return `
      <span>K ${html(formatRankNumber(row.kill))}</span>
      <span>D ${html(formatRankNumber(row.death))}</span>
      <span>A ${html(formatRankNumber(row.assist))}</span>
    `;
  }
  if (type.key === "arenaOfSolitude" || type.key === "arenaOfCooperation") {
    const rate = row.winRate === "" || row.winRate === null || row.winRate === undefined ? "-" : `${formatRankNumber(row.winRate)}%`;
    return `
      <span>${html(rate)}</span>
      <span>${html(formatRankNumber(row.win))}勝</span>
      <span>${html(formatRankNumber(row.lose))}敗</span>
    `;
  }
  const extra = (row.raw && row.raw.extraDataMap) || {};
  if (Array.isArray(extra.dungeonGroupList) && extra.dungeonGroupList.length) {
    return extra.dungeonGroupList.slice(0, 2).map((item) => `<span>${html(item.dungeonGroupName || "紀錄")} ${html(formatRankNumber(item.bestClearLevel))}</span>`).join("");
  }
  return Object.entries(extra)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .slice(0, 3)
    .map(([key, value]) => `<span>${html(key)} ${html(formatRankNumber(value))}</span>`)
    .join("") || "<span>-</span>";
}

function renderRankingHeader(type = rankingTypeDef()) {
  const headRow = document.querySelector(".ranking-table thead tr");
  if (!headRow) return;
  const recordLabel = rankingRecordLabel(type);
  headRow.innerHTML = `
    <th>名次</th>
    <th>角色名稱/所屬軍團</th>
    <th>職業</th>
    <th>排名點數</th>
    ${recordLabel ? `<th>${html(recordLabel)}</th>` : ""}
    <th>${html(rankingGradeLabel(type))}</th>
    <th>上一賽季</th>
  `;
}

function renderRankingRows() {
  const type = rankingTypeDef();
  const recordLabel = rankingRecordLabel(type);
  renderRankingHeader(type);
  if (state.ranking.loading) {
    els.rankingTableBody.innerHTML = `<tr><td colspan="${recordLabel ? 7 : 6}">${loadingMarkup("載入排名", "正在讀取官方排行資料。")}</td></tr>`;
    els.rankingStatus.textContent = "載入中...";
    return;
  }
  if (state.ranking.error) {
    els.rankingTableBody.innerHTML = `<tr><td colspan="${recordLabel ? 7 : 6}"><div class="error-box">排名載入失敗：${html(state.ranking.error)}</div></td></tr>`;
    els.rankingStatus.textContent = "載入失敗";
    return;
  }
  if (!state.ranking.rows.length) {
    const emptyText = state.ranking.officialEmpty
      ? "官方排名接口暫無資料或已限制公開查詢。"
      : "暫無排名資料";
    els.rankingTableBody.innerHTML = `<tr><td colspan="${recordLabel ? 7 : 6}"><div class="empty-state"><div class="empty-mark">◇</div><p>${html(emptyText)}</p></div></td></tr>`;
    els.rankingStatus.textContent = "0 件";
    return;
  }
  els.rankingStatus.textContent = `${state.ranking.rows.length} 件`;
  els.rankingTableBody.innerHTML = state.ranking.rows.map((row) => `
    <tr>
      <td data-label="名次"><strong class="rank-num">${html(row.rank)}</strong></td>
      <td data-label="角色">
        <button type="button" class="ranking-char-link" data-ranking-character-id="${html(row.characterId)}" data-ranking-server-id="${html(row.serverId)}" ${row.characterId ? "" : "disabled"}>
          <strong>${html(row.name || "-")}</strong>
          ${row.guild ? `<small>${html(row.guild)}</small>` : ""}
        </button>
      </td>
      <td data-label="職業">${html(row.className || "-")}</td>
      <td data-label="排名點數"><strong>${html(formatRankNumber(row.score))}</strong></td>
      ${recordLabel ? `<td data-label="${html(recordLabel)}" class="ranking-record">${rankingRecordMarkup(row, type)}</td>` : ""}
      <td data-label="${html(rankingGradeLabel(type))}">${rankingGradeMarkup(row)}</td>
      <td data-label="上一賽季">${html(Number(row.previousRank) === 0 ? "-" : row.previousRank || "-")}</td>
    </tr>
  `).join("");
}

async function loadRanking() {
  state.ranking.loading = true;
  state.ranking.error = "";
  state.ranking.officialEmpty = false;
  renderRankingControls();
  renderRankingRows();
  const type = rankingTypeDef();
  const params = new URLSearchParams({
    rankingContentsType: String(type.contentsType),
    rankingType: state.ranking.classId === "0" ? "0" : state.ranking.classId,
    serverId: String(state.ranking.serverId),
    page: "1",
    size: "100",
  });
  if (state.ranking.keyword.trim()) params.set("searchCharacterName", state.ranking.keyword.trim());
  try {
    const data = await getJson(`/api/ranking?${params.toString()}`, 30000);
    state.ranking.rows = normalizeRankingRows(data);
    state.ranking.season = data.season || null;
    state.ranking.officialEmpty = !state.ranking.rows.length && !data.season && Array.isArray(data.rankingList) && data.rankingList.length === 0;
  } catch (error) {
    state.ranking.rows = [];
    state.ranking.error = error.message;
    state.ranking.officialEmpty = false;
  } finally {
    state.ranking.loading = false;
    renderRankingRows();
  }
}

function cleanChar(raw) {
  let characterId = stripHtml(raw.characterId || raw.id || "");
  try { characterId = decodeURIComponent(characterId); } catch (_) {}
  return {
    characterId,
    serverId: raw.serverId,
    serverName: stripHtml(raw.serverName || "") || serverName(raw.serverId),
    characterName: stripHtml(raw.characterName || raw.name || ""),
    className: stripHtml(raw.className || raw.class || raw.classText || ""),
    race: raw.race || raw.raceId || 0,
    level: raw.level || raw.characterLevel || "",
    profileImage: raw.profileImage || raw.characterImage || raw.image || raw.avatar || "",
    combatPower: raw.combatPower || raw.power || "",
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
  if (response.status === 429) {
    const retryAfter = Number(response.headers.get("Retry-After") || "60");
    const err = new Error(`請求過於頻繁，請 ${retryAfter} 秒後再試`);
    err.status = 429;
    throw err;
  }
  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}`);
  }
  return data;
}

function profileImageFromInfo(info) {
  const profile = info && (info.profile || info.character || info.characterInfo || info);
  if (!profile) return "";
  return profile.profileImage || profile.characterImage || profile.image || profile.avatar || profile.thumbnailUrl || "";
}

async function enrichSearchResultImages(searchToken) {
  const missing = state.results
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => char.characterId && char.serverId && !char.profileImage)
    .slice(0, 12);
  if (!missing.length) return;
  let changed = false;
  await mapLimit(missing, 4, async ({ char, index }) => {
    const params = new URLSearchParams({
      characterId: char.characterId,
      serverId: String(char.serverId),
    });
    try {
      const info = await getJson(`/api/info?${params.toString()}`, 20000);
      const profile = (info && info.profile) || {};
      const profileImage = profileImageFromInfo(info);
      if (!profileImage || searchToken !== state.searchToken || !state.results[index]) return;
      state.results[index] = {
        ...state.results[index],
        profileImage,
        combatPower: state.results[index].combatPower || profile.combatPower || "",
      };
      changed = true;
    } catch (_) {}
  });
  if (changed && searchToken === state.searchToken) renderResults();
}

function trackCharacterQuery(char, detail, analysis, querySource = "detail") {
  if (!char || !char.characterId || !detail) return;
  const profile = detail.profile || {};
  const payload = {
    characterId: char.characterId,
    characterName: profile.characterName || char.characterName,
    serverId: profile.serverId || char.serverId,
    serverName: profile.serverName || char.serverName,
    race: profile.raceId || char.race,
    className: profile.className || char.className,
    level: profile.characterLevel || char.level,
    combatPower: profile.combatPower || char.combatPower,
    itemLevel: detail.itemLevel,
    snapshotType: state.snapshotTab || detectSnapshotType(detail),
    querySource,
    queryKeyword: els.keywordInput ? els.keywordInput.value.trim() : "",
    profile,
    equipment: {
      items: detail.detailEquipItems || [],
      sets: detail.detailSetBonuses || [],
      petwing: detail.petwing || {},
    },
    analysis,
    detail: {
      profile,
      itemLevel: detail.itemLevel,
      detailDataComplete: detail.detailDataComplete,
      detailStatBasic: detail.detailStatBasic || [],
      detailStatSecondary: detail.detailStatSecondary || [],
      detailSkillActive: detail.detailSkillActive || [],
      detailSkillPassive: detail.detailSkillPassive || [],
      detailSkillStigma: detail.detailSkillStigma || [],
      detailDaevanion: detail.detailDaevanion || [],
      title: (detail.info || {}).title || null,
      ranking: (detail.info || {}).ranking || null,
    },
  };
  fetch("/api/analytics/character-query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

async function getJsonRetry(path, timeoutMs = 25000, attempts = 3) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await getJson(path, timeoutMs);
    } catch (error) {
      lastError = error;
      const retryable = error.status === 429 || /timeout|HTTP 5\d\d|Failed to fetch|NetworkError/i.test(error.message || "");
      if (!retryable || attempt === attempts) throw error;
      const wait = error.status === 429 ? 1200 * attempt : 450 * attempt;
      await sleep(wait);
    }
  }
  throw lastError;
}

async function searchCharacters() {
  const parsed = parseKeywordServerHint(els.keywordInput.value);
  if (!parsed.keyword) {
    setStatus("請輸入角色名");
    els.keywordInput.focus();
    return;
  }

  state.loading = true;
  state.hasSearched = true;
  state.searchToken += 1;
  const searchToken = state.searchToken;
  setStatus("查詢中...");
  els.searchButton.disabled = true;
  els.resultsList.innerHTML = loadingMarkup("查詢中", "正在匹配角色與伺服器資料。");

  try {
    const params = new URLSearchParams({
      keyword: parsed.keyword,
      page: "1",
      size: "30",
      sort: "desc",
    });
    if (parsed.server) {
      params.set("serverId", String(parsed.server.serverId));
      state.serverId = parsed.server.serverId;
      state.race = parsed.server.serverId >= 2000 ? 2 : 1;
      renderServers();
    } else if (state.serverId) {
      params.set("serverId", String(state.serverId));
    }
    if (state.race) params.set("race", String(state.race));
    const data = await getJson(`/api/search?${params.toString()}`);
    const raw = Array.isArray(data) ? data : (data.list || data.characters || data.result || []);
    state.results = raw.map(cleanChar);
    renderResults();
    setStatus(state.results.length ? `找到 ${state.results.length} 筆` : "未找到結果");
    enrichSearchResultImages(searchToken);
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
  if (els.resultsPanelHead) els.resultsPanelHead.hidden = !state.hasSearched;
  if (!state.hasSearched) {
    els.resultsList.innerHTML = "";
    return;
  }
  if (!state.results.length) {
    els.resultsList.innerHTML = `<div class="empty-state"><div class="empty-mark">✦</div><p>未找到匹配角色</p></div>`;
    return;
  }

  els.resultsList.innerHTML = `
    <div class="history-list result-card-list">
      ${state.results.map((char, index) => renderMiniCharacterCard(char, index, "result")).join("")}
    </div>
  `;
  refreshIcons();
}

function clearSearchResults() {
  state.results = [];
  state.hasSearched = false;
  state.searchToken += 1;
  state.race = 0;
  state.serverId = 0;
  state.selectedId = "";
  els.keywordInput.value = "";
  els.raceTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.race) === 0);
  });
  renderServers();
  renderResults();
  setStatus("待查詢");
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
  saved[type] = { savedAt: Date.now(), version: SNAPSHOT_SCHEMA_VERSION, detail, analysis };
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
  const detail = snap ? snap.detail : state.selectedDetail;
  return detail ? calcAttributes(detail) : (snap ? snap.analysis : state.selectedAttack);
}

function isUsableSnapshot(snap, ttlMs = Infinity) {
  return !!(
    snap &&
    snap.version === SNAPSHOT_SCHEMA_VERSION &&
    snap.detail &&
    snap.detail.detailDaevanionComplete === true &&
    snap.detail.detailEquipmentComplete === true &&
    Date.now() - (snap.savedAt || 0) < ttlMs
  );
}

function defaultPetSimulatorConfig() {
  const normalRows = [
    { statKey: "extraHit", count: 3, value: 35 },
    { statKey: "extraAttack", count: 3, value: 14 },
    { statKey: "powerStrike", count: 2, value: 2.0 },
    { statKey: "damageResist", count: 1, value: 2.0 },
  ];
  const specialRows = [
    { statKey: "extraAttack", count: 6, value: 14 },
    { statKey: "powerStrike", count: 2, value: 2.0 },
    { statKey: "damageResist", count: 1, value: 2.0 },
  ];
  return {
    disks: [
      { id: "normal-1", type: "normal", name: "普通盤 1", rows: normalRows.map((row) => ({ ...row })) },
      { id: "normal-2", type: "normal", name: "普通盤 2", rows: normalRows.map((row) => ({ ...row })) },
      { id: "normal-3", type: "normal", name: "普通盤 3", rows: normalRows.map((row) => ({ ...row })) },
      { id: "normal-4", type: "normal", name: "普通盤 4", rows: normalRows.map((row) => ({ ...row })) },
      { id: "special-1", type: "special", name: "特殊盤", rows: specialRows.map((row) => ({ ...row })) },
    ],
  };
}

function loadPetSimulatorConfig() {
  const defaultTemplate = defaultPetSimulatorConfig();
  const defaults = {
    enabled: false,
    collapsed: false,
    activeTemplate: 0,
    templates: [0, 1, 2].map((index) => ({
      name: `模板 ${index + 1}`,
      disks: defaultTemplate.disks.map((disk) => ({ ...disk, rows: disk.rows.map((row) => ({ ...row })) })),
    })),
  };
  try {
    const saved = JSON.parse(localStorage.getItem(PET_SIM_KEY) || "null");
    if (!saved) return defaults;
    if (Array.isArray(saved.disks)) {
      defaults.enabled = !!saved.enabled;
      defaults.collapsed = !!saved.collapsed;
      defaults.templates[0].disks = defaultTemplate.disks.map((disk) => {
        const current = saved.disks.find((item) => item.id === disk.id);
        return current ? { ...disk, rows: normalizePetRows(current.rows, disk.type) } : disk;
      });
      return defaults;
    }
    if (!Array.isArray(saved.templates)) return defaults;
    return {
      enabled: !!saved.enabled,
      collapsed: !!saved.collapsed,
      activeTemplate: clampInt(saved.activeTemplate, 0, 2),
      templates: defaults.templates.map((template, index) => {
        const current = saved.templates[index];
        if (!current || !Array.isArray(current.disks)) return template;
        return {
          name: String(current.name || template.name).slice(0, 12),
          disks: defaultTemplate.disks.map((disk) => {
            const savedDisk = current.disks.find((item) => item.id === disk.id);
            return savedDisk ? { ...disk, rows: normalizePetRows(savedDisk.rows, disk.type) } : disk;
          }),
        };
      }),
    };
  } catch (_) {
    return defaults;
  }
}

function savePetSimulatorConfig() {
  try { localStorage.setItem(PET_SIM_KEY, JSON.stringify(state.petSimulator)); } catch (_) {}
  syncPetSimulatorConfig();
}

function loadWingBonusEnabled() {
  try { return localStorage.getItem(WING_BONUS_KEY) === "1"; } catch (_) { return false; }
}

function saveWingBonusEnabled() {
  try { localStorage.setItem(WING_BONUS_KEY, state.wingBonusEnabled ? "1" : "0"); } catch (_) {}
}

function loadSelectedWingIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(WING_SELECTION_KEY) || "null");
    if (!saved || !Array.isArray(saved.ids)) return [];
    return saved.ids.map(String).filter(Boolean);
  } catch (_) {
    return [];
  }
}

function hasSavedWingSelection() {
  try {
    const saved = JSON.parse(localStorage.getItem(WING_SELECTION_KEY) || "null");
    return !!saved && Array.isArray(saved.ids);
  } catch (_) {
    return false;
  }
}

function saveSelectedWingIds() {
  try {
    localStorage.setItem(WING_SELECTION_KEY, JSON.stringify({ ids: state.selectedWingIds.map(String) }));
  } catch (_) {}
}

function loadWingLevels() {
  try {
    const saved = JSON.parse(localStorage.getItem(WING_LEVEL_KEY) || "null");
    if (!saved || typeof saved !== "object") return {};
    return Object.fromEntries(Object.entries(saved).map(([key, value]) => [String(key), clampInt(value, 0, 10)]));
  } catch (_) {
    return {};
  }
}

function saveWingLevels() {
  try {
    localStorage.setItem(WING_LEVEL_KEY, JSON.stringify(state.wingLevels || {}));
  } catch (_) {}
}

function loadWardrobeBonusEnabled() {
  try { return localStorage.getItem(WARDROBE_BONUS_KEY) === "1"; } catch (_) { return false; }
}

function saveWardrobeBonusEnabled() {
  try { localStorage.setItem(WARDROBE_BONUS_KEY, state.wardrobeBonusEnabled ? "1" : "0"); } catch (_) {}
}

function defaultWardrobeConfig() {
  const entries = [];
  WARDROBE_CATEGORIES.forEach((category) => {
    entries.push([category.key, 0]);
    (category.parts || []).forEach((part) => entries.push([`${category.key}:${part.key}`, 0]));
  });
  return Object.fromEntries(entries);
}

function normalizeWardrobeConfig(value) {
  const source = value && typeof value === "object" ? value : {};
  const legacyAverage = (keys) => {
    const values = keys
      .map((key) => source[key])
      .filter((item) => item !== undefined && item !== null && item !== "");
    if (!values.length) return undefined;
    return values.reduce((sum, item) => sum + toNum(item), 0) / values.length;
  };
  const entries = [];
  WARDROBE_CATEGORIES.forEach((category) => {
    const categoryValue = clampInt(source[category.key], 0, category.max);
    entries.push([category.key, categoryValue]);
    (category.parts || []).forEach((part) => {
      const key = `${category.key}:${part.key}`;
      const legacyValue = category.key === "accessory" && part.key === "Earring"
        ? legacyAverage(["accessory:Earring1", "accessory:Earring2"])
        : category.key === "accessory" && part.key === "Ring"
          ? legacyAverage(["accessory:Ring1", "accessory:Ring2"])
          : undefined;
      const value = source[key] === undefined ? (legacyValue === undefined ? categoryValue : legacyValue) : source[key];
      entries.push([key, clampInt(value, 0, category.max)]);
    });
  });
  return Object.fromEntries(entries);
}

function loadWardrobeConfig() {
  try {
    return normalizeWardrobeConfig(JSON.parse(localStorage.getItem(WARDROBE_CONFIG_KEY) || "null"));
  } catch (_) {
    return defaultWardrobeConfig();
  }
}

function saveWardrobeConfig() {
  try { localStorage.setItem(WARDROBE_CONFIG_KEY, JSON.stringify(normalizeWardrobeConfig(state.wardrobeConfig))); } catch (_) {}
}

function cloneWardrobeConfig(config = state.wardrobeConfig) {
  return normalizeWardrobeConfig({ ...(config || {}) });
}

function wardrobeConfigSignature(config) {
  return JSON.stringify(cloneWardrobeConfig(config));
}

function pushWardrobeUndoSnapshot(config = state.wardrobeConfig) {
  const snapshot = cloneWardrobeConfig(config);
  const signature = wardrobeConfigSignature(snapshot);
  const last = state.wardrobeUndoStack[state.wardrobeUndoStack.length - 1];
  if (last && wardrobeConfigSignature(last) === signature) return;
  state.wardrobeUndoStack.push(snapshot);
  if (state.wardrobeUndoStack.length > 30) state.wardrobeUndoStack.shift();
}

function beginWardrobeUndoSnapshot() {
  if (!state.wardrobeActiveUndo) state.wardrobeActiveUndo = cloneWardrobeConfig();
}

function commitWardrobeUndoSnapshot() {
  if (!state.wardrobeActiveUndo) return;
  const before = state.wardrobeActiveUndo;
  state.wardrobeActiveUndo = null;
  if (wardrobeConfigSignature(before) !== wardrobeConfigSignature(state.wardrobeConfig)) {
    pushWardrobeUndoSnapshot(before);
  }
}

function undoWardrobeConfig() {
  let snapshot = state.wardrobeActiveUndo;
  if (snapshot && wardrobeConfigSignature(snapshot) === wardrobeConfigSignature(state.wardrobeConfig)) {
    state.wardrobeActiveUndo = null;
    snapshot = null;
  }
  if (snapshot) state.wardrobeActiveUndo = null;
  else snapshot = state.wardrobeUndoStack.pop();
  if (!snapshot) return false;
  state.wardrobeConfig = cloneWardrobeConfig(snapshot);
  saveWardrobeConfig();
  renderWardrobeView();
  if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  return true;
}

function loadTitleBonusEnabled() {
  try { return localStorage.getItem(TITLE_BONUS_KEY) === "1"; } catch (_) { return false; }
}

function saveTitleBonusEnabled() {
  try { localStorage.setItem(TITLE_BONUS_KEY, state.titleBonusEnabled ? "1" : "0"); } catch (_) {}
}

function loadSelectedTitleIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(TITLE_SELECTION_KEY) || "null");
    if (!saved || !Array.isArray(saved.ids)) return [];
    return saved.ids.map(String).filter(Boolean);
  } catch (_) {
    return [];
  }
}

function hasSavedTitleSelection() {
  try {
    const saved = JSON.parse(localStorage.getItem(TITLE_SELECTION_KEY) || "null");
    return !!saved && Array.isArray(saved.ids);
  } catch (_) {
    return false;
  }
}

function saveSelectedTitleIds() {
  try { localStorage.setItem(TITLE_SELECTION_KEY, JSON.stringify({ ids: state.selectedTitleIds.map(String) })); } catch (_) {}
}
let petSyncTimer = null;
function syncPetSimulatorConfig() {
  clearTimeout(petSyncTimer);
  petSyncTimer = setTimeout(() => {
    fetch("/api/pet-templates", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.petSimulator),
    }).catch(() => {});
  }, 350);
}

async function loadPetSimulatorFromCloud() {
  try {
    const data = await getJson("/api/pet-templates", 8000);
    if (!data || !Array.isArray(data.templates) || !data.templates.length) return;
    const current = state.petSimulator;
    const next = {
      enabled: current.enabled,
      collapsed: current.collapsed,
      activeTemplate: current.activeTemplate,
      templates: current.templates.map((template, index) => {
        const remote = data.templates.find((item) => Number(item.slotIndex) === index) || data.templates[index];
        if (!remote || !Array.isArray(remote.disks) || !remote.disks.length) return template;
        return {
          name: String(remote.name || template.name).slice(0, 12),
          disks: template.disks.map((disk) => {
            const remoteDisk = remote.disks.find((item) => item.id === disk.id);
            return remoteDisk ? { ...disk, rows: normalizePetRows(remoteDisk.rows, disk.type) } : disk;
          }),
        };
      }),
    };
    state.petSimulator = next;
    try { localStorage.setItem(PET_SIM_KEY, JSON.stringify(state.petSimulator)); } catch (_) {}
    if (state.selectedDetail && state.selectedAttack) renderDetail(currentViewDetail(), currentViewAnalysis());
    if (state.view === "petInsight") renderPetInsightSimulator();
  } catch (_) {}
}

function activePetTemplate() {
  return state.petSimulator.templates[state.petSimulator.activeTemplate] || state.petSimulator.templates[0];
}

function activePetDisks() {
  return activePetTemplate().disks || [];
}

function resetActivePetTemplate() {
  const defaults = defaultPetSimulatorConfig();
  const current = activePetTemplate();
  current.disks = defaults.disks.map((disk) => ({ ...disk, rows: disk.rows.map((row) => ({ ...row })) }));
}

function petOptionsForType(type) {
  const base = PET_STAT_OPTIONS.map((option) => ({
    ...option,
    ...(type === "special" && PET_SPECIAL_OVERRIDES[option.key] ? PET_SPECIAL_OVERRIDES[option.key] : {}),
  }));
  return type === "special" ? base.concat(PET_SPECIAL_ONLY_OPTIONS) : base;
}

function petOption(type, key) {
  return petOptionsForType(type).find((option) => option.key === key) || petOptionsForType(type)[0];
}

function normalizePetRows(rows, type) {
  const options = petOptionsForType(type);
  let diskUsed = 0;
  const statUsed = {};
  const normalized = [];
  (Array.isArray(rows) ? rows : []).forEach((row) => {
      const option = options.find((item) => item.key === row.statKey);
      if (!option || option.maxCount <= 0 || diskUsed >= 9) return;
      const remainingDisk = 9 - diskUsed;
      const remainingStat = option.maxCount - (statUsed[option.key] || 0);
      const count = clampInt(row.count, 1, Math.min(remainingDisk, remainingStat));
      if (count <= 0) return;
      diskUsed += count;
      statUsed[option.key] = (statUsed[option.key] || 0) + count;
      normalized.push({
        statKey: option.key,
        count,
        value: type === "normal" && option.key === "powerStrike" && count === 2 && toNum(row.value) === 1.8
          ? 2.0
          : clampNum(row.value, 0, option.max),
      });
    });
  return normalized;
}

function clampInt(value, min, max) {
  const parsed = Math.round(toNum(value));
  return Math.max(min, Math.min(max, Number.isFinite(parsed) ? parsed : min));
}

function clampNum(value, min, max) {
  const parsed = toNum(value);
  return Math.max(min, Math.min(max, Number.isFinite(parsed) ? parsed : min));
}

function cloneAnalysis(analysis) {
  return JSON.parse(JSON.stringify(analysis || {}));
}

function petLineTotal(row, option) {
  return toNum(row.count) * toNum(row.value) * toNum(option.scale || 1);
}

function addSimulatedValue(analysis, option, value, count, sourceLabel, detailLabel) {
  const bucket = analysis[option.bucket];
  if (!Array.isArray(bucket)) return;
  const target = bucket.find((stat) => stat.key === option.statKey);
  if (!target || !value) return;
  if (option.isPct) target.pct += value; else target.flat += value;
  target.count += count || 1;
  let source = target.sources.find((item) => item.label === sourceLabel);
  if (!source) {
    source = { label: sourceLabel, flat: 0, pct: 0, details: [] };
    target.sources.push(source);
  }
  if (option.isPct) source.pct += value; else source.flat += value;
  source.details.push({
    label: detailLabel,
    value,
    isPct: option.isPct,
  });
}

function addPetValue(analysis, option, row, disk) {
  const value = petLineTotal(row, option);
  addSimulatedValue(
    analysis,
    option,
    value,
    row.count,
    `寵物模擬 · ${disk.name}`,
    `寵物盤 · ${option.label}${option.note ? `（${option.note}）` : ""} × ${row.count}`
  );
}

function wingBonusValue(row, option) {
  return toNum(String(row.value ?? "").replace("%", "")) * toNum(option.scale || 1);
}

function addWingBonusValue(analysis, row) {
  const level = wingLevel(wingId(row), row);
  const statRows = wingStatsForLevel(row);
  statRows.forEach((stat) => {
    const option = WING_BONUS_EFFECT_OPTIONS[stat.effect] || WING_BONUS_EFFECT_OPTIONS[stat.key];
    if (!option) return;
    const value = wingBonusValue(stat, option);
    const groupLabel = stat.group === "holding" ? "持有效果" : `強化效果 +${level}`;
    addSimulatedValue(
      analysis,
      option,
      value,
      1,
      `翅膀模擬 · ${row.name}`,
      `${groupLabel} · ${option.label}${option.note ? `（${option.note}）` : ""}`
    );
  });
}

function addWardrobeValues(analysis, detail = currentViewDetail()) {
  const items = (detail && detail.detailEquipItems) || [];
  const wardrobeSlotLabel = (item) => ({
    MainHand: "主武器",
    Helmet: "頭盔",
    Shoulder: "肩甲",
    Torso: "上衣",
    Pants: "下衣",
    Gloves: "手套",
    Boots: "鞋子",
    Cape: "披風",
    Necklace: "項鍊",
    Earring1: "耳環1",
    Earring2: "耳環2",
    Ring1: "戒指1",
    Ring2: "戒指2",
  })[item.slotPosName] || slotLabel(item) || item.name || "部位";
  const baseStatValue = (stat, statKey) => {
    const id = stat && stat.id;
    if (statKey === "attack" && id !== "WeaponFixingDamage") return 0;
    if (statKey === "defense" && !["Defense", "ArmorDefense"].includes(id)) return 0;
    if (statKey === "attack") {
      const minValue = toNum(stat.minValue);
      const maxValue = toNum(stat.value);
      return minValue > 0 ? (minValue + maxValue) / 2 : maxValue;
    }
    return toNum(stat.value);
  };
  const itemBaseTotal = (item, statKey) => (item.mainStatsNormal || [])
    .reduce((sum, stat) => sum + baseStatValue(stat, statKey), 0);
  const categoryItems = (categoryKey) => {
    if (categoryKey === "weapon") {
      const item = items.find((equip) => equip.slotPosName === "MainHand");
      return item ? [item] : [];
    }
    const slots = categoryKey === "armor"
      ? ["Helmet", "Shoulder", "Torso", "Pants", "Gloves", "Boots", "Cape"]
      : ["Necklace", "Earring1", "Earring2", "Ring1", "Ring2"];
    return items.filter((item) => slots.includes(item.slotPosName));
  };
  const categoryPartForItem = (category, item) => {
    if (category.key === "accessory") {
      if (["Earring1", "Earring2"].includes(item.slotPosName)) return category.parts.find((part) => part.key === "Earring");
      if (["Ring1", "Ring2"].includes(item.slotPosName)) return category.parts.find((part) => part.key === "Ring");
    }
    return (category.parts || []).find((entry) => entry.key === item.slotPosName) || { key: item.slotPosName, label: wardrobeSlotLabel(item) };
  };
  WARDROBE_CATEGORIES.forEach((category) => {
    const parts = category.parts || [{ key: category.key, label: category.label }];
    if (!parts.some((part) => wardrobePartValue(category, part) > 0)) return;
    category.stats.forEach((stat) => {
      categoryItems(category.key).forEach((item) => {
        const part = categoryPartForItem(category, item);
        const base = itemBaseTotal(item, stat.statKey);
        const percent = wardrobePercent(category, stat, part);
        const value = base * (percent / 100);
        addSimulatedValue(
          analysis,
          { bucket: "primaryStats", statKey: stat.statKey, isPct: false },
          value,
          1,
          `衣櫃模擬 · ${category.label} · ${wardrobeSlotLabel(item)}`,
          `${wardrobePartValue(category, part)}/${category.max}P · ${stat.label} ${Math.round(base * 10) / 10} × ${formatWardrobePct(percent)}`
        );
      });
    });
  });
}

function analysisWithSimulators(analysis, detail = currentViewDetail()) {
  const next = cloneAnalysis(analysis);
  if (!next.primaryStats) return next;
  if (state.petSimulator.enabled) {
    activePetDisks().forEach((disk) => {
      normalizePetRows(disk.rows, disk.type).forEach((row) => {
        const option = petOption(disk.type, row.statKey);
        addPetValue(next, option, row, disk);
      });
    });
  }
  if (state.wingBonusEnabled) {
    activeWingRows().forEach((row) => addWingBonusValue(next, row));
  }
  if (state.titleBonusEnabled) {
    activeTitleRows().forEach((row) => addTitleValue(next, row));
  }
  if (state.wardrobeBonusEnabled) {
    addWardrobeValues(next, detail);
  }
  return next;
}

async function loadDetail(char, querySource = "detail") {
  setView("characterDetail");
  state.selectedChar = char;
  const SNAP_TTL_MS = 30 * 60 * 1000;
  const cached = loadSnapshots(char.characterId);
  const freshSnap = Object.values(cached).find((s) => isUsableSnapshot(s, SNAP_TTL_MS));
  if (freshSnap && !char._forceRefresh) {
    // 快照未过期，直接渲染不请求 API
    state.selectedId = char.characterId;
    state.detailTab = "equipment";
    state.detailLoading = false;
    state.snapshots = cached;
    state.snapshotTab = isUsableSnapshot(cached.pvp, SNAP_TTL_MS) ? "pvp" : "pve";
    state.selectedDetail = (cached[state.snapshotTab] || {}).detail || null;
    state.selectedAttack = (cached[state.snapshotTab] || {}).analysis || null;
    await ensureTitleCatalogReady();
    renderResults();
    renderDetail(currentViewDetail(), currentViewAnalysis());
    if (window.innerWidth > 980) setResultsCollapsed(true);
    trackCharacterQuery(char, currentViewDetail(), currentViewAnalysis(), querySource);
    setStatus("已顯示快照");
    return;
  }

  // 无快照或快照过期时，限制请求频率
  const hasSnap = !!(cached.pve || cached.pvp);
  if (!hasSnap) {
    const now = Date.now();
    if (lastDetailLoadTime > 0 && now - lastDetailLoadTime < DETAIL_COOLDOWN_MS) {
      const wait = Math.ceil((DETAIL_COOLDOWN_MS - (now - lastDetailLoadTime)) / 1000);
      setStatus(`請稍候 ${wait} 秒`);
      return;
    }
    lastDetailLoadTime = now;
  }

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
    const [equipmentResult, daevanionResult, wingEffects] = await Promise.all([
      enrichEquipment(equipList, char),
      loadDaevanionEntries(info, char),
      resolveWingEffects(equipment),
    ]);
    const detail = normalizeDetail(
      info,
      equipment,
      itemLevel,
      equipmentResult.items,
      daevanionResult.entries,
      wingEffects,
      daevanionResult.complete,
      equipmentResult.complete,
      equipmentResult.failedSlots,
    );
    const attributes = calcAttributes(detail);
    state.selectedDetail = detail;
    state.selectedAttack = attributes;
    const snapType = detectSnapshotType(detail);
    state.snapshots = detail.detailDataComplete ? saveSnapshot(char.characterId, snapType, detail, attributes) : loadSnapshots(char.characterId);
    state.snapshotTab = snapType;
    await ensureTitleCatalogReady();
    renderDetail(currentViewDetail(), currentViewAnalysis());
    if (window.innerWidth > 980) setResultsCollapsed(true);
    trackCharacterQuery(char, detail, attributes, querySource);
    pushHistory({
      ...char,
      characterName: detail.profile.characterName || char.characterName,
      className: detail.profile.className || char.className,
      race: detail.profile.raceId || char.race,
      level: detail.profile.characterLevel || char.level,
      serverName: detail.profile.serverName || char.serverName,
      serverId: detail.profile.serverId || char.serverId,
      profileImage: detail.profile.profileImage || char.profileImage,
      combatPower: detail.profile.combatPower || char.combatPower,
    });
    setStatus(detail.detailDataComplete ? "詳情已載入" : "詳情已載入（部分資料缺失，未保存快照）");
  } catch (error) {
    if (error.status === 429) {
      const fallback = loadSnapshots(char.characterId);
      const snap = isUsableSnapshot(fallback.pvp) ? fallback.pvp : (isUsableSnapshot(fallback.pve) ? fallback.pve : null);
      if (snap) {
        state.snapshots = fallback;
        state.snapshotTab = isUsableSnapshot(fallback.pvp) ? "pvp" : "pve";
        state.selectedDetail = snap.detail;
        state.selectedAttack = snap.analysis;
        renderDetail(currentViewDetail(), currentViewAnalysis());
        if (window.innerWidth > 980) setResultsCollapsed(true);
        trackCharacterQuery(char, currentViewDetail(), currentViewAnalysis(), `${querySource}:fallback-snapshot`);
        setStatus("已顯示快照（請求受限）");
        return;
      }
    }
    els.detailPanel.innerHTML = `<div class="error-box">詳情載入失敗：${html(error.message)}</div>`;
    setStatus("詳情失敗");
  } finally {
    state.detailLoading = false;
  }
}

async function enrichEquipment(equipList, char) {
  const failedSlots = [];
  const items = await mapLimit(equipList, 4, async (item) => {
    const params = new URLSearchParams({
      id: item.id,
      enchantLevel: String((item.enchantLevel || 0) + (item.exceedLevel || 0)),
      characterId: char.characterId,
      serverId: char.serverId,
      slotPos: item.slotPos,
    });
    try {
      const detail = await getJsonRetry(`/api/equipment-item?${params.toString()}`, 25000, 3);
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
        detailComplete: true,
      };
    } catch (error) {
      failedSlots.push(slotLabel(item) || item.slotPosName || String(item.slotPos || ""));
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
        detailComplete: false,
        detailError: error.message || "裝備詳情讀取失敗",
      };
    }
  });
  return {
    items,
    complete: failedSlots.length === 0,
    failedSlots,
  };
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

async function loadWingBonusCatalog() {
  if (!wingBonusCatalogPromise) {
    wingBonusCatalogPromise = fetch("/data/wing-bonus-catalog.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { wings: [] }))
      .catch(() => ({ wings: [] }));
  }
  state.wingBonusCatalog = await wingBonusCatalogPromise;
  ensureDefaultWingSelection();
  return state.wingBonusCatalog;
}

function wingId(row) {
  return String(row && (row.wingId || row.id || row.name) || "");
}

function wingCatalogRows() {
  return ((state.wingBonusCatalog || {}).wings || []).filter(Boolean);
}

function wingMaxLevel(row) {
  const max = row && row.maxLevel !== undefined ? row.maxLevel : 10;
  return clampInt(max, 0, 10);
}

function wingLevel(id, row = null) {
  const maxLevel = wingMaxLevel(row || wingCatalogRows().find((item) => wingId(item) === String(id)) || {});
  const saved = state.wingLevels && state.wingLevels[String(id)];
  return clampInt(saved === undefined ? maxLevel : saved, 0, maxLevel);
}

function wingEnchantStats(row, level = wingLevel(wingId(row), row)) {
  const byLevel = row && row.enchantStatsByLevel;
  const stats = byLevel && byLevel[String(level)];
  return Array.isArray(stats) ? stats : (Array.isArray(row && row.stats) ? row.stats : []);
}

function wingHoldingStats(row, level = wingLevel(wingId(row), row)) {
  const byLevel = row && row.holdingStatsByLevel;
  const levelStats = byLevel && byLevel[String(level)];
  if (Array.isArray(levelStats) && levelStats.length) return levelStats;
  return Array.isArray(row && row.holdingStats) ? row.holdingStats : [];
}

function wingStatsForLevel(row) {
  const level = wingLevel(wingId(row), row);
  return [
    ...wingHoldingStats(row, level),
    ...wingEnchantStats(row, level),
  ];
}

function ensureDefaultWingSelection() {
  const rows = wingCatalogRows();
  if (!rows.length) return;
  let levelsChanged = false;
  rows.forEach((row) => {
    const id = wingId(row);
    if (!id) return;
    if (!state.wingLevels) state.wingLevels = {};
    if (state.wingLevels[id] === undefined) {
      state.wingLevels[id] = wingMaxLevel(row);
      levelsChanged = true;
    }
  });
  if (levelsChanged) saveWingLevels();
  if (state.wingSelectionInitialized) return;
  state.selectedWingIds = rows.map(wingId).filter(Boolean);
  state.wingSelectionInitialized = true;
  saveSelectedWingIds();
}

function selectedWingSet() {
  return new Set((state.selectedWingIds || []).map(String));
}

function activeWingRows() {
  const selected = selectedWingSet();
  return wingCatalogRows().filter((row) => selected.has(wingId(row)));
}

function refreshSimulatorDependentViews() {
  if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  if (state.view === "petInsight") renderPetInsightSimulator();
  if (state.view === "wings") renderWingSimulator();
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

function daevanionStatDescriptions(data) {
  const summary = Array.isArray(data && data.openStatEffectList)
    ? data.openStatEffectList.map((effect) => effect && effect.desc).filter(Boolean)
    : [];
  if (summary.length) return summary;
  const descriptions = [];
  (Array.isArray(data && data.nodeList) ? data.nodeList : []).forEach((node) => {
    if (!node || node.open !== 1 || node.type !== "Stat") return;
    (Array.isArray(node.effectList) ? node.effectList : []).forEach((effect) => {
      if (effect && effect.desc) descriptions.push(effect.desc);
    });
  });
  return descriptions;
}

async function loadDaevanionEntries(info, char) {
  const boards = (info.daevanion && info.daevanion.boardList) || [];
  if (!boards.length) return { entries: [], complete: true };
  const results = await mapLimit(boards, 3, async (board) => {
    const params = new URLSearchParams({
      characterId: char.characterId,
      serverId: char.serverId,
      boardId: board.id,
    });
    try {
      const data = await getJsonRetry(`/api/daevanion?${params.toString()}`, 25000, 3);
      return { board, data };
    } catch (error) {
      return { board, data: null, error };
    }
  });

  const entries = [];
  let complete = true;
  results.forEach(({ board, data }) => {
    const descriptions = daevanionStatDescriptions(data);
    if (!data || !descriptions.length) {
      complete = false;
      return;
    }
    descriptions.forEach((rawDesc) => {
      const desc = String(rawDesc || "");
      if (desc && /[\d.]+%?/.test(desc)) entries.push({ boardName: board.name || board.id, desc });
    });
  });
  return { entries, complete };
}

function normalizeDetail(
  info,
  equipment,
  itemLevel,
  detailEquipItems,
  daevanionEntries,
  wingEffects,
  daevanionComplete = true,
  equipmentComplete = true,
  failedEquipSlots = [],
) {
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
    detailDaevanionComplete: daevanionComplete,
    detailEquipmentComplete: equipmentComplete,
    detailFailedEquipSlots: failedEquipSlots,
    detailDataComplete: daevanionComplete && equipmentComplete,
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
  const characterLevel = toNum((detail.profile || {}).characterLevel);
  if (characterLevel >= 50) {
    addEntry(charGroup, "角色等級額外攻擊力", 66, false);
    addEntry(charGroup, "角色等級額外防禦力", 490, false);
    addEntry(charGroup, "角色等級生命力", 5340, false);
  }
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
    let parsed = toNum(value);
    let usePct = isPct;
    const isSpeedStat = key === "combatSpeed" || key === "moveSpeed";
    if (isSpeedStat && !usePct) {
      parsed = parsed / 10;
      usePct = true;
    }
    if (!target || !Number.isFinite(parsed) || parsed === 0 || (usePct && !isSpeedStat)) return;
    if (usePct) target.pct += parsed;
    else target.flat += parsed;
    target.count += 1;
    const source = findSource(target, sourceLabel);
    if (usePct) source.pct += parsed;
    else source.flat += parsed;
    source.details.push({ label: detailLabel, value: parsed, isPct: usePct });
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
    if (Array.isArray(effect.levelTable) && effect.levelTable.length) {
      const rows = effect.levelTable
        .map((row) => ({ level: toNum(row.level), value: toNum(row.value) }))
        .sort((a, b) => a.level - b.level);
      let value = rows[0].value;
      rows.forEach((row) => {
        if (level >= row.level) value = row.value;
      });
      return value;
    }
    const baseLevel = typeof effect.baseLevel === "undefined" ? 0 : toNum(effect.baseLevel);
    const growthLevel = Math.max(0, level - baseLevel);
    return toNum(effect.base) + toNum(effect.perLevel) * growthLevel;
  }

  function classEffectIsPct(effect, defs, fallback = true) {
    if (typeof effect.isPct !== "undefined") return !!effect.isPct;
    const def = defs.find((item) => item.key === effect.key);
    return def ? !!def.isPct : fallback;
  }

  function passiveSourceValue(conversion) {
    if (conversion.sourceBucket === "primary") {
      const source = values[conversion.sourceKey];
      if (!source) return 0;
      const pctKey = conversion.sourceKey === "hp" ? "pHp" : conversion.sourceKey === "mp" ? "pMp" : "";
      const pct = pctKey && pctValues[pctKey] ? pctValues[pctKey].pct : 0;
      return source.flat * (1 + pct / 100);
    }
    if (conversion.sourceBucket === "other") {
      const source = otherValues[conversion.sourceKey];
      if (!source) return 0;
      return source.flat * (1 + source.pct / 100);
    }
    return 0;
  }

  function applyPassiveConversion(conversion, level, sourceLabel) {
    const ratio = configuredEffectValue(conversion, level);
    const sourceValue = passiveSourceValue(conversion);
    const converted = sourceValue * ratio / 100;
    if (!Number.isFinite(converted) || converted === 0) return;
    const roundedSource = Math.round(sourceValue * 10) / 10;
    const roundedRatio = Math.round(ratio * 10) / 10;
    const detailLabel = `職業配置：${conversion.label}（${formatNumber(roundedSource)} × ${formatNumber(roundedRatio)}%）`;
    if (conversion.targetBucket === "primary") addValue(conversion.targetKey, converted, false, sourceLabel, detailLabel);
    else if (conversion.targetBucket === "other") addConfiguredValue(otherValues, conversion.targetKey, converted, false, sourceLabel, detailLabel);
  }

  function applyClassPassiveEffects() {
    const className = (detail.profile && detail.profile.className) || "";
    const config = CLASS_PASSIVE_CONFIGS[className];
    if (!config) return;
    const skills = detail.detailSkillPassive || [];
    config.skills.forEach((skillConfig) => {
      const names = [skillConfig.name].concat(skillConfig.aliases || []);
      const skill = skills.find((item) => names.includes(item.name));
      if (!skill || skill.acquired === 0) return;
      const level = Math.max(0, toNum(skill.skillLevel));
      if (!level) return;
      const sourceLabel = `被動技能 · ${skillConfig.name} Lv.${level}`;
      skillConfig.effects.forEach((effect) => {
        const value = configuredEffectValue(effect, level);
        const detailLabel = `職業配置：${effect.label}`;
        if (effect.bucket === "primary") addValue(effect.key, value, false, sourceLabel, detailLabel);
        else if (effect.bucket === "pct") addConfiguredValue(pctValues, effect.key, value, true, sourceLabel, detailLabel);
        else if (effect.bucket === "basicCombatAmp") addConfiguredValue(basicCombatAmpValues, effect.key, value, classEffectIsPct(effect, BASIC_COMBAT_AMP_STAT_DEFS), sourceLabel, detailLabel);
        else if (effect.bucket === "envCombatAmp") addConfiguredValue(envCombatAmpValues, effect.key, value, classEffectIsPct(effect, ENV_COMBAT_AMP_STAT_DEFS), sourceLabel, detailLabel);
        else if (effect.bucket === "abnormal") addConfiguredValue(abnormalValues, effect.key, value, classEffectIsPct(effect, ABNORMAL_STAT_DEFS), sourceLabel, detailLabel);
        else if (effect.bucket === "other") addConfiguredValue(otherValues, effect.key, value, classEffectIsPct(effect, OTHER_STAT_DEFS, false), sourceLabel, detailLabel);
      });
      (skillConfig.conversions || []).forEach((conversion) => applyPassiveConversion(conversion, level, sourceLabel));
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

  function addPctStat(stat, sourceLabel, detailKind) {
    if (!stat) return;
    const def = matchPctMetric(stat);
    if (!def) return;
    const name = String(stat.name || stat.desc || "");
    let num = toNum(String(stat.value ?? "").replace("%", "")) + toNum(String(stat.extra ?? "").replace("%", ""));
    if (def.key === "cooldownReduce" && num < 0) num = Math.abs(num);
    if (!Number.isFinite(num) || num === 0) return;
    const target = pctValues[def.key];
    const source = findSource(target, sourceLabel);
    target.pct += num;
    target.count += 1;
    source.pct += num;
    source.details.push({ label: `${detailKind} · ${name}`, value: num, isPct: true });
  }

  function addStat(stat, sourceLabel = "其他來源", detailKind = "能力值", sourceType = "") {
    if (!stat) return;
    const name = String(stat.name || stat.desc || "");
    const value = stat.value ?? "";
    const extra = stat.extra ?? "";
    const isPct = String(value).includes("%") || String(extra).includes("%") || name.includes("增加");
    if (/最大攻擊力|最大攻击力/.test(name)) {
      const total = toNum(String(value).replace("%", "")) + toNum(String(extra).replace("%", ""));
      if (Number.isFinite(total) && total !== 0) addValue("attack", total * 0.5, false, sourceLabel, `${detailKind} · ${name}（按平均攻擊力折算 50%）`);
      return;
    }
    if (addEnvCombatAmpStat(stat, sourceLabel, detailKind, sourceType)) return;
    if (addAbnormalStat(stat, sourceLabel, detailKind)) return;
    const pctDef = matchPctMetric(stat);
    if (pctDef && (isPct || !matchOtherMetric(stat))) {
      addPctStat(stat, sourceLabel, detailKind);
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

  function addDesc(desc, sourceLabel = "其他來源", detailKind = "能力值", sourceType = "") {
    if (!desc || typeof desc !== "string") return;
    const text = desc.trim();
    if (/[，,、]/.test(text) && !/^[^，,、]+時[，,、]/.test(text)) {
      text.split(/[，,、]/).forEach((part) => addDesc(part.trim(), sourceLabel, detailKind, sourceType));
      return;
    }
    const match = text.match(/^(?:(.+?時)[，,])?(.+?)\s*([+-]?[\d.]+%?)$/);
    if (!match) return;
    const condition = match[1] ? `（${match[1].trim()}）` : "";
    let name = match[2].trim();
    const value = match[3].trim();
    if (!value.includes("%") && /^(攻擊力|攻击力|防禦力|防御力|命中|迴避|回避|暴擊|暴击|暴擊抵抗|暴击抵抗)增加$/.test(name)) {
      name = name.replace(/增加$/, "");
    }
    addStat({ name, value }, sourceLabel, `${detailKind}${condition}`, sourceType);
  }

  function addDerivedStatItem(item, sourceLabel, detailKind) {
    if (item && typeof item === "object") {
      const value = item.value;
      const extra = item.extra;
      const id = item.id || item.key || item.type || item.statId || item.statType || item.optionId || item.optionType || "";
      const name = item.name || item.desc || item.statName || item.optionName || item.displayName || "";
      const text = String(name);
      if ((value === undefined || value === null || value === "") && (extra === undefined || extra === null || extra === "") && /[+-]?[\d.]+%?/.test(text)) {
        addDesc(text, sourceLabel, detailKind, "");
        return;
      }
      addStat({ id, name, value, extra }, sourceLabel, detailKind, "");
      return;
    }
    addDesc(String(item), sourceLabel, detailKind, "");
  }

  function addActiveSetBonuses() {
    const seen = new Set();
    (detail.detailEquipItems || []).forEach((item) => {
      const set = item.set;
      const key = set && (set.id || set.name);
      if (!set || seen.has(key)) return;
      seen.add(key);
      const equippedCount = toNum(set.equippedCount);
      const setType = isCardItem(item) ? "阿爾卡納套裝" : "裝備套裝";
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
    (stat.statSecondList || []).forEach((item) => addDerivedStatItem(item, sourceLabel, "派生能力"));
  });
  detail.detailStatSecondary.forEach((stat) => {
    const sourceLabel = `能力值 · ${stat.name || stat.type}`;
    (stat.statSecondList || []).forEach((item) => addDerivedStatItem(item, sourceLabel, "派生能力"));
  });
  detail.detailStatSecondary.forEach((stat) => {
    const def = PRIMARY_STAT_DEFS.find((d) => d.ids.includes(stat.type || ""));
    if (!def || !["combatSpeed", "moveSpeed"].includes(def.key)) return;
    const value = toNum(stat.value);
    if (value > 0) addValue(def.key, value, false, "角色轉換", `屬性轉換 · ${stat.name || stat.type}`);
  });
  detail.detailStatSecondary.forEach((stat) => {
    const pctDef = PCT_STAT_DEFS.find((d) => d.ids.includes(stat.type || ""));
    if (!pctDef) return;
    if ((stat.statSecondList || []).length > 0) return;
    addPctStat({ id: stat.type, name: stat.name, value: stat.value }, "角色轉換", `屬性轉換 · ${stat.name || stat.type}`);
  });
  detail.detailTitleGroups.forEach((group) => {
    group.items.forEach((title) => {
      const titleLabel = `稱號 · ${title.name || "稱號"}`;
      (title.statList || []).forEach((stat) => addDerivedStatItem(stat, titleLabel, "稱號"));
      (title.equipStatList || []).forEach((stat) => addDerivedStatItem(stat, titleLabel, "稱號"));
    });
  });
  detail.detailDaevanionEntries.forEach((entry) => addDesc(entry.desc || `額外攻擊力 +${entry.value}`, "守護力", entry.boardName || "守護力", "daevanion"));
  extractWingStats(detail).forEach((stat) => {
    const wingName = (detail.petwing && detail.petwing.wing && detail.petwing.wing.name) || (detail.wingEffects && detail.wingEffects.name) || "翅膀";
    addStat(stat, `翅膀 · ${wingName}`, "佩戴效果", "wing");
  });
  const level = toNum((detail.profile || {}).characterLevel);
  if (level >= 50) {
    addValue("extraAttack", 66, false, "角色等級", "基礎能力值 · Lv.50");
    addValue("extraDefense", 490, false, "角色等級", "基礎能力值 · Lv.50");
    addValue("hp", 5340, false, "角色等級", "基礎能力值 · Lv.50");
  }
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

function formatKm(value) {
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return "—";
  const abs = Math.abs(num);
  if (abs >= 1_000_000) return `${Math.round((num / 1_000_000) * 10) / 10}M`;
  if (abs >= 1_000) return `${Math.round((num / 1_000) * 10) / 10}K`;
  return String(Math.round(num));
}

function statBucketValue(analysis, bucket, key) {
  const stat = ((analysis && analysis[bucket]) || []).find((item) => item.key === key);
  return stat || { flat: 0, pct: 0 };
}

function estimateCombatScore(analysis) {
  if (!analysis) return null;
  const isPvp = state.snapshotTab === "pvp";
  const pri = (key) => statBucketValue(analysis, "primaryStats", key);
  const pct = (key) => statBucketValue(analysis, "pctStats", key);
  const env = (key) => statBucketValue(analysis, "envCombatAmpStats", key);
  const amp = (key) => statBucketValue(analysis, "basicCombatAmpStats", key);
  const other = (key) => statBucketValue(analysis, "otherStats", key);
  const basic = (key) => statBucketValue(analysis, "basicCombatStats", key);

  const attack = (pri("attack").flat + pri("extraAttack").flat + (isPvp ? env("pvpAttack").flat : env("pveAttack").flat)) * (1 + pct("pAttack").pct / 100);
  const defense = (pri("defense").flat + pri("extraDefense").flat + (isPvp ? env("pvpDefense").flat : env("pveDefense").flat)) * (1 + pct("pDefense").pct / 100);
  const hit = (pri("hit").flat + pri("extraHit").flat + (isPvp ? env("pvpHit").flat : env("pveHit").flat)) * (1 + pct("pHit").pct / 100);
  const evasion = (pri("evasion").flat + pri("extraEvasion").flat + (isPvp ? env("pvpEvasion").flat : env("pveEvasion").flat)) * (1 + pct("pEvasion").pct / 100);
  const critical = (pri("critical").flat + (isPvp ? env("pvpCritical").flat : 0)) * (1 + pct("pCritical").pct / 100);
  const criticalResist = (pri("criticalResist").flat + (isPvp ? env("pvpCriticalResist").flat : 0)) * (1 + pct("pCritResist").pct / 100);
  const hp = pri("hp").flat * (1 + pct("pHp").pct / 100);
  const combatSpeed = pri("combatSpeed").flat + pri("combatSpeed").pct;
  const moveSpeed = pri("moveSpeed").flat + pri("moveSpeed").pct;
  const damageAmp = amp("damageAmp").pct + amp("weaponDamageAmp").pct + amp("critDamageAmp").pct * 0.7 + amp("backDamageAmp").pct * 0.55 + (isPvp ? env("pvpDamageAmp").pct : env("pveDamageAmp").pct);
  const damageResist = amp("damageResist").pct + amp("weaponDamageResist").pct + amp("critDamageResist").pct * 0.65 + amp("backDamageResist").pct * 0.5 + (isPvp ? env("pvpDamageResist").pct : env("pveDamageResist").pct);
  const utility = other("multiHit").pct * 180 + other("powerStrike").pct * 155 + other("ironWallPen").pct * 130 + other("ironWall").pct * 110 + basic("penetration").flat * 0.9 + basic("soulstoneDamage").flat * 0.7;
  const speedBonus = Math.max(0, combatSpeed) * 115 + Math.max(0, moveSpeed) * 36 + Math.max(0, pct("cooldownReduce").pct) * 170;
  const sustain = other("block").flat * 1.2 + other("regen").pct * 120 + other("healingReceived").pct * 95 + other("hpRegen").flat * 0.8;

  const offense = attack * 7.2 + hit * 1.45 + critical * 1.75 + damageAmp * 260 + utility + speedBonus;
  const survival = defense * 4.2 + hp * 0.42 + evasion * 1.15 + criticalResist * 1.25 + damageResist * 210 + sustain;
  const modeFactor = isPvp ? 1.03 : 1;
  return Math.round((offense * 0.64 + survival * 0.36) * modeFactor);
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
  const selectedWingCount = activeWingRows().length;
  const selectedTitleCount = activeTitleRows().length;

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
  const cooldownReduce = pct("cooldownReduce").pct;
  const damageAmp    = isPvp ? env("pvpDamageAmp").pct    : env("pveDamageAmp").pct;
  const damageResist = isPvp ? env("pvpDamageResist").pct : env("pveDamageResist").pct;
  const weaponAmp = amp("weaponDamageAmp").pct;
  const weaponResist = amp("weaponDamageResist").pct;
  const critAmp   = amp("critDamageAmp").pct;
  const critResist = amp("critDamageResist").pct;
  const multiHit = other("multiHit").pct;
  const multiHitResist = other("multiHitResist").pct;
  const powerStrike = other("powerStrike").pct;
  const backDamageAmp = amp("backDamageAmp").pct;
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
    const convertedFlat = f ? f / 10 : 0;
    const total = convertedFlat + p;
    return total ? `+${Math.round(total * 10) / 10}%` : "—";
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
    { label: "後方傷害增幅", value: fp(backDamageAmp), tooltip: tip("基礎戰鬥增幅：後方傷害增幅", [{ label: "後方傷害增幅", value: fp(backDamageAmp) }]) },
    { label: "鐵壁貫穿", value: fp(ironWallPen), tooltip: tip("其他手段：鐵壁貫穿", [{ label: "鐵壁貫穿", value: fp(ironWallPen) }]) },
    { label: "鐵壁", value: fp(ironWall), tooltip: tip("其他手段：鐵壁", [{ label: "鐵壁", value: fp(ironWall) }]) },
    { label: "生命力", value: fi(hp), tooltip: tip("生命力 × 生命力增加%", [
      { label: "生命力", value: fi(pri("hp").flat) },
      { label: "生命力增加", value: fp(pct("pHp").pct) },
    ]) },
    { label: "冷卻時間減少", value: fp(cooldownReduce), tooltip: tip("百分比增加：冷卻時間減少", [{ label: "冷卻時間減少", value: fp(cooldownReduce) }]) },
    { label: "戰鬥速度", value: fspd(csFlat, csPct), tooltip: tip("戰鬥速度：面板值 ÷ 10 + 百分比", [
      { label: "面板值換算", value: csFlat ? fp(csFlat / 10) : "" },
      { label: "百分比來源", value: csPct ? fp(csPct) : "" },
    ]) },
    { label: "移動速度", value: fspd(msFlat, msPct), tooltip: tip("移動速度：面板值 ÷ 10 + 百分比", [
      { label: "面板值換算", value: msFlat ? fp(msFlat / 10) : "" },
      { label: "百分比來源", value: msPct ? fp(msPct) : "" },
    ]) },
  ];

  return `
    <div class="combat-panel">
      <div class="combat-panel-head">
        <div class="combat-panel-title">
          <span>${isPvp ? "PVP" : "PVE"} 戰鬥面板</span>
          <button type="button" class="pet-sim-help" aria-label="戰鬥面板模擬說明" data-tooltip="普通盤默認：額外命中35×3、額外攻擊力14×3、強擊2.0%×2、傷害耐性2.0%×1&#10;特殊盤默認：額外攻擊力14×6、強擊2.0%×2、傷害耐性2.0%×1&#10;翅膀/稱號/衣櫃：開啟後分別套用已選翅膀持有與強化、已選稱號持有效果、衣櫃基礎能力折算。">?</button>
        </div>
      </div>
      <div class="combat-panel-toggles">
        <div class="pet-sim-actions">
          <button type="button" class="pet-sim-toggle${state.petSimulator.enabled ? " active" : ""}" data-pet-sim-toggle aria-pressed="${state.petSimulator.enabled ? "true" : "false"}">
            <i></i>${state.petSimulator.enabled ? "寵物" : "寵物"}
          </button>
          <button type="button" class="pet-sim-toggle wing-bonus-toggle${state.wingBonusEnabled ? " active" : ""}" data-wing-bonus-toggle aria-pressed="${state.wingBonusEnabled ? "true" : "false"}" title="翅膀模擬：開啟後把已選 ${selectedWingCount} 個翅膀的自身屬性與所選強化等級加入屬性分析與綜合評級">
            <i></i>${state.wingBonusEnabled ? "翅膀" : "翅膀"}
          </button>
          <button type="button" class="pet-sim-toggle title-bonus-toggle${state.titleBonusEnabled ? " active" : ""}" data-title-bonus-toggle aria-pressed="${state.titleBonusEnabled ? "true" : "false"}" title="稱號模擬：開啟後把已選 ${selectedTitleCount} 個稱號的持有效果與裝備效果加入屬性分析與綜合評級">
            <i></i>稱號
          </button>
          <button type="button" class="pet-sim-toggle wardrobe-bonus-toggle${state.wardrobeBonusEnabled ? " active" : ""}" data-wardrobe-bonus-toggle aria-pressed="${state.wardrobeBonusEnabled ? "true" : "false"}" title="衣櫃加成：武器最多+25%攻擊力，防具最多+50%防禦力，飾品最多+25%攻擊力與防禦力">
            <i></i>衣櫃
          </button>
        </div>
      </div>
      ${(state.petSimulator.enabled || state.wingBonusEnabled || state.titleBonusEnabled || state.wardrobeBonusEnabled) ? `<a class="pet-sim-link" href="${html(activeSimulationHref())}" data-simulation-link>前往模擬界面</a>` : ""}
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
      return statOverviewItem(def.label, stat, true);
    }), "basic")}
    ${renderStatOverviewPanel("屬性轉換", SECONDARY_PANEL_ORDER.map((label) => {
      const stat = findSecondaryStat(detail.detailStatSecondary || [], label);
      return statOverviewItem(label, stat);
    }), "secondary")}
    ${renderCharacterInfoPanels(detail)}
  `;
}

function renderCharacterInfoPanels(detail) {
  return `
    ${renderDaevanionOverview(detail)}
    ${renderRankingOverview(detail)}
    ${renderTitleOverview(detail)}
  `;
}

function renderDaevanionOverview(detail) {
  const boards = ((detail.info || {}).daevanion || {}).boardList || [];
  if (!boards.length) return "";
  return renderSideInfoPanel("守護力進度", boards.map((board) => `
    <article class="side-info-row">
      ${renderSideInfoIcon(board.icon, board.name)}
      <div class="side-info-body">
        <strong>${html(board.name || "守護力")}</strong>
        <span>${html(board.openNodeCount ?? 0)}/${html(board.totalNodeCount ?? 0)} 節點</span>
      </div>
      <b>${html(board.openPercent ?? 0)}%</b>
    </article>
  `).join(""));
}

function renderRankingOverview(detail) {
  const rows = (((detail.info || {}).ranking || {}).rankingList || []).filter((row) => row && row.rank !== null && row.rank !== undefined);
  if (!rows.length) return "";
  return renderSideInfoPanel("排名", rows.map((row) => `
    <article class="side-info-row">
      ${renderSideInfoIcon(row.gradeIcon, row.gradeName)}
      <div class="side-info-body">
        <strong>${html(row.rankingContentsName || "排名")}</strong>
        <span>${html(row.gradeName || "未分級")}${row.point !== null && row.point !== undefined ? ` · ${html(formatNumber(row.point))}` : ""}</span>
      </div>
      <b>#${html(row.rank)}</b>
    </article>
  `).join(""));
}

function renderTitleOverview(detail) {
  const titles = (((detail.info || {}).title || {}).titleList || []).filter((title) => {
    return (title.statList || []).length || (title.equipStatList || []).length;
  });
  if (!titles.length) return "";
  return renderSideInfoPanel("稱號效果", titles.map((title) => {
    const statText = (title.statList || []).map(statDescText).filter(Boolean).join("、");
    const equipText = (title.equipStatList || []).map(statDescText).filter(Boolean).join("、");
    return `
      <article class="side-info-row side-info-row--title">
        <div class="side-info-icon side-info-icon--text grade-${html(title.grade || "")}">${html(titleCategoryLabel(title.equipCategory).slice(0, 1))}</div>
        <div class="side-info-body">
          <strong class="grade-${html(title.grade || "")}">${html(title.name || "稱號")}</strong>
          <span>${html(titleCategoryLabel(title.equipCategory))}</span>
          ${statText ? `<small>持有效果：${html(statText)}</small>` : ""}
          ${equipText ? `<small>裝備效果：${html(equipText)}</small>` : ""}
        </div>
      </article>
    `;
  }).join(""));
}

function renderSideInfoPanel(title, body) {
  return `
    <section class="side-info-panel">
      <div class="side-stat-head">${html(title)}</div>
      <div class="side-info-list">${body}</div>
    </section>
  `;
}

function renderSideInfoIcon(src, label = "") {
  return `
    <div class="side-info-icon">
      ${src ? `<img src="${html(src)}" alt="${html(label)}" />` : `<span>${html(String(label || "?").slice(0, 1))}</span>`}
    </div>
  `;
}

function statDescText(stat) {
  if (!stat) return "";
  if (typeof stat === "string") return stat;
  return stat.desc || [stat.name, stat.value, stat.extra].filter((value) => value !== undefined && value !== null && value !== "" && value !== "0").join(" ");
}

function titleCategoryLabel(category) {
  return { Attack: "攻擊稱號", Defense: "防禦稱號", Etc: "其他稱號" }[category] || "其他稱號";
}

function formatNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num.toLocaleString("zh-TW") : value;
}

function findSecondaryStat(stats, label) {
  return stats.find((stat) => stat.name === label);
}

function statOverviewItem(label, stat, applyCap = false) {
  const value = stat ? (stat.value ?? stat.statValue ?? stat.totalValue ?? "-") : "-";
  const popHtml = statTooltipHtml(stat, applyCap);
  return { label, value: value || "-", popHtml };
}

function statTooltipHtml(stat, applyCap = false) {
  if (!stat || !Array.isArray(stat.statSecondList) || !stat.statSecondList.length) return "";
  const PCT_CAP = 20;
  return stat.statSecondList.map((item) => {
    let text;
    if (item && typeof item === "object") {
      const name = item.name || item.desc || item.type || item.id || "轉化";
      const val = [item.value, item.extra].filter((v) => v !== undefined && v !== null && v !== "" && v !== "0" && v !== "0%").join(" / ");
      text = val ? `${name} ${val}` : String(name);
    } else {
      text = String(item);
    }
    const pctMatch = text.match(/([+-]?)([\d.]+)%/);
    if (applyCap && pctMatch) {
      const abs = parseFloat(pctMatch[2]);
      if (Number.isFinite(abs) && abs > PCT_CAP) {
        const sign = pctMatch[1];
        const pre = html(text.substring(0, pctMatch.index));
        const suf = html(text.substring(pctMatch.index + pctMatch[0].length));
        return `<div class="pop-row">${pre}<b class="pop-eff">${sign}${PCT_CAP}%</b> <span class="pop-raw">${html(pctMatch[0])}</span>${suf}</div>`;
      }
    }
    return `<div class="pop-row">${html(text)}</div>`;
  }).filter(Boolean).join("");
}

function renderStatOverviewPanel(title, items, mode) {
  return `
    <div class="side-stat-panel side-stat-panel--${html(mode)}">
      <div class="side-stat-head">${html(title)}</div>
      <div class="side-stat-grid">
        ${items.map((item) => `
          <div class="side-stat-cell${item.popHtml ? " has-popover" : ""}">
            <span>${html(item.label)}</span>
            <strong>${html(item.value)}</strong>
            ${item.popHtml ? `<div class="side-stat-pop">${item.popHtml}</div>` : ""}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function petDiskUsedCount(disk) {
  return (disk.rows || []).reduce((sum, row) => sum + clampInt(row.count, 0, 9), 0);
}

function petStatUsedCount(disk, statKey, excludeRowIndex = -1) {
  return (disk.rows || []).reduce((sum, row, index) => {
    if (index === excludeRowIndex || row.statKey !== statKey) return sum;
    return sum + clampInt(row.count, 0, 9);
  }, 0);
}

function formatPetValue(option, value) {
  return option.isPct ? `${Math.round(toNum(value) * 10) / 10}%` : String(Math.round(toNum(value) * 10) / 10);
}

function petDiskTotalText(disk) {
  const totals = {};
  normalizePetRows(disk.rows, disk.type).forEach((row) => {
    const option = petOption(disk.type, row.statKey);
    const key = option.key;
    totals[key] = totals[key] || { option, value: 0 };
    totals[key].value += petLineTotal(row, option);
  });
  const parts = Object.values(totals)
    .filter((item) => item.value)
    .map((item) => `${item.option.label} +${formatPetValue(item.option, item.value)}`);
  return parts.length ? parts.join(" / ") : "未配置";
}

function activePetTotalText() {
  const totals = {};
  activePetDisks().forEach((disk) => {
    normalizePetRows(disk.rows, disk.type).forEach((row) => {
      const option = petOption(disk.type, row.statKey);
      const key = option.key;
      totals[key] = totals[key] || { option, value: 0 };
      totals[key].value += petLineTotal(row, option);
    });
  });
  const parts = Object.values(totals)
    .filter((item) => item.value)
    .map((item) => `${item.option.label} +${formatPetValue(item.option, item.value)}`);
  return parts.length ? parts.join(" / ") : "未配置";
}

function renderPetSimulatorEditor() {
  const template = activePetTemplate();
  const collapsed = !!state.petSimulator.collapsed;
  return `
    <section class="pet-sim-panel${collapsed ? " collapsed" : ""}" id="pet-simulator">
      <div class="side-stat-head pet-sim-head">
        <div>
          <span>寵物盤模擬</span>
          <small>${html(template.name || `模板 ${state.petSimulator.activeTemplate + 1}`)}</small>
          <div class="pet-template-summary">${html(activePetTotalText())}</div>
        </div>
        <div class="pet-sim-head-actions">
          <button type="button" data-pet-collapse>${collapsed ? "展開" : "收起"}</button>
          <button type="button" data-pet-reset ${collapsed ? "disabled" : ""}>重置模板</button>
        </div>
      </div>
      ${collapsed ? "" : `
      <div class="pet-template-bar">
        ${state.petSimulator.templates.map((item, index) => `
          <button type="button" class="${state.petSimulator.activeTemplate === index ? "active" : ""}" data-pet-template="${index}">
            ${html(item.name || `模板 ${index + 1}`)}
          </button>
        `).join("")}
      </div>
      <label class="pet-template-name">
        <span>模板名稱</span>
        <input data-pet-template-name type="text" maxlength="12" value="${html(template.name || "")}" />
      </label>
      <div class="pet-disk-list">
        ${activePetDisks().map((disk, diskIndex) => renderPetDiskEditor(disk, diskIndex)).join("")}
      </div>
      `}
    </section>
  `;
}

function renderPetDiskEditor(disk, diskIndex) {
  const used = petDiskUsedCount(disk);
  return `
    <article class="pet-disk-card">
      <div class="pet-disk-title">
        <div>
          <strong>${html(disk.name)}</strong>
          <span>${html(PET_DISK_TYPES[disk.type])} · ${used}/9 條</span>
        </div>
        <button type="button" data-pet-add-row="${diskIndex}" ${used >= 9 ? "disabled" : ""}>新增</button>
      </div>
      <div class="pet-disk-summary">${html(petDiskTotalText(disk))}</div>
      <div class="pet-row-list">
        ${normalizePetRows(disk.rows, disk.type).map((row, rowIndex) => renderPetRowEditor(disk, diskIndex, row, rowIndex)).join("")}
      </div>
    </article>
  `;
}

function renderPetRowEditor(disk, diskIndex, row, rowIndex) {
  const option = petOption(disk.type, row.statKey);
  const options = petOptionsForType(disk.type).filter((item) => item.maxCount > 0);
  const rowCount = clampInt(row.count, 0, 9);
  const usedWithoutCurrent = petDiskUsedCount(disk) - rowCount;
  const currentRowFillsDisk = rowCount >= 9 && usedWithoutCurrent <= 0;
  return `
    <div class="pet-row" data-pet-disk="${diskIndex}" data-pet-row="${rowIndex}">
      <select data-pet-field="statKey" aria-label="寵物盤屬性">
        ${options.map((item) => {
          const selected = item.key === row.statKey;
          const used = petStatUsedCount(disk, item.key, rowIndex);
          const disabled = !selected && (currentRowFillsDisk || used >= item.maxCount || usedWithoutCurrent + rowCount > 9 || rowCount > item.maxCount);
          return `<option value="${html(item.key)}" ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}>${html(item.label)}${disabled ? "（已滿）" : ""}</option>`;
        }).join("")}
      </select>
      <label>
        <span>條數</span>
        <input data-pet-field="count" type="number" min="1" max="${html(option.maxCount)}" step="1" value="${html(row.count)}" />
      </label>
      <label>
        <span>數值</span>
        <input data-pet-field="value" type="number" min="0" max="${html(option.max)}" step="${option.isPct ? "0.1" : "1"}" value="${html(row.value)}" />
      </label>
      <button type="button" data-pet-delete-row="${diskIndex}:${rowIndex}" title="刪除">刪</button>
      <small>上限 ${html(option.max)}${option.isPct ? "%" : ""} / ${html(option.maxCount)}條</small>
    </div>
  `;
}

function handlePetSimulatorClick(event) {
  if (event.target.closest("[data-pet-collapse]")) {
    state.petSimulator.collapsed = !state.petSimulator.collapsed;
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  if (event.target.closest("[data-pet-reset]")) {
    resetActivePetTemplate();
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  const petTemplateButton = event.target.closest("[data-pet-template]");
  if (petTemplateButton) {
    state.petSimulator.activeTemplate = clampInt(petTemplateButton.dataset.petTemplate, 0, 2);
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  const addPetRow = event.target.closest("[data-pet-add-row]");
  if (addPetRow) {
    const disk = activePetDisks()[Number(addPetRow.dataset.petAddRow)];
    if (!disk || petDiskUsedCount(disk) >= 9) return true;
    const option = petOptionsForType(disk.type).find((item) => item.maxCount > 0);
    disk.rows.push({ statKey: option.key, count: 1, value: option.max });
    disk.rows = normalizePetRows(disk.rows, disk.type);
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  const deletePetRow = event.target.closest("[data-pet-delete-row]");
  if (deletePetRow) {
    const [diskIndex, rowIndex] = deletePetRow.dataset.petDeleteRow.split(":").map(Number);
    const disk = activePetDisks()[diskIndex];
    if (!disk) return true;
    disk.rows.splice(rowIndex, 1);
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  return false;
}

function handlePetSimulatorChange(event) {
  const templateName = event.target.closest("[data-pet-template-name]");
  if (templateName) {
    activePetTemplate().name = String(templateName.value || "").trim().slice(0, 12) || `模板 ${state.petSimulator.activeTemplate + 1}`;
    savePetSimulatorConfig();
    refreshSimulatorDependentViews();
    return true;
  }
  const field = event.target.closest("[data-pet-field]");
  if (!field) return false;
  const rowEl = field.closest("[data-pet-disk][data-pet-row]");
  if (!rowEl) return false;
  const disk = activePetDisks()[Number(rowEl.dataset.petDisk)];
  const row = disk && disk.rows[Number(rowEl.dataset.petRow)];
  if (!disk || !row) return true;
  if (field.dataset.petField === "statKey") {
    const option = petOption(disk.type, field.value);
    const rowIndex = Number(rowEl.dataset.petRow);
    const rowCount = clampInt(row.count, 0, 9);
    const usedWithoutCurrent = petDiskUsedCount(disk) - rowCount;
    const currentRowFillsDisk = rowCount >= 9 && usedWithoutCurrent <= 0;
    if (
      currentRowFillsDisk ||
      petStatUsedCount(disk, option.key, rowIndex) >= option.maxCount ||
      usedWithoutCurrent + rowCount > 9 ||
      rowCount > option.maxCount
    ) {
      refreshSimulatorDependentViews();
      return true;
    }
    row.statKey = option.key;
    row.count = Math.min(row.count, option.maxCount);
    row.value = Math.min(row.value, option.max);
  } else if (field.dataset.petField === "count") {
    const option = petOption(disk.type, row.statKey);
    row.count = clampInt(field.value, 1, Math.min(option.maxCount, 9));
  } else if (field.dataset.petField === "value") {
    const option = petOption(disk.type, row.statKey);
    row.value = clampNum(field.value, 0, option.max);
  }
  disk.rows = normalizePetRows(disk.rows, disk.type);
  savePetSimulatorConfig();
  refreshSimulatorDependentViews();
  return true;
}

function renderDetail(detail, analysis) {
  const profile = detail.profile || {};
  const displayAnalysis = analysisWithSimulators(analysis, detail);
  const simulatedScore = estimateCombatScore(displayAnalysis);
  els.detailPanel.innerHTML = `
    <article>
      <section class="profile-card race-${profile.raceId || profile.race || ""}">
        <div class="profile-text">
          <div class="profile-meta">
            <span>${html(profile.serverName || serverName(profile.serverId))}</span>
            <span>·</span>
            <span>${html(profile.raceName || "")}</span>
            <span>·</span>
            <span>${html(profile.className || "")}</span>
          </div>
          <h3 class="profile-name">${html(profile.characterName || "未知角色")}</h3>
          ${profile.characterLevel ? `<div class="profile-level">LV${html(profile.characterLevel)}</div>` : ""}
          <div class="profile-title">${html(profile.titleName || "未裝備称号")}</div>
          <div class="profile-stats">
            <div class="stat-chip"><span>戰力</span><strong class="gold" title="${html(profile.combatPower || "")}">${html(formatKm(profile.combatPower))}</strong></div>
            <div class="stat-chip stat-chip--score" title="綜合評級按輸出 64% / 生存 36% 估算，權重參考常見 MMO 屬性價值：攻擊、命中、暴擊、速度與傷害增幅偏輸出；防禦、生命、迴避、抗暴與耐性偏生存。">
              <span>綜合評級</span>
              <strong>${html(formatKm(simulatedScore))}</strong>
            </div>
            <div class="stat-chip"><span>道具等級</span><strong>${html(detail.itemLevel || "-")}</strong></div>
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
        <button type="button" class="snap-refresh-btn" data-refresh-detail title="刷新角色數據">↺</button>
      </nav>

      ${renderDataIntegrityNotice(detail)}

      <div class="detail-body">
        <div class="detail-main">
          <nav class="detail-tabs" aria-label="角色詳情分頁">
            <button type="button" class="${state.detailTab === "equipment" ? "active" : ""}" data-detail-tab="equipment">裝備</button>
            <button type="button" class="${state.detailTab === "attack" ? "active" : ""}" data-detail-tab="attack">屬性分析</button>
          </nav>
          <div class="tab-content">
            ${state.detailTab === "attack" ? renderAttributeAnalysis(displayAnalysis) : renderEquipment(detail, displayAnalysis)}
          </div>
        </div>
        <div class="detail-side${resultsCollapsed ? " visible" : ""}">
          ${renderSidePanels(detail, displayAnalysis)}
        </div>
      </div>
    </article>
  `;
  refreshIcons();
}

function renderAttrCard(stat) {
  return `
    <details class="attr-card${stat.count === 0 ? " attr-card--empty" : ""}">
      <summary>
        <span>${html(stat.label)}</span>
        <strong>${html(formatAttrValue(stat))}</strong>
        <i class="attr-chevron" data-lucide="chevron-down" aria-hidden="true"></i>
      </summary>
      ${renderAttrSources(stat)}
    </details>
  `;
}

function renderAttributeAnalysis(analysis) {
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
  const primaryStats = orderStatsForPairs(analysis.primaryStats, [
    "attack", "extraAttack",
    "defense", "extraDefense",
    "hit", "extraHit",
    "evasion", "extraEvasion",
    "critical", "criticalResist",
    "hp", "mp",
    "combatSpeed", "moveSpeed",
  ]);
  const pctStats = orderStatsForPairs(analysis.pctStats, [
    "pAttack", "pDefense",
    "pHit", "pEvasion",
    "pCritical", "pCritResist",
    "pBlockPen", "pBlock",
    "pHp", "pMp",
    "cooldownReduce",
  ]);
  const basicCombatStats = orderStatsForPairs(allBasicCombatStats, [
    "penetration", "soulstoneDamage",
    "criticalAttack", "criticalDefense",
    "frontAttack", "frontDefense",
    "backAttack", "backDefense",
  ]);
  const basicCombatAmpStats = orderStatsForPairs(allBasicCombatAmpStats, [
    "damageAmp", "damageResist",
    "weaponDamageAmp", "weaponDamageResist",
    "critDamageAmp", "critDamageResist",
    "backDamageAmp", "backDamageResist",
    "frontDamageAmp", "frontDamageResist",
  ]);
  const pveStats = orderStatsForPairs(pveAmpStats, [
    "pveAttack", "pveDefense",
    "pveHit", "pveEvasion",
    "pveDamageAmp", "pveDamageResist",
    "bossAttack", "bossDefense",
    "bossDamageAmp", "bossDamageResist",
  ]);
  const pvpStats = orderStatsForPairs(pvpAmpStats, [
    "pvpAttack", "pvpDefense",
    "pvpHit", "pvpEvasion",
    "pvpCritical", "pvpCriticalResist",
    "pvpDamageAmp", "pvpDamageResist",
  ]);
  const otherStats = orderStatsForPairs(allOtherStats, [
    "flightPower", "maxAction",
    "mpRegen",
    "maxRage",
    "mpCostReduce", "healingReceived",
    "multiHit", "multiHitResist",
    "ironWallPen", "ironWall",
    "regenPen", "regen",
    "hpRegen",
    "perfect", "perfectResist",
    "powerStrike", "powerStrikeResist",
    "backCrit", "backCritResist",
    "blockPen", "block",
    "spiritPveDamageAmp", "spiritPvpDamageAmp",
    "spiritPerfect", "spiritDefensePct",
    "spiritCritDamageAmp",
  ]);
  return `
    <section class="detail-section">
      <div class="block-stack">
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title section-title-with-help">
              主要能力值
              <span
                class="inline-help"
                tabindex="0"
                data-tooltip="最大攻擊力會按 50% 折算進攻擊力，用於接近平均攻擊力口徑；這是本站特色算法，不等同於官方原始字段。"
              >?</span>
            </h4>
            <span>${analysis.primaryStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${primaryStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">百分比增加</h4>
            <span>${analysis.pctStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${pctStats.length ? pctStats.map(renderAttrCard).join("") : `<p class="attr-empty">暫無百分比增加數值</p>`}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">基礎戰鬥</h4>
            <span>${activeBasicCombatStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${basicCombatStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">基礎戰鬥增幅</h4>
            <span>${activeBasicCombatAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${basicCombatAmpStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">PVE相關增幅</h4>
            <span>${activePveAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${pveStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">PVP相關增幅</h4>
            <span>${activePvpAmpStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${pvpStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">異常狀態</h4>
            <span>${activeAbnormalStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${allAbnormalStats.map(renderAttrCard).join("")}
          </div>
        </section>
        <section class="info-block">
          <div class="block-head">
            <h4 class="section-title">其他手段</h4>
            <span>${activeOtherStats.length} 項</span>
          </div>
          <div class="attr-grid">
            ${otherStats.map(renderAttrCard).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function orderStatsForPairs(stats, keys) {
  const byKey = new Map(stats.map((stat) => [stat.key, stat]));
  const used = new Set();
  const ordered = [];
  keys.forEach((key) => {
    const stat = byKey.get(key);
    if (!stat) return;
    ordered.push(stat);
    used.add(key);
  });
  stats.forEach((stat) => {
    if (!used.has(stat.key)) ordered.push(stat);
  });
  return ordered;
}

function renderEquipment(detail, analysis) {
  const items = detail.detailEquipItems || [];
  const equipmentItems = items.filter((item) => !isCardItem(item)).sort(compareEquipSlots);
  const cardItems = items.filter(isCardItem);
  const body = state.mobileIconMode
    ? renderMobileEquipmentMode(detail, analysis, equipmentItems, cardItems)
    : renderStandardEquipmentMode(detail, equipmentItems, cardItems);
  return `
    <section class="detail-section">
      ${body}
    </section>
  `;
}

function renderDataIntegrityNotice(detail) {
  const messages = [];
  if (detail.detailEquipmentComplete === false) {
    const slots = (detail.detailFailedEquipSlots || []).filter(Boolean).join("、");
    messages.push(`裝備詳情有缺失${slots ? `：${slots}` : ""}`);
  }
  if (detail.detailDaevanionComplete === false) {
    messages.push("守護力資料未完整讀取");
  }
  if (!messages.length) return "";
  return `
    <section class="data-warning">
      <strong>資料未完整</strong>
      <span>${html(messages.join("；"))}。本次結果不會寫入快照，請稍後點 ↺ 重新整理。</span>
    </section>
  `;
}

function renderEquipmentModeToggle() {
  return `
    <button type="button" class="mobile-mode-toggle${state.mobileIconMode ? " active" : ""}" data-mobile-icon-mode aria-pressed="${state.mobileIconMode ? "true" : "false"}">
      <span></span>
      ${state.mobileIconMode ? "圖標模式" : "列表模式"}
    </button>
  `;
}

function renderStandardEquipmentMode(detail, equipmentItems, cardItems) {
  const mainEquipmentItems = equipmentItems.filter((item) => !LOWER_EQUIP_SLOTS.has(item.slotPosName));
  const lowerEquipmentItems = equipmentItems.filter((item) => LOWER_EQUIP_SLOTS.has(item.slotPosName));
  return `
    <div class="block-stack">
      <section class="info-block mobile-equipment-block">
        <div class="block-head">
          <h4 class="section-title">裝備</h4>
          <div class="block-actions">
            <span>${equipmentItems.length} 件</span>
            ${renderEquipmentModeToggle()}
          </div>
        </div>
        ${mainEquipmentItems.length ? `<div class="compact-equip-grid">${renderCompactEquipmentGridItems(mainEquipmentItems)}</div>` : `<p class="muted">暫無裝備資料</p>`}
        ${renderLowerEquipmentSection(lowerEquipmentItems)}
      </section>

      ${renderEquipSetSection(equipmentItems)}

      <section class="info-block">
        <div class="block-head">
          <h4 class="section-title">阿爾卡納</h4>
          <span>${cardItems.length} 張</span>
        </div>
        ${cardItems.length ? `
          <div class="card-grid">${cardItems.map(renderCardItem).join("")}</div>
          ${renderCardSetSummary(cardItems)}
        ` : `<p class="muted">暫無阿爾卡納資料</p>`}
      </section>

      ${renderSkills(detail)}
    </div>
  `;
}

function renderMobileEquipmentMode(detail, analysis, equipmentItems, cardItems) {
  const lowerEquipmentItems = equipmentItems.filter((item) => LOWER_EQUIP_SLOTS.has(item.slotPosName));
  return `
    <div class="block-stack">
      <section class="info-block">
        <div class="block-head">
          <h4 class="section-title">裝備</h4>
          <div class="block-actions">
            <span>${equipmentItems.length} 件</span>
            ${renderEquipmentModeToggle()}
          </div>
        </div>
        <div class="mobile-icon-layout">
          <div class="mobile-equip-frame">
            <div class="mobile-equip-columns">
              ${MOBILE_EQUIP_COLUMNS.map((column) => `
                <div class="mobile-equip-column">
                  ${column.map(({ slot, label }) => renderMobileEquipSlot(slot, label, equipmentItems)).join("")}
                </div>
              `).join("")}
            </div>
          </div>
          <div class="mobile-side-stack">
            ${renderMobileSkillPane(detail)}
            ${renderMobileCardPane(cardItems)}
          </div>
        </div>
        ${renderLowerEquipmentSection(lowerEquipmentItems)}
      </section>

      ${renderEquipSetSection(equipmentItems)}
      ${renderMobileCardSetSection(cardItems)}

      <div class="mobile-analysis-after">
        ${renderAttributeAnalysis(analysis)}
      </div>
    </div>
  `;
}

function renderLowerEquipmentSection(items) {
  if (!items.length) return "";
  return `
    <div class="lower-equip-section">
      ${items.map(renderCompactEquipItem).join("")}
    </div>
  `;
}

function isRuneItem(item) {
  return ["Rune1", "Rune2"].includes(item.slotPosName);
}

function renderCompactEquipmentGridItems(items) {
  const parts = [];
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    if (isRuneItem(item) && isRuneItem(items[index + 1])) {
      parts.push(`
        <div class="rune-pair-row">
          ${renderCompactEquipItem(item)}
          ${renderCompactEquipItem(items[index + 1])}
        </div>
      `);
      index += 1;
      continue;
    }
    parts.push(renderCompactEquipItem(item));
  }
  return parts.join("");
}

function renderMobileEquipSlot(slot, label, equipmentItems) {
  const item = equipmentItems.find((equip) => equip.slotPosName === slot);
  if (!item) {
    return `
      <div class="mobile-icon-tile mobile-icon-tile--empty" aria-label="${html(label)}">
        <span>${html(label)}</span>
      </div>
    `;
  }
  return `
    <div class="mobile-icon-tile mobile-equip-tile" tabindex="0" aria-label="${html(slotLabel(item))}">
      ${item.icon ? `<img class="mobile-thumb grade-${html(item.grade)}" src="${html(item.icon)}" alt="" />` : `<div class="mobile-thumb grade-${html(item.grade)}"></div>`}
      <div class="mobile-detail-popover">${renderCompactEquipItem(item)}</div>
    </div>
  `;
}

function renderMobileCardPane(cardItems) {
  return `
    <section class="mobile-icon-pane">
      <div class="mobile-pane-head">
        <h5>阿爾卡納</h5>
        <span>${cardItems.length}</span>
      </div>
      <div class="mobile-card-icons">
        ${cardItems.length ? cardItems.map(renderMobileCardIcon).join("") : `<p class="mobile-pane-empty">暫無阿爾卡納</p>`}
      </div>
    </section>
  `;
}

function renderMobileCardSetSection(cardItems) {
  const summary = renderCardSetSummary(cardItems);
  if (!summary) return "";
  return `
    <section class="info-block mobile-card-set-block">
      <div class="block-head">
        <h4 class="section-title">阿爾卡納套裝</h4>
      </div>
      ${summary}
    </section>
  `;
}

function renderMobileCardIcon(card) {
  const stats = (card.mainStatsNormal || []).slice(0, 3);
  const skills = (card.subSkills || []).slice(0, 2);
  return `
    <div class="mobile-icon-tile mobile-card-compact mobile-icon-only mobile-card-mobile" tabindex="0" aria-label="${html(card.name || "阿爾卡納")}">
      ${card.icon ? `<img class="mobile-thumb grade-${html(card.grade)}" src="${html(card.icon)}" alt="" />` : `<div class="mobile-thumb grade-${html(card.grade)}"></div>`}
      <div class="mobile-detail-popover mobile-detail-popover--right">${renderCardItem(card)}</div>
    </div>
    <div class="mobile-icon-tile mobile-card-tile mobile-card-desktop" tabindex="0" aria-label="${html(card.name || "阿爾卡納")}">
      ${card.icon ? `<img class="mobile-thumb grade-${html(card.grade)}" src="${html(card.icon)}" alt="" />` : `<div class="mobile-thumb grade-${html(card.grade)}"></div>`}
      <div class="mobile-skill-info">
        <span class="mobile-skill-name grade-${html(card.grade)}">${html(card.name || "阿爾卡納")}${card.enchantLevel ? ` +${html(card.enchantLevel)}` : ""}</span>
        <span class="mobile-skill-level">${html(slotLabel(card))}</span>
        ${stats.map((s) => `<span class="mobile-skill-level">${html(s.name)} ${html(s.value || "")}</span>`).join("")}
        ${skills.map((s) => `<span class="mobile-skill-level">${html(s.name)} Lv.${html(s.level ?? "-")}</span>`).join("")}
      </div>
      <div class="mobile-detail-popover mobile-detail-popover--right">${renderCardItem(card)}</div>
    </div>
  `;
}

function renderMobileSkillPane(detail) {
  const groups = getSkillGroups(detail);
  const skillCount = groups.reduce((sum, group) => sum + group.items.length, 0);
  return `
    <section class="mobile-icon-pane">
      <div class="mobile-pane-head">
        <h5>技能</h5>
        <span>${skillCount}</span>
      </div>
      <div class="mobile-skill-groups">
        ${groups.length ? groups.map((group) => `
          <section class="mobile-skill-group">
            <h6>${html(group.title)}</h6>
            <div class="mobile-skill-icons">
              ${group.items.map((skill) => renderMobileSkillIcon({ ...skill, groupTitle: group.title })).join("")}
            </div>
          </section>
        `).join("") : `<p class="mobile-pane-empty">暫無技能</p>`}
      </div>
    </section>
  `;
}

function renderMobileSkillIcon(skill) {
  return `
    <div class="mobile-icon-tile mobile-skill-tile mobile-icon-only mobile-skill-mobile" tabindex="0" aria-label="${html(skill.name || "技能")}">
      ${skill.icon ? `<img class="mobile-thumb" src="${html(skill.icon)}" alt="" />` : `<div class="mobile-thumb"></div>`}
      <div class="mobile-detail-popover mobile-detail-popover--right mobile-skill-card">${renderSkillItem(skill)}</div>
    </div>
    <div class="mobile-icon-tile mobile-skill-tile mobile-skill-desktop" tabindex="0" aria-label="${html(skill.name || "技能")}">
      ${skill.icon ? `<img class="mobile-thumb" src="${html(skill.icon)}" alt="" />` : `<div class="mobile-thumb"></div>`}
      <div class="mobile-skill-info">
        <span class="mobile-skill-name">${html(skill.name || "技能")}</span>
        <span class="mobile-skill-level">Lv.${html(skill.skillLevel ?? "-")}</span>
      </div>
      <div class="mobile-detail-popover mobile-detail-popover--right mobile-skill-card">${renderSkillItem(skill)}</div>
    </div>
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
  if (isCardItem(item)) return cardSlotLabel(item);
  const base = SLOT_CN[item.slotPosName] || item.slotPosName || "";
  const category = equipmentCategoryLabel(item);
  return category ? `${base}-${category}` : base;
}

function cardSlotLabel(item) {
  const slot = String(item.slotPosName || "");
  const match = slot.match(/^Arcana(\d+)$/);
  const fallback = match ? `Arcana${match[1]}` : (slot || "Arcana");
  const category = String(item.categoryName || item.equipCategory || item.slotName || "").trim();
  if (!category || category === "卡牌" || category === "阿爾卡納" || category === "Arcana") return fallback;
  return category;
}

function equipmentCategoryLabel(item) {
  if (!["MainHand", "SubHand"].includes(item.slotPosName)) return "";
  const category = String(item.categoryName || "").trim();
  if (!category || category === "Equip" || category === "裝備" || category === "装备") return "";
  return category;
}

function renderCompactEquipItem(item) {
  const mainBlock = renderMainStatLines(item);
  const soulBlock = renderSoulBindLines(item);
  const growthBlock = renderGrowthLines(item);
  const magicBlock = renderMagicStoneLines(item);
  const wordBlocks = [mainBlock, soulBlock, growthBlock, magicBlock].filter(Boolean).join("");
  return `
    <article class="compact-equip-item${isRuneItem(item) ? " compact-equip-item--rune" : ""}">
      <div class="equip-card-main">
        <div class="equip-icon-stack">
          ${item.icon ? `<img class="equip-icon grade-${html(item.grade)}" src="${html(item.icon)}" alt="" />` : `<div class="equip-icon grade-${html(item.grade)}"></div>`}
        </div>
        <div class="compact-equip-body">
          <div class="equip-title">
            ${item.exceedLevel ? `<span class="tag">${html(item.exceedLevel)}突</span>` : ""}
            ${item.enchantLevel ? `<span class="tag">+${html(item.enchantLevel)}</span>` : ""}
            <strong class="grade-${html(item.grade)}">${html(item.name || "未知裝備")}</strong>
          </div>
          <div class="equip-grade-line">${[item.grade, slotLabel(item)].filter(Boolean).join(" · ")}</div>
          ${item.sourcesText ? `<div class="equip-source">${html(item.sourcesText)}</div>` : ""}
        </div>
      </div>
      ${wordBlocks ? `<div class="equip-word-rows">${wordBlocks}</div>` : ""}
    </article>
  `;
}

function renderMainStatLines(item) {
  if (!NO_STONE_SLOTS.has(item.slotPosName)) return "";
  const stats = []
    .concat(item.mainStatsNormal || [])
    .concat(item.mainStatsExceed || [])
    .concat(item.subStats || []);
  if (!stats.length) return "";
  return `
    <section class="equip-word-block main-stat-block">
      <h5>基礎能力值</h5>
      ${stats.map((stat) => renderEquipWordLine(stat, stat.grade || stat.gradeName || item.grade)).join("")}
    </section>
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
  const value = stat.value || "";
  const extra = stat.extra && String(stat.extra) !== "0" && String(stat.extra) !== "0%" ? `(+${stat.extra})` : "";
  const valueText = `${value}${extra}` || stat.extra || "";
  return `
    <div class="equip-word-line">
      <span class="grade-${html(grade || "")}">${html(name)}</span>
      ${valueText ? `<strong class="grade-${html(grade || "")}">${html(valueText)}</strong>` : ""}
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
          <strong class="grade-${html(item.grade)}">${html(item.name || "未知阿爾卡納")}</strong>
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
  const groups = getSkillGroups(detail);

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

function getSkillGroups(detail) {
  if (!detail) return [];
  const className = (detail.profile && detail.profile.className) || "";
  return [
    { title: "主動技能", items: detail.detailSkillActive },
    { title: "被動技能", items: detail.detailSkillPassive },
    { title: "烙印技能", items: detail.detailSkillDp },
  ]
    .map((group) => ({
      ...group,
      items: (group.items || []).map((item) => ({ ...item, className })),
    }))
    .filter((group) => group.items && group.items.length);
}

function classPassiveSkillConfig(skill) {
  const className = skill && skill.className;
  const config = CLASS_PASSIVE_CONFIGS[className];
  if (!config) return null;
  const name = String((skill && skill.name) || "");
  return (config.skills || []).find((item) => [item.name].concat(item.aliases || []).includes(name)) || null;
}

function skillEffectValue(effect, level) {
  if (typeof effect.fixed !== "undefined") return toNum(effect.fixed);
  if (Array.isArray(effect.levelTable) && effect.levelTable.length) {
    const rows = effect.levelTable
      .map((row) => ({ level: toNum(row.level), value: toNum(row.value) }))
      .sort((a, b) => a.level - b.level);
    let value = rows[0].value;
    rows.forEach((row) => {
      if (level >= row.level) value = row.value;
    });
    return value;
  }
  const baseLevel = typeof effect.baseLevel === "undefined" ? 0 : toNum(effect.baseLevel);
  const growthLevel = Math.max(0, level - baseLevel);
  return toNum(effect.base) + toNum(effect.perLevel) * growthLevel;
}

function skillConfigEffectIsPct(effect) {
  if (typeof effect.isPct !== "undefined") return !!effect.isPct;
  if (effect.bucket === "pct") return true;
  const maps = {
    basicCombatAmp: BASIC_COMBAT_AMP_STAT_DEFS,
    envCombatAmp: ENV_COMBAT_AMP_STAT_DEFS,
    abnormal: ABNORMAL_STAT_DEFS,
    other: OTHER_STAT_DEFS,
  };
  const def = (maps[effect.bucket] || []).find((item) => item.key === effect.key);
  return def ? !!def.isPct : ["basicCombatAmp", "envCombatAmp", "abnormal", "other"].includes(effect.bucket);
}

function renderSkillConfigDetail(skill) {
  const config = classPassiveSkillConfig(skill);
  if (!config) return "";
  const level = Math.max(0, toNum(skill.skillLevel));
  if (!level) return "";
  const effectRows = (config.effects || []).map((effect) => {
    const value = Math.round(skillEffectValue(effect, level) * 10) / 10;
    const isPct = skillConfigEffectIsPct(effect);
    return `
      <div>
        <span>${html(effect.label || effect.key)}</span>
        <strong>${value > 0 ? "+" : ""}${html(formatNumber(value))}${isPct ? "%" : ""}</strong>
      </div>
    `;
  }).join("");
  const conversionRows = (config.conversions || []).map((conversion) => {
    const value = Math.round(skillEffectValue(conversion, level) * 10) / 10;
    return `
      <div>
        <span>${html(conversion.label || conversion.targetKey)}</span>
        <strong>${value > 0 ? "+" : ""}${html(formatNumber(value))}%</strong>
      </div>
    `;
  }).join("");
  const rows = effectRows + conversionRows;
  const notes = (config.notes || []).map((note) => `<p>${html(note)}</p>`).join("");
  return rows || notes ? `
    <div class="skill-config-popover">
      <b>${html(config.name)} Lv.${html(level)}</b>
      ${rows}
      ${notes}
    </div>
  ` : "";
}

function renderSkillItem(skill) {
  const detail = renderSkillConfigDetail(skill);
  return `
    <article class="skill-item${detail ? " has-skill-detail" : ""}" tabindex="${detail ? "0" : "-1"}">
      ${skill.icon ? `<img class="skill-icon" src="${html(skill.icon)}" alt="" />` : `<div class="skill-icon"></div>`}
      <div>
        <strong>${html(skill.name || "未知技能")}</strong>
        <span>Lv.${html(skill.skillLevel ?? "-")}</span>
      </div>
      ${detail}
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
  els.navCharacter.addEventListener("click", (event) => {
    event.preventDefault();
    setView("characters");
  });

  els.navRanking.addEventListener("click", (event) => {
    event.preventDefault();
    setView("ranking");
  });
  els.navWings?.addEventListener("click", (event) => {
    event.preventDefault();
    setView("wings");
  });
  els.navPetInsight?.addEventListener("click", (event) => {
    event.preventDefault();
    setView("petInsight");
  });
  els.navWardrobe?.addEventListener("click", (event) => {
    event.preventDefault();
    setView("wardrobe");
  });
  els.navTitles?.addEventListener("click", (event) => {
    event.preventDefault();
    setView("titles");
  });

  els.wingCatalogList?.addEventListener("change", (event) => {
    const levelSelect = event.target.closest("[data-wing-level]");
    if (levelSelect) {
      const id = String(levelSelect.dataset.wingLevel || "");
      const row = wingCatalogRows().find((item) => wingId(item) === id);
      if (!id || !row) return;
      state.wingLevels[id] = clampInt(levelSelect.value, 0, wingMaxLevel(row));
      saveWingLevels();
      renderWingSimulator();
      if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const input = event.target.closest("[data-wing-select]");
    if (!input) return;
    const ids = selectedWingSet();
    const id = String(input.dataset.wingSelect || "");
    if (!id) return;
    if (input.checked) ids.add(id); else ids.delete(id);
    state.selectedWingIds = Array.from(ids);
    state.wingSelectionInitialized = true;
    saveSelectedWingIds();
    renderWingSimulator();
    if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.selectAllWingsBtn?.addEventListener("click", () => {
    const rows = wingCatalogRows();
    state.selectedWingIds = rows.map(wingId).filter(Boolean);
    rows.forEach((row) => {
      const id = wingId(row);
      if (id && state.wingLevels[id] === undefined) state.wingLevels[id] = wingMaxLevel(row);
    });
    state.wingSelectionInitialized = true;
    saveSelectedWingIds();
    saveWingLevels();
    renderWingSimulator();
    if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.clearWingsBtn?.addEventListener("click", () => {
    state.selectedWingIds = [];
    state.wingSelectionInitialized = true;
    saveSelectedWingIds();
    renderWingSimulator();
    if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.wardrobeView?.addEventListener("click", (event) => {
    if (event.target.closest("[data-wardrobe-max]")) {
      state.wardrobeActiveUndo = null;
      pushWardrobeUndoSnapshot();
      state.wardrobeConfig = Object.fromEntries(WARDROBE_CATEGORIES.flatMap((category) => [
        [category.key, category.max],
        ...(category.parts || []).map((part) => [wardrobePartKey(category, part), category.max]),
      ]));
      saveWardrobeConfig();
      renderWardrobeView();
      if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    if (event.target.closest("[data-wardrobe-reset]")) {
      state.wardrobeActiveUndo = null;
      pushWardrobeUndoSnapshot();
      state.wardrobeConfig = defaultWardrobeConfig();
      saveWardrobeConfig();
      renderWardrobeView();
      if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
    }
  });

  els.wardrobeView?.addEventListener("pointerdown", (event) => {
    if (event.target.closest("[data-wardrobe-range], [data-wardrobe-part-range], [data-wardrobe-bulk-range]")) {
      beginWardrobeUndoSnapshot();
    }
  });

  els.wardrobeView?.addEventListener("focusin", (event) => {
    if (event.target.closest("[data-wardrobe-range], [data-wardrobe-part-range], [data-wardrobe-bulk-range]")) {
      beginWardrobeUndoSnapshot();
    }
  });

  els.wardrobeView?.addEventListener("keydown", (event) => {
    if (!event.target.closest("[data-wardrobe-range], [data-wardrobe-part-range], [data-wardrobe-bulk-range]")) return;
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      beginWardrobeUndoSnapshot();
    }
  });

  els.wardrobeView?.addEventListener("input", (event) => {
    const input = event.target.closest("[data-wardrobe-range], [data-wardrobe-part-range], [data-wardrobe-bulk-range]");
    if (!input) return;
    beginWardrobeUndoSnapshot();
    const bulkKey = input.dataset.wardrobeBulkRange;
    if (bulkKey) {
      const category = WARDROBE_CATEGORIES.find((item) => item.key === bulkKey);
      if (!category) return;
      const value = clampInt(input.value, 0, category.max);
      const card = input.closest(".wardrobe-card");
      const percent = category.max ? value / category.max * 100 : 0;
      state.wardrobeConfig = normalizeWardrobeConfig({
        ...state.wardrobeConfig,
        [category.key]: value,
        ...Object.fromEntries((category.parts || []).map((part) => [wardrobePartKey(category, part), value])),
      });
      input.style.setProperty("--range-percent", `${percent}%`);
      input.closest(".wardrobe-bulk-row")?.querySelector(".wardrobe-part-meta strong")?.replaceChildren(document.createTextNode(`${value}/${category.max}P`));
      card?.querySelectorAll("[data-wardrobe-part-range]").forEach((range) => {
        range.value = value;
        range.style.setProperty("--range-percent", `${percent}%`);
        range.closest(".wardrobe-part-row")?.querySelector(".wardrobe-part-meta strong")?.replaceChildren(document.createTextNode(`${value}/${category.max}P`));
      });
      updateWardrobeLiveDisplays(category);
      saveWardrobeConfig();
      return;
    }
    const key = input.dataset.wardrobeRange || input.dataset.wardrobePartRange;
    const categoryKey = String(key || "").split(":")[0];
    const category = WARDROBE_CATEGORIES.find((item) => item.key === categoryKey);
    if (!category) return;
    const value = clampInt(input.value, 0, category.max);
    const percent = category.max ? value / category.max * 100 : 0;
    state.wardrobeConfig = normalizeWardrobeConfig({
      ...state.wardrobeConfig,
      [key]: value,
    });
    input.style.setProperty("--range-percent", `${percent}%`);
    input.closest(".wardrobe-part-row")?.querySelector(".wardrobe-part-meta strong")?.replaceChildren(document.createTextNode(`${value}/${category.max}P`));
    updateWardrobeLiveDisplays(category);
    saveWardrobeConfig();
  });

  els.wardrobeView?.addEventListener("change", (event) => {
    if (!event.target.closest("[data-wardrobe-range], [data-wardrobe-part-range], [data-wardrobe-bulk-range]")) return;
    commitWardrobeUndoSnapshot();
    renderWardrobeView();
    if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && !event.shiftKey && event.key.toLowerCase() === "z" && state.view === "wardrobe") {
      if (undoWardrobeConfig()) event.preventDefault();
    }
  });
  window.addEventListener("scroll", () => {
    hideFloatingTooltip();
    updateBackToTopVisibility();
  }, { passive: true });
  window.addEventListener("resize", hideFloatingTooltip);
  els.backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    els.backToTopBtn.blur();
  });

  els.titleCatalogList?.addEventListener("click", (event) => {
    const summaryToggle = event.target.closest("[data-title-summary-toggle]");
    if (summaryToggle) {
      state.titleHoldingSummaryCollapsed = !state.titleHoldingSummaryCollapsed;
      renderTitleSimulator();
      return;
    }

    const clearSearch = event.target.closest("[data-title-search-clear]");
    if (clearSearch) {
      state.titleSearchKeyword = "";
      state.titleSearchFocused = true;
      state.titleSearchCursor = 0;
      renderTitleSimulator();
      return;
    }
    const raceTab = event.target.closest("[data-title-race]");
    if (raceTab) {
      const previousRace = state.activeTitleRace || "light";
      const nextRace = String(raceTab.dataset.titleRace || "all");
      if ((previousRace === "light" || previousRace === "dark") && (nextRace === "light" || nextRace === "dark") && previousRace !== nextRace) {
        const ids = clearCommonSelectedTitles(selectedTitleSet());
        state.selectedTitleIds = Array.from(ids);
        state.titleSelectionInitialized = true;
        saveSelectedTitleIds();
        if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
      }
      state.activeTitleRace = nextRace;
      renderTitleSimulator();
      return;
    }
    const categoryToggle = event.target.closest("[data-title-toggle-category]");
    if (categoryToggle) {
      const category = String(categoryToggle.dataset.titleToggleCategory || state.activeTitleCategory || "attack");
      selectTitleRowsByScope({ category, mode: "toggle" });
      return;
    }
    const tab = event.target.closest("[data-title-category]");
    if (!tab) return;
    state.activeTitleCategory = String(tab.dataset.titleCategory || "attack");
    renderTitleSimulator();
  });

  els.titleCatalogList?.addEventListener("pointerover", (event) => {
    const item = event.target.closest(".title-selected-summary-item.has-tooltip");
    if (!item || !els.titleCatalogList.contains(item)) return;
    showFloatingTooltip(item, item.dataset.tooltip);
  });

  els.titleCatalogList?.addEventListener("pointerout", (event) => {
    const item = event.target.closest(".title-selected-summary-item.has-tooltip");
    if (!item) return;
    if (event.relatedTarget && item.contains(event.relatedTarget)) return;
    hideFloatingTooltip();
  });

  els.titleCatalogList?.addEventListener("focusin", (event) => {
    const item = event.target.closest(".title-selected-summary-item.has-tooltip");
    if (!item || !els.titleCatalogList.contains(item)) return;
    showFloatingTooltip(item, item.dataset.tooltip);
  });

  els.titleCatalogList?.addEventListener("focusout", (event) => {
    if (event.target.closest(".title-selected-summary-item.has-tooltip")) hideFloatingTooltip();
  });

  els.titleCatalogList?.addEventListener("input", (event) => {
    const search = event.target.closest("[data-title-search]");
    if (!search) return;
    if (state.titleSearchComposing) return;
    state.titleSearchKeyword = syncTitleSearchInput(search);
    state.titleSearchFocused = true;
    state.titleSearchCursor = search.selectionStart ?? search.value.length;
    renderTitleSimulator();
  });

  els.titleCatalogList?.addEventListener("compositionstart", (event) => {
    if (!event.target.closest("[data-title-search]")) return;
    state.titleSearchComposing = true;
  });

  els.titleCatalogList?.addEventListener("compositionend", (event) => {
    const search = event.target.closest("[data-title-search]");
    if (!search) return;
    state.titleSearchComposing = false;
    state.titleSearchKeyword = syncTitleSearchInput(search);
    state.titleSearchFocused = true;
    state.titleSearchCursor = search.selectionStart ?? search.value.length;
    renderTitleSimulator();
  });

  els.titleCatalogList?.addEventListener("change", async (event) => {
    const selectedInput = event.target.closest("[data-title-select]");
    if (selectedInput) {
      const ids = selectedTitleSet();
      const id = String(selectedInput.dataset.titleSelect || "");
      if (!id) return;
      const row = titleCatalogRows().find((item) => titleId(item) === id);
      const nextRace = titleRaceKey(row);
      if (selectedInput.checked) {
        if (nextRace === "light" || nextRace === "dark") {
          const currentRace = selectedOppositeTitleRace(ids, nextRace) || selectedTitleRace(ids);
          if (currentRace && currentRace !== nextRace) {
            if (!(await confirmTitleRaceSwitch(nextRace, currentRace))) {
              selectedInput.checked = false;
              return;
            }
            clearSelectedTitleRace(ids, currentRace);
          }
        }
        ids.add(id);
      } else ids.delete(id);
      state.selectedTitleIds = Array.from(ids);
      state.titleSelectionInitialized = true;
      saveSelectedTitleIds();
      renderTitleSimulator();
      if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
    }
  });

  els.selectAllTitlesBtn?.addEventListener("click", async () => {
    await selectTitleRowsByScope();
  });

  els.clearTitlesBtn?.addEventListener("click", () => {
    const race = state.activeTitleRace || "all";
    const ids = selectedTitleSet();
    titleCatalogRows()
      .filter((row) => titleVisibleByRace(row, race))
      .filter((row) => titleMatchesSearch(row, state.titleSearchKeyword))
      .forEach((row) => {
        const id = titleId(row);
        ids.delete(id);
      });
    state.selectedTitleIds = Array.from(ids);
    state.titleSelectionInitialized = true;
    saveSelectedTitleIds();
    renderTitleSimulator();
    if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.petInsightView?.addEventListener("click", (event) => {
    handlePetSimulatorClick(event);
  });

  els.petInsightView?.addEventListener("change", (event) => {
    handlePetSimulatorChange(event);
  });

  window.addEventListener("hashchange", () => {
    setView(viewFromHash(location.hash));
  });

  els.rankingTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-ranking-type]");
    if (!button) return;
    state.ranking.activeType = button.dataset.rankingType;
    loadRanking();
  });

  els.rankingRaceSelect.addEventListener("change", () => {
    state.ranking.race = Number(els.rankingRaceSelect.value) || 1;
    const servers = state.ranking.race === 2 ? DEMON_SERVERS : ANGEL_SERVERS;
    state.ranking.serverId = servers[0] ? servers[0].serverId : state.ranking.serverId;
    loadRanking();
  });

  els.rankingServerSelect.addEventListener("change", () => {
    state.ranking.serverId = Number(els.rankingServerSelect.value);
    loadRanking();
  });

  els.rankingClassSelect.addEventListener("change", () => {
    state.ranking.classId = els.rankingClassSelect.value;
    loadRanking();
  });

  els.rankingSearchButton.addEventListener("click", () => {
    state.ranking.keyword = els.rankingKeywordInput.value.trim();
    loadRanking();
  });

  els.rankingKeywordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.ranking.keyword = els.rankingKeywordInput.value.trim();
      loadRanking();
    }
  });

  els.rankingTableBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-ranking-character-id]");
    if (!button || !button.dataset.rankingCharacterId) return;
    const row = state.ranking.rows.find((item) => String(item.characterId) === button.dataset.rankingCharacterId);
    if (!row) return;
    const char = cleanChar({
      characterId: row.characterId,
      serverId: row.serverId,
      characterName: row.name,
      className: row.className,
    });
    state.results = [char];
    state.hasSearched = true;
    renderResults();
    loadDetail(char, "ranking");
  });

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
  els.resetSearchButton?.addEventListener("click", clearSearchResults);
  els.clearResultsBtn.addEventListener("click", clearSearchResults);
  els.keywordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") searchCharacters();
  });

  els.resultsList.addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-favorite-result-index]");
    if (favorite) {
      event.preventDefault();
      event.stopPropagation();
      const char = state.results[Number(favorite.dataset.favoriteResultIndex)];
      toggleFavoriteCharacter(char);
      return;
    }
    const card = event.target.closest("[data-result-index]");
    if (!card) return;
    const char = state.results[Number(card.dataset.resultIndex)];
    if (char) loadDetail(char, "search-result");
  });

  els.historyPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-history-clear]")) {
      state.history = [];
      saveHistory();
      renderHistory();
      return;
    }
    const favoriteHistory = event.target.closest("[data-favorite-history-index]");
    if (favoriteHistory) {
      const item = state.history[Number(favoriteHistory.dataset.favoriteHistoryIndex)];
      toggleFavoriteCharacter(item);
      return;
    }
    const favoritePinned = event.target.closest("[data-favorite-favorite-index]");
    if (favoritePinned) {
      const item = state.favorites[Number(favoritePinned.dataset.favoriteFavoriteIndex)];
      toggleFavoriteCharacter(item);
      return;
    }
    const historyButton = event.target.closest("[data-history-index]");
    const favoriteButton = event.target.closest("[data-favorite-index]");
    const item = historyButton
      ? state.history[Number(historyButton.dataset.historyIndex)]
      : favoriteButton
        ? state.favorites[Number(favoriteButton.dataset.favoriteIndex)]
        : null;
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
    loadDetail(item, historyButton ? "history" : "favorite");
  });

  els.detailPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-back-to-search]")) {
      setView("characters");
      return;
    }
    if (event.target.closest("[data-refresh-detail]")) {
      if (!state.selectedChar) return;
      loadDetail({ ...state.selectedChar, _forceRefresh: true }, "refresh");
      return;
    }
    const snapButton = event.target.closest("[data-snapshot-tab]");
    if (snapButton) {
      const snapType = snapButton.dataset.snapshotTab;
      if (!state.snapshots[snapType]) return;
      state.snapshotTab = snapType;
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const mobileModeButton = event.target.closest("[data-mobile-icon-mode]");
    if (mobileModeButton) {
      state.mobileIconMode = !state.mobileIconMode;
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const petToggle = event.target.closest("[data-pet-sim-toggle]");
    if (petToggle) {
      state.petSimulator.enabled = !state.petSimulator.enabled;
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const wingBonusToggle = event.target.closest("[data-wing-bonus-toggle]");
    if (wingBonusToggle) {
      state.wingBonusEnabled = !state.wingBonusEnabled;
      saveWingBonusEnabled();
      if (state.wingBonusEnabled && !state.wingBonusCatalog) {
        loadWingBonusCatalog().then(() => renderDetail(currentViewDetail(), currentViewAnalysis()));
      }
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const titleBonusToggle = event.target.closest("[data-title-bonus-toggle]");
    if (titleBonusToggle) {
      state.titleBonusEnabled = !state.titleBonusEnabled;
      saveTitleBonusEnabled();
      if (state.titleBonusEnabled && !state.titleCatalog) {
        loadTitleCatalog().then(() => {
          if (state.selectedDetail) renderDetail(currentViewDetail(), currentViewAnalysis());
        });
        return;
      }
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const wardrobeBonusToggle = event.target.closest("[data-wardrobe-bonus-toggle]");
    if (wardrobeBonusToggle) {
      state.wardrobeBonusEnabled = !state.wardrobeBonusEnabled;
      saveWardrobeBonusEnabled();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    if (event.target.closest("[data-pet-collapse]")) {
      state.petSimulator.collapsed = !state.petSimulator.collapsed;
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    if (event.target.closest("[data-pet-editor-link]")) {
      setView("petInsight");
      return;
    }
    if (event.target.closest("[data-wing-editor-link]")) {
      setView("wings");
      return;
    }
    if (event.target.closest("[data-pet-reset]")) {
      resetActivePetTemplate();
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const petTemplateButton = event.target.closest("[data-pet-template]");
    if (petTemplateButton) {
      state.petSimulator.activeTemplate = clampInt(petTemplateButton.dataset.petTemplate, 0, 2);
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const addPetRow = event.target.closest("[data-pet-add-row]");
    if (addPetRow) {
      const disk = activePetDisks()[Number(addPetRow.dataset.petAddRow)];
      if (!disk || petDiskUsedCount(disk) >= 9) return;
      const option = petOptionsForType(disk.type).find((item) => item.maxCount > 0);
      disk.rows.push({ statKey: option.key, count: 1, value: option.max });
      disk.rows = normalizePetRows(disk.rows, disk.type);
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const deletePetRow = event.target.closest("[data-pet-delete-row]");
    if (deletePetRow) {
      const [diskIndex, rowIndex] = deletePetRow.dataset.petDeleteRow.split(":").map(Number);
      const disk = activePetDisks()[diskIndex];
      if (!disk) return;
      disk.rows.splice(rowIndex, 1);
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const button = event.target.closest("[data-detail-tab]");
    if (!button || !state.selectedDetail) return;
    state.detailTab = button.dataset.detailTab;
    renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  if (els.globalBreadcrumb) {
    els.globalBreadcrumb.addEventListener("click", (event) => {
      if (event.target.closest("[data-back-to-search]")) {
        setView("characters");
      }
    });
  }

  els.detailPanel.addEventListener("change", (event) => {
    const templateName = event.target.closest("[data-pet-template-name]");
    if (templateName) {
      activePetTemplate().name = String(templateName.value || "").trim().slice(0, 12) || `模板 ${state.petSimulator.activeTemplate + 1}`;
      savePetSimulatorConfig();
      renderDetail(currentViewDetail(), currentViewAnalysis());
      return;
    }
    const field = event.target.closest("[data-pet-field]");
    if (!field) return;
    const rowEl = field.closest("[data-pet-disk][data-pet-row]");
    if (!rowEl) return;
    const disk = activePetDisks()[Number(rowEl.dataset.petDisk)];
    const row = disk && disk.rows[Number(rowEl.dataset.petRow)];
    if (!disk || !row) return;
    if (field.dataset.petField === "statKey") {
      const option = petOption(disk.type, field.value);
      const rowIndex = Number(rowEl.dataset.petRow);
      const rowCount = clampInt(row.count, 0, 9);
      const usedWithoutCurrent = petDiskUsedCount(disk) - rowCount;
      const currentRowFillsDisk = rowCount >= 9 && usedWithoutCurrent <= 0;
      if (
        currentRowFillsDisk ||
        petStatUsedCount(disk, option.key, rowIndex) >= option.maxCount ||
        usedWithoutCurrent + rowCount > 9 ||
        rowCount > option.maxCount
      ) {
        renderDetail(currentViewDetail(), currentViewAnalysis());
        return;
      }
      row.statKey = option.key;
      row.count = Math.min(row.count, option.maxCount);
      row.value = Math.min(row.value, option.max);
    } else if (field.dataset.petField === "count") {
      const option = petOption(disk.type, row.statKey);
      row.count = clampInt(field.value, 1, Math.min(option.maxCount, 9));
    } else if (field.dataset.petField === "value") {
      const option = petOption(disk.type, row.statKey);
      row.value = clampNum(field.value, 0, option.max);
    }
    disk.rows = normalizePetRows(disk.rows, disk.type);
    savePetSimulatorConfig();
    renderDetail(currentViewDetail(), currentViewAnalysis());
  });

  els.collapseResultsBtn.addEventListener("click", () => {
    setResultsCollapsed(!resultsCollapsed);
  });

  els.themeToggle.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("light") ? "dark" : "light");
  });

  document.addEventListener("mouseover", (e) => {
    const tile = e.target.closest(".mobile-icon-tile[tabindex]");
    if (!tile) return;
    const popover = tile.querySelector(".mobile-detail-popover");
    if (!popover) return;
    const rect = tile.getBoundingClientRect();
    const pw = Math.min(360, window.innerWidth * 0.82);
    const overflowsRight = rect.right + 8 + pw > window.innerWidth - 8;
    popover.classList.toggle("mobile-detail-popover--flip", overflowsRight && !popover.classList.contains("mobile-detail-popover--right"));
  });
}

renderServers();
renderRankingControls();
renderRankingRows();
loadHistory();
loadFavorites();
renderHistory();
setCollapseButtonIcon();
applyTheme(localStorage.getItem("aion2-theme") || "dark");
bindEvents();
loadS2TMap().finally(() => {
  setView(state.view);
  updateBackToTopVisibility();
  loadPetSimulatorFromCloud();
  loadWingBonusCatalog().then(() => {
    if (state.selectedDetail && state.selectedAttack) renderDetail(currentViewDetail(), currentViewAnalysis());
  });
  if (state.titleBonusEnabled) {
    loadTitleCatalog().then(() => {
      if (state.selectedDetail && state.selectedAttack) renderDetail(currentViewDetail(), currentViewAnalysis());
    });
  }
});













