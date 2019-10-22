var app = getApp();

Page({
  data: {
    tell: '',
    xiaoshi:0,
    can:true,
  },
  onLoad: function (options) {
    if(app.globalData.max > 0)
    {
      this.setData({
        tell: "",
        xiaoshi:1,
        disabled:false,
      })
    }else{
      this.setData({
        tell:"当前没有错题！",
        xiaoshi: 0,
        disabled: true,
      })
    }
  },
  onShow: function () {
    if (app.globalData.max > 0) {
      this.setData({
        tell: "",
        xiaoshi: 1,
        can: false,
      })
    } else {
      this.setData({
        tell: "当前没有错题！",
        xiaoshi: 0,
        can: true,
      })
    }
  },
  go:function(){
    wx.navigateTo({
      url: '../cuotiben/cuotiben',
    })
  }
})