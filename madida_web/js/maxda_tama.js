/**
 * Created by Administrator on 2017/5/18.
 */
(function () {
  var museum_car = document.getElementById("museum_car");
  var box_m = document.getElementById("box_m");
  var hide_mu = document.getElementById("hide_mu");
  var list_road = document.getElementById("list_road");
  var road_ul = list_road.children[0];
  var road_lis = road_ul.children;
  var translate = document.getElementById("translate");
  var t_divs = translate.children;
  var awards_ul = document.getElementById("awards_ul");
  var awards_lis = awards_ul.children;
  var mouse = document.getElementById("mouse");
  var about_us = document.getElementById("about_us");
  var us_spans = about_us.children;
  var ic_box = document.getElementById("ic_box");
  var word_ic = document.getElementById("word_ic");
  var hide_ic = document.getElementById("hide_ic");
  var pic_road = document.getElementById("pic_road");
  var tama_cross = document.getElementById("tama_cross");
  var dna_cross = document.getElementById("dna_cross");
  var way_cross = document.getElementById("way_cross");
  var word_tama = document.getElementById("word_tama");
  var word_dna = document.getElementById("word_dna");
  var word_way = document.getElementById("word_way");
  var word_pic_road = document.getElementById("word_pic_road");
  var hide_pic_road = document.getElementById("hide_pic_road");
  var i =document.getElementById("i");
  var ii =document.getElementById("ii");
  var iii =document.getElementById("iii");
  var i_word = document.getElementById("i_word");
  var ii_word = document.getElementById("ii_word");
  var iii_word = document.getElementById("iii_word");
  var i_hide = document.getElementById("i_hide");
  var ii_hide = document.getElementById("ii_hide");
  var iii_hide = document.getElementById("iii_hide");
  var pic_awards = document.getElementById("pic_awards");
  var awards_word = document.getElementById("awards_word");

  //pic_awards.onmouseenter = function(){
  //  animate(awards_word,{opacity:1})
  //}
  //pic_awards.onmouseleave = function(){
  //  awards_word.style.opacity = "0";
  //}


  //tama_cross.onmouseenter = function () {
  //  word_tama.style.opacity = "0";
  // setTimeout(function(){
  //   animate(word_tama, {opacity: 1})
  // },1000);
  //}
  //dna_cross.onmouseenter = function () {
  //  word_dna.style.opacity = "0";
  //  setTimeout(function(){
  //    animate(word_dna, {opacity: 1})
  //  },1000);
  //}
  //way_cross.onmouseenter = function () {
  //  word_way.style.opacity = "0";
  //  setTimeout(function(){
  //    animate(word_way, {opacity: 1})
  //  },1000);
  //}


  for (var i = 0; i < road_lis.length; i++) {
    road_lis[i].index = i;
    road_lis[i].onmouseover = function () {
      for (var i = 0; i < road_lis.length; i++) {
        t_divs[i].style.display = "none";
        road_lis[i].style.opacity = 0.5;
      }
      road_lis[this.index].style.opacity = 1;
      t_divs[this.index].style.display = "block";
    }
    road_lis[i].onmouseout = function () {
      for (var i = 0; i < road_lis.length; i++) {
        road_lis[i].style.opacity = 0.5;
      }
    }
  }

  for (var i = 0; i < awards_lis.length; i++) {
    awards_lis[i].index = i;
    awards_lis[i].onmouseover = function () {
      for (var i = 0; i < awards_lis.length; i++) {
        awards_lis[i].style.color = "#999";
      }
      awards_lis[this.index].style.color = "#fff";
    }
    awards_lis[i].onmouseout = function () {
      for (var i = 0; i < awards_lis.length; i++) {
        awards_lis[i].style.color = "#999";
      }
    }
  }
  setInterval(function () {
    animate(mouse, {opacity: 1}, function () {
      animate(mouse, {opacity: 0});
    });
  }, 2000);

  window.onscroll = function () {
    var w_top = document.body.scrollTop;
    if (w_top >= 3600) {
      mouse.style.display = "none";
    } else {
      mouse.style.display = "block";
    }
  }

  for (var i = 0; i < us_spans.length; i++) {
    us_spans[i].index = i;
    us_spans[i].onmouseover = function () {
      for (var i = 0; i < us_spans.length; i++) {
        us_spans[i].style.color = "#999";
      }
      us_spans[this.index].style.color = "#fff"
    }
    us_spans[i].onmouseout = function () {
      for (var i = 0; i < us_spans.length; i++) {
        us_spans[i].style.color = "#999";
      }
    }
  }
  //function enter(box, hide, show) {
  //  box.onmouseenter = function () {
  //    hide.style.visibility = "hidden";
  //    show.style.visibility = "visible";
  //    animate(show, {opacity: 1})
  //  }
  //}
  //
  //function leave(box, hide, show) {
  //  box.onmouseleave = function () {
  //    hide.style.opacity = 0;
  //    hide.style.visibility = "hidden";
  //    show.style.visibility = "visible";
  //  }
  //}



})()