var app = getApp();

Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    change_q: "初始化题目！",
    result: '',
    jindu: 0,
    jinzhi: false,
    xiaoshi:1,
    again: 1,
    isShow:false,
    inputnum: '',
    datishu: 0,
    cuotishu: 0,
    timer: '',
    countDownNum: '900',
    huhu: '',
    item1: {
      num1: ' ',
      num2: ' ',
      sym1: ' ',
    },
    item2: {
      num1: ' ',
      num2: ' ',
      sym1: ' ',
    },
    item3: {
      num1: ' ',
      num2: ' ',
      sym1: ' ',
    },
    item4: {
      num1: ' ',
      num2: ' ',
      sym1: ' ',
    },
    item5: {
      num1: ' ',
      num2: ' ',
      sym1: ' ',
    }
  },

  clickMe: function (e) {
    this.setData({
      change_q: "更换题目！"
    })
    var that = this;
    var i = true;
    var fn1, fn2;
    var fs1;
    var result1, result2, result3, result4, result5;
    while (i == true) {

      fn1 = Math.floor(Math.random() * 10 + 10);
      fn2 = Math.floor(Math.random() * 20 + 1);
      fs1 = Math.floor(Math.random() * 2 + 1) == 1 ? '+' : '-';

      if (fs1 == '+') {
        result1 = fn1 + fn2;
        if (result1 <= 20) {
          i = false;
        }
      }
      else if (fs1 == '-') {
        result1 = fn1 - fn2;
        if (result1 <= 20 && result1 >= 0) {
          i = false;
        }
      }

      that.setData({
        result: result1,
        item1: {
          num1: fn1,
          num2: fn2,
          sym1: fs1,
        }
      })
    };
    console.log(e);
  },

  isitright: function (e) {
    this.setData({
      inputnum: e.detail.value
    })
  },
  checkit: function (e) {
    var that = this;
    var i = that.data.datishu;
    var j = that.data.jindu;
    if (this.data.inputnum == this.data.result) {
      this.setData({
        huhu: '',
        value_num: '',
        datishu: i + 1,
        isShow:false,
        again: 1,
        jindu: j + 3.333
      })
      this.clickMe();
      var at = wx.getStorageSync('all_ti');
      at = at + 1;
      wx.setStorage({
        key: 'all_ti',
        data: at,
      });
    }
    else {
      if (this.data.again == 1) {
        var j = that.data.cuotishu;
        this.setData({
          again: 0,
          cuotishu: j + 1
        });

        app.globalData.max = app.globalData.max + 1;
        wx.setStorage({
          key: 'max',
          data: app.globalData.max,
        });
        app.globalData.cuoti.push(this.data.item1.num1 + this.data.item1.sym1 + this.data.item1.num2);
        wx.setStorage({
          key: 'cuoti',
          data: app.globalData.cuoti,
        });
        app.globalData.daan.push(this.data.result);
        wx.setStorage({
          key: 'daan',
          data: app.globalData.daan,
        });

      }
      this.setData({
        huhu: '答错了哦！再想想吧！',
        value_num: '',
        isShow:true
      });

      

    }
    if (that.data.datishu == 30) {
      this.setData({
        huhu: '已经完成今天的练习了哦！该休息了',
        value_num: '',
        jinzhi: true,
        xiaoshi:0,
        item1: {
          num1: ' ',
          num2: ' ',
          num3: ' ',
          sym1: ' ',
          sym2: ' '
        }
      });
      if (this.data.cuotishu == 0) {
        app.globalData.grades = app.globalData.grades + 5;
      }
      else if (this.data.cuotishu > 0 && this.data.cuotishu <= 3) {
        app.globalData.grades = app.globalData.grades + 3;
      }
      else if (this.data.cuotishu > 3 && this.data.cuotishu <= 9) {
        app.globalData.grades = app.globalData.grades + 1;
      };
      wx.setStorage({
        key: 'grades',
        data: app.globalData.grades,
      });
    }
  },
  onLoad: function () {
    this.clickMe();
    this.countDown();
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;
    that.setData({
      timer: setInterval(function () {
        countDownNum--;
        that.setData({
          countDownNum: countDownNum
        })
        if (countDownNum == 0) {
          clearInterval(that.data.timer);
          that.setData({
            huhu: "时间已经到了哦！",
            jinzhi: true,
            xiaoshi: 0,
          })
        }
      }, 1000)
    })
  },
  sure: function () {
    if (this.data.datishu < 30) {
      wx.showModal({
        title: '你还有题目没有答完哦！',
        content: '点击确定返回则本次做题无效！',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../yishang',
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../yishang',
      })
    }
  },
  onUnload: function () {
    let e = this;
    clearInterval(e.data.timer);
  },
})