/**
 * Created by HUCC on 2017/5/11.
 */
//把里面所有的全局变量全部搞掉
function animate_a(element, target, num) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    var step = target > leader ? num : -num;
    if (Math.abs(target - leader) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      //抱过去
      element.style.left = target + "px";
      flag=true;
    }
  }, 20);
}
//封装函数
function animal(element,target,num){
  //判断对象属性值是否已存在定时器地址
  if (element.timer){
    clearInterval(element.timer);
  }
  //添加定时器使元素移动到target,以盒子移动num值为模型
  element.timer=setInterval(function(){
    var step;
    var leader=element.offsetLeft
    step=target-leader>0?num:-num;
    //比较值（***）
    if(Math.abs(target-leader)>=Math.abs(step)){
      leader+=step;
      element.style.left=leader+"px";
    }else{
      // 清除定时器(***)
      clearInterval(element.timer);
      //抱过去
      element.style.left=target+"px"
    }
  },15)

}
