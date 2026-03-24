const db = wx.cloud.database()

Page({
  data: {
    roomId: '',
    mode: 'create',
    raidDate: '',
    raidHour: '20:00',
    form: {
      name: '',
      dungeonName: '',
      raidTime: '',
      maxPlayers: 8
    }
  },

  onLoad(options) {
    const now = new Date()
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
    this.setData({
      mode: options.mode,
      raidDate: date,
      'form.raidTime': `${date} 20:00`
    })
    if (options.roomId) {
      this.setData({ roomId: options.roomId })
      this.loadRoom(options.roomId)
    }
  },

  loadRoom(roomId) {
    db.collection('rooms').doc(roomId).get({
      success: res => {
        this.setData({ form: res.data })
      }
    })
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    const value = field === 'maxPlayers' ? parseInt(e.detail.value) : e.detail.value
    this.setData({ [`form.${field}`]: value })
  },

  onDateChange(e) {
    const date = e.detail.value
    this.setData({
      raidDate: date,
      'form.raidTime': `${date} ${this.data.raidHour}`
    })
  },

  onTimeChange(e) {
    const hour = e.detail.value
    this.setData({
      raidHour: hour,
      'form.raidTime': `${this.data.raidDate} ${hour}`
    })
  },

  submitRoom() {
    const { form, mode, roomId } = this.data

    if (!form.name || !form.dungeonName || !form.raidTime) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }

    if (mode === 'create') {
      db.collection('rooms').add({
        data: {
          ...form,
          locked: false,
          createTime: db.serverDate()
        },
        success: () => {
          wx.showToast({ title: '创建成功！' })
          setTimeout(() => wx.navigateBack(), 1500)
        }
      })
    } else {
      db.collection('rooms').doc(roomId).update({
        data: form,
        success: () => {
          wx.showToast({ title: '更新成功！' })
          setTimeout(() => wx.navigateBack(), 1500)
        }
      })
    }
  }
})