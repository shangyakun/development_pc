var utils = {};
utils.getCookie = function(objname){
	var cookie = document.cookie.replace(/\s/g,"");
	var arrstr = cookie.split(";");
	for(var i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i].split("=");
		if(temp[0] == objname) {
			return unescape(temp[1])
		}	
	};
};
// export default utils;
