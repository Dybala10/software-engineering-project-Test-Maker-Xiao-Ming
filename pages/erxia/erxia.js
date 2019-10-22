Page({
  data: {
    day_num: 100
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  backtoshouye: function (options) {
    wx.navigateBack({

    })
  },
  goto1: function (options) {
    wx.navigateTo({
      url: 'yi/yi',
    })
  },
  goto2: function (options) {
    wx.navigateTo({
      url: 'er/er',
    })
  },
  goto3: function (options) {
    wx.navigateTo({
      url: 'all/all',
    })
  },
  navigateBack: function () {
    wx.switchTab({
      url: '../fp/fp'
    })
  }
})