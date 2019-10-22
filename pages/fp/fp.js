var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    array: ['一年级上期', '一年级下期', "二年级上期", '二年级下期', "三年级上期", '三年级下期'],
    nianji: ['yishang', 'yixia', 'ershang', 'erxia', 'sanshang', 'sanxia'],
    indicatorDots:true,
    autoplay:false,
    interval:3000,
    duration:800,
    circular:true,
    day_num:0,
    index:0,
    cnum:0,
    redaka:20,
    time:'',
    t:'',
    imgUrls:[
      {
        link:'../yishang/yishang?title=yishang',
        url:'yishang.png',
      },
      {
        link: '../yixia/yixia?title=yixia',
        url:'yixia.png',
      },
      {
        link: '../ershang/ershang?title=ershang',
        url: 'ershang.png',
      },
      {
        link: '../erxia/erxia?title=erxia',
        url: 'erxia.png',
      },
      {
        link: '../sanshang/sanshang?title=sanshang',
        url: 'sanshang.png',
      },
      {
        link: '../sanxia/sanxia?title=sanxia',
        url: 'sanxia.png',
      }
    ]
  },
  //以上是data
  change_num: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.current)
    this.setData({
      cnum: e.detail.current
    })
  },
  backtoshouye:function(options){
    wx.switchTab({
      url: '',
    })
  },
  daka:function(e){
    var i = this.data.day_num;  //获得本页面中记录的打卡天数
    this.setData({
      t: util.formatTime(new Date()), //获得当前日期中的天
    });
    if (this.data.t != this.data.time) {
      app.globalData.sameday = false;
      wx.setStorage({
        key: 'sameday',
        data: app.globalData.sameday,
      })
    };
    if(app.globalData.sameday == false) //判断是否是同一天的打卡，如果不是执行以下操作
    {
      var pg = this.data.cnum;
      wx.showToast({
        title: '打卡成功！',
        duration: 500,
        icon: 'success',
        success: function(){
          setTimeout(function(){
            if(pg == 0){
              wx.navigateTo({
                url: '/pages/yishang/yishang',
              })
            }else if(pg == 1){
              wx.navigateTo({
                url: '/pages/yixia/yixia',
              })
            } else if (pg == 2) {
              wx.navigateTo({
                url: '/pages/ershang/ershang',
              })
            } else if (pg == 3) {
              wx.navigateTo({
                url: '/pages/erxia/erxia',
              })
            } else if (pg == 4) {
              wx.navigateTo({
                url: '/pages/sanshang/sanshang',
              })
            } else if (pg == 5) {
              wx.navigateTo({
                url: '/pages/sanxia/sanxia',
              })
            }
            
          },500)
        }
      });
      app.globalData.sameday = true;  //将全局变量中标记为目前同一天内已经打卡
      app.globalData.daynum = app.globalData.daynum + 1;  //打卡成功后全局变量中记录打卡天数的变量自加一
      wx.setStorage({ //将数据上传到本地
        key: 'sameday',
        data: true,
      });
        wx.setStorage({ //将数据上传到本地
          key: 'daynum',
          data: app.globalData.daynum,
        });
        wx.setStorage({ //将最新数据上传到本地
          key: 'time',
          data: this.data.t,
        });
      this.setData({  //将本地的变量也更换为打卡成功后的最新值
        day_num: app.globalData.daynum,
        time: this.data.t,  //记录最新的打卡日期（天）
      });
      app.globalData.grades = app.globalData.grades + 15; //获得签到积分
      wx.setStorage({
        key: 'grades',
        data: app.globalData.grades,  //将最新积分存储到本地
      });
    }else{
      var pg = this.data.cnum;
      if (pg == 0) {
        wx.navigateTo({
          url: '/pages/yishang/yishang',
        })
      } else if (pg == 1) {
        wx.navigateTo({
          url: '/pages/yixia/yixia',
        })
      } else if (pg == 2) {
        wx.navigateTo({
          url: '/pages/ershang/ershang',
        })
      } else if (pg == 3) {
        wx.navigateTo({
          url: '/pages/erxia/erxia',
        })
      } else if (pg == 4) {
        wx.navigateTo({
          url: '/pages/sanshang/sanshang',
        })
      } else if (pg == 5) {
        wx.navigateTo({
          url: '/pages/sanxia/sanxia',
        })
      }
    }
    
    
  },
  gotowode: function(){
    wx.navigateTo({
      url: 'pages/wode',
    })
  },
  onLoad: function () {
    var d = wx.getStorageSync('daynum');
    if(d){
      app.globalData.daynum = d;
      this.setData({
        day_num: app.globalData.daynum
      });
    }
    else{
      this.setData({
        day_num: 0
      });
    };
    var s = wx.getStorageSync('sameday');
    if(s){
      app.globalData.sameday = true;
    }
    var g = wx.getStorageSync('grades');
    if (g) {
      app.globalData.grades = g;
    };
    var m = wx.getStorageSync('max');
    if (m) {
      app.globalData.max = m;
    }else{
      app.globalData.max = 0;
    };
    var c = wx.getStorageSync('cuoti');
    if (c) {
      app.globalData.cuoti = c;
    };
    var dd = wx.getStorageSync('daan');
    if (dd) {
      app.globalData.daan = dd;
    };
    var at = wx.getStorageSync('all_ti');
    if (at) {
      app.globalData.all_ti = at;
    }else{
      app.globalData.all_ti = 0;
      wx.setStorage({
        key: 'all_ti',
        data: 0,
      })
    };
    var abh = wx.getStorageSync('all_bh');
    if (abh) {
      app.globalData.all_bh = abh;
    } else {
      app.globalData.all_bh = 0;
      wx.setStorage({
        key: 'all_bh',
        data: 0,
      })
    };
    var t = wx.getStorageSync('time');
    
      this.setData({
        time: t
      });
    
    this.setData({
      t: util.formatTime(new Date()), //获得当前日期中的天
    })
  },
  onShow: function () {
    var d = wx.getStorageSync('daynum');
    if (d) {
      app.globalData.daynum = d;
      this.setData({
        day_num: app.globalData.daynum
      });
    }
    else {
      this.setData({
        day_num: 0
      });
    };
    var s = wx.getStorageSync('sameday');
    if (s) {
      app.globalData.sameday = true;
    }
    var g = wx.getStorageSync('grades');
    if (g) {
      app.globalData.grades = g;
    };
    var m = wx.getStorageSync('max');
    if (m) {
      app.globalData.max = m;
    }else{
      app.globalData.max = 0;
    };
    var c = wx.getStorageSync('cuoti');
    if (c) {
      app.globalData.cuoti = c;
    };
    var dd = wx.getStorageSync('daan');
    if (dd) {
      app.globalData.daan = dd;
    };
    var t = wx.getStorageSync('time');

    this.setData({
      time: t
    });

    this.setData({
      t: util.formatTime(new Date()), //获得当前日期中的天
    })
  }
})
