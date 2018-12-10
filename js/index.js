
	var index = 0;
	var timer = 0;
	var list = $(".box li");
	var datas = $(".slider li");
	
	timer = setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if(index === list.length){
			index = 0
		}
		datas.eq(index).addClass("current").siblings().removeClass("current");
		list.eq(index).fadeIn(1000).siblings().fadeOut(1000)
	}
	datas.mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;		
	})
	datas.mouseleave(function(){
		timer = setInterval(autoPlay,2000)
	})
	
	
	
	
	
	
	
	


