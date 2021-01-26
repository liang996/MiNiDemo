// pages/detail/index.js
var commen = require("../../utils/common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {


    },
    isAdd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, "kkk")
    let id = options.id

    console.log(this.data.article, "111kkk")
    //检查当前新闻是否在收藏夹
    let isStorag = wx.getStorageSync(id)
    //已经存在
    if (isStorag !== "") {
      this.setData({
        isAdd: true,
        article: isStorag

      })
    } else {
      let jg = commen.getNewsDetail(id)
      console.log(jg, ",jg")

      if (jg.code === "200") {
        this.setData({
          article: jg.news,
          isAdd: false,

        })

      }
    }

  },
  isAdds: function () {
    console.log(this.data.article, "22111kkk")
    console.log(this.data.isAdd, "2214411kkk")

    let article = this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd: true
    })
  },
  isCel: function () {
    console.log(this.data.article, "3322111kkk")
    console.log(this.data.isAdd, "66662214411kkk")

    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd: false
    })
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