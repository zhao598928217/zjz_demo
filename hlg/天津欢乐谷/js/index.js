//轮播图
var clientWid = getClient().width;
console.log(clientWid);
var imgWidth = clientWid;
var slide = document.getElementById("banner_slide");
var imgUl = slide.children[0];
var imgLis = imgUl.children;
var circleUl = document.getElementById("circleUl");
var circleLis = circleUl.children;
var count = 0;
var arrow = document.getElementById("arrow");
var arrLeft = arrow.children[0];
var arrRight = arrow.children[1];
var timer = null;

// slide.parentNode.width = clientWid + "px";
slide.style.width = clientWid + "px";
imgUl.style.width = 8 * clientWid + "px";
circleLis[0].style.backgroundPosition = "-700px -600px";
for (var i = 0; i < imgLis.length; i++) {
  imgLis[i].children[0].children[0].style.width = clientWid + "px";
}
var imgHeight = imgLis[0].children[0].children[0].offsetHeight;
slide.style.height = imgHeight + "px";
slide.parentNode.style.height = imgHeight + "px";


//circle功能
for (var i = 0; i < circleLis.length; i++) {
  circleLis[i].index = i;
  circleLis[i].onclick = function () {
    for (var j = 0; j < circleLis.length; j++) {
      circleLis[j].style.backgroundPosition = "-600px -600px";
    }
    circleLis[this.index].style.backgroundPosition = "-700px -600px";
    if (count == imgLis.length - 1) {
      count = 0;
      imgUl.style.left = 0;
    }
    animate(imgUl, {left: -this.index * imgWidth});
    count = this.index;
  };
  
}

//左右焦点功能
slide.onmouseover = function () {
  arrow.style.display = "block";
  clearInterval(timer);
};
slide.onmouseout = function () {
  arrow.style.display = "none";
  timer = setInterval(function () {
    arrRight.onclick();
  }, 3000);
};
arrRight.onmouseover = function () {
  arrRight.style.backgroundPosition = "-700px -500px";
};
arrLeft.onmouseover = function () {
  arrLeft.style.backgroundPosition = "-500px -500px";
};
arrRight.onmouseout = function () {
  arrRight.style.backgroundPosition = "-600px -500px";
};
arrLeft.onmouseout = function () {
  arrLeft.style.backgroundPosition = "-400px -500px";
};


arrRight.onclick = function () {
  if (count == imgLis.length - 1) {
    count = 0;
    imgUl.style.left = 0;
  }
  count++;
  animate(imgUl, {left: -count * imgWidth});
  for (var i = 0; i < circleLis.length; i++) {
    circleLis[i].style.backgroundPosition = "-600px -600px";
  }
  if (count == imgLis.length - 1) {
    circleLis[0].style.backgroundPosition = "-700px -600px";
  } else {
    circleLis[count].style.backgroundPosition = "-700px -600px";
  }
};
arrLeft.onclick = function () {
  if (count == 0) {
    count = imgLis.length - 1;
    imgUl.style.left = -count * imgWidth + "px";
  }
  count--;
  animate(imgUl, {left: -count * imgWidth});
  for (var i = 0; i < circleLis.length; i++) {
    circleLis[i].style.backgroundPosition = "-600px -600px";
  }
  circleLis[count].style.backgroundPosition = "-700px -600px";
};

//自动轮播
timer = setInterval(function () {
  arrRight.onclick();
}, 3000);


//float_btn
$(function () {
  setInterval(function () {
    $(".float_btn").animate({top: -30}, 1000).animate({top: -20}, 1000);
  }, 1000);
  $(".float_btn").on("click",function () {
    $(this).hide();
  })
});


//mid_nav
var midNav = document.getElementsByClassName("mid_nav")[0];
midNav.style.left = (clientWid - midNav.offsetWidth) / 2 + "px";

$(document).scroll(function () {
  if ($(document).scrollTop() >= 530) {
    $(".mid_nav").addClass("fixed");
  } else {
    $(".mid_nav").removeClass("fixed");
  }
});


//main开始


