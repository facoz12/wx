// pages/detail/detail.js
Page({
  data: {
    isLike: true,
    menuTop: '',  // 吸顶
    // banner
    imgUrls: [
      "/images/img-example.jpg",
      "/images/img-example.jpg",
      "/images/img-example.jpg",
      "/images/img-example.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: false, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 500,

    // 商品详情介绍
    detTeletext: [    //图文详情的数据

    ],
    detEva:[    //商品的评价

    ],
    shy: true,   //tab 切换
    riook: false  //tab 切换
  },
  shy: function (e) {
    this.setData({
      riook: false,
      shy: true
    })
  },
  riook: function (e) {
    this.setData({
      shy: false,
      riook: true
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即订购
  immeBuy() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this;
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('#fix').boundingClientRect()//选择Id的节点，获取节点位置信息的查询请求
    query.exec(function (res) {
      console.log(res[0].top); // #fix节点的上边界坐标
      that.setData({
        menuTop: res[0].top
      })
    });
  },
  onPageScroll: function (e) {
    console.log(e);//{scrollTop:99}
    var that = this;
    //当页面滚动距离scrollTop > menuTop某元素距离文档顶部的距离时，某元素固定定位
    if (e.scrollTop > that.data.menuTop) {
      that.setData({
        menuFixed: true
      })
    } else {
      that.setData({
        menuFixed: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})