$(function(){
	//点击普通登录动态码登录进行切换
	$("form .tit span").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".con_wrap .con1").eq(index).show().siblings().hide();
	});
	//判断用户名和密码是否匹配
	$(".btn").click(function(){
		$.post("http://127.0.0.1/echong/js/login.php",{"username":$(".form_con .username input").val(),"password":$(".form_con .password input").val()},function(data){
			console.log(data);
			if(data == 0){
				alert("您的用户名或密码错误，请重新输入");
			}else{
				location.replace("../index.html");
			}
		});
	});
});