$(function () {
  //slider_carousel
  var datas = [
    {
      "width": 130,
      "top": 40,
      "left": 50,
      "opacity": 0.2,
      "zIndex": 2
    },//0
    {
      "width": 170,
      "top": 60,
      "left": 30,
      "opacity": 0.8,
      "zIndex": 3
    },//1
    
    {
      "width": 210,
      "top": 75,
      "left": 110,
      "opacity": 1,
      "zIndex": 4
    },//2
    {
      "width": 170,
      "top": 60,
      "left": 210,
      "opacity": 0.8,
      "zIndex": 3
    },//3
    {
      "width": 130,
      "top": 40,
      "left": 230,
      "opacity": 0.2,
      "zIndex": 2
    }//4
  ];
  var $carouselLis = $(".slider_carousel li");
  var $arrCar = $(".arr_carousel");
  for (var i = 0; i < datas.length; i++) {
    $carouselLis.eq(i).animate(datas[i], 1000);
  }
  var $slider = $(".slider_carousel");
  $slider.mouseenter(function () {
    $arrCar.animate({opacity: 1}, 1000);
  });
  $(".slider_carousel .next").on("click", function () {
    datas.push(datas.shift());
    for (var i = 0; i < datas.length; i++) {
      $carouselLis.eq(i).animate(datas[i], 1000);
    }
  });
  $(".slider_carousel .prev").on("click", function () {
    datas.unshift(datas.pop());
    for (var i = 0; i < datas.length; i++) {
      $carouselLis.eq(i).animate(datas[i], 1000);
    }
  });
  $slider.mouseleave(function () {
    $arrCar.animate({opacity: 0}, 1000);
  });
  $carouselLis.on("click", function () {
    $(this).animate({width: 400, height: 300, left: 0}, 1000)
  });
  
  
  //返回小火煎
  var $rocket = $(".actGotop");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 900) {
      $rocket.fadeIn(1000);
    } else {
      $rocket.fadeOut(1000);
    }
  });
  $rocket.click(function () {
    $("html,body").animate({"scrollTop": 0}, 1000);
  });
});


//视频弹幕
var colors = ["pink", "hotpink", "yellowgreen", "green", "purple", "orange", "deepskyblue", "red", "blue","white","#BDFF73","#F09911","#9F73B7"];
var boxDom = document.getElementById("boxDom");
var textBar = document.getElementById("textBar");
var btnBar = document.getElementById("btnBar");
var datasDom = ["哇～好好玩","太吓人了","厉害了！","聪聪好帅～","亮亮好帅","前面的","看我看我","约吗？","今天我值日","聪聪好帅～","亮亮好帅","5D电影","冲上云霄","大摆锤","哈哈哈","你是谁","你无情无义无理取闹","王者走一个","诗诗我的女神","老公，我要跟你猴子","聪聪好帅～","亮亮好帅"];

setInterval(function  () {
  
  var cont = datasDom[parseInt(Math.random() * datasDom.length)];
  var span = document.createElement("span");
  boxDom.appendChild(span);
  span.innerText = cont;
  span.style.fontSize = 16 + "px";
  span.style.zIndex = 100;
  span.style.position = "absolute";
  span.style.width = 100 + "px";
  span.style.backgroundColor="rgba(0,0,0,0.3)";
  span.style.textAlign="center";
  span.style.borderRadius="5px";
  var randomColor = parseInt(Math.random() * colors.length);
  span.style.color = colors[randomColor];
  var randomHeight = parseInt(Math.random() * 250);
  span.style.left = 750 + "px";
  span.style.top = randomHeight + "px";
  animateLinear(span, -100, 1, function () {
    boxDom.removeChild(span);
  });
},1500);





btnBar.onclick = function () {
  var content = textBar.value;
  textBar.value = "";
  var span = document.createElement("span");
  boxDom.appendChild(span);
  span.innerText = content;
  span.style.fontSize = 16 + "px";
  span.style.zIndex = 100;
  span.style.position = "absolute";
  span.style.width = 100 + "px";
  span.style.backgroundColor="rgba(0,0,0,0.3)";
  span.style.textAlign="center";
  span.style.borderRadius="5px";
  var randomColor = parseInt(Math.random() * colors.length);
  span.style.color = colors[randomColor];
  var randomHeight = parseInt(Math.random() * 250);
  span.style.left = 750 + "px";
  span.style.top = randomHeight + "px";
  animateLinear(span, -100, 1, function () {
    boxDom.removeChild(span);
  });
};
textBar.onkeyup = function (e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    btnBar.click();
  }
};

function animateLinear(element, target, num, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    var step = target > leader ? num : -num;
    //console.log(step);
    if (Math.abs(target - leader) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      //抱过去
      element.style.left = target + "px";
      fn && fn();
    }
  }, 15);
}





