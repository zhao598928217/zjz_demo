/**
 * Created by 74295 on 2017/5/18.
 */

var nav=document.getElementById("nav");
var nav_lis=nav.children;
var conBanner=document.getElementsByClassName("con-banner")[0];
var mainBanner=document.getElementsByClassName("mainBanner")[0];
var main_lis=mainBanner.children;
var arrow=document.getElementsByClassName("arrow")[0];
var leftA=document.getElementsByClassName("leftA")[0];
var rightA=document.getElementsByClassName("rightA")[0];
var circle=document.getElementsByClassName("circle")[0];
var cirs=circle.children;
var count=0;
var imgW=conBanner.offsetWidth;
var timer;
var flag=true;
/*导航栏*/
for(var i=1;i<nav_lis.length-1;i++){
  nav_lis[i].children[0].onmouseover=function () {
    this.style.backgroundColor="rgb(255,114,0)"
    this.style.color="white"
    // this.children[0].num=this.children[0].style.backgroundPositionY
    this.children[0].num=window.getComputedStyle(this.children[0], null).backgroundPositionY
    this.children[0].style.backgroundPositionY=parseInt(this.children[0].num)-65+"px";
  }
 nav_lis[i].children[0].onmouseout=function () {
    this.style.backgroundColor="";
    this.style.color="rgb(98, 98, 98)";
    this.children[0].style.backgroundPositionY=this.children[0].num;
  }
}
/*大图片轮播图设置*/
mainBanner.appendChild(main_lis[0].cloneNode(true));
cirs[0].style.backgroundColor="rgba(0,191,255,0.5)"
//小圆点
for(var i=0;i<cirs.length;i++){
  cirs[i].index=i;
cirs[i].onclick=function () {
  for(var i=0;i<cirs.length;i++){
  cirs[i].style.backgroundColor="rgba(255,255,255,0.3)";
  }
  this.style.backgroundColor="rgba(0,191,255,0.5)";
  var target=-this.index*imgW;
  animate_b(mainBanner,{left:target});
  if(count==main_lis.length-1){
    count=0;
    mainBanner.style.left=0;
  }else{
    count=this.index;
  }
  
  
}
}
//左右箭头
rightA.onclick=function () {
  if(flag){
    flag=false;
    if(count==main_lis.length-1){
    count=0;
    mainBanner.style.left=0;
  }
    count++;
    var target=-count*imgW;
    animate_b(mainBanner,{left:target},function () {
      flag=true;
    });
    for(var i=0;i<cirs.length;i++){
      cirs[i].style.backgroundColor="rgba(255,255,255,0.3)";
    }
    if(count==main_lis.length-1){
      cirs[0].style.backgroundColor="rgba(0,191,255,0.5)"
    }else{
      cirs[count].style.backgroundColor="rgba(0,191,255,0.5)";
    }}
  
  

}
leftA.onclick=function () {
  if(count==0){
    count=main_lis.length-1;
    mainBanner.style.left=-count*imgW+"px";
  }
  count--;
  var target=-count*imgW;
  animate_b(mainBanner,{left:target});
  for(var i=0;i<cirs.length;i++){
    cirs[i].style.backgroundColor="rgba(255,255,255,0.3)";
  }
  cirs[count].style.backgroundColor="rgba(0,191,255,0.5)";
}
//鼠标移动定时器开关
timer=setInterval(function () {
  rightA.onclick();
},1500)
conBanner.onmouseover=function(){
  arrow.style.display="block";
  clearInterval(timer)
}
conBanner.onmouseout=function () {
  arrow.style.display="none";
  if(timer){clearInterval()}
  timer=setInterval(function () {
    if(timer){clearInterval()}
    rightA.onclick();
  },1500)
}
/*订票部分*/
//新闻滚动


var ol=document.getElementById("ol");
var timer1=setInterval(function () {
  var leader=ol.offsetLeft
  leader=leader-1;
  ol.style.left=leader+"px";
  if(leader==-1730){
    ol.style.left=0+"px";
  }
},15)
// animate_a(ol,-3000,1);
ol.onmouseover=function(){
   clearInterval(timer1);
}
ol.onmouseout=function() {
  if (timer1) {
    clearInterval(timer1);
  }
  timer1 = setInterval(function () {
    var leader = ol.offsetLeft
    leader = leader - 1;
    ol.style.left = leader + "px";
    if (leader == -1730) {
      ol.style.left = 0 + "px";
    }
  }, 15)
}

  // if(ol.offsetLeft>=3000){
  //   clearInterval(timer1)
  //   ol.style.left=500+"px";
  //   animate_a(ol,-3000,1);
//   }
//   ol.style.left=700+"px";
// animate_a(ol,-3000,1);

