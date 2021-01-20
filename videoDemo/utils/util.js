const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const sjColor=()=>{
  let rgb=[]
  for(let i=0 ;i<3;++i){
let color=Math.floor(Math.random()*256).toString(16)
color=(color.length===1)?`0${color}`:color
rgb.push(color)
  }
  return `#${rgb.join("")}`
}



module.exports = {
  formatTime,
  sjColor
}
