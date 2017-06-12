<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];
	$tele = $_POST["tele"];
	//连接数据库
	$conn = new mysqli("localhost","root","","echong");
	//读取数据
	$sql = "SELECT * FROM users where username = '$username'";
	$result = $conn->query($sql);
	if($result->num_rows == 0){
		echo "1";
		$sql = "insert into users (username,password,tele) values ('$username','$password','$tele')";
		$conn->query($sql);
	}else{
		echo "0";
	}
	
?>