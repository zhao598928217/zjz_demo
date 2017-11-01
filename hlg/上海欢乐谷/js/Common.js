/**
 * Created by Administrator on 2017/5/12.
 */
function getStyle(obj,name) {
  if(obj.currentStyle){
    return obj.currentStyle[name];
  }else{
    return getComputedStyle(obj,null)[name];
  }
}
function Move(obj,target,attr) {
  clearInterval(obj.timer);
  obj.timer=setInterval(function () {
    var cur;
    if (attr=='opacity'){
      cur = Math.round(parseFloat(getStyle(obj,attr))*100);
    }else{
      cur = parseInt(getStyle(obj,attr));
    }
    var speed;
    speed = (target-cur)/5;
    speed = speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(obj.timer);
    }else{
      if(attr=='opacity'){
        obj.style[attr] = (cur+speed)/100;
        obj.style.filter = "alpha(opacity="+(cur+speed)+")";
        document.title = (cur+speed)/100;
      }else{
        obj.style[attr] = cur+speed+'px';
      }
    }
  },30)
}
//获取页面宽度
function getclientWidth() {
  return window.pageXOffset||document.documentElement.clientWidth||document.body.clientWidth||0;
}