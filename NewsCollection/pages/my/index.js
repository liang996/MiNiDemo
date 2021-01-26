// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    judgeLogin: "未登录",
    src: "/images/index1.png",
    ListItem: [


    ],
    isLogin: false,
    number: 0,
  },

  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    let userInfo = e.detail.userInfo
    this.setData({
      src: userInfo.avatarUrl,
      judgeLogin: userInfo.nickName,
      isLogin: true

    })
    this.getSCNum()
  },
  getSCNum: function () {
    let getStorageInfo = wx.getStorageInfoSync() //读取本地缓存信息
    console.log("getStorageInfo,,,,", getStorageInfo)

    let keys = getStorageInfo.keys //获取全部key信息
    let num = keys.length //获取收藏新闻数量

    let myList = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    //更新收藏列表
    this.setData({
      ListItem: myList,
      number: num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorage()
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
    if (this.data.isLogin)
      this.getSCNum()
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