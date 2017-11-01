/**
 * Created by HUCC on 2017/5/13.
 */
function Move(obj, element,fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var flag = true;
    for (var k in element) {
      var attr = k;
      var target = element[k];
      var cur;
      if (attr == "opacity") {
        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
      } else if(attr=="z-index"){
         obj.style[attr] = target;
         continue;
      }else{
        //当获取left样式时，如果不给left的值为0，默认得到的就是auto，所以要加0
        cur = parseInt(getStyle(obj, attr)) || 0;
      }
      var speed = (target - cur) / 10;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (target != cur) {
        flag = false;
      }
      if (attr == "opacity") {
        obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
        obj.style[attr] = (cur + speed) / 100;
      } else {
        obj.style[attr] = cur + speed + 'px';
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      fn && fn();
    }
  }, 30)
}
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, null)[name];
  }
}
