var blueBall = document.getElementsByClassName("blueBall");
var container = document.getElementsByClassName("container");
var redBall = document.getElementsByClassName("redBall")[0];

//创建篮球DOM  
var blueimg = document.createElement("img");
blueimg.setAttribute("src", "./images/2.png");
blueimg.setAttribute("alt", "篮球");
blueimg.setAttribute("class", "blueBall");


//蓝色球数量最少10个最多30个；
var ballNum = Math.ceil(Math.random() * 10 + 20);

for (var i = ballNum - 1; i >= 0; i--) {
    let oi = blueimg.cloneNode(true);
    container[0].appendChild(oi);
}

/* 
 *设置球的大小 
 */
for (var i = 0; i < blueBall.length; i++) {
    let ballSize = hwsize();
    blueBall[i].style.width = ballSize + "px";
    blueBall[i].style.height = ballSize + "px";
}

/* 
 *随机排序蓝球 
 */
for (var i = 0; i < blueBall.length; i++) {
    blueBall[i].style.top = Math.ceil(Math.random() * 400) + "px";
    blueBall[i].style.left = Math.ceil(Math.random() * 800) + "px";
}
/*
* 随机生成红球的位置
* */

redBall.style.top = Math.ceil(Math.random()*260) + "px";
redBall.style.left =  Math.ceil(Math.random()*750) + "px";




//获取篮球大小范围为50-100
function hwsize() {
    return Math.ceil(Math.random() * 50) + 50;
}

/* 
 *红球随鼠标移动
 */
container[0].addEventListener("mousemove", function(e) {
    var redYX = redPositionX(e);
    redBall.style.left = redYX.x + "px";
    redBall.style.top = redYX.y + "px";
    for (let i = blueBall.length - 1; i >= 0; i--) {
        blueBoom(i);
    }
});

function redPositionX(e) {
    var redXY = {
        x: 0,
        y: 0
    };
    var ok = e.clientX - container[0].offsetLeft - redBall.width / 2;
    var yes = e.clientY - container[0].offsetTop - redBall.height / 2;
    console.log(yes);
    if (ok < 0) {
        redXY.x = 0;
    } else {
        if (ok > (800 - redBall.width)) {
            redXY.x = 800 - redBall.width;
        } else {
            redXY.x = ok;
        }
    }
    if (yes < 0) {
        redXY.y = 0;
    } else {
        if (yes > (400 - redBall.height)) {
            redXY.y = 400 - redBall.height;
        } else {
            redXY.y = yes;
        }
    }
    return redXY;
}

/* 
 *实现蓝色小球的碰撞
 */
function blueBoom(i) {
  
    //获取篮球相对浏览器的位置  
    var blueX = blueBall[i].offsetLeft;
    var blueY = blueBall[i].offsetTop;

    //获取红球相对浏览器的位置  
    var redX = redBall.offsetLeft;
    var redY = redBall.offsetTop;

    sizeX = redX - blueX;
    sizeY = redY - blueY;

    if (sizeX < 0) {
        var absX = Math.abs(sizeX);
        if (absX < redBall.width) {
            if (sizeY < 0) {
                var absY = Math.abs(sizeY);
                if (absY < redBall.width) {
                    //code 小球移动  
                    blueBall[i].style.top = Math.ceil(Math.random()*400) + "px";
                    blueBall[i].style.left =  Math.ceil(Math.random()*800) + "px";
                }
                return;
            } else {
                if (absY < blueBall[i].width) {
                    //code 小球移动  
                }
                return;
            }
        }
        return;
    } else {
        if (absX < blueBall[i].width) {
            if (sizeY < 0) {
                var absY = Math.abs(sizeY);
                if (absY < redBall.width) {
                    // 小球移动
                }
                return;
            } else {
                if (absY < blueBall[i].width) {
                    // 小球移动
                }
                return;
            }
        }
        return;
    }

}