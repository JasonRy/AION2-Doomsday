App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cloud1-9gd6j9j6fab88c34',
      traceUser: true,
    })
  },
  globalData: {}
})