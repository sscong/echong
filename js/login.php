<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];
	
	//链接数据库
	$conn = new mysqli("localhost","root","","echong");
	
	//读取数据
	$sql = "select * from users where username = '$username' and password = '$password'";
	$result = $conn -> query($sql);
	if($result->num_rows == 0){
		echo "0";
	}else{
		echo "1";
	}
?>