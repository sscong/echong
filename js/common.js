
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
	
	//二级菜单调取数据
	$.get("js/nav.json",function(data){
		var html = template("Nav_r",data);
		$(".span_list2 ul").html(html);
	});
	//三级菜单调取数据
	$(".span_list2 ul").on("mouseenter","li",function(){
		$(".span_list3").show();
		var index = $(this).index();
		$.get("js/nav_data.json",function(data){
			var html = template("nav_s",data[index]);
			$(".span_list3").html(html);
		});
	});
	
	
	
	//nav的划过事件
	$(".nav_title_list span").hover(function(){
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
		
		
		//轮播图
		var timer = setInterval(move,3000);
		$(".slider").find("li").eq(0).animate({"opacity":1},1000,function(){
				$(this).find("img").transition({ scale: 1 },3000);
			}).siblings().css("opacity",0).find("img").css({ scale: 1.1});
		
		var index = 0;
		function move(){
			index++;
			if(index == $(".slider li").length){
				index = 0;
			}
			$(".slider-wrap .slider").find("li").eq(index).animate({"opacity":1},1000,function(){
				$(this).find("img").stop().transition({ scale: 1 },3000);
			}).siblings().css("opacity",0).find("img").css({ scale: 1.1});
			$(".slider-nav li").eq(index).addClass("active").siblings().removeClass("active");
		}
		$(".slider-nav li").hover(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			move();
		},function(){
			timer = setInterval(move,3000);
		});
		
		//划过侧边栏图片往左边移动
		$(".slide li").hover(function(){
			$(this).find("img").transition({ x: -20});
		},function(){
			$(this).find("img").transition({ x: 0});
		});
		
		//每日疯抢
	var m = 0;
	timers();
	var timer1 = setInterval(timers,1000);
	function timers(){
		var date = new Date();
		var hh = date.getHours();
		var t = 0;
		var arr = [8,10,13,15,19,21,23];
		if(hh<9){
			$("#qianggou .left p").html("距下一场开始还有");
			$(".time-tit span").eq(0).html("9:00");
			$("#qianggou .left .jinxing").html("");
			t = 8;
		}
		if(hh>=9 && hh<11){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("9:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 10;
		}
		if(hh>=11 && hh<14){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("11:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 13;
		}
		if(hh>=14 && hh<16){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("14:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 15;
		}
		if(hh>=16 && hh<20){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("16:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 19;
		}
		if(hh>=20 && hh<22){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("20:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 21;
		}
		if(hh>=22){
			$("#qianggou .left p").html("距本场结束");
			$(".time-tit span").eq(0).html("22:00");
			$("#qianggou .left .jinxing").html("进行中...");
			t = 23;
		}
		var chaT = Math.floor((date.setHours(t,59,59) - new Date())/1000);
		var chaH = Math.floor(chaT/60/60%24);
		var chaM = Math.floor(chaT/60%60);
		chaM = chaM<10?"0"+chaM:chaM;
		var chaS = Math.floor(chaT%60);
		chaS = chaS<10?"0"+chaS:chaS;
		$("#qianggou .left .time span").eq(1).html(chaH);
		$("#qianggou .left .time span").eq(2).html(String(chaM)[0]);
		$("#qianggou .left .time span").eq(3).html(String(chaM)[1]);
		$("#qianggou .left .time span").eq(4).html(String(chaS)[0]);
		$("#qianggou .left .time span").eq(5).html(String(chaS)[1]);
		
		//疯抢楼层右边的样式改变
		m = arr.indexOf(t); 
		//当前时间以后样式
		for(var i = m;i<$(".right-timer-list li").length-1;i++){
			$(".right-timer-list li").eq(i).find("p:eq(1)").html("即将开始");
			$(".right-timer-list li").eq(i).addClass("mselect").removeClass("jselect");
		}
		//当前时间
		$(".right-timer-list li").eq(m-1).addClass("select").siblings().removeClass("select");
		$(".right-timer-list li").eq(m-1).find("p:eq(1)").html("进行中");
		//当前时间之后是，已结束
		for(var i = 0;i<m-1;i++){
			$(".right-timer-list li").eq(i).find("p:eq(1)").html("已结束");
			$(".right-timer-list li").eq(i).addClass("jselect").removeClass("mselect");
		}
		
	}
	//默认显示当前时间的的商品
	var aaa = "";
	$.get("js/fengqiang.json",function(data){
		for(var i =0;i<data[m-1].list.length;i++){
			aaa += "<li><img src='"+data[m-1].list[i].list1[0]+"' /><span>限时抢购</span><p>"+data[m-1].list[i].list1[1]+"</p><div class='right-pic-price'>￥<span>"+data[m-1].list[i].list1[2]+"</span><span>"+data[m-1].list[i].list1[3]+"</span></div><div class='jindu'><span></span></div><input type='button' value='立即抢购'/></li>";
		}
		$(".right-pic-wrap .right-pic ul").get(0).innerHTML = aaa;
		
		new Fslider();
	});	
	//疯抢楼层调外部数据
	$("#qianggou .right-timer-list li").mouseover(function(){
		var i= $(this).index();
		$.get("js/fengqiang.json",function(data){
			//console.log(data);		
				var html = template("tabs",data[i]);
				$(".right-pic-wrap .right-pic ul").get(0).innerHTML = html;
				new Fslider();
		});	
	});
	//疯抢下面的左右滑动
	function Fslider(){
		var _this = this;
		this.list = $("#qianggou .right-pic ul");
		this.lists = this.list.find("li");
		this.list.width(this.lists.length*(this.lists.width()+40));
		console.log(this.list.width());
		$(".right-pic-wrap>a").eq(0).click(function(){
			if(_this.list.get(0).offsetLeft<0){
				_this.list.animate({"left":_this.list.get(0).offsetLeft+211},500);
			}
		});
		$(".right-pic-wrap>a").eq(1).click(function(){
			if(-_this.list.get(0).offsetLeft<(_this.lists.length-4)*211){
				_this.list.animate({"left":-(-_this.list.get(0).offsetLeft+211)},500);
			}
			
		});
	}
	
	//品牌街调外部数据
	$.get("js/pinpai.json",function(data){
		var html = template("tabs2",data);
		$("#pinpai .mid").get(0).innerHTML = html;
	});
	//品牌街轮播图
	var timer3 = setInterval(move2,3000);
	var i = 0;
	function move2(){
		i++;
		if(i==3){
			$("#pinpai .pin_list").animate({"left":0},500);
			i=0;
		}
		$("#pinpai .pin_list").animate({"left":-288*i},500);
		$("#pinpai .pin_nav li").eq(i).addClass("active").siblings().removeClass("active");
	}
	//划过li或者图片定时器停止
	$("#pinpai .pin_nav li").hover(function(){
		var index = $(this).index();
		clearInterval(timer3);
		i = index -1;
		move2();
	},function(){
		timer3 = setInterval(move2,3000);
	});
	$("#pinpai .pin_list li").hover(function(){
		var index = $(this).index();
		clearInterval(timer3);
		i = index -1;
		move2();
	},function(){
		timer3 = setInterval(move2,3000);
	});
	
	//主楼层调数据
	$(".main:eq(0) .nav li").mousemove(function(){
		//标签样式改变
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		if(i>=1){
			$(".main:eq(0) .imgbox2").css("display","block");
			$(".main:eq(0) .imgbox").css("display","none");
			$.get("js/gl.json",function(data){
				var html = template("tabs3",data[i-1]);
				$(".main:eq(0) .imgbox2 ul").get(0).innerHTML = html;
			});
		}
	});
	$(".main:eq(0) .nav li").eq(0).mousemove(function(){
		$(".main:eq(0) .imgbox").css("display","block");
		$(".main:eq(0) .imgbox2").css("display","none");
	});
	
	$(".main:eq(1) .nav li").mousemove(function(){
		//标签样式改变
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		if(i>=1){
			$(".main:eq(1) .imgbox2").css("display","block");
			$(".main:eq(1) .imgbox").css("display","none");
			$.get("js/gl.json",function(data){
				var html = template("tabs4",data[i-1]);
				$(".main:eq(1) .imgbox2 ul").get(0).innerHTML = html;
			});
		}
	});
	$(".main:eq(1) .nav li").eq(0).mousemove(function(){
		$(".main:eq(1) .imgbox").css("display","block");
		$(".main:eq(1) .imgbox2").css("display","none");
	});
	$(".main:eq(2) .nav li").mousemove(function(){
		//标签样式改变
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		if(i>=1){
			$(".main:eq(2) .imgbox2").css("display","block");
			$(".main:eq(2) .imgbox").css("display","none");
			$.get("js/gl.json",function(data){
				var html = template("tabs5",data[i-1]);
				$(".main:eq(2) .imgbox2 ul").get(0).innerHTML = html;
			});
		}
	});
	$(".main:eq(2) .nav li").eq(0).mousemove(function(){
		$(".main:eq(2) .imgbox").css("display","block");
		$(".main:eq(2) .imgbox2").css("display","none");
	});
	
	
	//e宠头条轮播图
	function Eslider(){
		$(".toutiao_con li:eq(0)").clone(true).appendTo($(".toutiao_con ul"));
		$(".toutiao_con li:eq(1)").clone(true).appendTo($(".toutiao_con ul"));
		var timer4 = setInterval(move,3000);
		var j = 0
		function move(){
			j++;
			if(j>=$(".toutiao_con li").length-1){
				j = 0;
				$(".toutiao_con ul").css("top",0);
			}
			$(".toutiao_con ul").animate({"top":-j*152},1000);
		}
		$(".toutiao_con li").hover(function(){
			clearInterval(timer4);
		},function(){
			timer4 = setInterval(move,3000);
		});
	}
	Eslider();
	
	//e宠口碑轮播图
	var timer5 = setInterval(move3,3000);
	var k = 0;
	function move3(){
		k++;
		if(k==3){
			$("#koubei .slider").animate({"left":0},500);
			k=0;
		}
		$("#koubei .slider").animate({"left":-920*i},500);
		$("#koubei .kous_nav li").eq(k).addClass("on").siblings().removeClass("on");
	}
	
	//e宠口碑，左右滑动
	function Kslider(){
		var _this = this;
		this.list = $(".gong_pic_con ul");
		this.lists = this.list.find("li");
		this.list.width(this.lists.length*(this.lists.width()+15));
		$(".gong_pic>span").eq(0).click(function(){
			if(_this.list.get(0).offsetLeft<0){
				_this.list.animate({"left":_this.list.get(0).offsetLeft+_this.lists.width()+15},500);
			}
		});
		$(".gong_pic>span").eq(1).click(function(){
			console.log(_this.list.get(0).offsetLeft);
			if(-_this.list.get(0).offsetLeft<(_this.lists.length-5)*(_this.lists.width()+15)){
				_this.list.animate({"left":-(-_this.list.get(0).offsetLeft+_this.lists.width()+15)},500);
			}
			
		});
	}
	new Kslider();
	
	//公益轮播图
	function Gslider(){
		$(".gong_g li:eq(0)").clone(true).appendTo($(".gong_g ul"));
		var timer5 = setInterval(move,1000);
		var l = 0
		function move(){
			l++;
			if(l>=$(".gong_g li").length){
				l = 0;
				$(".gong_g ul").css("top",0);
			}
			$(".gong_g ul").animate({"top":-l*52},1000);
		}
		$(".gong_g li").hover(function(){
			clearInterval(timer5);
		},function(){
			timer5 = setInterval(move,1000);
		});
	}
	Gslider();
	
	//foot的特效
	$(".foot3_wzlist>span").click(function(){
		$(".foot3_wzlist_con .yin").slideToggle("normal");
	});
});
