var app = getApp();
const util = require("../../utils/util");
const { $wuxToast } = require("../../components/wux");
Page({
  data: {
    color: wx.getExtConfigSync().color
  },
  onLoad: function(options) {
    let extConfig = wx.getExtConfigSync ? '1111' : '0000'
    console.log(extConfig)
    console.log(wx.getExtConfigSync())
  },
  bindDateChange:function(e){
    let date = e.detail.value
    this.setData({
      date:date
    })
  },
  bindDate2Change: function (e) {
    let date = e.detail.value
    this.setData({
      date2: date
    })
  },
  bindDate3Change: function (e) {
    let date = e.detail.value
    this.setData({
      date3: date
    })
  },
});
