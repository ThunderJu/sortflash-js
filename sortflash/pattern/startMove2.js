function getStyle(obj, attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj, json, fn) {
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		var bStop = true;
		for(var attr in json){
			var oAttr = 0;
			if (attr=='opacity') {
				oAttr = parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else{
				oAttr = parseInt(getStyle(obj, attr));	
			}

			var iSpeed = (json[attr] - oAttr)/5;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			if(oAttr!=json[attr]){
				bStop = false;
			}
			if (attr=='opacity') {
				obj.style.filter = 'apcha(opacity:'+oAttr+iSpeed+')';
				obj.style.opacity = (oAttr+iSpeed)/100;
			}
			else{
				obj.style[attr] = oAttr+iSpeed+'px';
			}
		}
		if (bStop) {
			if (oAttr==json[attr]) {
				clearInterval(obj.timer);
				if (fn) {
					fn();
				}
			}
		}
	},60);
}