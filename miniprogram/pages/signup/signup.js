const db = wx.cloud.database()

Page({
  data: {
    roomId: '',
    room: {},
    signups: [],
    mySignup: null,
    isLeader: false,
    openid: '',
    form: {
      charName: '',
      jobType: '',
      power: '',
      remark: ''
    },
    showForm: false
  },

  onLoad(options) {
    this.setData({ roomId: options.roomId })
    this.getOpenid()
    this.loadRoom()
    this.loadSignups()
  },

  onShow() {
    this.loadSignups()
  },

  getOpenid() {
    wx.cloud.callFunction({
      name: 'getOpenid',
      success: res => {
        const openid = res.result.openid
        this.setData({ openid })
        if (openid ==='owXNx3XHEEADIqgsjda2ce1l3LZY') {
          this.setData({ isLeader: true })
        }
      }
    })
  },

  loadRoom() {
    db.collection('rooms').doc(this.data.roomId).get({
      success: res => {
        this.setData({ room: res.data })
      }
    })
  },

  loadSignups() {
    db.collection('signups')
      .where({ roomId: this.data.roomId })
      .orderBy('order', 'asc')
      .orderBy('createTime', 'asc')
      .get({
        success: res => {
          const signups = res.data
          const mySignup = signups.find(s => s._openid === this.data.openid)
          this.setData({ signups, mySignup: mySignup || null })
        }
      })
  },

  toggleForm() {
    this.setData({ showForm: !this.data.showForm })
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    this.setData({ [`form.${field}`]: e.detail.value })
  },

  submitSignup() {
    const { form, roomId, mySignup } = this.data
    if (!form.charName || !form.jobType || !form.power) {
      wx.showToast({ title: '请填写必填信息', icon: 'none' })
      return
    }

    if (mySignup) {
      wx.showToast({ title: '你已经报名了', icon: 'none' })
      return
    }

    db.collection('signups').add({
      data: {
        ...form,
        roomId,
        order: 999,
        createTime: db.serverDate()
      },
      success: () => {
        wx.showToast({ title: '报名成功！', icon: 'success' })
        this.setData({ showForm: false })
        this.loadSignups()
      }
    })
  },

  cancelSignup() {
    const { mySignup } = this.data
    if (!mySignup) return
    wx.showModal({
      title: '确认取消',
      content: '确定要取消报名吗？',
      success: res => {
        if (res.confirm) {
          db.collection('signups').doc(mySignup._id).remove({
            success: () => {
              wx.showToast({ title: '已取消报名', icon: 'success' })
              this.setData({ mySignup: null })
              this.loadSignups()
            }
          })
        }
      }
    })
  },

  // 队长功能：踢人
  kickPlayer(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认踢出',
      content: '确定要将此玩家移出名单吗？',
      success: res => {
        if (res.confirm) {
          db.collection('signups').doc(id).remove({
            success: () => {
              wx.showToast({ title: '已移出', icon: 'success' })
              this.loadSignups()
            }
          })
        }
      }
    })
  },

  // 队长功能：上移
  moveUp(e) {
    const index = e.currentTarget.dataset.index
    const signups = this.data.signups
    if (index === 0) return
    const current = signups[index]
    const prev = signups[index - 1]
    db.collection('signups').doc(current._id).update({ data: { order: index - 1 } })
    db.collection('signups').doc(prev._id).update({ data: { order: index } })
    setTimeout(() => this.loadSignups(), 300)
  },

  // 队长功能：下移
  moveDown(e) {
    const index = e.currentTarget.dataset.index
    const signups = this.data.signups
    if (index === signups.length - 1) return
    const current = signups[index]
    const next = signups[index + 1]
    db.collection('signups').doc(current._id).update({ data: { order: index + 1 } })
    db.collection('signups').doc(next._id).update({ data: { order: index } })
    setTimeout(() => this.loadSignups(), 300)
  },

  // 队长功能：锁定名单
  toggleLock() {
    const locked = !this.data.room.locked
    db.collection('rooms').doc(this.data.roomId).update({
      data: { locked },
      success: () => {
        wx.showToast({ title: locked ? '名单已锁定' : '名单已解锁', icon: 'success' })
        this.loadRoom()
      }
    })
  }
})