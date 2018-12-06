// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  access: function(res) {
    let that = this;
    console.log(res);
    app.globalData.userInfo = res.detail.userInfo;
    let userInfo = res.detail.userInfo;
    let info = res.detail;
    wx.request({
      url: app.globalData.url + '/api/mp/login?app=2',
      method: 'POST',
      data: {
        code: that.data.code
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res, 'login')
        if (res.data.info == 1) {
          wx.setStorageSync('token', res.data.parms.token);
          wx.setStorageSync('id', res.data.parms.id);
          wx.setStorageSync('job', 1);
          wx.request({
            url: app.globalData.url + '/api/student/update',
            method: 'POST',
            data: {
              iv: info.iv,
              encyptData: info.encryptedData
            },
            header: {
              'content-type': 'application/json',
              token: res.data.parms.token
            },
            success: function(res) {
              console.log(res, 'update')
              if (res.data.info == 1) {
                if (that.data.redirect_url) {
                  wx.reLaunch({
                    url: that.data.redirect_url
                  })
                } else {
                  wx.switchTab({
                    url: '../main/main'
                  })
                }
              }
            }
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let url = decodeURIComponent(options.redirect_url);
    this.setData({
      redirect_url: url
    })
    wx.login({
      success: function(res) {
        if (res.code) {
          that.setData({
            code: res.code
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})