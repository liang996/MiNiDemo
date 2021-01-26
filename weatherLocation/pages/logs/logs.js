// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    province: "北京",
    city: "北京",
    locat: "",
    now: "",
    updateTime: ""

  },
  onLoad() {
    var that = this

    wx.getLocation({
      success: function (res) {
        console.log("res", res.latitude, res.longitude)
        let locat = res.latitude.toString() + "," + res.longitude.toString()
        that.data.locat = locat
        that.getWeater()
        // that.setData({//异步的
        //   locat
        // })
      }
    })
  },
  getWeater: function () {
    var that = this;
    wx.request({
      url: `https://free-api.heweather.net/s6/weather?key=535627da54754fbd880efed958e8d831&location=${this.data.locat}`,


      success: function (res) {
        console.log('用户点击确定111,,,', res.data)
        console.log('用户点击确定111,,,', res.data.HeWeather6[0].now)

        that.setData({
          province: res.data.HeWeather6[0].basic.admin_area,
          city: res.data.HeWeather6[0].basic.location,
          now: res.data.HeWeather6[0].now,
          updateTime: res.data.HeWeather6[0].update.loc

        })
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
})

