var IMONumber;
var IMOURL = "https://nextgen.lloydslistintelligence.com/vessels/?term=";
function IsIMOOk(isIMO){
	if (/^[0-9]*[1-9][0-9]*$/.test(isIMO) && (isIMO.length == 7)) {	//正则判断是否为正整数且长度为7
		return true;
	}
	else{
		//alert("IMO号码不正确");
		return false;
	}
}



document.getElementById('test1').onclick = function(){
	IMONumber = document.getElementById('IMO').value;
	if (IsIMOOk(IMONumber)){
		chrome.tabs.create({
			url: IMOURL + IMONumber
		});
	}

}
document.getElementById('test2').onclick = function(){
	IMONumber = document.getElementById('IMO').value;
	if (IsIMOOk(IMONumber)){
		chrome.tabs.create({
			url: IMOURL + IMONumber,
			active:false
		});
	}
}