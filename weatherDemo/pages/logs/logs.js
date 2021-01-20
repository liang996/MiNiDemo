// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    region:["北京市","北京市","东城区"] ,
    now:""
  },
  gaibian:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeater()
  },
  getWeater:function(){
   var that=this;
   wx.request({
     url: `https://free-api.heweather.net/s6/weather?key=535627da54754fbd880efed958e8d831&location=${that.data.region[1]}`,
   

     success: function(res) {  
      console.log('用户点击确定111,,,',res.data)  
      console.log('用户点击确定111,,,',res.data.HeWeather6[0].now)  

      that.setData({
        now:res.data.HeWeather6[0].now
      })
      if (res.confirm) {  
      console.log('用户点击确定')  
      } else if (res.cancel) {  
      console.log('用户点击取消')  
      }  
  }
    })
  
  },
  onLoad() {
      this.getWeater()

  }
})
