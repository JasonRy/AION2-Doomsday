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
        const openid = res.result.openid
        this.setData({ openid })
        // 队长openid写死，你自己的openid
        if (openid ==='owXNx3XHEEADIqgsjda2ce1l3LZY') {
          this.setData({ isLeader: true })
        }
      }
    })
  },

  // 加载房间列表
  loadRooms() {
    db.collection('rooms').orderBy('createTime', 'desc').get({
      success: res => {
        this.setData({ rooms: res.data })
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
  }
})