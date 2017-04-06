
if(!(location.pathname =="/login" || location.pathname =="/dashboard/login")){
	var userInfo = JSON.parse($.cookie("userInfo"));

	var htmlStr = template("userInfoTpl", userInfo);

	$("#profile").html(htmlStr);

}