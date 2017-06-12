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
	
	$(".nav_title_list").mouseenter(function(){
		$(".span_list2").show();
		$(".nav_rrr").show();
		console.log("aa");
	});
	$(".span_list2").mouseenter(function(){
			$(".span_list3").show();
			console.log("bb");
		});
	
	$(".span_list3").mouseleave(function(){
				$(".span_list3").hide();
				console.log("cc");
			});
			$(".nav_rrr").mouseleave(function(){
				$(".nav_rrr").hide();
				console.log("dd");
			});
	
	
	
	
	//nav的划过事件
	/*$(".nav_title_list span").hover(function(){
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
	});*/
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
		
		//TA公益品牌商的轮播图
		function TAslider(){
			/*$(".gong_pic li:eq(0)").clone(true).appendTo($(".gong_pic ul"));
			$(".gong_pic li:eq(1)").clone(true).appendTo($(".gong_pic ul"));
			$(".gong_pic li:eq(2)").clone(true).appendTo($(".gong_pic ul"));
			var timer7 = setInterval(move,3000);
			var l = 0
			function move(){
				l++;
				if(l>=$(".gong_pic li").length-2){
					l = 0;
					$(".gong_pic ul").css("top",0);
				}
				$(".gong_pic ul").animate({"top":-l*74},500);
			}
			$(".gong_pic li").hover(function(){
				clearInterval(timer7);
			},function(){
				timer7 = setInterval(move,3000);
			});*/
			
			var timer7 = setInterval(move,3000);
			function move(){
				$('.gong_pic ul').animate({"top":-74},1000,function(){
					$('.gong_pic li:first').remove().clone(true).appendTo('.gong_pic ul').parent('.gong_pic ul').css('top',0);
				});
			}
		}
		TAslider();
		
		//滚动条滚动到一定距离之后，排序列表一直固定到页面顶部
		$(window).scroll(function(){
			console.log($(".right .list").get(0).offsetTop);
			if($(document).scrollTop()>=235){
				$(".right .list").css({"position":"fixed","top":0});
				console.log("nn");
			}else{
				$(".right .list").css({"position":"static"});
				console.log("mm");
			}
		});
		
		
		//商品列表
		$.get("http://127.0.0.1:8020/echong/js/list.json",function(data){
			//生成商品列表
			var arr = [];
			for(let i in data){
				arr.push(i);	
			}
			var html = "";
			for(var i = 0;i<8;i++){
				html += "<li><a href='xiangq.html?data-id="+data[arr[i]].id+"'><div class='con'><div class='img'><img src='../imgs/"+data[arr[i]].list[0]+"'/></div><ul class='img_list'><li><img src='../imgs/"+data[arr[i]].list[0]+"'></li></ul><a href='#' class='tit'><span>"+data[arr[i]].list[1]+"</span></a><div class='price'><em>"+data[arr[i]].list[2]+"</em><span>"+data[arr[i]].list[3]+"</span><i>"+data[arr[i]].list[3]+"</i></div><div class='ys'><span>已售<em>578</em>袋</span><span><em>146</em>人互动</span><span><em>东部大仓</em>发货</span></div></div><div class='bt'><a href='#'><span>收藏</span></a><a href='javascript:;' data-id='"+data[arr[i]].id+"'><span>加入购物车</span></a></div></a></li>";
			}
			$("section .list_con").get(0).innerHTML = html;
			$(".page_list a").click(function(){
				var i = $(".page_list a.active").index(); //.active的下标
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				if(index==0){
					var html = "";
					for(var i = 0;i<8;i++){  
						html += "<li><a href='xiangq.html?data-id="+data[arr[i]].id+"'><div class='con'><div class='img'><img src='../imgs/"+data[arr[i]].list[0]+"'/></div><ul class='img_list'><li><img src='../imgs/"+data[arr[i]].list[0]+"'></li></ul><a href='#' class='tit'><span>"+data[arr[i]].list[1]+"</span></a><div class='price'><em>"+data[arr[i]].list[2]+"</em><span>"+data[arr[i]].list[3]+"</span><i>"+data[arr[i]].list[3]+"</i></div><div class='ys'><span>已售<em>578</em>袋</span><span><em>146</em>人互动</span><span><em>东部大仓</em>发货</span></div></div><div class='bt'><a href='#'><span>收藏</span></a><a href='#' data-id='"+data[arr[i]].id+"'><span>加入购物车</span></a></div></a></li>";
					}
					$("section .list_con").get(0).innerHTML = html;
				}else if(index>=2&&index<=$(".page_list a").length-2){
					var html = "";
					for(var i =(index-2)*8;i<Math.min((index-1)*8,arr.length);i++){
						console.log(data[arr[i]],data[arr[i]].id);
						html += "<li><a href='xiangq.html?data-id="+data[arr[i]].id+"'><div class='con'><div class='img'><img src='../imgs/"+data[arr[i]].list[0]+"'/></div><ul class='img_list'><li><img src='../imgs/"+data[arr[i]].list[0]+"'></li></ul><a href='#' class='tit'><span>"+data[arr[i]].list[1]+"</span></a><div class='price'><em>"+data[arr[i]].list[2]+"</em><span>"+data[arr[i]].list[3]+"</span><i>"+data[arr[i]].list[3]+"</i></div><div class='ys'><span>已售<em>578</em>袋</span><span><em>146</em>人互动</span><span><em>东部大仓</em>发货</span></div></div><div class='bt'><a href='#'><span>收藏</span></a><a href='#' data-id='"+data[arr[i]].id+"'><span>加入购物车</span></a></div></a></li>";
					}
					$("section .list_con").get(0).innerHTML = html;
				}
				
				//设置cookie
			var str = $.cookie("cart");
			var obj = str?JSON.parse(str):{};
			var num = 0;
			console.log(str);
			for(var i in obj){
				num +=obj[i];
			}
			$("#header_logo .cart span").get(0).innerHTML = num;
			$(".list_con li").find(".bt a:eq(1)").click(function(){
				var id = $(this).attr("data-id");
				obj[id] = obj[id]?++obj[id]: 1;
				console.log(obj);
				var objToStr = JSON.stringify(obj);
				$.cookie('cart',objToStr,{expires: 7, path: '/'});
				$.cookie("cart");
				console.log($.cookie("cart"));
				$("#header_logo .cart span").get(0).innerHTML = ++num;
			});
			$("#header_logo .cart").click(function(){
				location.assign("../html/cart.html");
			});
			});
			
			
			//设置cookie
			var str = $.cookie("cart");
			var obj = str?JSON.parse(str):{};
			var num = 0;
			console.log(str);
			for(var i in obj){
				num +=obj[i];
			}
			$("#header_logo .cart span").get(0).innerHTML = num;
			$(".list_con li").find(".bt a:eq(1)").click(function(){
				var id = $(this).attr("data-id");
				obj[id] = obj[id]?++obj[id]: 1;
				console.log(obj);
				var objToStr = JSON.stringify(obj);
				$.cookie('cart',objToStr,{expires: 7, path: '/'});
				$.cookie("cart");
				console.log($.cookie("cart"));
				$("#header_logo .cart span").get(0).innerHTML = ++num;
			});
			$("#header_logo .cart").click(function(){
				location.assign("../html/cart.html");
			});
			
		});
		
		
		
		//foot的特效
	$(".foot3_wzlist>span").click(function(){
		$(".foot3_wzlist_con .yin").slideToggle("normal");
	});
	
	
});
