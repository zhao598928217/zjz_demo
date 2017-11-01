/**
 * Created by Administrator on 2017/5/17.
 */
// JavaScript Document
/*@2014-3-19*/
function indexs() {
  var jdtDiv = document.getElementById("in_jdt_id"),
    jdtDd = getByClass(jdtDiv, "min_img")[0],
    jdtDdA = jdtDd.getElementsByTagName("a"),
    jdtLi = jdtDiv.getElementsByTagName("li"),
    jdt2Div = document.getElementById("in_jdt2_id"),
    jdt2Ul = jdt2Div.getElementsByTagName("ul")[0],
    jdt2Li = jdt2Div.getElementsByTagName("li"),
    jdt2Dd = getByClass(jdt2Div, "in_dd")[0],
    jdt2DdA = jdt2Dd.getElementsByTagName("a"),
    nob = 0;
  for (var i = 0; i < jdt2Li.length; i++) {
    jdt2Dd.innerHTML = jdt2Dd.innerHTML + "<a></a>";
  }
  if(jdt2DdA.length > 0){
    jdt2DdA[0].className = "as2";
  }
  jdt2Ul.style.width = jdt2Li.length * 294 + "px";
  
  for (var i = 0; i < jdtDdA.length; i++) {
    jdtDdA[i].index = i;
    jdtDdA[i].onclick = function () {
      for (var j = 0; j < jdtDdA.length; j++) {
        jdtLi[j].style.display = "none";
        startMove(jdtLi[j], { opacity: 0 }, 5);
        jdtDdA[j].className = "null";
      }
      jdtLi[this.index].style.display = "block";
      startMove(jdtLi[this.index], { opacity: 100 }, 5);
      this.className = "as";
    }
  }
  setTimeout(function(){
    zdjdt();
  },1500)
  function zdjdt() {
    nob++;
    if (nob == jdtDdA.length) {
      nob = 0;
    }
    for (var i = 0; i < jdtDdA.length; i++) {
      jdtLi[i].style.display = "none";
      startMove(jdtLi[i], { opacity: 0 }, 5);
      jdtDdA[i].className = "null";
    }
    jdtLi[nob].style.display = "block";
    startMove(jdtLi[nob], { opacity: 100 }, 5);
    jdtDdA[nob].className = "as";
  }
  
  var timer = setInterval(zdjdt, 3500);
  jdtDiv.onmouseover = function () {
    clearInterval(timer);
  }
  jdtDiv.onmouseout = function () {
    timer = setInterval(zdjdt, 3500);
  }
  
  for (var i = 0; i < jdt2Li.length; i++) {
    jdt2DdA[i].index = i;
    jdt2DdA[i].onmouseover = function () {
      for (var i = 0; i < jdt2Li.length; i++) {
        jdt2DdA[i].className = " ";
      }
      this.className = "as2"
      startMove(jdt2Ul, { left: -this.index * 294 }, 5);
    }
  }
}
