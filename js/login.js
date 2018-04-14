function login(){
	var username = document.getElementById('thePage:siteTemplate:j_id27:username');
	username.value = "XXXXXX";
	var password = document.getElementById('thePage:siteTemplate:j_id27:password');
	password.value = "XXXXXX";
	var loginsubmit = document.getElementsByClassName("btn btn-block btn-primary");
	loginsubmit[0].click();
}

login();