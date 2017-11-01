//search_btn
var searchBtn = document.getElementsByClassName("search_btn")[0];
var searchInput = document.getElementsByClassName("sear_input")[0];
searchBtn.onmouseover = function () {
  searchInput.style.display= "block";
  animate(searchInput,{"width":120,"borderRadius":10});
  animate(this, {"width": 120, "borderRadius": 10});
};
searchBtn.onmouseout = function () {
  animate(this, {"width": 28, "borderRadius": 14});
  animate(searchInput,{"width":18,"borderRadius":14});
};


var clientWid = getClient().width;
var wrapSpace = (clientWid - 1000) / 2;

//notification_slide开始
var notSlide = document.getElementsByClassName("notification_slide")[0];
var notUl = notSlide.children[0];
var notLis = notUl.children;

var notTimer = setInterval(function () {
  var leader = notUl.offsetLeft;
  var step = -10;
  var target = -1750;
  leader += step;
  notUl.style.left = leader + "px";
  if (leader == target) {
    leader = 0;
    notUl.style.left = 0;
  }
}, 150);


var tabDes = document.getElementsByClassName("tab_des");
console.log(tabDes);
for (var i = 0; i < tabDes.length; i++) {
  tabDes[i].style.width = clientWid + "px";
  tabDes[i].style.left = -wrapSpace - 180 + "px";
}


// tab_menu
var tabMenuLis = document.getElementById("tabMenuUl").children;

var tabCol = ["#ed3535", "#36814b", "#744fac", "#388ad6", "#00b2b4", "#f65700", "#ef2f77"];
var tabSprite = ["-198px -100px", "-295px -100px", "-386px -100px", "-487px -100px", "-586px -100px", "-699px -100px", "-798px -100px"];
var oldPosition = [];
for (var i = 0; i < tabDes.length; i++) {
  tabDes[i].style.backgroundColor = tabCol[i]
}
for (var i = 0; i < tabMenuLis.length; i++) {
  
  oldPosition.push(tabMenuLis[i].children[0].children[0].style.backgroundPosition);
  tabMenuLis[i].index = i;
  tabMenuLis[i].onmouseover = function () {
    for (var j = 0; j < tabMenuLis.length; j++) {
      tabMenuLis[j].style.backgroundColor = "#fff";
      tabMenuLis[j].children[0].style.color = tabCol[j];
      tabMenuLis[j].children[0].children[0].style.backgroundPosition = oldPosition[j];
      if (j < 5) {
        tabDes[j].style.display = "none";
      }
    }
    tabMenuLis[this.index].style.backgroundColor = tabCol[this.index];
    tabMenuLis[this.index].children[0].children[0].style.backgroundPosition = tabSprite[this.index];
    tabMenuLis[this.index].children[0].style.color = "#fff";
    if (this.index < 5) {
      tabDes[this.index].style.display = "block";
    }
  };
  tabMenuLis[i].onmouseout = function () {
    tabMenuLis[this.index].style.backgroundColor = "#fff";
    tabMenuLis[this.index].children[0].style.color = tabCol[this.index];
    tabMenuLis[this.index].children[0].children[0].style.backgroundPosition = oldPosition[this.index];
    if (this.index < 5) {
      tabDes[this.index].style.display = "none";
    }
  };
}
