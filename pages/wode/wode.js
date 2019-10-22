var app = getApp();

Page({
  data: {
    using_site: '',
    userInfo: {
      avatarUrl: "",
      nickName: "",
    },
    grade: app.globalData.grades,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
  },

  onLoad: function (options) {
    var g = wx.getStorageSync('grades');
    app.globalData.using = wx.getStorageSync('using');
    if (g) {
      app.globalData.grades = g;
      this.setData({
        grade: app.globalData.grades
      });
    }
    else {
      this.setData({
        grade: 0
      });
    };
    var that = this;



    if (app.globalData.using == 0) {
      this.setData({
        using_site: '../wode/ware/kong.png'
      })
    } else if (app.globalData.using == 1) {
      this.setData({
        using_site: '../wode[表情]op/maozi/tianshi.png'
      })
    } else if (app.globalData.using == 2) {
      this.setData({
        using_site: '../wode/ware/flower.png'
      })
    } else if (app.globalData.using == 3) {
      this.setData({
        using_site: '../wode/ware/leaf.png'
      })
    } else if (app.globalData.using == 4) {
      this.setData({
        using_site: '../wode/ware/king.png'
      })
    } else if (app.globalData.using == 5) {
      this.setData({
        using_site: '../wode/ware/gcap.png'
      })
    } else if (app.globalData.using == 6) {
      this.setData({
        using_site: '../wode/ware/party.png'
      })
    } else if (app.globalData.using == 7) {
      this.setData({
        using_site: '../wode/ware[表情]1.png'
      })
    };

    wx.setStorage({
      key: 'good0',
      data: app.globalData.good0,
    })
  },
  gotodetail: function () {
    wx.navigateTo({
      url: 'detail/detail',
    })
  },
  gotocj: function () {
    wx.navigateTo({
      url: 'cj[表情]',
    })
  },
  gotoshop: function () {
    wx.navigateTo({
      url: 'shop[表情]op',
    })
  },
  gotoware: function () {
    wx.navigateTo({
      url: 'ware/ware',
    })
  },
  onShow: function () {
    this.setData({
      grade: app.globalData.grades,
    });
    if (app.globalData.using == 0) {
      this.setData({
        using_site: '../wode/ware/kong.png'
      })
    } else if (app.globalData.using == 1) {
      this.setData({
        using_site: '../wode[表情]op/maozi/tianshi.png'
      })
    } else if (app.globalData.using == 2) {
      this.setData({
        using_site: '../wode/ware/flower.png'
      })
    } else if (app.globalData.using == 3) {
      this.setData({
        using_site: '../wode/ware/leaf.png'
      })
    } else if (app.globalData.using == 4) {
      this.setData({
        using_site: '../wode/ware/king.png'
      })
    } else if (app.globalData.using == 5) {
      this.setData({
        using_site: '../wode/ware/gcap.png'
      })
    } else if (app.globalData.using == 6) {
      this.setData({
        using_site: '../wode/ware/party.png'
      })
    } else if (app.globalData.using == 7) {
      this.setData({
        using_site: '../wode/ware[表情]1.png'
      })
    };
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    var avatarUrl = 'userInfo.avatarUrl';
    var nickName = 'userInfo.nickName';
    this.setData({
      [avatarUrl]: e.detail.userInfo.avatarUrl,
      [nickName]: e.detail.userInfo.nickName,
    })
  }
})