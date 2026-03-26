const ANGEL_SERVERS = [
  { serverId: 1001, serverName: '希埃爾' },
  { serverId: 1002, serverName: '奈薩肯' },
  { serverId: 1003, serverName: '白傑爾' },
  { serverId: 1004, serverName: '凱西內爾' },
  { serverId: 1005, serverName: '尤斯迪埃' },
  { serverId: 1006, serverName: '艾瑞爾' },
  { serverId: 1007, serverName: '普雷奇翁' },
  { serverId: 1008, serverName: '梅斯蘭泰達' },
  { serverId: 1009, serverName: '希塔尼耶' },
  { serverId: 1010, serverName: '納尼亞' },
  { serverId: 1011, serverName: '塔哈巴達' },
  { serverId: 1012, serverName: '路特斯' },
  { serverId: 1013, serverName: '菲爾諾斯' },
  { serverId: 1014, serverName: '達彌努' },
  { serverId: 1015, serverName: '卡薩卡' },
  { serverId: 1016, serverName: '巴卡爾摩' },
  { serverId: 1017, serverName: '天加隆' },
  { serverId: 1018, serverName: '科奇隆' },
]

const DEMON_SERVERS = [
  { serverId: 2001, serverName: '伊斯拉佩爾' },
  { serverId: 2002, serverName: '吉凱爾' },
  { serverId: 2003, serverName: '崔妮爾' },
  { serverId: 2004, serverName: '露梅爾' },
  { serverId: 2005, serverName: '瑪爾庫坦' },
  { serverId: 2006, serverName: '阿斯佩爾' },
  { serverId: 2007, serverName: '艾萊修奇卡' },
  { serverId: 2008, serverName: '布里特拉' },
  { serverId: 2009, serverName: '奈蒙' },
  { serverId: 2010, serverName: '哈達爾' },
  { serverId: 2011, serverName: '盧德萊' },
  { serverId: 2012, serverName: '鄔爾古倫' },
  { serverId: 2013, serverName: '默尼' },
  { serverId: 2014, serverName: '奧達爾' },
  { serverId: 2015, serverName: '簡卡卡' },
  { serverId: 2016, serverName: '克羅梅德' },
  { serverId: 2017, serverName: '奎靈' },
  { serverId: 2018, serverName: '巴巴隆' },
]

function getServersByRace(race) {
  if (race === 1) return ANGEL_SERVERS
  if (race === 2) return DEMON_SERVERS
  return [...ANGEL_SERVERS, ...DEMON_SERVERS]
}

const ALL_SERVER_OPTION = [{ serverId: 0, serverName: '全部' }]

