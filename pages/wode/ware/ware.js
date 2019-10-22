var app = getApp();

Page({
  data: {
    can1_0: "",
    can1_1: "",
    can1_2: "",
    can1_3: "",
    can1_4: "",
    can1_5: "",
    can1_6: "",
    can1_7: "",

    t1_0: 1,
    t1_1: 1,
    t1_2: 1,
    t1_3: 1,
    t1_4: 1,
    t1_5: 1,
    t1_6: 1,
    t1_7: 1,
  },
  onLoad: function (options) {
    this.fresh();
  },

  use1_0: function(){
    if(app.globalData.good0 == 1)
    {
    app.globalData.using = 0;
    wx.setStorage({
      key: 'using',
      data: 0,
    })
    wx.showToast({
      title: '更换成功！',
    })
    this.fresh();
    }else{
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_1: function () {
    if (app.globalData.good1 == 1) 
    {
    app.globalData.using = 1;
    wx.setStorage({
      key: 'using',
      data: 1,
    })
    wx.showToast({
      title: '更换成功！',
    })
    this.fresh();
    }else{
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_2: function () {
    if (app.globalData.good2 == 1) 
    {
    app.globalData.using = 2;
    wx.setStorage({
      key: 'using',
      data: 2,
    })
    wx.showToast({
      title: '更换成功！',
      icon: 'none'
    })
    this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_3: function () {
    if (app.globalData.good3 == 1) {
      app.globalData.using = 3;
      wx.setStorage({
        key: 'using',
        data: 3,
      })
      wx.showToast({
        title: '更换成功！',
        icon: 'none'
      })
      this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_4: function () {
    if (app.globalData.good4 == 1) {
      app.globalData.using = 4;
      wx.setStorage({
        key: 'using',
        data: 4,
      })
      wx.showToast({
        title: '更换成功！',
      })
      this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_5: function () {
    if (app.globalData.good5 == 1) {
      app.globalData.using = 5;
      wx.setStorage({
        key: 'using',
        data: 5,
      })
      wx.showToast({
        title: '更换成功！',
      })
      this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_6: function () {
    if (app.globalData.good6 == 1) {
      app.globalData.using = 6;
      wx.setStorage({
        key: 'using',
        data: 6,
      })
      wx.showToast({
        title: '更换成功！',
      })
      this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },
  use1_7: function () {
    if (app.globalData.good7 == 1) {
      app.globalData.using = 7;
      wx.setStorage({
        key: 'using',
        data: 7,
      })
      wx.showToast({
        title: '更换成功！',
      })
      this.fresh();
    } else {
      wx.showToast({
        title: '请先购买商品！',
        icon: 'none'
      })
    }
  },

  fresh:function(){
    var that = this;

    app.globalData.good0 = wx.getStorageSync('good0');
    app.globalData.good1 = wx.getStorageSync('good1');
    app.globalData.good2 = wx.getStorageSync('good2');
    app.globalData.good3 = wx.getStorageSync('good3');
    app.globalData.good4 = wx.getStorageSync('good4');
    app.globalData.good5 = wx.getStorageSync('good5');
    app.globalData.good6 = wx.getStorageSync('good6');
    app.globalData.good7 = wx.getStorageSync('good7');

    if (app.globalData.good0 == 1) {
      this.setData({
        can1_0: "已购买"
      })
    } else {
      this.setData({
        can1_0: "未购买",
        t1_0: 0.5
      })
    };
    if (app.globalData.good1 == 1) {
      this.setData({
        can1_1: "已购买"
      })
    } else {
      this.setData({
        can1_1: "未购买",
        t1_1: 0.5
      })
    };
    if (app.globalData.good2 == 1) {
      this.setData({
        can1_2: "已购买"
      })
    } else {
      this.setData({
        can1_2: "未购买",
        t1_2: 0.5
      })
    };
    if (app.globalData.good3 == 1) {
      this.setData({
        can1_3: "已购买"
      })
    } else {
      this.setData({
        can1_3: "未购买",
        t1_3: 0.5
      })
    };
    if (app.globalData.good4 == 1) {
      this.setData({
        can1_4: "已购买"
      })
    } else {
      this.setData({
        can1_4: "未购买",
        t1_4: 0.5
      })
    };
    if (app.globalData.good5 == 1) {
      this.setData({
        can1_5: "已购买"
      })
    } else {
      this.setData({
        can1_5: "未购买",
        t1_5: 0.5
      })
    };
    if (app.globalData.good6 == 1) {
      this.setData({
        can1_6: "已购买"
      })
    } else {
      this.setData({
        can1_6: "未购买",
        t1_6: 0.5
      })
    };
    if (app.globalData.good7 == 1) {
      this.setData({
        can1_7: "已购买"
      })
    } else {
      this.setData({
        can1_7: "未购买",
        t1_7: 0.5
      })
    };

    switch (app.globalData.using) {
      case 0:
        this.setData({
          can1_0: "正在使用"
        });
        break;
      case 1:
        this.setData({
          can1_1: "正在使用"
        });
        break;
      case 2:
        this.setData({
          can1_2: "正在使用"
        });
        break;
      case 3:
        this.setData({
          can1_3: "正在使用"
        });
        break;
      case 4:
        this.setData({
          can1_4: "正在使用"
        });
        break;
      case 5:
        this.setData({
          can1_5: "正在使用"
        });
        break;
      case 6:
        this.setData({
          can1_6: "正在使用"
        });
        break;
      case 7:
        this.setData({
          can1_7: "正在使用"
        });
        break;
    }
  }
})