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
	
	
	//获取cookie
	var str = $.cookie("cart");
	var obj = JSON.parse(str);
	var k = 0;
	for(var i in obj){
		k+=obj[i];
	}
	$(".cart_menu_tit").find("em").html(k);
	$(".cart_js_right").find("a span").html(k);
	var html = "";
	$.get("http://127.0.0.1:8020/echong/js/list.json",function(data){
		//生成商品列表
		for(var i in obj){
			html += "<tr><td><input type='checkbox' checked='checked'/></td><td><div class='img'><img src='../imgs/"+data[i].list[0]+"'/></div><div class='tit'>"+data[i].list[1]+"</div></td><td><div data-id='"+i+"'><span class='jian'>-</span><input type='text' value='"+obj[i]+"'/><span class='jia'>+</span></div></td><td>￥<span>"+data[i].list[3]*obj[i]+"</span></td><td class='dele'><span data-id='"+i+"'>[删除]</span></td></tr>";
		}
		$(".cart_list_con").get(0).innerHTML = html;
		
		//点击-，+数量改变
		/*$("table").on("click","tr td:eq(2) span:eq(0)",function(){
			console.log("aa");
			var n = parseInt($("tr td:eq(2)").find("input").val())-1;
			if(n>0){
				$("tr td:eq(2)").find("input").val(n);
				$("tr td:eq(3)").find("span").html((data[i].list[3]*n).toFixed(2));
			}
		});*/
		$(".jian").click(function(){
			var id = $(this).parent().attr("data-id");
			var n = parseInt($(this).siblings("input").val())-1;
			if(n>0){
				$(this).siblings("input").val(n);
				$(this).parent().parent().next().find("span").html((data[i].list[3]*n).toFixed(2));
				obj[id] = n;
			}else{
				obj[id] = 1;
			}
			
			var objStr = JSON.stringify(obj);
			$.cookie('cart',objStr,{expires: 7, path: '/'});
			
			//去结算按钮
			/*var str1 = $.cookie("cart");
			var obj1 = JSON.parse(str1);
			var a = 0;
			for(var i in obj){
				a+=obj[i];
			}
			$(".cart_js_right").find("a span").html(a);*/
		});
		/*$("tr td:eq(2)").find("span").eq(1).click(function(){
			var n = parseInt($("tr td:eq(2)").find("input").val())+1;
			$("tr td:eq(2)").find("input").val(n);
			$("tr td:eq(3)").find("span").html((data[i].list[3]*n).toFixed(2));
		});*/
		$(".jia").click(function(){
			var id = $(this).parent().attr("data-id");
			var n = parseInt($(this).siblings("input").val())+1;
			$(this).siblings("input").val(n);
			$(this).parent().parent().next().find("span").html((data[i].list[3]*n).toFixed(2));
			obj[id] = n;
			var objStr = JSON.stringify(obj);
			$.cookie('cart',objStr,{expires: 7, path: '/'});	
		});
		
		//删除按钮
		$(".dele span").click(function(){
			$("tbody").get(0).removeChild($(this).parent().get(0).parentNode);
			var id = $(this).attr("data-id");
			console.log(id);
			var str = $.cookie("cart");
			var obj = JSON.parse(str);
			delete obj[id];
			var objStr = JSON.stringify(obj);
			$.cookie('cart',objStr,{expires: 7, path: '/'});	
		});
		
		
	});
	
	
	
	
	
	//foot的特效
	$(".foot3_wzlist>span").click(function(){
		$(".foot3_wzlist_con .yin").slideToggle("normal");
	});
	
});
