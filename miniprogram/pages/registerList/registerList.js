const db = wx.cloud.database()

Page({
  data: {
    members: [],
    openid: '',
    isLeader: false,
    selectMode: false,
    selectedId: '',
    joinedOpenids: []
  },

  onLoad(options) {
    const selectMode = options.select === '1'
    const joinedOpenids = options.joined ? options.joined.split(',') : []
    this.setData({ selectMode, joinedOpenids })
    this.checkIdentity()
    this.loadMembers()
  },

  onShow() {
    if (!this.data.selectMode) this.loadMembers()
  },

  checkIdentity() {
    wx.cloud.callFunction({
      name: 'getOpenid',
      success: res => {
        this.setData({ openid: res.result.openid, isLeader: false })
      }
    })
  },

  loadMembers() {
    db.collection('members').orderBy('createTime', 'asc').get({
      success: res => {
        this.setData({ members: res.data })
      }
    })
  },

  // 选择模式：点击卡片选中/取消
  selectMember(e) {
    if (!this.data.selectMode) return
    const id = e.currentTarget.dataset.id
    const joined = this.data.joinedOpenids
    const member = this.data.members.find(m => m._id === id)
    if (member && joined.includes(member._openid)) return // 已在队伍中不可选
    this.setData({ selectedId: this.data.selectedId === id ? '' : id })
  },

  // 确认加入
  confirmSelect() {
    const { selectedId, members } = this.data
    if (!selectedId) {
      wx.showToast({ title: '请先选择一名队员', icon: 'none' })
      return
    }
    const member = members.find(m => m._id === selectedId)
    const memberData = {
      charName: member.charName,
      race: member.race,
      className: member.className,
      jobType: member.jobType,
      jobClass: member.jobClass,
      power: member.power,
      remark: member.remark || ''
    }
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('memberSelected', memberData)
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
