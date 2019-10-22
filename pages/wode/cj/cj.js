Page({

  /**
   * 页面的初始数据
   */
  data: {
    bili1:0,
    bili2:0,
    bili3:0,
    bili4:0,
    tishu:0,
    buyshu:0,
    show1:0,
    show2:0,
    show3:0,
    show4:0,
    dis1: 0,
    dis2: 0,
    dis3: 0,
    dis4: 0,
    dizhi1:'https://s2.ax1x.com/2019/10/09/uIqhZQ.png',
    dizhi2: 'https://s2.ax1x.com/2019/10/09/uILvX8.png',
    dizhi3: 'https://s2.ax1x.com/2019/10/09/uIOKAJ.png',
    dizhi4: 'https://s2.ax1x.com/2019/10/09/uIOgHg.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i = wx.getStorageSync('all_ti');
    i = i/5;
    var j = wx.getStorageSync('all_ti');
    j = j / 10;
    var k = wx.getStorageSync('all_ti');
    k = k / 20;
    var l = wx.getStorageSync('all_bh');
    l = l * 100 / 7;
    this.setData({
      bili1:i,
      bili2:j,
      bili3:k,
      bili4:l,
      tishu: wx.getStorageSync('all_ti'),
      buyshu: wx.getStorageSync('all_bh'),
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var i = wx.getStorageSync('all_ti');
    i = i / 5;
    var j = wx.getStorageSync('all_ti');
    j = j / 10;
    var k = wx.getStorageSync('all_ti');
    k = k / 20;
    var l = wx.getStorageSync('all_bh');
    l = l * 100 / 7;
    this.setData({
      bili1: i,
      bili2: j,
      bili3: k,
      bili4: l,
      tishu: wx.getStorageSync('all_ti'),
      buyshu: wx.getStorageSync('all_bh'),
    });
    if(this.data.tishu >= 500){
      this.setData({
        dis1:1,
        dizhi1: 'https://s2.ax1x.com/2019/10/09/uIOx81.png',
      })
    };
    if (this.data.tishu >= 1000) {
      this.setData({
        dis2: 1,
        dizhi2: 'https://s2.ax1x.com/2019/10/09/uIXFVe.png',
      })
    };
    if (this.data.tishu >= 2000) {
      this.setData({
        dis3: 1,
        dizhi3: 'https://s2.ax1x.com/2019/10/09/uIXY2q.png',
      })
    };
    if (this.data.buyshu >= 7) {
      this.setData({
        dis4: 1,
        dizhi4: 'https://s2.ax1x.com/2019/10/09/uIXsi9.png',
      })
    };
  },
  more1:function(){
    if(this.data.dis1 == 0){
      if (this.data.show1 == 0) {
        this.setData({
          show1: 1,
        })
      } else {
        this.setData({
          show1: 0,
        })
      };
      console.log('show');
    }
    
},
  more2: function () {
    if (this.data.dis2 == 0) {
    if (this.data.show2 == 0) {
      this.setData({
        show2: 1,
      })
    } else {
      this.setData({
        show2: 0,
      })
    };
    console.log('show');
    }
  },
  more3: function () {
    if (this.data.dis3 == 0) {
    if (this.data.show3 == 0) {
      this.setData({
        show3: 1,
      })
    } else {
      this.setData({
        show3: 0,
      })
    };
    console.log('show');
    }
  },
  more4: function () {
    if (this.data.dis4 == 0) {
    if (this.data.show4 == 0) {
      this.setData({
        show4: 1,
      })
    } else {
      this.setData({
        show4: 0,
      })
    };
    console.log('show');
    }
  },
  
})