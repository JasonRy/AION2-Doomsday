const db = wx.cloud.database()

Page({
  data: {
    rooms: [],
    isLeader: false,
    openid: ''
  },

  onLoad() {
    this.checkIdentity()
    this.loadRooms()
  },

  onShow() {
    this.loadRooms()
  },

  // 检查是否是队长（第一个创建房间的人）
  checkIdentity() {
    wx.cloud.callFunction({
      name: 'getOpenid',
      success: res => {
        this.setData({ openid: res.result.openid })
      }
    })
  },

  // 加载房间列表
  loadRooms() {
    db.collection('rooms').orderBy('createTime', 'desc').get({
      success: res => {
        const now = Date.now()
        const rooms = res.data.map(r => {
          const raidMs = r.raidTime ? new Date(r.raidTime.replace(' ', 'T')).getTime() : 0
          return { ...r, expired: raidMs > 0 && raidMs + 6 * 3600 * 1000 < now }
        })
        this.setData({ rooms })
      }
    })
  },

  // 创建新房间（队长专用）
  createRoom() {
    wx.navigateTo({ url: '/pages/room/room?mode=create' })
  },

  // 进入房间查看名单
  enterRoom(e) {
    const roomId = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/signup/signup?roomId=${roomId}` })
  },

  goRegister() {
    wx.navigateTo({ url: '/pages/register/register' })
  },

  goRegisterList() {
    wx.navigateTo({ url: '/pages/registerList/registerList' })
  },

  goMyCharacters() {
    wx.navigateTo({ url: '/pages/myCharacters/myCharacters' })
  },

  // 删除队伍（队长专用）
  deleteRoom(e) {
    const roomId = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '删除后数据不可恢复，确定删除该队伍？',
      confirmColor: '#cf6679',
      success: res => {
        if (!res.confirm) return
        wx.cloud.callFunction({
          name: 'deleteRoom',
          data: { roomId },
          success: result => {
            if (result.result && result.result.success) {
              wx.showToast({ title: '已删除', icon: 'success' })
              this.loadRooms()
            } else {
              wx.showToast({ title: '删除失败', icon: 'none' })
            }
          },
          fail: () => wx.showToast({ title: '删除失败', icon: 'none' })
        })
      }
    })
  }
})