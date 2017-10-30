/**
 * Created by Administrator on 2017/5/19.
 */

$(function () {
  $("#box_m").mouseenter(function () {
    $("#museum_car").stop().hide();
    $("#hide_mu").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#box_m").mouseleave(function () {
    $("#museum_car").stop().show();
    $("#hide_mu").stop().hide().css({opacity: 0});
  });


  $("#ic_box").mouseenter(function () {
    $("#word_ic").stop().hide();
    $("#hide_ic").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#ic_box").mouseleave(function () {
    $("#word_ic").show();
    $("#hide_ic").hide().css({opacity: 0});
  });


  $("#pic_road").mouseenter(function () {
    $("#word_pic_road").stop().hide();
    $("#hide_pic_road").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#pic_road").mouseleave(function () {
    $("#word_pic_road").stop().show();
    $("#hide_pic_road").stop().hide().css({opacity: 0});
  });


  $("#i").mouseenter(function () {
    $("#i_word").stop().hide();
    $("#i_hide").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#i").mouseleave(function () {
    $("#i_word").stop().show();
    $("#i_hide").stop().hide().css({opacity: 0});
  });


  $("#ii").mouseenter(function () {
    $("#ii_word").stop().hide();
    $("#ii_hide").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#ii").mouseleave(function () {
    $("#ii_word").stop().show();
    $("#ii_hide").stop().hide().css({opacity: 0});
  });


  $("#iii").mouseenter(function () {
    $("#iii_word").stop().hide();
    $("#iii_hide").stop().show().stop().animate({opacity: 1}, 1000);
  });

  $("#iii").mouseleave(function () {
    $("#iii_word").stop().show();
    $("#iii_hide").stop().hide().css({opacity: 0});
  });


  $("#tama_cross").mouseenter(function () {
    $("#word_tama").css({opacity: 0}).stop().animate({opacity: 1}, 2000);
  });
  $("#tama_corss").mouseleave(function () {
    $("#word_tama").css({opacity: 1});
  })

  $("#dna_cross").mouseenter(function () {
    $("#word_dna").css({opacity: 0}).stop().animate({opacity: 1}, 2000);
  });
  $("#dna_corss").mouseleave(function () {
    $("#word_dna").css({opacity: 1});
  })


  $("#way_cross").mouseenter(function () {
    $("#word_way").css({opacity: 0}).stop().animate({opacity: 1}, 2000);
  });
  $("#way_corss").mouseleave(function () {
    $("#word_way").css({opacity: 1});
  })


  $("#pic_awards").mouseenter(function () {
    $("#awards_word").stop().show().stop().animate({opacity: 1}, 1000)
  });
  $("#pic_awards").mouseleave(function () {
    $("#awards_word").stop().hide().css({opacity: 0});
  });


  var count = 0;
  $(".just_try").click(function () {
    count++;
    if (count % 2 != 0) {
      $(".two_way").show();
    } else {
      $(".two_way").hide();
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(".act_banner").height()) {
      $(".sub_nav").css({
        "position": "fixed",
        "top": 72,
        "font-size": "14px",
        "backgroundColor": "#000",
        "opacity": ".5"
      }).children("li").css("borderRight", 0);
    } else {
      $(".sub_nav").css({
        "position": "absolute",
        "top": 585,
        "z-index": "500",
        "backgroundColor": "",
        "opacity": "1"
      }).children("li.right").css({"borderRight": "2px solid #fff"});
    }
  });


  var $rocket = $(".rocket");

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
      $rocket.fadeIn(1000);
    } else {
      $rocket.fadeOut(1000);
    }
  });
  $rocket.click(function () {
    $("html,body").animate({"scrollTop": 0}, 1000)
  })

});
