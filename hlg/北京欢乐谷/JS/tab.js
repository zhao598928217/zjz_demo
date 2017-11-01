/**
 * Created by 74295 on 2017/5/22.
 */
$(function () {
  $("#nav li").mouseenter(function () {
    var i = $(this).index();
    if (i > 2 && i < 7) {
      $(".second_Nav_con").css("display", "block");
      $(".second_Nav_con li").eq(i - 2).css("display", "block").siblings().css("display", "none");
    } else {
      $(".second_Nav_con").css("display", "none");
    }
    
  })
  $(".second_Nav_con").mouseleave(function () {
    $(".second_Nav_con").css("display", "none");
  })
  
  // 小广告浮动与关闭
  var $bcon= $(".index_banner_con");
  $bcon.stop().animate({"marginTop":-60},2000,function () {
    $bcon.animate({"marginTop":-30},2000);
  })
  setInterval(function () {
   $bcon.stop().animate({"marginTop":-60},2000,function () {
   $bcon.animate({"marginTop":-30},2000);
   })
  },4000)
  $(".index_banner_con .btnb").click(function () {
    $(this).parent().remove();
  })
  
  
})


  
  
