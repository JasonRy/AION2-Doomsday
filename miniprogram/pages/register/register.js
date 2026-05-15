const db = wx.cloud.database()
const { toTraditional } = require('../../utils/s2t')

Page({
  data: {
    myRecord: null,
    useTraditional: false,
    charNameOriginal: '',
    raceOptions: ['天族', '魔族'],
    classMap: {
      '魔族': ['伊斯拉佩爾', '吉凱爾', '崔妮爾', '露梅爾', '瑪爾庫坦', '阿斯佩爾', '艾萊修奇卡', '布里特拉', '奈蒙', '哈達爾', '盧德萊', '鄔爾古倫', '默尼', '奧達爾', '简卡卡', '克羅梅德', '奎靈', '巴巴隆'],
      '天族': ['希埃爾', '奈薩肯', '白傑爾', '凱西內爾', '尤斯迪埃', '艾瑞爾', '普雷奇翁', '梅斯蘭泰達', '希塔尼耶', '納尼亞', '塔哈巴達', '路特斯', '韮爾诺斯', '達彌努', '卡薩卡', '巴克爾摩', '天加隆', '巴卡爾摩']
    },
    currentClassOptions: [],
    jobTypeOptions: ['输出', '辅助', '防御'],
    jobClassMap: {
      '输出': ['剑星', '弓星', '杀星', '魔道星', '精灵星'],
      '辅助': ['治愈星', '护法星'],
      '防御': ['守护星']
    },
    currentJobClassOptions: [],
    form: {
      race: '',
      className: '',
      charName: '',
      jobType: '',
      jobClass: '',
      power: '',
      remark: ''
    }
  },

  onLoad() {
    this.loadMyRecord()
  },

  pickFromMyCharacters() {
    wx.navigateTo({
      url: '/pages/myCharacters/myCharacters?select=1&mode=register',
      events: {
        characterSelected: char => {
          this.setData({
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

  loadMyRecord() {
    db.collection('members').where({ _openid: '{openid}' }).get({
      success: res => {
        this.setData({ myRecord: res.data[0] || null })
      },
      fail: err => {
        console.error('loadMyRecord fail', err)
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

  submitRegister() {
    const { form } = this.data
    if (!form.race || !form.className || !form.charName || !form.jobType || !form.jobClass || !form.power) {
      wx.showToast({ title: '请填写必填信息', icon: 'none' })
      return
    }
    db.collection('members').add({
      data: {
        ...form,
        createTime: db.serverDate()
      },
      success: () => {
        wx.showToast({ title: '登记成功！', icon: 'success' })
        setTimeout(() => wx.navigateBack(), 1500)
      },
      fail: err => {
        console.error('submitRegister fail', err)
        wx.showToast({ title: '登记失败，请重试', icon: 'none' })
      }
    })
  },

  cancelRegister() {
    const { myRecord } = this.data
    if (!myRecord) return
    wx.showModal({
      title: '确认取消',
      content: '确定要取消登记吗？',
      success: res => {
        if (!res.confirm) return
        db.collection('members').doc(myRecord._id).remove({
          success: () => {
            wx.showToast({ title: '已取消登记', icon: 'success' })
            this.setData({ myRecord: null })
          }
        })
      }
    })
  }
})
