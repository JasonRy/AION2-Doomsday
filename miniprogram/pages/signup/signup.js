const db = wx.cloud.database()

Page({
  data: {
    roomId: '',
    room: {},
    signups: [],
    mySignup: null,
    isLeader: false,
    openid: '',
    jobTypeOptions: ['输出', '辅助', '防御'],
    jobClassMap: {
      '输出': ['剑星', '弓星', '杀星', '魔道星', '精灵星'],
      '辅助': ['治愈星', '护法星'],
      '防御': ['守护星']
    },
    currentJobClassOptions: [],
    raceOptions: ['天族', '魔族'],
    classMap: {
      '魔族': ['伊斯拉佩爾', '吉凱爾', '崔妮爾', '露梅爾', '瑪爾庫坦', '阿斯佩爾', '艾萊修奇卡', '布里特拉', '奈蒙', '哈達爾', '盧德萊', '鄔爾古倫', '默尼', '奧達爾', '简卡卡', '克羅梅德', '奎靈', '巴巴隆'],
      '天族': ['希埃爾', '奈薩肯', '白傑爾', '凱西內爾', '尤斯迪埃', '艾瑞爾', '普雷奇翁', '梅斯蘭泰達', '希塔尼耶', '納尼亞', '塔哈巴達', '路特斯', '韮爾诺斯', '達彌努', '卡薩卡', '巴克爾摩', '天加隆', '巴卡爾摩']
    },
    currentClassOptions: [],
    form: {
      race: '',
      className: '',
      charName: '',
      jobType: '',
      jobClass: '',
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

  onJobTypeChange(e) {
    const value = this.data.jobTypeOptions[e.detail.value]
    this.setData({
      'form.jobType': value,
      'form.jobClass': '',
      currentJobClassOptions: this.data.jobClassMap[value]
    })
  },

  onJobClassChange(e) {
    const value = this.data.currentJobClassOptions[e.detail.value]
    this.setData({ 'form.jobClass': value })
  },

  onRaceChange(e) {
    const race = this.data.raceOptions[e.detail.value]
    this.setData({
      'form.race': race,
      'form.className': '',
      currentClassOptions: this.data.classMap[race]
    })
  },

  onClassChange(e) {
    const value = this.data.currentClassOptions[e.detail.value]
    this.setData({ 'form.className': value })
  },

  submitSignup() {
    const { form, roomId, mySignup } = this.data
    if (!form.race || !form.className || !form.charName || !form.jobType || !form.jobClass || !form.power) {
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

  copyName(e) {
    const { name, server } = e.currentTarget.dataset
    const serverAbbr = (server || '').substring(0, 2)
    const text = `${name}[${serverAbbr}]`
    wx.setClipboardData({
      data: text,
      success: () => wx.showToast({ title: `已复制：${text}`, icon: 'none' })
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