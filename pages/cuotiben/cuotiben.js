var app = getApp();

Page({
  data: {
    array: wx.getStorageSync('cuoti'),
    array_daan: wx.getStorageSync('daan'),
    num: 0,
    what:'',
    daan:'',
    maxx:0,
    xiaoshi:0,
  },
  onUnload: function () {
    wx.redirectTo({
      url: '../fp/fp',
    })
  },

  onLoad: function (options) {
    this.setData({
      array: wx.getStorageSync('cuoti'),
      array_daan: wx.getStorageSync('daan'),
    });
    this.setData({
      what: this.data.array[this.data.num],
      daan: this.data.array_daan[this.data.num],
      maxx: wx.getStorageSync('max'),
    })
  },

  onShow: function () {
    this.setData({
      array: wx.getStorageSync('cuoti'),
      array_daan: wx.getStorageSync('daan'),
      maxx: wx.getStorageSync('max'),
    });
    this.setData({
      what: this.data.array[this.data.num],
      daan: this.data.array_daan[this.data.num],
    })
    app.globalData.max = wx.getStorageSync('max');
  },

  xiayige: function(){
    if(this.data.num+1 < this.data.maxx)
    {
    this.setData({
      num:this.data.num+1,
      xiaoshi: 0,
    });
    this.setData({
      what: this.data.array[this.data.num],
      daan: this.data.array_daan[this.data.num],
    });
    }else{
      wx.showToast({
        title: '没有更多错题！',
        icon: 'none'
      })
    }
  },
  shangyige: function () {
    if (this.data.num > 0) {
      this.setData({
        num: this.data.num - 1,
        xiaoshi: 0,
      });
      this.setData({
        what: this.data.array[this.data.num],
        daan: this.data.array_daan[this.data.num],
      });
    } else {
      wx.showToast({
        title: '没有上一道错题！',
        icon: 'none'
      })
    }
  },
  shanchu:function(){
    app.globalData.cuoti.splice(this.data.num,1);
    app.globalData.daan.splice(this.data.num, 1);
    wx.setStorage({
      key: 'cuoti',
      data: app.globalData.cuoti,
    });
    wx.setStorage({
      key: 'daan',
      data: app.globalData.daan,
    });
    if (this.data.num + 1 == this.data.maxx && this.data.num != 0){ //如果删除的是数组最末位一个元素
      this.setData({
        num:this.data.num - 1,
      })
    };
    if (app.globalData.max > 1){
    app.globalData.max = app.globalData.max - 1;
    wx.setStorage({
      key: 'max',
      data: app.globalData.max,
    });
    } else if (app.globalData.max == 1) {
      app.globalData.max = app.globalData.max - 1;
      wx.setStorage({
        key: 'max',
        data: app.globalData.max,
      });
      wx.switchTab({
        url: '../panduan/panduan'
      })
      
    }else{
      this.setData({
        what: '',
        daan: '',
      });
    }
    this.setData({
      array: wx.getStorageSync('cuoti'),
      array_daan: wx.getStorageSync('daan'),
      maxx: wx.getStorageSync('max'),
      xiaoshi:0,
    });
    if (app.globalData.max != 0){
      this.setData({
        what: this.data.array[this.data.num],
        daan: this.data.array_daan[this.data.num],
      });
    }
  },
  show:function(){
    if(this.data.xiaoshi == 0){
      this.setData({
        xiaoshi: 1
      })
    }
    else{
      this.setData({
        xiaoshi: 0
      })
    }
  }
})
