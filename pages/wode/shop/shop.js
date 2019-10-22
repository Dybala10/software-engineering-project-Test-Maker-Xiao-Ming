var app = getApp();

Page({

  data: {
    grade:'',
    jinzhi1_1: false,
    jinzhi1_2: false,
    jinzhi1_3: false,
    jinzhi1_4: false,
    jinzhi1_5: false,
    jinzhi1_6: false,
    jinzhi1_7: false,
    t1_1: 1,
    t1_2: 1,
    t1_3: 1,
    t1_4: 1,
    t1_5: 1,
    t1_6: 1,
    t1_7: 1,
  },
  onLoad: function () {
    this.setData({
      grade : app.globalData.grades
    });

    var g1_1 = wx.getStorageSync('good1');
    var g1_2 = wx.getStorageSync('good2');
    var g1_3 = wx.getStorageSync('good3');
    var g1_4 = wx.getStorageSync('good4');
    var g1_5 = wx.getStorageSync('good5');
    var g1_6 = wx.getStorageSync('good6');
    var g1_7 = wx.getStorageSync('good7');

    if (g1_1) {
      this.setData({
        jinzhi1_1: true,
        t1_1: 0.5,
      });
    };
    if (g1_2) {
      this.setData({
        jinzhi1_2: true,
        t1_2: 0.5,
      });
    };
    if (g1_3) {
      this.setData({
        jinzhi1_3: true,
        t1_3: 0.5,
      });
    };
    if (g1_4) {
      this.setData({
        jinzhi1_4: true,
        t1_4: 0.5,
      });
    };
    if (g1_5) {
      this.setData({
        jinzhi1_5: true,
        t1_5: 0.5,
      });
    };
    if (g1_6) {
      this.setData({
        jinzhi1_6: true,
        t1_6: 0.5,
      });
    };
    if (g1_7) {
      this.setData({
        jinzhi1_7: true,
        t1_7: 0.5,
      });
    };
  },

  buy1_1:function(){
    var that = this;
    if(this.data.jinzhi1_1 == false)
    {
    wx.showModal({
      title: '确定要购买当前商品吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          if (app.globalData.grades >= 120 && app.globalData.good1 == 0)
          {
            wx.setStorage({
              key: 'grades',
              data: app.globalData.grades - 120,
            });
            app.globalData.grades = app.globalData.grades - 120;
            that.setData({
              grade: app.globalData.grades,
            });
            app.globalData.good1 = 1; //状态标记为已购买
            wx.setStorage({ //将已购买的数据上传到本地
              key: 'good1',
              data: 1,
            });
            that.setData({
              jinzhi1_1: true,
              t1_1: 0.5,
            });
            wx.showToast({
              title: '购买成功！'
            })
            var abh = wx.getStorageSync('all_bh');
            abh = abh + 1;
            wx.setStorage({
              key: 'all_bh',
              data: abh,
            });
          }
          else if (app.globalData.grades < 120 && app.globalData.good1 == 0){
            wx.showToast({
              title: '积分不足！',
              icon: 'none',
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    }
    else{
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_2: function () {
    var that = this;
    if (this.data.jinzhi1_2 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 120 && app.globalData.good2 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 120,
              });
              app.globalData.grades = app.globalData.grades - 120;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good2 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good2',
                data: 1,
              });
              that.setData({
                jinzhi1_2: true,
                t1_2: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 120 && app.globalData.good2 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_3: function () {
    var that = this;
    if (this.data.jinzhi1_3 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 120 && app.globalData.good3 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 120,
              });
              app.globalData.grades = app.globalData.grades - 120;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good3 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good3',
                data: 1,
              });
              that.setData({
                jinzhi1_3: true,
                t1_3: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 120 && app.globalData.good3 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_4: function () {
    var that = this;
    if (this.data.jinzhi1_4 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 200 && app.globalData.good4 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 200,
              });
              app.globalData.grades = app.globalData.grades - 200;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good4 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good4',
                data: 1,
              });
              that.setData({
                jinzhi1_4: true,
                t1_4: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 200 && app.globalData.good4 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_5: function () {
    var that = this;
    if (this.data.jinzhi1_5 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 200 && app.globalData.good5 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 200,
              });
              app.globalData.grades = app.globalData.grades - 200;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good5 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good5',
                data: 1,
              });
              that.setData({
                jinzhi1_5: true,
                t1_5: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 200 && app.globalData.good5 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_6: function () {
    var that = this;
    if (this.data.jinzhi1_6 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 200 && app.globalData.good6 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 200,
              });
              app.globalData.grades = app.globalData.grades - 200;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good6 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good6',
                data: 1,
              });
              that.setData({
                jinzhi1_6: true,
                t1_6: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 200 && app.globalData.good6 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
  buy1_7: function () {
    var that = this;
    if (this.data.jinzhi1_7 == false) {
      wx.showModal({
        title: '确定要购买当前商品吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            if (app.globalData.grades >= 350 && app.globalData.good7 == 0) {
              wx.setStorage({
                key: 'grades',
                data: app.globalData.grades - 350,
              });
              app.globalData.grades = app.globalData.grades - 350;
              that.setData({
                grade: app.globalData.grades,
              });
              app.globalData.good7 = 1; //状态标记为已购买
              wx.setStorage({ //将已购买的数据上传到本地
                key: 'good7',
                data: 1,
              });
              that.setData({
                jinzhi1_7: true,
                t1_7: 0.5,
              });
              wx.showToast({
                title: '购买成功！'
              });
              var abh = wx.getStorageSync('all_bh');
              abh = abh + 1;
              wx.setStorage({
                key: 'all_bh',
                data: abh,
              });
            }
            else if (app.globalData.grades < 350 && app.globalData.good7 == 0) {
              wx.showToast({
                title: '积分不足！',
                icon: 'none',
              })
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.showToast({
        title: '商品已购买！',
        icon: 'none',
      })
    }
  },
})