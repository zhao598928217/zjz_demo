/**
 * Created by Roger on 2017/5/16.
 */


//主导航table栏
(function () {
  var main_nav = document.getElementsByClassName("main_nav")[0];
  var main_nav_lis = main_nav.children[1].children;
  var subnav_lis = document.getElementsByClassName("nav_subnav")[0].children;
  var nav_line_span = document.getElementsByClassName("nav_line")[0].children[0];

  for (var i = 0; i < 5; i++) {
    main_nav_lis[i].index = i;
    main_nav_lis[i].onclick = function () {
      nav_line_span.style.left = 162 + 120 * this.index + "px";
      if (this.index == 0) {
        location.reload();
      }
      if (subnav_lis[this.index - 1].id == "slider") {
        subnav_lis[this.index - 1].id = "";
      } else {
        for (var i = 0; i < 4; i++) {
          subnav_lis[i].id = "";
        }
        subnav_lis[this.index - 1].id = "slider";
      }
    }
  }
})();


//品牌核心table栏
(function () {
  var brand_left = document.getElementsByClassName("brand_left")[0];
  var brand_left_lis = brand_left.getElementsByTagName("li");
  var brand_right = document.getElementsByClassName("brand_right")[0];
  var brand_right_lis = brand_right.getElementsByTagName("li");

  for (var i = 0; i < brand_left_lis.length; i++) {
    brand_left_lis[i].index = i;
    brand_left_lis[i].onmouseover = function () {
      for (var i = 0; i < brand_left_lis.length; i++) {
        brand_right_lis[i].className = "pa";
      }
      brand_right_lis[this.index].className = "pa show";
    }
  }
})();


//精彩活动table栏
(function () {
  var $leftLi = $(".event_left li");
  var $rightLi = $(".event_right li");
  $leftLi.mousedown(function () {
    var idx = $(this).index();
    $rightLi.eq(idx).stop().fadeIn().siblings().fadeOut();
  });
})()
