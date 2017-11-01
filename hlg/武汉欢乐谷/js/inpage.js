// JavaScript Document
$(function(){
	$(".switch-con .switch-img").mouseover(function(){
		var imgIndex=$(this).index();
		var leftPosit;
		if(imgIndex==0)
		{
			leftPosit=0;
			$(".switch-con").css("background","#f58640");
			$(".parR").fadeIn(500).siblings(".widD").fadeOut(500);
			}
		if(imgIndex==2)
		{
			leftPosit=460;
			$(".switch-con").css("background","#772d8e");
			$(".widD").fadeIn(500).siblings(".parR").fadeOut(500);
			}
		$(this).removeClass("swicss").siblings(".switch-img").addClass("swicss");
		$(this).find("img").animate({opacity:1},1000);
		$(this).siblings(".switch-img").find("img").animate({opacity:0.7},1000);
		$(".js-contain").animate({"left":-leftPosit},1000);
		})
	})



$(function(){
	//初始化
	var n=0;
    var sw;
	var windWidth=$(window).width();
	var windWL=(windWidth-1000)/2;
	var scrollIndex=$(".proScroll .proSbox").length;
	for(var i=0;i<3;i++){$(".carCastle .proE-box a:eq("+i+")").css("left",15+i*320)}
	for(var i=0;i<3;i++){$(".Aerodyne .proE-box a:eq("+i+")").css("left",15+i*320)}
	for(var i=0;i<3;i++){$(".chiKingdom .proE-box a:eq("+i+")").css("left",15+i*320)}
	var moveWidrh=(1/12)*100;
	$(".proScroll .proSbox").css("width",moveWidrh+"%");
	$(".proExhibit .btn-left").css("top",450);
	$(".proExhibit .btn-left").addClass("btncss1").removeClass("btncss0");
	$(".proExhibit .btn-right").css("top",450);
	$(".proExhibit .btn-right").addClass("btncss1").removeClass("btncss0");
	showJs(0,windWL);
	$(".proExhibit .btn-right").click(function(){
		n = n >= scrollIndex-1 ? 0 : ++n;
        sw=n*100;
		$(".proContain").animate({"left":"-"+sw+"%"},500);
		$(".proE-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		showJs(n,windWL);
		})
	$(".proExhibit .btn-left").click(function(){
		n = n <= 0 ? scrollIndex-1 : --n;
        sw=n*100;
		$(".proContain").animate({"left":"-"+sw+"%"},500);
		$(".proE-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		showJs(n,windWL);
		})
	$(".proE-list span").click(function(){
		var indexS=$(this).index();
		n=indexS;
		sw=n*100;
		$(".proContain").animate({"left":"-"+sw+"%"},500);
		$(".proE-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
		showJs(n,windWL);
		})
	
})
function showJs(n,windWL){
	switch (n)
    {
      case 0:
	  moveJS4(0);
      break;
	  case 1:
      moveJS4(1);
      break;
	  
    }
	
	}
function moveJS4(x)
{
	if($(".proContain .proScon:eq("+x+")").css('display')!="none"){
	$(".proContain .proScon:eq("+x+")").hide();
	$(".proContain .proScon:eq("+x+") .monK-tag").css("top","-130px");
	$(".proContain .proScon:eq("+x+") .monK-eval").css("top","-100px");
	$(".proContain .proScon:eq("+x+") .monK-word").css("top","60px");
	$(".proContain .proScon:eq("+x+") .monK-back").css("top","-80px");
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink0").css("top","-10px");
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink1").css("top","110px");
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink2").css("top","110px");
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink3").css("top","230px");
	}
    $(".proContain .proScon:eq("+x+")").fadeIn(1000);
	$(".proContain .proScon:eq("+x+")").siblings(".proScon").hide();
	$(".proContain .proScon:eq("+x+") .monK-tag").animate({top:70},1200);
	$(".proContain .proScon:eq("+x+") .monK-eval").animate({top:100},900);
	$(".proContain .proScon:eq("+x+") .monK-word").animate({top:260},800);
	$(".proContain .proScon:eq("+x+") .monK-back").animate({top:120},1200);
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink0").animate({top:190},1100);
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink2").animate({top:310},900);
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink1").animate({top:310},1000);
	$(".proContain .proScon:eq("+x+") .monK-box .monK-blink3").animate({top:430},800);
	}

$(function(){
	var n=0;
	$(".monKing .look-more").click(function(){
		$(".monKing .show-imgs").show();
		n=0;
		$(".monKing .big-imgs img:eq("+n+")").fadeIn().siblings("img").fadeOut();
		$(".monKing .small-imgs img:eq("+n+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".monKing .monK-box a").click(function(){
		var linkIndex=$(this).index();
		n=linkIndex;
		$(".monKing .show-imgs").show();
		$(".monKing .big-imgs img:eq("+n+")").fadeIn().siblings("img").fadeOut();
		$(".monKing .small-imgs img:eq("+n+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".monKing .small-imgs img").click(function(){
		var imgIndex=$(this).index();
		$(this).addClass("imgcss").siblings("img").removeClass("imgcss");
		n=imgIndex;
		$(".monKing .big-imgs img:eq("+imgIndex+")").fadeIn().siblings("img").fadeOut();
		})
	$(".monKing .mclose").click(function(){
		$(".monKing .show-imgs").hide();
		})
	$(".monKing .mbtn-left").click(function(){
		if(n>0){
			n--;
			}
		else{
			n=4;
			}
		$(".monKing .big-imgs img:eq("+n+")").fadeIn().siblings("img").fadeOut();
		$(".monKing .small-imgs img:eq("+n+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".monKing .mbtn-right").click(function(){
		if(n<4){
			n++;
			}
		else{
			n=0;
			}
		$(".monKing .big-imgs img:eq("+n+")").fadeIn().siblings("img").fadeOut();
		$(".monKing .small-imgs img:eq("+n+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	
	})
$(function(){
	var m=0;
	$(".flySong .look-more").click(function(){
		$(".flySong .show-imgs").show();
		m=0;
		$(".flySong .big-imgs img:eq("+m+")").fadeIn().siblings("img").fadeOut();
		$(".flySong .small-imgs img:eq("+m+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".flySong .monK-box a").click(function(){
		var linkIndex=$(this).index();
		m=linkIndex;
		$(".flySong .show-imgs").show();
		$(".flySong .big-imgs img:eq("+m+")").fadeIn().siblings("img").fadeOut();
		$(".flySong .small-imgs img:eq("+m+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".flySong .small-imgs img").click(function(){
		$(this).addClass("imgcss").siblings("img").removeClass("imgcss");
		var imgIndex=$(this).index();
		m=imgIndex;
		$(".flySong .big-imgs img:eq("+m+")").fadeIn().siblings("img").fadeOut();
		})
	$(".flySong .mclose").click(function(){
		$(".flySong .show-imgs").hide();
		})
	$(".flySong .mbtn-left").click(function(){
		
		if(m>0){
			m--;
			}
		else{
			m=4;
			}
		$(".flySong .big-imgs img:eq("+m+")").fadeIn().siblings("img").fadeOut();
		$(".flySong .small-imgs img:eq("+m+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	$(".flySong .mbtn-right").click(function(){
		if(m<4){
			m++;
			}
		else{
			m=0;
			}
		$(".flySong .big-imgs img:eq("+m+")").fadeIn().siblings("img").fadeOut();
		$(".flySong .small-imgs img:eq("+m+")").addClass("imgcss").siblings("img").removeClass("imgcss");
		})
	
	})



















