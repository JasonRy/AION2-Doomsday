const db = wx.cloud.database()

const RACE_ORDER = { '魔族': 0, '天族': 1 }

Page({
  data: {
    members: [],
    filteredMembers: [],
    openid: '',
    isLeader: false,
    selectMode: false,
    selectedId: '',
    joinedOpenids: [],
    filterRace: '',
    filterClass: '',
    filterJobClass: '',
    signedUpRoomMap: {},
    classOptions: [],
    classFilterOptions: ['全部区'],
    jobClassOptions: ['剑星', '弓星', '杀星', '魔道星', '精灵星', '治愈星', '护法星', '守护星'],
    jobClassFilterOptions: ['全部职业', '剑星', '弓星', '杀星', '魔道星', '精灵星', '治愈星', '护法星', '守护星']
  },

  onLoad(options) {
    const selectMode = options.select === '1'
    const joinedOpenids = options.joined ? options.joined.split(',') : []
    this.setData({ selectMode, joinedOpenids })
    this.checkIdentity()
    this.loadMembers()
    this.loadSignedUpMap()
  },

  onShow() {
    if (!this.data.selectMode) {
      this.loadMembers()
      this.loadSignedUpMap()
    }
  },

  loadSignedUpMap() {
    db.collection('signups').get({
      success: res => {
        if (res.data.length === 0) { this.setData({ signedUpRoomMap: {} }); return }
        const _ = db.command
        const roomIds = [...new Set(res.data.map(s => s.roomId).filter(Boolean))]
        db.collection('rooms').where({ _id: _.in(roomIds) }).get({
          success: roomRes => {
            const roomMap = {}
            roomRes.data.forEach(r => { roomMap[r._id] = { name: r.name, raidTime: r.raidTime } })
            const map = {}
            const now = Date.now()
            res.data.forEach(s => {
              if (!s.roomId) return
              const room = roomMap[s.roomId]
              if (!room) return
              const raidMs = room.raidTime ? new Date(room.raidTime.replace(' ', 'T')).getTime() : 0
              if (raidMs > 0 && raidMs + 6 * 3600 * 1000 < now) return
              map[`${s._openid}|${s.charName}`] = { roomId: s.roomId, roomName: room.name }
            })
            this.setData({ signedUpRoomMap: map })
          }
        })
      }
    })
  },

  _promptInTeam(roomId, roomName) {
    wx.showModal({
      title: '队员已在队伍中',
      content: `该队员已在队伍「${roomName || '未知队伍'}」中，请先脱离队伍再进行此操作。是否前往所在队伍？`,
      confirmText: '前往队伍',
      cancelText: '取消',
      success: res => {
        if (res.confirm) wx.navigateTo({ url: `/pages/signup/signup?roomId=${roomId}` })
      }
    })
  },

  checkIdentity() {
    wx.cloud.callFunction({
      name: 'getOpenid',
      success: res => {
        this.setData({ openid: res.result.openid, isLeader: false }, () => {
          if (this.data.members.length > 0) {
            const sorted = this.sortMembers(this.data.members)
            this.setData({ members: sorted }, () => this.applyFilter())
          }
        })
      }
    })
  },

  loadMembers() {
    db.collection('members').get({
      success: res => {
        const sorted = this.sortMembers(res.data)
        const classSet = new Set(sorted.map(m => m.className).filter(Boolean))
        const classOptions = Array.from(classSet).sort((a, b) => a.localeCompare(b, 'zh'))
        this.setData({
          members: sorted,
          classOptions,
          classFilterOptions: ['全部区', ...classOptions]
        }, () => this.applyFilter())
      }
    })
  },

  sortMembers(list) {
    const openid = this.data.openid
    return list.slice().sort((a, b) => {
      const aOwn = a._openid === openid ? 0 : 1
      const bOwn = b._openid === openid ? 0 : 1
      if (aOwn !== bOwn) return aOwn - bOwn
      const r = (RACE_ORDER[a.race] ?? 2) - (RACE_ORDER[b.race] ?? 2)
      if (r !== 0) return r
      return (a.className || '').localeCompare(b.className || '', 'zh')
    })
  },

  applyFilter() {
    const { members, filterRace, filterClass, filterJobClass } = this.data
    let result = members
    if (filterRace) result = result.filter(m => m.race === filterRace)
    if (filterClass) result = result.filter(m => m.className === filterClass)
    if (filterJobClass) result = result.filter(m => m.jobClass === filterJobClass)
    this.setData({ filteredMembers: result })
  },

  onFilterRace(e) {
    const options = ['', '魔族', '天族']
    this.setData({ filterRace: options[e.detail.value] }, () => this.applyFilter())
  },

  onFilterClass(e) {
    const idx = parseInt(e.detail.value)
    const val = idx === 0 ? '' : this.data.classOptions[idx - 1]
    this.setData({ filterClass: val }, () => this.applyFilter())
  },

  onFilterJobClass(e) {
    const idx = parseInt(e.detail.value)
    const val = idx === 0 ? '' : this.data.jobClassOptions[idx - 1]
    this.setData({ filterJobClass: val }, () => this.applyFilter())
  },

  clearFilters() {
    this.setData({ filterRace: '', filterClass: '', filterJobClass: '' }, () => this.applyFilter())
  },

  selectMember(e) {
    if (!this.data.selectMode) return
    const id = e.currentTarget.dataset.id
    const joined = this.data.joinedOpenids
    const member = this.data.filteredMembers.find(m => m._id === id)
    if (!member) return
    if (joined.includes(member._openid)) return
    if (this.data.signedUpRoomMap[`${member._openid}|${member.charName}`]) return
    this.setData({ selectedId: this.data.selectedId === id ? '' : id })
  },

  confirmSelect() {
    const { selectedId, filteredMembers } = this.data
    if (!selectedId) {
      wx.showToast({ title: '请先选择一名队员', icon: 'none' })
      return
    }
    const member = filteredMembers.find(m => m._id === selectedId)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('memberSelected', {
      charName: member.charName,
      race: member.race,
      className: member.className,
      jobType: member.jobType,
      jobClass: member.jobClass,
      power: member.power,
      remark: member.remark || ''
    })
    wx.navigateBack()
  },

  copyName(e) {
    const { name, server } = e.currentTarget.dataset
    const serverAbbr = (server || '').substring(0, 2)
    const text = `${name}[${serverAbbr}]`
    wx.setClipboardData({
      data: text,
      success: () => wx.showToast({ title: `已复制：${text}`, icon: 'none' })
    })
  },

  kickMember(e) {
    const id = e.currentTarget.dataset.id
    const member = this.data.members.find(m => m._id === id)
    const signupInfo = member ? this.data.signedUpRoomMap[`${member._openid}|${member.charName}`] : null
    if (signupInfo) { this._promptInTeam(signupInfo.roomId, signupInfo.roomName); return }
    wx.showModal({
      title: '确认移除',
      content: '确定要移除该队员登记吗？',
      confirmColor: '#cf6679',
      success: res => {
        if (!res.confirm) return
        db.collection('members').doc(id).remove({
          success: () => {
            wx.showToast({ title: '已移除', icon: 'success' })
            this.loadMembers()
          }
        })
      }
    })
  }
})
