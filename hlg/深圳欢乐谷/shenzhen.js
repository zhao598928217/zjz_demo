/**
 * Created by Administrator on 2017/5/18.
 */
//文字滚动
TopNoticeMove();
function TopNoticeMove() {
  var oslide  = document.getElementById("cont");
  // oslide.innerHTML = oslide.innerHTML+oslide.innerHTML;
  var timer = null;
  timer = setInterval(NoticeMove,40);
  oslide.onmouseover = function () {
    clearInterval(timer);
  }
  oslide.onmouseout = function () {
    timer = setInterval(NoticeMove,40)
  }
  function NoticeMove() {
    if(oslide.offsetLeft<= -oslide.offsetWidth/2){
      oslide.style.left = 0;
    }
    oslide.style.left = oslide.offsetLeft-1+'px';
  }
}


//导航
var headTop = document.getElementById("headTop");
var lis = headTop.children;
var headlist = document.getElementsByClassName("headlist");
var cloud=document.getElementById("cloud");

for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onmouseover = function () {
    for(var i=0; i< lis.length; i++){
      headlist[i].style.display = "none";
    }
    headlist[this.index].style.display = "block";
  }
  lis[i].onmouseout=function () {
    for(var i=0; i< lis.length; i++){
      headlist[i].style.display = "none";
    }
   
  }
}



//mainpic轮播图
var mainpic = document.getElementById("mainpic");
var slide = document.getElementById("slide");
var ullis = slide.children;
var ol = document.getElementById("litter");
var lisr = ol.children;
var imgwidth = 777;
var timer = null;
var count = 0;

for (var i = 0; i < lisr.length; i++) {
  lisr[i].index = i;
  lisr[i].onmouseover = function () {
    for (var i = 0; i < lisr.length; i++) {
      lisr[i].className = "";
    }
    this.className = "current";
    
    if (count == ullis.length - 1) {
      count = 0;
      slide.style.left = 0;
    }
    // 经过小图让大图片动
    var target = -this.index * imgwidth;
    animate(slide, target, 40);
    count = this.index;
  };
}

function AutoPlay() {
  if (count == ullis.length - 1) {
    count = 0;
    slide.style.left = 0;
  }
  count++;
  animate(slide, -count * imgwidth, 40);
  //同步小图片
  for (var i = 0; i < lisr.length; i++) {
    lisr[i].className = '';
  }
  if (count == ullis.length - 1) {
    lisr[0].className = 'current';
  } else {
    lisr[count].className = 'current';
  }
}

timer = setInterval(function () {
  AutoPlay();
}, 2000);

mainpic.onmouseover = function () {
  clearInterval(timer);
}
mainpic.onmouseout = function () {
  timer = setInterval(function () {
    AutoPlay();
  }, 2000);
};

// 小轮播图
var playmiddle = document.getElementById("playmiddle");
var ul = playmiddle.children[0];
var ulis = ul.children;
var middleCircle = document.getElementById("middleCircle");
var olis = middleCircle.children;
var middlewid = playmiddle.offsetWidth;

for (var i = 0; i < olis.length; i++) {
  olis[i].index = i;
  olis[i].onmouseover = function () {
    for (var i = 0; i < olis.length; i++) {
      olis[i].className = "";
    }
    this.className = "hotp";
    var target = -this.index * middlewid;
    animate(ul, target, 10)
  }
}



$(function () {
  
  //气球
  var timer=setInterval(function () {
    $(".balloon").animate({top:200},2000)
      .animate({top:160},2000)
  },1000)
  
 
  
});



//手风琴
$(function () {
  var $li = $(".accordion li");
  
  //给所有的li注册鼠标进入事件， 让当前li宽度变成800， 其他li变成100
  $li.mouseenter(function () {
    $(this).stop().animate({width: 250}).siblings().stop().animate({width: 40});
  });
  
  //给所有的li注册鼠标离开事件， 让所有的li变成240
  $li.mouseleave(function () {
    $li.stop().animate({width: 110});
  });
  
});


//固定定位栏
$(function () {

var timer=null;
    $(".weixin span,.weixin em").on("mouseover",function () {
      clearTimeout(timer);
      $(".weixin em").show();
    });
    
    $(".weixin span,.weixin em").on("mouseout",function () {
    timer=setTimeout(function () {
       $(".weixin em").css("display","none");
     },200)
    });
  
  
  $(".sina span,.sina em").on("mouseenter",function () {
    clearTimeout(timer);
    $(".sina em").show();
  });
  $(".sina span,.sina em").on("mouseleave",function () {
    timer=setTimeout(function () {
      $(".sina em").css("display","none");
    },200)
  });
  
  
  
  $(".numb span,.numb em").on("mouseenter",function () {
    clearTimeout(timer);
    $(".numb em").show();
  });
  $(".numb span,.numb em").on("mouseleave",function () {
    timer=setTimeout(function () {
      $(".numb em").css("display","none");
    },200)
  });
  
  
  $(".qiao span ,.qiao em").on("mouseenter",function () {
    clearTimeout(timer);
    $(".qiao em").show();
  });
  $(".qiao span,.qiao em").on("mouseleave",function () {
    timer=setTimeout(function () {
      $(".qiao em").css("display","none");
    },200)
  });
  
  
});







