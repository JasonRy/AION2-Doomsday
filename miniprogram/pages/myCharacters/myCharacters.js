const db = wx.cloud.database()
const { toTraditional } = require('../../utils/s2t')

Page({
  data: {
    characters: [],
    selectMode: false,
    showForm: false,
    editingId: null,
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
    useTraditional: false,
    charNameOriginal: '',
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

  onLoad(options) {
    const selectMode = options.select === '1'
    this.setData({ selectMode })
    if (selectMode) {
      wx.setNavigationBarTitle({ title: '选择角色' })
    }
    this.loadCharacters()
  },

  loadCharacters() {
    db.collection('myCharacters').where({ _openid: '{openid}' }).orderBy('createTime', 'asc').get({
      success: res => this.setData({ characters: res.data }),
      fail: err => console.error('loadCharacters fail', err)
    })
  },

  showAddForm() {
    this.setData({
      showForm: true,
      editingId: null,
      useTraditional: false,
      charNameOriginal: '',
      currentClassOptions: [],
      currentJobClassOptions: [],
      form: { race: '', className: '', charName: '', jobType: '', jobClass: '', power: '', remark: '' }
    })
  },

  editCharacter(e) {
    const id = e.currentTarget.dataset.id
    const char = this.data.characters.find(c => c._id === id)
    if (!char) return
    this.setData({
      showForm: true,
      editingId: id,
      useTraditional: false,
      charNameOriginal: '',
      currentClassOptions: this.data.classMap[char.race] || [],
      currentJobClassOptions: this.data.jobClassMap[char.jobType] || [],
      form: {
        race: char.race,
        className: char.className,
        charName: char.charName,
        jobType: char.jobType,
        jobClass: char.jobClass,
        power: char.power,
        remark: char.remark || ''
      }
    })
  },

  cancelForm() {
    this.setData({ showForm: false, editingId: null })
  },

  submitForm() {
    const { form, editingId } = this.data
    if (!form.race || !form.className || !form.charName || !form.jobType || !form.jobClass || !form.power) {
      wx.showToast({ title: '请填写必填信息', icon: 'none' })
      return
    }
    if (editingId) {
      db.collection('myCharacters').doc(editingId).update({
        data: { race: form.race, className: form.className, charName: form.charName, jobType: form.jobType, jobClass: form.jobClass, power: form.power, remark: form.remark },
        success: () => {
          wx.showToast({ title: '已更新', icon: 'success' })
          this.setData({ showForm: false, editingId: null })
          this.loadCharacters()
        }
      })
    } else {
      db.collection('myCharacters').add({
        data: { ...form, createTime: db.serverDate() },
        success: () => {
          wx.showToast({ title: '已添加', icon: 'success' })
          this.setData({ showForm: false })
          this.loadCharacters()
        }
      })
    }
  },

  deleteCharacter(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '删除后不可恢复，确定删除该角色？',
      confirmColor: '#cf6679',
      success: res => {
        if (!res.confirm) return
        db.collection('myCharacters').doc(id).remove({
          success: () => {
            wx.showToast({ title: '已删除', icon: 'success' })
            this.loadCharacters()
          }
        })
      }
    })
  },

  selectCharacter(e) {
    if (!this.data.selectMode) return
    const id = e.currentTarget.dataset.id
    const char = this.data.characters.find(c => c._id === id)
    if (!char) return
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('characterSelected', {
      charName: char.charName,
      race: char.race,
      className: char.className,
      jobType: char.jobType,
      jobClass: char.jobClass,
      power: char.power,
      remark: char.remark || ''
    })
    wx.navigateBack()
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
    this.setData({ 'form.race': race, 'form.className': '', currentClassOptions: this.data.classMap[race] })
  },

  onClassChange(e) {
    this.setData({ 'form.className': this.data.currentClassOptions[e.detail.value] })
  },

  onJobTypeChange(e) {
    const value = this.data.jobTypeOptions[e.detail.value]
    this.setData({ 'form.jobType': value, 'form.jobClass': '', currentJobClassOptions: this.data.jobClassMap[value] })
  },

  onJobClassChange(e) {
    this.setData({ 'form.jobClass': this.data.currentJobClassOptions[e.detail.value] })
  }
})
