/**
 * Created by HUCC on 2017/5/7.
 */


//1.兼容nextElementSibling
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("nextElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: function () {
      var e = this.nextSibling;
      while (e && 1 !== e.nodeType) {
        e = e.nextSibling;
      }
      return e;
    }
  });
}

//2.上一个兄弟元素
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("previousElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: function () {
      var e = this.previousSibling;
      while (e && 1 !== e.nodeType)
        e = e.previousSibling;
      return e;
    }
  });
}


//3.获取内部文本的函数
function getInnerText(element) {
  if (typeof element.innerText == "string") {
    //说明 支持 innerText 属性
    return element.innerText;
  } else {
    return element.textContent;
  }
}

//4.设置内部文本的函数
function setInnerText(element, value) {
  if (typeof element.innerText == "string") {
    element.innerText = value;
  } else {
    element.textContent = value;
  }
}

//5.获取元素样式
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];//attr这个属性名是变量，所以不能用点语法，而应该用中括号；
  } else {
    return element.currentStyle[attr];
  }
}

//6.getScoll().left    getScoll().top
function getScroll() {
  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };
}

//7.
//8.pageX  pageY ie兼容
function getPageX(e) {
  return e.pageX || document.documentElement.scrollLeft;
}
function getPageY(e) {
  return e.pageY || document.documentElement.scrollTop;
}
//如何获取pageX与pageY
function getPage(e) {
  return {
    x: e.pageX || e.clientX + document.documentElement.scrollLeft,
    y: e.pageY || e.clientY + document.documentElement.scrollTop
  }
}
//如何获取clientWidth
function getClient() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
  }
}


// 清除选中文字
//window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();