/**
 * Created by Administrator on 2017/5/21.
 */
(function () {
  var topNav = document.getElementsByClassName("top-nav")[0];
  var lis = document.getElementById("topNav").getElementsByTagName("li");
  var divs = document.getElementById("topNav").getElementsByTagName("div");

  //  给每个li注册鼠标经过事件，让北京改变


  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none"

      }
      divs[this.index].style.display = "block"
    };

    lis[i].onmouseout = function () {
      divs[this.index].style.display = "none"
    }
  }

})();

//  tab栏部分
$(function () {
  $(".column>.tab>li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var idx=$(this).index();
    var $div=$(".products>.main");
    $div.eq(idx).stop().fadeIn(1000).addClass("selected").siblings().stop().fadeOut(1000).removeClass("selected")



  })


});



//分割线
$(function () {

  var $slider = $('.slider-wrap');
  var html = $slider.html();

  // Options

  var defaults = {
    thumbSize: 20,
    onSlideshowEnd: function () {
      $('.stop, .start').toggle()
    }
  };

  var effects = {
    'default': {x: 6, y: 4, random: true},
    simple: {x: 6, y: 4, effect: 'simple', random: true},
    left: {x: 1, y: 8, effect: 'left'},
    up: {x: 20, y: 1, effect: 'up', rewind: 60, backReverse: true},
    leftright: {x: 1, y: 8, effect: 'leftright'},
    updown: {x: 20, y: 1, effect: 'updown', cssSpeed: 500, backReverse: true},
    switchlr: {x: 20, y: 1, effect: 'switchlr', backReverse: true},
    switchud: {x: 1, y: 8, effect: 'switchud'},
    fliplr: {x: 20, y: 1, effect: 'fliplr', backReverse: true},
    flipud: {x: 20, y: 3, effect: 'flipud', reverse: true, rewind: 75},
    reduce: {x: 6, y: 4, effect: 'reduce'},
    360: {x: 1, y: 1, effect: '360', fade: true, cssSpeed: 600}
  };

  $('#effects-select').change(function () {
    var effect = $(this).val();
    $slider.fadeTo(0, 0).html(html);
    $('.stop').hide();
    $('.start').show();

    setTimeout(function () {
      $('.slider').tilesSlider($.extend({}, defaults, effects[effect]));
      $slider.fadeTo(0, 1);
      $('body').removeClass('tiles-preload');
    }, 100);

    $('.code').empty().html(function () {
      var e = effects[effect], c = [];
      for (var i in e) {
        if (i !== 'effect') {
          c.push('<code>' + i + ': ' + e[i] + '</code>');
        }
      }
      return c.join('');
    });
  });

  $('.start').click(function () {
    $(this).hide();
    $('.stop').show();
    $('.slider').tilesSlider('start');
  });

  $('.stop').click(function () {
    $(this).hide();
    $('.start').show();
    $('.slider').tilesSlider('stop');
  });

  $('.slider').tilesSlider($.extend({}, defaults, effects['default']));

})
