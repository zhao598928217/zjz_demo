/**
 * Created by Administrator on 2017/5/17.
 */
function Move(element, target) {
  clearInterval(element.timer);
  var speed;
  element.timer = setInterval(function () {
    if (element.offsetLeft < target) {
      speed = 1
    } else {
      speed = -1;
    }
    if (element.offsetLeft == target) {
      clearInterval(element.timer);
    } else {
      element.style.left = element.offsetLeft + speed + 'px';
    }
  }, 30)
}