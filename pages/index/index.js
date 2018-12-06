//index.js
const utils = require("../../utils/util.js");
const api = require("../../utils/api.js");
import magazineItemJS from '../template/magazineItem/magazineItem'
Page({
  data: {
    imgUrls: [
      '../../images/img-example.jpg',
      '../../images/img-example.jpg',
      '../../images/img-example.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    circular: true
  },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
,
  
  onLoad: function () {
    console.log(utils)
    console.log(api)
  }
})
