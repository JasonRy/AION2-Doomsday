const db = wx.cloud.database()

Page({
  data: {
    roomId: '',
    mode: 'create',
    form: {
      name: '',
      dungeonName: '',
      raidTime: '',
      maxPlayers: 8
    }
  },

  onLoad(options) {
    this.setData({ mode: options.mode })
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