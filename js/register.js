$(function(){
	//文本框失去焦点时p元素显示
	/*$("[type='text']").blur(function(){
		$(this).siblings("p").show();
	});*/
	//文本框得到焦点时p元素隐藏
	$("[type='text']").focus(function(){
		$(this).siblings("p").hide();
	});
	//判断手机号格式是否正确
	var tele = 0;
	$(".tele input").change(function(){
		tele = $(this).val();
		var reg = /(^1[3-9]\d{9}$)/;
		if(tele.length!=11){
			$(".tele input").siblings("p").show();
			$(".tele input").siblings(".success").hide();
			$(".tele input").siblings("span").hide();
		}else{
			if(!reg.test(tele)){
				$(".tele input").siblings("span").show();
				$(".tele input").siblings(".success").hide();
			}else{
				$(".tele input").siblings("p").hide();
				$(".tele input").siblings(".success").show();
				
			}
		}
	});
	//判断用户名是否正确
	var username = 0;
	$(".username input").change(function(){
		var reg = /([\u4e00-\u9fa5\w]{4,20})/;
		userName = $(".username input").val();
		if(username.length<4 || username.length>20){
			$(".username input").siblings("p").show();
			$(".username input").siblings(".success").hide();
			$(".username input").siblings("span").hide();
		}else{
			if(!reg.test(userName)){
				$(".username input").siblings("span").show();
				$(".username input").siblings(".success").hide();
			}else{
				$(".username input").siblings("p").hide();
				$(".username input").siblings(".success").show();
				$(".username input").siblings("strong").hide();
				
			}
		}
		
		//判断用户名是否已经注册
		/*$.post("http://127.0.0.1/echong/js/register.php",{"username":$(".username input").val(),"password":$(".password input").val(),"tele":$(".tele input").val()},function(data){
			if(data == 0){
				$(".username input").siblings("strong").show();
				$(".username input").siblings(".success").hide();
			}
	
		});*/
	});
	
	//判断密码格式是否正确
	var password = 0;
	$(".password input").change(function(){
		var reg = /([\u4e00-\u9fa5\w]{8,20})/;
		password = $(".password input").val();
		if(password.length<8 || password.length>20){
			$(".password input").siblings("p").show();
			$(".password input").siblings(".success").hide();
		}else{
			if(!reg.test(password)){
				$(".password input").siblings(".success").hide();
			}else{
				$(".password input").siblings("p").hide();
				$(".password input").siblings(".success").show();
				
			}
		}
	});
	//判断密码强度
	/*var t = 0;
	$('.password input').keyup(function(e) {
		 var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g");
		 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$","g");
		 var enoughRegex = new RegExp("(?=.{6,}).*","g");
		 
		 if (enoughRegex.test($(this).val())) {
		 	t = 0;
		 } else if (strongRegex.test($(this).val())) {
			 t=2;
		 } else if (mediumRegex.test($(this).val())) {
			 t=1;
		 } else {
			 $('#passstrength').className = 'error';
			 $('#passstrength').html('Weak!');
		 }
		 console.log(t);
		 return true;
		 
	});*/
	$(".rPassword input").change(function(){
		var rPvalue = $(this).val();
		if(rPvalue.length == 0){
			$(".rPassword input").siblings("p").show();
			$(".rPassword input").siblings("span").hide();
			$(".rPassword input").siblings(".success").hide();
		}else{
			if(!(rPvalue == password)){
				$(".rPassword input").siblings("span").show();
				$(".rPassword input").siblings("p").hide();
				
			}else{
				$(".rPassword input").siblings(".success").show();
				$(".rPassword input").siblings("p").hide();
				$(".rPassword input").siblings("span").hide();
			}
		}
		
	});
	
	//添加数据到数据库
	$("#btn").click(function(){
		console.log($(".password input").val());
			$.post("http://127.0.0.1/echong/js/register.php",{"username":$(".username input").val(),"password":$(".password input").val(),"tele":$(".tele input").val()},function(data){
				if(data == 1){
					location.replace("http://127.0.0.1/echong/index.html");
				}else{
					$(".username input").siblings("strong").show();
					$(".username input").siblings(".success").hide();
				}
				console.log(data);
		
			});
	});
	
	
});
