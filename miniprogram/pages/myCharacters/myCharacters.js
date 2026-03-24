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
    registerMode: false,
    registeredCharName: '',
    existingMemberId: '',
    mySignupMap: {},
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
    const registerMode = options.mode === 'register'
    this.setData({ selectMode, registerMode })
    if (selectMode) {
      wx.setNavigationBarTitle({ title: registerMode ? '选择登记角色' : '选择角色' })
    }
    this.loadCharacters()
    this.loadRegisteredInfo()
  },

  onShow() {
    if (!this.data.selectMode) this.loadCharacters()
  },

  loadMySignups() {
    const charNames = this.data.characters.map(c => c.charName)
    if (charNames.length === 0) { this.setData({ mySignupMap: {} }); return }
    const _ = db.command
    db.collection('signups').where({ charName: _.in(charNames) }).get({
      success: res => {
        if (res.data.length === 0) { this.setData({ mySignupMap: {} }); return }
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
              map[s.charName] = { roomId: s.roomId, roomName: room.name }
            })
            this.setData({ mySignupMap: map })
          }
        })
      }
    })
  },

  _promptInTeam(roomId, roomName) {
    wx.showModal({
      title: '角色已在队伍中',
      content: `当前角色已在队伍「${roomName || '未知队伍'}」中，请先脱离队伍再进行此操作。是否前往所在队伍？`,
      confirmText: '前往队伍',
      cancelText: '取消',
      success: res => {
        if (res.confirm) wx.navigateTo({ url: `/pages/signup/signup?roomId=${roomId}` })
      }
    })
  },

  loadRegisteredInfo() {
    db.collection('members').where({ _openid: '{openid}' }).get({
      success: res => {
        const record = res.data[0]
        this.setData({
          registeredCharName: record ? record.charName : '',
          existingMemberId: record ? record._id : ''
        })
      }
    })
  },

  publishCharacter(e) {
    const id = e.currentTarget.dataset.id
    const char = this.data.characters.find(c => c._id === id)
    if (!char) return
    const doPublish = () => {
      db.collection('members').add({
        data: {
          charName: char.charName, race: char.race, className: char.className,
          jobType: char.jobType, jobClass: char.jobClass, power: char.power,
          remark: char.remark || '', createTime: db.serverDate()
        },
        success: () => {
          wx.showToast({ title: '已公开到玩家名册', icon: 'success' })
          this.loadRegisteredInfo()
        }
      })
    }
    if (this.data.existingMemberId) {
      wx.showModal({
        title: '替换登记',
        content: `已有公开角色「${this.data.registeredCharName}」，确定替换为此角色？`,
        confirmColor: '#c9a84c',
        success: res => {
          if (!res.confirm) return
          db.collection('members').doc(this.data.existingMemberId).remove({ success: doPublish })
        }
      })
    } else {
      doPublish()
    }
  },

  unpublishCharacter() {
    const { existingMemberId } = this.data
    if (!existingMemberId) return
    wx.showModal({
      title: '取消公开',
      content: '确定从玩家名册中移除此角色？',
      confirmColor: '#cf6679',
      success: res => {
        if (!res.confirm) return
        db.collection('members').doc(existingMemberId).remove({
          success: () => {
            wx.showToast({ title: '已从名册移除', icon: 'success' })
            this.loadRegisteredInfo()
          }
        })
      }
    })
  },

  loadCharacters() {
    db.collection('myCharacters').where({ _openid: '{openid}' }).orderBy('createTime', 'asc').get({
      success: res => this.setData({ characters: res.data }, () => this.loadMySignups()),
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
    const signupInfo = this.data.mySignupMap[char.charName]
    if (signupInfo) { this._promptInTeam(signupInfo.roomId, signupInfo.roomName); return }
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
    const char = this.data.characters.find(c => c._id === id)
    const signupInfo = char ? this.data.mySignupMap[char.charName] : null
    if (signupInfo) { this._promptInTeam(signupInfo.roomId, signupInfo.roomName); return }
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
    if (this.data.registerMode && char.charName === this.data.registeredCharName) return
    const signupInfo = this.data.mySignupMap[char.charName]
    if (signupInfo) { this._promptInTeam(signupInfo.roomId, signupInfo.roomName); return }
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
