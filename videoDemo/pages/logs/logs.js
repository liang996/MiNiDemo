// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: [
      {
        id:"1",
        title:"111",
        url:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" 
      },
      {
        id:"2",
        title:"222",
        url:"https://www.w3school.com.cn//i/movie.mp4" 
      },
      {
        id:"3",
        title:"333",
        url:"https://player.bilibili.com/34c95aca-a9f1-44df-819a-ac156fc0ab8a" 

      },
      {
        id:"4",
        title:"444",
        url:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" 
      }
    ],
    src:"",
    danmutext:""
  },

inp(e){
  console.log("333,,55,,,,",e)
  this.setData({
    danmutext:e.detail.value
  })
},
bto(e){
  let text=this.data.danmutext
  this.videoCtx.sendDanmu({
    text,
    color:util.sjColor()
  })
},
  playVideo:function (e) {
    console.log("333,,,,,,",e)
    this.videoCtx.stop()//停止播放之前正在播放的视频
    this.setData({
      src:e.currentTarget.dataset.url
    })
    //更新视频播放地址
 this.videoCtx.play()   
  },
  onLoad(a) {
this.videoCtx=wx.createVideoContext('myVideo')   
  }
})