Page({
  data: {
    keyword: '',
    selectedServerId: 0,
    selectedRace: 0,
    serverIndex: 0,
    raceOptions: [
      { label: '全部', value: 0 },
      { label: '天族', value: 1 },
      { label: '魔族', value: 2 },
    ],
    servers: ALL_SERVER_OPTION,

    autoConvert: false,

    results: [],
    loading: false,
    searched: false,

    showDetail: false,
    detailLoading: false,
    detailChar: null,
    detailCharIndex: 0,
    detailInfo: null,
    detailItemLevel: 0,
    detailEquipItems: [],
    detailEquipLoading: false,
    detailServerNum: 0,
    detailStatBasic: [],
    detailStatSecondary: [],
    detailSkillActive: [],
    detailSkillPassive: [],
    detailSkillDp: [],
    detailTitleGroups: [],

    historyList: [],
    showHistory: true,
    detailDaevanionAtk: 0,
    detailDaevanionEntries: [],
    atkBreakdown: null,
    showAtkDetail: false,
  },

  onLoad() {
    try {
      const list = wx.getStorageSync('charHistoryList') || []
      this.setData({ historyList: list })
    } catch (e) {}
  },

  onKeywordInput(e) {
    this.setData({ keyword: e.detail.value })
  },

  onServerChange(e) {
    const idx = Number(e.detail.value)
    this.setData({
      serverIndex: idx,
      selectedServerId: this.data.servers[idx].serverId
    })
  },

  onRaceTap(e) {
    const race = e.currentTarget.dataset.value
    let servers
    if (race === 0) {
      servers = ALL_SERVER_OPTION
    } else if (race === 1) {
      servers = ANGEL_SERVERS
    } else {
      servers = DEMON_SERVERS
    }
    this.setData({
      selectedRace: race,
      servers: servers,
      serverIndex: 0,
      selectedServerId: servers[0].serverId
    })
  },

  onToggleConvert() {
    const next = !this.data.autoConvert
    this.setData({ autoConvert: next })
    const kw = this.data.keyword.trim()
    if (!kw || !next) return
    // 切换到繁时立即转换输入框内容
    const self = this
    wx.cloud.callFunction({ name: 'convertTW', data: { text: kw } }).then(function(res) {
      const converted = res.result && res.result.result ? res.result.result : kw
      if (converted !== kw) self.setData({ keyword: converted })
    }).catch(function() {})
  },

  _stripHtml(str) {
    if (typeof str !== 'string') return str
    return str.replace(/<[^>]*>/g, '')
  },

  _getServerName(serverId) {
    const all = ANGEL_SERVERS.concat(DEMON_SERVERS)
    for (let i = 0; i < all.length; i++) {
      if (all[i].serverId === serverId) return all[i].serverName
    }
    return ''
  },

  _cleanChar(c) {
    const self = this
    let cid = self._stripHtml(c.characterId || c.id || '')
    try { cid = decodeURIComponent(cid) } catch (e) {}
    return {
      characterId: cid,
      serverId: c.serverId,
      serverName: self._getServerName(c.serverId),
      characterName: self._stripHtml(c.characterName || c.name || ''),
      className: self._stripHtml(c.className || c.class || ''),
      race: c.race,
      level: c.level
    }
  },

  _request(url) {
    return new Promise(function(resolve, reject) {
      wx.request({
        url: url,
        method: 'GET',
        header: {
          'Accept': 'application/json',
          'Referer': 'https://tw.ncsoft.com/aion2/'
        },
        success: function(res) {
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(new Error('status ' + res.statusCode))
          }
        },
        fail: function(err) { reject(err) }
      })
    })
  },

  onSearch() {
    const { keyword, selectedServerId, selectedRace } = this.data
    if (!keyword.trim()) {
      wx.showToast({ title: '请输入角色名', icon: 'none' })
      return
    }
    this.setData({ loading: true, results: [], searched: false })

    const self = this
    const kw = keyword.trim()
    let url = 'https://tw.ncsoft.com/aion2/api/search/aion2tw/search/v2/character?keyword=' + encodeURIComponent(kw) + '&page=1&size=30'
    if (selectedServerId && selectedServerId !== 0) url += '&serverId=' + selectedServerId
    if (selectedRace !== 0) url += '&race=' + selectedRace
    console.log('[search] url:', url)

    this._request(url).then(function(data) {
      const raw = Array.isArray(data) ? data : (data.list || data.characters || data.result || [])
      const list = raw.map(function(c) { return self._cleanChar(c) })
      self.setData({ results: list, loading: false, searched: true })
    }).catch(function(err) {
      wx.showToast({ title: '查询失败：' + (err.message || ''), icon: 'none' })
      self.setData({ loading: false, searched: true })
    })
  },

  onCharTap(e) {
    this._loadCharDetail(e.currentTarget.dataset.char, e.currentTarget.dataset.index)
  },

  onHistoryTap(e) {
    const h = e.currentTarget.dataset.item
    this._loadCharDetail({ characterId: h.characterId, serverId: h.serverId, characterName: h.characterName, className: h.className, race: h.race, level: h.level }, -1)
  },

  _loadCharDetail(char, index) {
    this.setData({
      showDetail: true,
      detailLoading: true,
      detailChar: char,
      detailCharIndex: index >= 0 ? index + 1 : 0,
      detailInfo: null,
      detailItemLevel: 0,
      detailEquipItems: [],
      detailEquipLoading: false,
      detailStatBasic: [],
      detailStatSecondary: [],
      detailSkillActive: [],
      detailSkillPassive: [],
      detailSkillDp: [],
      detailTitleGroups: [],
      detailDaevanionAtk: 0,
      detailDaevanionEntries: [],
      atkBreakdown: null,
      showAtkDetail: false,
    })

    const self = this
    const { characterId, serverId } = char
    const infoUrl = 'https://tw.ncsoft.com/aion2/api/character/info?lang=zh&characterId=' + encodeURIComponent(characterId) + '&serverId=' + serverId
    const equipUrl = 'https://tw.ncsoft.com/aion2/api/character/equipment?lang=zh&characterId=' + encodeURIComponent(characterId) + '&serverId=' + serverId

    Promise.all([this._request(infoUrl), this._request(equipUrl)]).then(function(results) {
      const info = results[0]
      const statList = (info.stat && info.stat.statList) || []
      const ilStat = statList.filter(function(s) { return s.type === 'ItemLevel' })[0]
      const equipList = (results[1].equipment && results[1].equipment.equipmentList) || []

      const basicTypes = ['STR', 'DEX', 'INT', 'CON', 'AGI', 'WIS']
      const detailStatBasic = statList.filter(function(s) { return basicTypes.indexOf(s.type) !== -1 })
      const detailStatSecondary = statList.filter(function(s) {
        return s.type !== 'ItemLevel' && basicTypes.indexOf(s.type) === -1
      }).map(function(s) {
        const bi = s.name.indexOf('[')
        return { type: s.type, name: bi !== -1 ? s.name.substring(0, bi).trim() : s.name, value: s.value, statSecondList: s.statSecondList || [] }
      })

      const allSkills = (results[1].skill && results[1].skill.skillList) || []
      const detailSkillActive = allSkills.filter(function(s) { return s.category === 'Active' })
      const detailSkillPassive = allSkills.filter(function(s) { return s.category === 'Passive' })
      const detailSkillDp = allSkills.filter(function(s) { return s.category === 'Dp' })

      const titleList = (info.title && info.title.titleList) || []
      const catOrder = ['Attack', 'Defense', 'Etc']
      const catLabel = { Attack: '攻擊称号', Defense: '防禦称号', Etc: '其他称号' }
      const catMap = {}
      titleList.forEach(function(t) {
        const c = t.equipCategory || 'Etc'
        if (!catMap[c]) catMap[c] = []
        catMap[c].push(t)
      })
      const detailTitleGroups = catOrder
        .filter(function(c) { return catMap[c] && catMap[c].length })
        .map(function(c) { return { category: c, label: catLabel[c] || c, items: catMap[c] } })

      const sid = info.profile ? info.profile.serverId : 0
      const rid = info.profile ? info.profile.raceId : 0
      const detailServerNum = rid === 1 ? sid - 1000 : rid === 2 ? sid - 2000 : 0

      self.setData({
        detailLoading: false,
        detailInfo: info,
        detailItemLevel: ilStat ? ilStat.value : 0,
        detailEquipLoading: equipList.length > 0,
        detailServerNum: detailServerNum,
        detailStatBasic: detailStatBasic,
        detailStatSecondary: detailStatSecondary,
        detailSkillActive: detailSkillActive,
        detailSkillPassive: detailSkillPassive,
        detailSkillDp: detailSkillDp,
        detailTitleGroups: detailTitleGroups,
      })

      if (info.profile) self._saveHistory(info.profile, ilStat ? ilStat.value : 0)

      // fetch daevanion board details using boardIds from boardList
      var boardList = (info.daevanion && info.daevanion.boardList) || []
      var daevPromises = boardList.map(function(board) {
        var url = 'https://tw.ncsoft.com/aion2/api/character/daevanion/detail?lang=zh' +
          '&characterId=' + encodeURIComponent(characterId) +
          '&serverId=' + serverId +
          '&boardId=' + board.id
        return self._request(url).then(function(res) {
          return { board: board, res: res }
        }).catch(function() { return { board: board, res: null } })
      })
      Promise.all(daevPromises).then(function(daevResults) {
        var daevEntries = []
        var daevAtk = 0
        daevResults.forEach(function(item) {
          var res = item.res
          var board = item.board
          if (!res || !res.openStatEffectList) return
          res.openStatEffectList.forEach(function(ef) {
            var desc = ef.desc || ''
            var m = desc.match(/(?:額外攻擊力|额外攻击力)\s*\+?([\d.]+)/)
            if (m) {
              var v = parseFloat(m[1]) || 0
              if (v > 0) { daevEntries.push({ boardName: board.name, value: v }); daevAtk += v }
            }
          })
        })
        self.setData({ detailDaevanionAtk: Math.round(daevAtk), detailDaevanionEntries: daevEntries })
        self._calcAttack()
      })

      // calc attack from non-equipment sources immediately
      self._calcAttack()

      if (equipList.length === 0) return

      const promises = equipList.map(function(item) {
        const url = 'https://tw.ncsoft.com/aion2/api/character/equipment/item?lang=zh' +
          '&id=' + item.id +
          '&enchantLevel=' + ((item.enchantLevel || 0) + (item.exceedLevel || 0)) +
          '&characterId=' + encodeURIComponent(characterId) +
          '&serverId=' + serverId +
          '&slotPos=' + item.slotPos
        return self._request(url).then(function(d) {
          const ms = d.mainStats || []
          const gss = d.godStoneStat
          return {
            slotPos: item.slotPos,
            mainStatsNormal: ms.filter(function(s) { return !s.exceed }),
            mainStatsExceed: ms.filter(function(s) { return !!s.exceed }),
            subStats: d.subStats || [],
            soulBindRate: d.soulBindRate != null ? d.soulBindRate : 0,
            magicStoneStat: Array.isArray(d.magicStoneStat) ? d.magicStoneStat : (d.magicStoneStat ? [d.magicStoneStat] : []),
            godStoneStat: gss ? {
              icon: gss.icon || '',
              name: gss.name || '',
              statList: Array.isArray(gss.statList) ? gss.statList : (Array.isArray(gss.stats) ? gss.stats : [])
            } : null,
            sources: Array.isArray(d.sources) ? d.sources : []
          }
        }).catch(function() {
          return { slotPos: item.slotPos, mainStatsNormal: [], mainStatsExceed: [], subStats: [], soulBindRate: 0, magicStoneStat: [], godStoneStat: null, sources: [] }
        })
      })

      Promise.all(promises).then(function(details) {
        const detailMap = {}
        details.forEach(function(d) { detailMap[d.slotPos] = d })
        const enriched = equipList.map(function(item) {
          const d = detailMap[item.slotPos] || {}
          const sources = d.sources || []
          return {
            id: item.id, name: item.name,
            enchantLevel: item.enchantLevel, exceedLevel: item.exceedLevel,
            grade: item.grade, slotPos: item.slotPos,
            slotPosName: item.slotPosName, icon: item.icon,
            mainStatsNormal: d.mainStatsNormal || [],
            mainStatsExceed: d.mainStatsExceed || [],
            subStats: d.subStats || [],
            soulBindRate: d.soulBindRate != null ? d.soulBindRate : 0,
            magicStoneStat: d.magicStoneStat || [],
            godStoneStat: d.godStoneStat || null,
            sourcesText: sources.map(function(s) { return typeof s === 'string' ? s : (s.name || s.desc || '') }).filter(Boolean).join(' · ')
          }
        })
        self.setData({ detailEquipItems: enriched, detailEquipLoading: false })
        self._calcAttack()
      })
    }).catch(function() {
      self.setData({ detailLoading: false })
    })
  },

  _calcAttack() {
    const self = this
    const SLOT_CN = {
      MainHand: '主手', SubHand: '副手',
      Torso: '胸甲', Pants: '腿甲', Helmet: '頭盔',
      Shoulder: '肩甲', Gloves: '手套', Boots: '長靴',
      Cape: '披風', Belt: '腰帶',
      Necklace: '項鍊', Earring1: '耳環1', Earring2: '耳環2',
      Ring1: '戒指1', Ring2: '戒指2',
      Bracelet1: '手鐲1', Bracelet2: '手鐲2',
    }
    function slotCN(n) { return SLOT_CN[n] || n }

    var slotMap = {}    // slotPos → group
    var groups = []     // ordered groups

    function getSlotGroup(slotPos, slotLabel, itemName) {
      if (!slotMap[slotPos]) {
        var g = { key: 'slot_' + slotPos, label: itemName || slotLabel, itemName: slotLabel, entries: [], flatSub: 0, pctSub: 0, expanded: false }
        slotMap[slotPos] = g
        groups.push(g)
      }
      return slotMap[slotPos]
    }

    function addEntry(g, label, value, isPct) {
      value = isPct ? (Math.round(value * 100) / 100) : (Math.round(value * 10) / 10)
      if (value !== 0) g.entries.push({ label: label, value: value, isPct: isPct })
    }

    function parseDescToG(desc, g) {
      if (!desc || typeof desc !== 'string') return
      var pm = desc.match(/(?:攻擊力增加|攻击力增加)\s*\+?([\d.]+)%/)
      if (pm) { addEntry(g, desc.trim(), parseFloat(pm[1]), true); return }
      var fm = desc.match(/(?:攻擊力|攻击力)\s*\+?([\d.]+)(?![%增加])/)
      if (fm) addEntry(g, desc.trim(), parseFloat(fm[1]), false)
    }

    function parseStatToG(stat, g) {
      if (!stat || !stat.name) return
      var n = stat.name
      if (n.indexOf('攻擊力') === -1 && n.indexOf('攻击力') === -1) return
      var isPct = n.indexOf('增加') !== -1
      var val = (parseFloat(stat.value) || 0) + (parseFloat(stat.extra) || 0)
      if (val === 0) return
      addEntry(g, n, val, isPct)
    }

    // Equipment — one group per slot
    ;(self.data.detailEquipItems || []).forEach(function(item) {
      var slotLabel = slotCN(item.slotPosName || ('' + item.slotPos))
      var g = getSlotGroup(item.slotPos, slotLabel, item.name)

      ;(item.mainStatsNormal || []).forEach(function(stat) {
        var sid   = stat.id || ''
        var extra = parseFloat(stat.extra) || 0
        var val   = parseFloat(stat.value) || 0
        var minV  = parseFloat(stat.minValue) || 0
        if (sid === 'WeaponFixingDamage') {
          var base = minV > 0 ? (minV + val) / 2 : val
          if (base  !== 0) addEntry(g, '裝備攻擊力', base, false)
          if (extra !== 0) addEntry(g, '強化攻擊力', extra, false)
        } else if (sid === 'DamageRatio') {
          var t = val + extra
          if (t !== 0) addEntry(g, '攻擊力增加%', t, true)
        } else {
          parseStatToG(stat, g)
        }
      })

      ;(item.mainStatsExceed || []).forEach(function(stat) {
        var sid   = stat.id || ''
        var extra = parseFloat(stat.extra) || 0
        if (sid === 'WeaponFixingDamage') {
          if (extra !== 0) addEntry(g, '突破攻擊力', extra, false)
        } else if (sid === 'DamageRatio') {
          if (extra !== 0) addEntry(g, '突破攻擊力增加%', extra, true)
        } else {
          parseStatToG(stat, g)
        }
      })

      ;(item.subStats || []).forEach(function(stat) { parseStatToG(stat, g) })

      ;(item.magicStoneStat || []).forEach(function(ms) {
        var msName = ms.name || ''
        var msVal  = parseFloat(ms.value) || 0
        var msIsAtk = msName.indexOf('攻擊力') !== -1 || msName.indexOf('攻击力') !== -1
        var msIsAtkPct = msName.indexOf('攻擊力增加') !== -1 || msName.indexOf('攻击力增加') !== -1
        if (ms.id === 'WeaponFixingDamage' || (msIsAtk && !msIsAtkPct)) {
          if (msVal !== 0) addEntry(g, '魔石·' + (msName || '攻擊力'), msVal, false)
        } else if (msIsAtkPct) {
          if (msVal !== 0) addEntry(g, '魔石·' + msName, msVal, true)
        } else {
          parseDescToG(ms.desc || msName, g)
        }
      })

      if (item.godStoneStat && item.godStoneStat.statList) {
        item.godStoneStat.statList.forEach(function(gs) {
          parseDescToG(gs.desc || gs.name || '', g)
        })
      }
    })

    // Daevanion group
    var daevList = self.data.detailDaevanionEntries || []
    if (daevList.length > 0) {
      var gDaev = { key: 'daevanion', label: '守護力', itemName: '', entries: [], flatSub: 0, pctSub: 0, expanded: false }
      daevList.forEach(function(de) {
        if (de.value > 0) gDaev.entries.push({ label: de.boardName, value: de.value, isPct: false })
      })
      if (gDaev.entries.length > 0) groups.push(gDaev)
    }

    // Character stats group
    var gChar = { key: 'char', label: '能力值', itemName: '', entries: [], flatSub: 0, pctSub: 0, expanded: false }

    // TODO: 角色等級基礎攻擊力目前官方 API 未開放，暫時寫死。
    //       已知 LV45 = 61。待接口開放後改為從角色數據動態讀取並建立等級對照表。
    addEntry(gChar, '角色等級攻擊力', 61, false)

    ;(self.data.detailStatBasic || []).concat(self.data.detailStatSecondary || []).forEach(function(stat) {
      ;(stat.statSecondList || []).forEach(function(desc) { parseDescToG(desc, gChar) })
    })
    if (gChar.entries.length > 0) groups.push(gChar)

    // Title group
    var gTitle = { key: 'title', label: '称号', itemName: '', entries: [], flatSub: 0, pctSub: 0, expanded: false }
    ;(self.data.detailTitleGroups || []).forEach(function(group) {
      ;(group.items || []).forEach(function(title) {
        ;(title.equipStatList || []).forEach(function(es) { parseDescToG(es.desc || '', gTitle) })
      })
    })
    if (gTitle.entries.length > 0) groups.push(gTitle)

    // Compute subtotals
    groups.forEach(function(g) {
      g.flatSub = Math.round(g.entries.filter(function(e) { return !e.isPct }).reduce(function(s, e) { return s + e.value }, 0))
      g.pctSub  = Math.round(g.entries.filter(function(e) { return  e.isPct }).reduce(function(s, e) { return s + e.value }, 0) * 10) / 10
    })

    var activeGroups = groups.filter(function(g) { return g.entries.length > 0 })
    var flatTotal = activeGroups.reduce(function(s, g) { return s + g.flatSub }, 0)
    var pctTotal  = Math.round(activeGroups.reduce(function(s, g) { return s + g.pctSub }, 0) * 10) / 10
    var result    = Math.round(flatTotal * (1 + pctTotal / 100))

    self.setData({
      atkBreakdown: {
        hasData: activeGroups.length > 0,
        flatTotal: flatTotal,
        pctTotal: pctTotal,
        result: result,
        groups: activeGroups,
      }
    })
  },

  onShowAtkDetail() {
    this.setData({ showAtkDetail: true })
  },

  onCloseAtkDetail() {
    this.setData({ showAtkDetail: false })
  },

  onToggleAtkGroup(e) {
    var index = e.currentTarget.dataset.index
    var key = 'atkBreakdown.groups[' + index + '].expanded'
    var upd = {}
    upd[key] = !this.data.atkBreakdown.groups[index].expanded
    this.setData(upd)
  },

  _saveHistory(profile, itemLevel) {
    const self = this
    try {
      let list = wx.getStorageSync('charHistoryList') || []
      // preserve isFavorite if already saved
      const existing = list.filter(function(h) { return h.characterId === profile.characterId })[0]
      list = list.filter(function(h) { return h.characterId !== profile.characterId })
      list.unshift({
        characterId: profile.characterId,
        characterName: profile.characterName,
        serverId: profile.serverId,
        serverName: profile.serverName,
        className: profile.className,
        race: profile.raceId,
        level: profile.characterLevel,
        itemLevel: itemLevel || 0,
        combatPower: profile.combatPower,
        profileImage: profile.profileImage,
        isFavorite: existing ? existing.isFavorite : false,
        savedAt: Date.now()
      })
      if (list.length > 30) list = list.slice(0, 30)
      wx.setStorageSync('charHistoryList', list)
      self.setData({ historyList: list })
    } catch (e) {}
  },

  onHistoryRemove(e) {
    const id = e.currentTarget.dataset.id
    const list = this.data.historyList.filter(function(h) { return h.characterId !== id })
    try { wx.setStorageSync('charHistoryList', list) } catch (e) {}
    this.setData({ historyList: list })
  },

  onHistoryFavorite(e) {
    const id = e.currentTarget.dataset.id
    const list = this.data.historyList.map(function(h) {
      if (h.characterId !== id) return h
      const n = {}
      const keys = Object.keys(h)
      for (let i = 0; i < keys.length; i++) n[keys[i]] = h[keys[i]]
      n.isFavorite = !h.isFavorite
      return n
    })
    try { wx.setStorageSync('charHistoryList', list) } catch (e) {}
    this.setData({ historyList: list })
  },

  onToggleHistory() {
    this.setData({ showHistory: !this.data.showHistory })
  },

  onCloseDetail() {
    this.setData({ showDetail: false })
  },
})
