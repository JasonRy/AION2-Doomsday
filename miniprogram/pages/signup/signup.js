const db = wx.cloud.database()
const { toTraditional } = require('../../utils/s2t')

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
    showForm: false,
    useTraditional: false,
    charNameOriginal: ''
  },

  onLoad(options) {
    this.setData({ roomId: options.roomId })
    this.getOpenid()
    this.loadRoom()
    this.loadSignups()
  },

  onShow() {
    setTimeout(() => this.loadSignups(), 500)
  },

  getOpenid() {
    wx.cloud.callFunction({
      name: 'getOpenid',
      success: res => {
        const openid = res.result.openid
        this.setData({ openid })
        this.updateLeaderStatus()
      }
    })
  },

  updateLeaderStatus() {
    const { openid, room } = this.data
    if (openid && room.creatorOpenid) {
      this.setData({ isLeader: openid === room.creatorOpenid })
    }
  },

  loadRoom() {
    db.collection('rooms').doc(this.data.roomId).get({
      success: res => {
        this.setData({ room: res.data }, () => {
          this.updateLeaderStatus()
        })
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

  pickFromMyCharacters() {
    wx.navigateTo({
      url: '/pages/myCharacters/myCharacters?select=1',
      events: {
        characterSelected: char => {
          this.setData({
            showForm: true,
            'form.race': char.race,
            'form.className': char.className,
            'form.charName': char.charName,
            'form.jobType': char.jobType,
            'form.jobClass': char.jobClass,
            'form.power': char.power,
            'form.remark': char.remark || '',
            currentClassOptions: this.data.classMap[char.race] || [],
            currentJobClassOptions: this.data.jobClassMap[char.jobType] || []
          })
        }
      }
    })
  },

  pickFromList() {
    const { roomId, signups } = this.data
    const joinedOpenids = signups.map(s => s._openid).join(',')
    wx.navigateTo({
      url: `/pages/registerList/registerList?select=1&roomId=${roomId}&joined=${joinedOpenids}`,
      events: {
        memberSelected: member => {
          const duplicate = this.data.signups.find(s => s.charName === member.charName)
          if (duplicate) {
            wx.showModal({
              title: '重复添加',
              content: `${member.charName} 已在「${this.data.room.name}」队伍中。`,
              showCancel: false,
              confirmText: '知道了'
            })
            return
          }
          db.collection('signups').add({
            data: {
              charName: member.charName,
              race: member.race,
              className: member.className,
              jobType: member.jobType,
              jobClass: member.jobClass,
              power: member.power,
              remark: member.remark || '',
              roomId,
              order: 999,
              createTime: db.serverDate()
            },
            success: () => {
              wx.showToast({ title: '加入成功！', icon: 'success' })
              setTimeout(() => this.loadSignups(), 300)
            },
            fail: err => {
              console.error('pickFromList add fail', err)
              wx.showToast({ title: '加入失败，请重试', icon: 'none' })
            }
          })
        }
      }
    })
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    let value = e.detail.value
    if (field === 'charName' && this.data.useTraditional) {
      value = toTraditional(value)
    }
    this.setData({ [`form.${field}`]: value })
  },

  onToggleTraditional(e) {
    const useTraditional = e.detail.value
    if (useTraditional) {
      this.setData({ useTraditional, charNameOriginal: this.data.form.charName, 'form.charName': toTraditional(this.data.form.charName) })
    } else {
      this.setData({ useTraditional, 'form.charName': this.data.charNameOriginal, charNameOriginal: '' })
    }
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

  endRoom() {
    wx.showModal({
      title: '结束本次',
      content: '将删除队伍及所有报名记录，不可恢复。确认结束？',
      confirmText: '确认结束',
      confirmColor: '#cf6679',
      success: res => {
        if (!res.confirm) return
        wx.cloud.callFunction({
          name: 'deleteRoom',
          data: { roomId: this.data.roomId },
          success: () => {
            wx.showToast({ title: '已结束', icon: 'success' })
            setTimeout(() => wx.navigateBack(), 1500)
          },
          fail: () => wx.showToast({ title: '操作失败', icon: 'none' })
        })
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