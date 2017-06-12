$(function(){
	//侧边栏
	$("#sider .shang li:eq(3)").hover(function(){
		console.log("aa");
		$(this).find("a").animate({"right":35},500);
	},function(){
		$(this).find("a").animate({"right":50},500);
	});
	$("#sider .xia li:eq(1)").hover(function(){
		console.log("aa");
		$(this).find("span").animate({"right":35},500);
	},function(){
		$(this).find("span").animate({"right":50},500);
	});
	$("#sider .xia li:eq(1)").click(function(){
		
		$("body,html").animate({scrollTop:0},1000);
	});
	 
	 
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
	
	
	//nav的划过事件
	$(".nav_title_list span").hover(function(){
		$(".span_list2").css("display","block");
		var index = $(this).index();
		$(this).addClass("hov").siblings().removeClass("hov");
		$(this).find("b").css("background-position-x",-1).end().siblings().find("b").css("background-position-x",-17);
		$(this).find("b").rotate({
						duration:500,
						animateTo: 180
				});
		$(".span_list2 .span_list").eq(index).show().siblings().hide();
	},function(){
		$(this).find("b").rotate({
						duration:100,
						animateTo: 0
					});
	});
	$("body").click(function(e){
		var e = e.target;
	});
	//nav 划过骨头选择一圈
	$(".nav_list li").hover(function(){
		if(!($(this).index() == 1)){
			$(this).find("b").rotate({
				duration:300,
				animateTo:360
			});
		}},function(){
			$(this).find("b").rotate({
				duration:0,
				animateTo:0
			});
		}
	);
		
		//划过li之后的事件
		$(".span_list>ul>li").mouseover(function(){
			$(this).css({"border-bottom":"1px solid #1f9118","border-top":"1px solid #1f9118","left":"1px"});
			$(this).find("h3").css("border-bottom","none");
			$(this).find("p").hide();
			$(".span_list3").show();
		});
		$(".span_list>ul>li").mouseout(function(){
			$(this).css({"border-bottom":"none","border-top":"none","left":"0"});
			$(this).find("h3").css("border-bottom","1px dashed #ddd");
			$(this).find("p").show();
			$(".span_list3").hide();
		});
		$(".span_list3").mouseover(function(){
			$(this).show();
		});
		$(".span_list3").mouseout(function(){
			$(this).hide();
		});
		
		//取数据
		var idStr = location.search;
		var id = idStr.split("=")[1];
		$.get("http://127.0.0.1:8020/echong/js/list.json",function(data){
			var oLi = document.createElement("li");
			var Img = document.createElement("img");
			var List = $(".pic_min ul").get(0).childNodes[0];
			Img.src = '../imgs/'+data[id].list[0];
			oLi.appendChild(Img);
			$(".pic_min ul").get(0).insertBefore(oLi,List);
			
			
			//放大镜
			$(".pic_min li").mouseover(function(){
				$(".pic_mid img").get(0).src = $(this).find("img").get(0).src;
				$(".pic_max img").get(0).src = $(this).find("img").get(0).src;
			});
			$(".pic_mid .pic_mid_wrap").mouseout(function(){
				$(".pic_mid_wrap .fdj").fadeOut();
				$(".pic_max").fadeOut();
			})
			$(".pic_mid .pic_mid_wrap").mousemove(function(e){
				$(".pic_mid_wrap .fdj").fadeIn().stop();
				$(".pic_max").fadeIn().stop();
				var _x = e.pageX - $(".pic").get(0).offsetLeft-$(".pic_mid_wrap").get(0).offsetLeft - $(".fdj").get(0).offsetWidth/2;
				var _y = e.pageY - $(".pic").get(0).offsetTop - $(".fdj").get(0).offsetHeight/2;
				if(_x<=0){
					_x = 0;
				}
				if(_x>=$(".pic_mid_wrap").get(0).offsetWidth-$(".fdj").get(0).offsetWidth){
					_x = $(".pic_mid_wrap").get(0).offsetWidth-$(".fdj").get(0).offsetWidth;
				}
				if(_y<=0){
					_y = 0;
				}
				if(_y>=$(".pic_mid_wrap").get(0).offsetHeight-$(".fdj").get(0).offsetHeight){
					_y=$(".pic_mid_wrap").get(0).offsetHeight-$(".fdj").get(0).offsetHeight;
				}
				$(".fdj").css({"left":_x,"top":_y});
				$(".pic_max img").css({"left":-$(".pic_max img").get(0).offsetWidth/$(".pic_mid_wrap img").get(0).offsetWidth*_x,"top":-$(".pic_max img").get(0).offsetHeight/$(".pic_mid_wrap img").get(0).offsetHeight*_y});
			});
			//点击列表移动
			$(".pic_min p").eq(0).click(function(){
				if($(".pic_min_slider ul").get(0).offsetLeft<0){
					$(".pic_min_slider ul").animate({"left":$(".pic_min_slider ul").get(0).offsetLeft+$(".pic_min_slider li").get(0).offsetWidth+10});
				}
				
			});
			$(".pic_min p").eq(1).click(function(){
				if(-$(".pic_min_slider ul").get(0).offsetLeft<$(".pic_min_slider ul").get(0).offsetWidth-$(".pic_min_slider").get(0).offsetWidth){
					$(".pic_min_slider ul").animate({"left":$(".pic_min_slider ul").get(0).offsetLeft-$(".pic_min_slider li").get(0).offsetWidth-10});
				}
				
			});
			
			//点击-，+数量改变
			$(".rom_num").find("span").eq(0).click(function(){
				var n = parseInt($(".rom_num").find("input").val())-1;
				if(n>0){
					$(".rom_num").find("input").val(n);
				}
			});
			$(".rom_num").find("span").eq(1).click(function(){
				var n = parseInt($(".rom_num").find("input").val())+1;
				$(".rom_num").find("input").val(n);
			});
			
			
			//购物车
			var str = $.cookie("cart");
			var obj = str?JSON.parse(str):{};
			var num = 0;
			console.log(str);
			for(var i in obj){
				num +=obj[i];
			}
			$("#header_logo .cart span").get(0).innerHTML = num;
			//点击加入购物车
			$(".xinx .jg input").click(function(){
				var m = parseInt($(".rom_num").find("input").val());
				/*obj[id] = obj[id]?++obj[id]: 1;*/
				if(obj[id]){
					obj[id] = m+obj[id];
				}else{
					obj[id] = m;
				}
				console.log(obj[id],obj);
				var objToStr = JSON.stringify(obj);
				$.cookie('cart',objToStr,{expires: 7, path: '/'});
				num += m;
				$("#header_logo .cart span").get(0).innerHTML = num;
			});
			
			//点击购物车跳转到购物车页面
			$("#header_logo .cart").click(function(){
				location.assign("../html/cart.html");
			});
			
			
			
		});
		
		
		
		
		
		
		//foot的特效
	$(".foot3_wzlist>span").click(function(){
		$(".foot3_wzlist_con .yin").slideToggle("normal");
	});
});
