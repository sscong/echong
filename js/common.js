
$(function(){
	 //引入header头部,load是异步的，所以代码要写到回调函数里面
	$("#header_wrap").load("html/header.html",function(){
		//头部的划过事件
		function Rotate(ele){
			ele.on("mouseover",function(){
				$(this).find("i").rotate({
					duration:500,
					animateTo: 180
				});
				$(this).find("div").css("display","block");
				$(this).on("mouseout",function(){
					$(this).find("i").rotate({
						duration:100,
						animateTo: 0
					});
					$(this).find("div").css("display","none");
				});
			});
		}
		//头部的3个划过事件
		Rotate($(".collect"));
		Rotate($(".myE"));
		Rotate($(".header_t12"));
	});
	
	
	//引入logo和nav文件
	$("#ln_wrap").load("html/logo&nav.html",function(){
		//nav的标题划过事件
		$.each($(".nav_title span"),function(i){
			$(".nav_title span").eq(i).mouseover(function(){
				$(this).addClass("hov").siblings().removeClass("hov");
				$(this).find("b").rotate({
					duration:500,
					animateTo: 180
				});
			});
			$(".nav_title span").eq(i).mouseout(function(){
				$(this).find("b").rotate({
					duration:100,
					animateTo: 0
				});
			});
		});
		//划过li之后的事件
		$(".nav_title span li").mouseover(function(){
			$(this).css("border-bottom","1px solid #1f9118");
			$(this).find("h3").css("border-bottom","none");
			$(this).find("p").css("display","none");
		});
		$(".nav_title span li").mouseout(function(){
			$(this).css("border-bottom","none");
			$(this).find("h3").css("border-bottom","1px dashed #ddd");
			$(this).find("p").css("display","inline-block");
		});
	});
});
