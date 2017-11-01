/**
 * Created by Administrator on 2017/5/20.
 */
$(function () {
  $(".park_int_infor>div").mouseenter(function () {
    $(this).children("span").animate({top:0},500);
  });
  $(".park_int_infor>div").mouseleave(function () {
    $(this).children("span").animate({top:-420},500);
  });
  
  
  
  
  //头部导航
  var nav_h = $(window).height() * 0.11;
  $(".nav").css("height", nav_h + "px");
  $(".navul").css("top", nav_h + "px");
  
  var nav_height = $(".nav").height();
  $(".navcon").css("height", nav_height + "px");
  
  var logoh = $(".navcon").height();
  $(".logo").css("height", logoh + "px");
  
  var navdl = $(".navcon").height();
  $(".nav dl").css("height", navdl + "px");
  
  var navh = $(".nav dl dd a.first").height();
  $(".nav dl dd a.first").css("line-height", navh + "px");
  
  var navul = $(".navul").height();
  $(".navulcon ul").css("height", navul + "px");
  
  //导航
  $(".nav dl dd").mouseover(function () {
    var mouseIndex = $(this).index();
    $(this).find(".first").addClass("hover");
    $(this).siblings("dd").find(".first").removeClass("hover");
    
    $(".navulcon .box:eq(" + mouseIndex + ")").addClass("hover");
    $(".navulcon .box:eq(" + mouseIndex + ")").siblings(".box").removeClass("hover");
    
    $(".navcon .navul").stop().fadeIn(500);
  });
  $(".navulcon .box").mouseover(function () {
    var mouseIndex = $(this).index();
    $(".navcon dl dd:eq(" + mouseIndex + ")").find(".first").addClass("hover");
    $(".navcon dl dd:eq(" + mouseIndex + ")").siblings("dd").find(".first").removeClass("hover");
    
    $(".navulcon .box:eq(" + mouseIndex + ")").addClass("hover");
    $(".navulcon .box:eq(" + mouseIndex + ")").siblings(".box").removeClass("hover");
    
    $(".navcon .navul").stop().fadeIn(500);
  });
  
  $(".navcon").mouseleave(function () {
    $(".navcon .first").removeClass("hover");
    $(".navcon .navul").stop().fadeOut(500);
  });
  
  
  //手风琴
  for (var i = 0; i < $(".sfq_left li").length; i++) {
    $(".sfq_left li").eq(i).css("backgroundImage", "url(img2/" + (i + 1) + ".jpg)");
  }
  $(".sfq_left li").mouseenter(function () {
    $(this).stop().animate({width: 800}).siblings().stop().animate({width: 50})
  });
  $(".sfq_left li").mouseleave(function () {
    $(".sfq_left li").stop().animate({width: 200});
  })
  
  $(".sfq_ul>li").mouseenter(function () {
    var idx = $(this).index();
    $(".followmove").animate({left:50+idx*100});
    $(".sfq_con>div").eq(idx).css("display","block").siblings().css("display","none");
  })
  
  //轮播图
  lbt();
  function lbt() {
    var flag = true;
    //fadeIn不传速度值，默认为normal 400ms
    var index = 0;
    $(".arrow_right").click(function () {
      if(flag){
        flag = false;
        index++;
        if (index == $(".ul-top li").length){
          index = 0;
        }
        $(".ul-top li").eq(index).fadeIn(400,function () {
          flag = true;
        }).siblings().fadeOut();
        $(".ul-bottom li").eq(index).addClass("active").siblings().removeClass("active");
      }
    });
    $(".arrow_left").click(function () {
      if (flag){
        flag = false;
        index--;
        if (index ==-1){
          index = $(".ul-top li").length-1;
        }
        $(".ul-top li").eq(index).fadeIn(400,function () {
          flag = true;
        }).siblings().fadeOut();
      }
      $(".ul-bottom li").eq(index).addClass("active").siblings().removeClass("active");
    })
    
    $(".ul-bottom li").mouseenter(function () {
      var idx = $(this).index();
      $(".ul-top li").eq(idx).fadeIn(400).siblings().fadeOut();
      $(this).addClass("active").siblings().removeClass("active");
    })
  }
  $(".sxsfq li").mouseenter(function () {
    $(this).stop().animate({height: 300}).siblings().stop().animate({height: 50})
  });
  $(".sxsfq li").mouseleave(function () {
    $(".sxsfq li").stop().animate({height: 100});
  })
  //旋转木马
  slideMM();
  function slideMM() {
    var datas = [
      {
        "width": 400,
        "top": 20,
        "left": 140,
        "opacity": 20,
        "z-index": 2
      },//0
      {
        "width": 600,
        "top": 70,
        "left": 90,
        "opacity": 80,
        "z-index": 3
      },//1
      {
        "width": 800,
        "top": 100,
        "left": 290,
        "opacity": 100,
        "z-index": 4
      },//2
      {
        "width": 600,
        "top": 70,
        "left": 690,
        "opacity": 80,
        "z-index": 3
      },//3
      {
        "width": 400,
        "top": 20,
        "left": 840,
        "opacity": 20,
        "z-index": 2
      }//4
    ];
  
    var oslide = document.getElementById("slide");
    var alis = oslide.getElementsByTagName("li");
    var oarrow = document.getElementById("arrow");
    var oarrLeft = document.getElementById("arrLeft");
    var oarrRight = document.getElementById("arrRight");
    var timer = null;
    var flag = true; //1.节流阀第一步：门是开着的
    for (var i = 0; i < alis.length; i++) {
      Move(alis[i], datas[i]);
    }
  
    oslide.onmouseover = function () {
      clearInterval(timer);
      Move(oarrow, {opacity: 100});
    }
    oslide.onmouseout = function () {
      timer = setInterval(function () {
        oarrRight.onclick();
      },1000)
      Move(oarrow, {opacity: 0});
    }
    oarrRight.onclick = function () {
      //2.节流阀第二步：如果门是开着的就进去睡觉
      if(flag){
        //3.进去之后先把门关上
        flag= false;
        //把最后一个放在第一个
        datas.unshift(datas.pop());
        for (var i = 0; i < alis.length; i++) {
          Move(alis[i], datas[i],function () {
            //4.睡完觉出来，把门打开
            flag = true;
          });
        }
      }
    }
    oarrLeft.onclick = function () {
      if(flag){
        flag = false;
        //把第一个放在最后一个
        datas.push(datas.shift());
        for (var i = 0; i < alis.length; i++) {
          Move(alis[i], datas[i],function () {
            flag = true;
          });
        }
      }
    }
  
    timer = setInterval(function () {
      oarrRight.onclick();
    },1000)
  }
  
  $(".picleft li").click(function () {
    var idx = $(this).index();
    $(".picright li").eq(idx).fadeIn(1000).siblings().hide(1000);
  });
  $(".picleft li").mouseenter(function () {
    $(this).css("opacity", "1").siblings("li").css("opacity", "0.5");
    var chil = $(this).children(0);
   chil.stop().animate({width: "315px"}, 500);
    
  }).mouseleave(function () {
    var chil = $(this).children(0);
    chil.stop().animate({width: "210px"}, 500);
  });
  $(".picleft ").mouseleave(function () {
    $(this).find("li").css("opacity", "1");
    $(".picleft img").eq($(this).index()).stop().animate({width: "210px"}, 500);
  });
  //页脚九大主题
  $(".zhutibtn").click(function(){
    if($(".foot2").css("bottom")>=0){
      $(".foot2").stop().animate({"bottom":"-90px"},500);
    }else{
      $(".foot2").stop().animate({"bottom":"0px"},500);
    }
  });
  if ($(".foot2").css("bottom")<0){
    return;
  }else{
    $(".foot2 ul li").mouseenter(function () {
      $(this).find(".fimg").stop().animate({
        bottom:132,
        opacity:1
      },200);
      // $(this).siblings().children("img").hide();
    });
    $(".foot2 ul li").mouseleave(function () {
      $(this).find(".fimg").stop().animate({
        bottom:90,
        opacity:0
      },200);
      // $(this).siblings().children("img").hide();
    });
  }
})