//通栏高亮排他
var ser_mes=document.getElementsByClassName("ser_mes")[0];
var ser_lis=ser_mes.children;
for(var i=0;i<ser_lis.length;i++){
ser_lis[i].onmouseover=function () {
  this.style.backgroundColor="rgb(17, 195, 233)"
}
  ser_lis[i].onmouseout=function () {
   this.style.backgroundColor=""
  }
}
//media项目变动
var change=document.getElementsByClassName("change")[0];
var cir_bot=document.getElementsByClassName("cir_bot")[0];
var  spans_cir=cir_bot.children;
var datas=[{img:"w170515400647964.jpg",h3:"网络情人节，￥52.1浪漫夜",h4:"2017年05月19日至2017年05月21日",p:"5月19日-5月21日，通过北京欢乐谷官网或官方微信购买夜场门票仅需52.1元/张"},
  {img:"w170515842720926.jpg",h3:"网络情人节，浪漫爱久久￥299",h4:"2017年05月19日至2017年05月21日",p:"5月19日-5月21日，通过北京欢乐谷官网或官方微信购买北京欢乐谷日场双人票仅需29"},
  {img:"w170511498253467.jpg",h3:"￥61童心惠，夜场幸福游",h4:"2017年05月27日至2017年06月04日",p:"5月27日至6月4日，通过北京欢乐谷官网或官方微信购买夜场门票仅需61元/张，实名制"},
  {img:"w170508505981921.jpg",h3:"原价双倍惊喜，钜惠一卡两年",h4:"2017年05月06日至2017年05月30日",p:"5月6日至5月30日，游客现场办理或通过北京欢乐谷官网/官方微信原价购买北京欢乐谷任"},
  {img:"w170501761356476.jpg",h3:"一带一路峰会  学生半价畅游",h4:"2017年05月02日至2017年05月31日",p:"活动时间：2017年3月16日—2017年11月15日活动内容：活动期间，凡中国籍过"},
  {img:"w150730394054848.jpg",h3:"全民共享生日惠",h4:"2017年03月16日至2017年11月15日",p:"活动时间：2017年3月16日—2017年11月15日活动内容：活动期间，凡中国籍过"},
  {img:"w17050199659169.jpg",h3:"感恩母亲节，￥88夜场惠",h4:"2017年05月02日至2017年05月18日",p:"5月2日至5月18日，通过北京欢乐谷官网或官方微信购买夜场门票仅需88元/张，实名制"},
  {img:"w170420737179673.jpg",h3:"重游特惠，欢乐加倍",h4:"2017年04月22日至2017年05月31日",p:"4月22日至5月31日，加￥20送一天，通过北京欢乐谷官网或官方微信购买“重游日场特"},
  {img:"w170315746862973.jpg",h3:"白衣天使 半价献礼",h4:"2017年05月01日至2017年05月31日",p:"5月1日至5月31日,凡持有《医师资格证》、《医师执业证书》、《护士资格证》"},
  {img:"w170315570904943.jpg",h3:"欢乐儿童周  全家齐分享",h4:"2017年05月28日至2017年06月04日",p:"5月28日至6月4日，1.5米以下儿童（含1.5米）在1名购票成人陪同可免费入园"},
  {img:"w170315102595850.jpg",h3:"父爱如山  感恩长者",h4:"2017年06月17日至2017年06月18日",p:"6月17日至6月18日，50周岁及以上（1967年及1967年之前出生即可）的男性游"},
  {img:"w15123115108688.jpg",h3:"工会专享超值惠",h4:"2017年03月16日至2017年11月15日",p:"活动时间：2017年3月16日—2017年11月15日活动内容：活动期间，凡持有北京"},
  {img:"w150730369615243.jpg",h3:"礼遇结婚纪念日",h4:"2017年03月16日至2017年11月15日",p:"活动时间：2017年3月16日—2017年11月15日活动内容：活动期间，两人游"},
  {img:"w150730394054848.jpg",h3:"全民共享生日惠",h4:"2017年03月16日至2017年11月15日",p:"活动时间：2017年3月16日—2017年11月15日活动内容：活动期间，凡中国籍过"}];
for(var i=0;i<spans_cir.length;i++) {
  spans_cir[i].index = i;
  spans_cir[i].onmouseover = function () {
    var str=[];
    for (var i = 0; i < spans_cir.length; i++) {
      spans_cir[i].className = "";
    }
    this.className = "span_color";
    
    for (var k in datas[this.index]) {
      str.push(datas[this.index][k]);
      
    }
    change.innerHTML= '<img src="images/www/' + str[0] + '">' +
      '<div class="text">' +
      '<h3>' + str[1] + '</h3>' +
      '<h4><i></i>' + str[2] + '</h4>' +
      '<p>' + str[3] + '</p>' +
      '<a href="javascript:">GO&nbsp;&gt;</a>'
  }
}
//视频播放按钮
var icon=document.getElementsByClassName("iconfont")[0];
var flag=true
var video=document.getElementsByTagName("video")[0];
// icon.style.backgroundImage=="url(../images/b.png)"
icon.onclick=function () {
  
  if (flag){
    icon.style.backgroundImage="url(images/b.png)";
    flag=false;
    video.play();
  }
  else{
  flag=true;
    icon.style.backgroundImage="url(images/z.png)";
    video.pause()
  }

  
}






