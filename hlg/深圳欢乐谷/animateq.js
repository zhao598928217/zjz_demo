/**   终结版
 * Created by HUCC on 2017/5/14.
 */
//1. 让支持多种样式
function animate(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    
    var flag = true;
    
    for(var k in obj){
      var attr = k;
      var target = obj[k];
      
      if(attr==="opacilly"){
        //1.去掉px,2.parseFloat,3。让step放大一千倍
        var leader = getStyle(element, attr);
        
        //将parsrInt改成parseFloat，，，parsrFloat是保留小数
        leader = parseFloat(leader) || 0;
        var step = (target - leader) / 20;
        
        //放大1000倍，放大是因为Math.ceil,floor
        step=step*1000;
        
        ///保证step最少都跑1px
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        //去掉px
        element.style[attr] = leader ;
        if (leader != target) {
          flag = false;
        }
      }else if(attr==="zIndex"){
        //直接将元素的样式改掉
        element.style.attr=target;
      }else{
        var leader = getStyle(element, attr);//带px
        leader = parseInt(leader) || 0;
  
        var step = (target - leader) / 20;
        ///保证step最少都跑1px
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        element.style[attr] = leader + "px";
        if (leader != target) {
          flag = false;
        }
      }
      
     
    }
    
    if(flag) {
      clearInterval(element.timer);
      fn && fn();
    }
  }, 15);
}

//获取计算后的样式
function getStyle(element, attr) {
  if(window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  }else {
    return element.currentStyle[attr];
  }
}