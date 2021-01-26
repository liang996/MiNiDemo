// pages/detail/index.js
var commen =require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    swiperImg: [{
        src: "https://w.wallhaven.cc/full/wy/wallhaven-wy3wj6.jpg"
      },
      {
        src: "https://w.wallhaven.cc/full/dg/wallhaven-dgrx2l.jpg"
      },
      {
        src: "https://w.wallhaven.cc/full/ym/wallhaven-ymdqw7.png"
      },
    ],

    ListItem: [

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var List=commen.getNewsList()
    this.setData({
      ListItem:List
    })

  },

  newItem:function (e){
    console.log("33333,,,,",e)
    let id=e.target.dataset.id
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
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