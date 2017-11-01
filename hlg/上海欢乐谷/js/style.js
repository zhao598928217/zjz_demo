/**
 * Created by Administrator on 2017/5/19.
 */
window.onload = function () {
  //顶部信息滚动
  TopNoticeMove();
  function TopNoticeMove() {
    var oslide  = document.getElementById("slide");
    oslide.innerHTML = oslide.innerHTML+oslide.innerHTML;
    var timer = null;
    timer = setInterval(NoticeMove,30);
    oslide.onmouseover = function () {
      clearInterval(timer);
    }
    oslide.onmouseout = function () {
      timer = setInterval(NoticeMove,30)
    }
    function NoticeMove() {
      if(oslide.offsetLeft<= -oslide.offsetWidth/2){
        oslide.style.left = 0;
      }
      oslide.style.left = oslide.offsetLeft-3+'px';
    }
  }
  //第二导航栏部分
  $(".second_nav_con>ul>li").mouseenter(function () {
    $(this).children("ul").slideDown();
  });
  $(".second_nav_con>ul>li").mouseleave(function () {
    $(this).children("ul").hide();
  });
  
  //滚动广告部分
  (function () {
    window.onresize = function () {
      bannerMove();
    }
    bannerMove();
    function bannerMove() {
      var windowwidth = getclientWidth();
      // console.log(windowwidth);
      var oslide2 = document.getElementById("slide2");
      var oimg = document.getElementsByClassName("imgs")[0];
      var oimgimg = oimg.getElementsByTagName("img");
      var oullis = oimg.children;
      oimg.appendChild(oullis[0].cloneNode(true));
      for (var i = 0; i<oimgimg.length; i++) {
        oimgimg[i].style.width = windowwidth+'px';
      }
      oslide2.style.height = oimgimg[0].offsetHeight+'px';
      oslide2.style.width = oimgimg[0].offsetWidth+'px';
      oimg.style.width = oimgimg[0].offsetWidth*(oullis.length)+'px';
  
      var oarrow = document.getElementsByClassName("arrow")[0];
      var leftarrow = oarrow.children[0];
      var rightarrow = oarrow.children[1];
  
      var ocircle = document.getElementsByClassName("circle")[0];
      var ocirclelis = ocircle.children;
      var timer = null;
      //小圆点轮播
      for (var i = 0; i < ocirclelis.length; i++) {
        ocirclelis[i].index = i;
        ocirclelis[i].onmouseover = function () {
          for (var i = 0; i < ocirclelis.length; i++) {
            ocirclelis[i].className = '';
          }
          this.className = 'current';
          if(count==oullis.length-1){
            count=0;
            oimg.style.left = 0;
          }
          Move(oimg,-this.index*oslide2.offsetWidth,"left");
          count=this.index;
        }
      }
      //左右焦点无缝
      var count = 0;
      function AutoPlay() {
        if(count==oullis.length-1){
          count=0;
          oimg.style.left = 0;
        }
        count++;
        Move(oimg,-count*oslide2.offsetWidth,"left");
    
        //让小圆点随动
        for (var i = 0; i<ocirclelis.length; i++) {
          ocirclelis[i].className = '';
        }
        //当移动到最后一张假图片时让第一个小圆点高亮
        if(count==oullis.length-1){
          ocirclelis[0].className='current';
        }else{
          ocirclelis[count].className='current';
        }
      }
      rightarrow.onclick = AutoPlay;
      leftarrow.onclick = function () {
        if(count==0){
          count=oullis.length-1;
          oimg.style.left = -count*oslide2.offsetWidth+'px';
        }
        count--;
        Move(oimg,-count*oslide2.offsetWidth,"left");
        for (var i = 0; i<ocirclelis.length; i++) {
          ocirclelis[i].className = '';
        }
        ocirclelis[count].className='current';
      }
      //自动轮播
      timer = setInterval(function () {
        AutoPlay();
      },1000)
      oslide2.onmouseover = function () {
        clearInterval(timer);
      }
      oslide2.onmouseout = function () {
        timer = setInterval(function () {
          AutoPlay();
        },1000)
      }
    }
  })();
  
  //游园须知上下移动
  var oparakneedkonw = document.getElementById("parkneedkonw");
  oparakneedkonw.onmouseover = function () {
    Move(this,-20,"top");
  };
  oparakneedkonw.onmouseout = function () {
    Move(this,0,"top");
  };
  
  //页面翻转,播放音乐特效
    $(".search_con").keyup(function () {
      if($(".search_con").val()=="翻转"){
        $("body").css({
          "-webkit-transform": "rotateY(360deg)",
          "-moz-transform": "skew(0deg, 360deg) scale(-1, 1)",
          "-o-transform": "skew(0deg, 360deg), scale(-1, 1)",
          "transform": "rotateY(360deg)"
        });
        setTimeout(function () {
          $("body").removeAttr("style");
        },3000);
      }else if($(".search_con").val()=="蓝精灵"){
       $('<audio src="images/蓝精灵.mp3" autoplay></audio>').appendTo($(".topcon_right"));
      }else if($(".search_con").val()=="stop"){
        if($(".topcon_right").has($("audio"))){
          $("audio").remove();
        }
      }
    })
 
  //会员登录
  $(".showtime").click(function () {
    $("#cover").show();
    if($("#wrap").css("display")=="block"){
      $("#wrap").hide();
    }else{
      $("#wrap").show();
    }
  })
  $("#cover").click(function () {
    $("#wrap").hide();
    $(this).hide();
  })
}


