document.write("<script language=javascript src='./pattern/startMove2.js'></script>");
	var timer = null;
	var timer1 = null;
	function randomNum(num){
		var range = 100-0;
		var rand = Math.random();
		return (0+Math.round(rand*range));
	}

	function buffer(num, obj){
		var i=0;
		timer = setInterval(function(){
			if (i<num.length-1) {
				buffer1(i, obj, num);
				i++;
			}
			else{
				clearInterval(timer);
			}
		},9000);
	}	

	function buffer1(i, obj, num){
		var j=0;
		timer1 = setInterval(function(){
			if(j<num.length-i-1){
				bufferPattern(j, obj, num);
				j++;
			}
			else{
				clearInterval(timer1);
			}
		},2000);
	}
	function bufferPattern(j, obj, num){
		if (num[j]>num[j+1]) {
			var m = obj[j].index;
			obj[j].index = obj[j+1].index;
			obj[j+1].index = m;
			startMove(obj[obj[j].index], {top:70}, function(){
				startMove(obj[obj[j].index], {left:parseInt(getStyle(obj[obj[j].index], 'left'))-50}, function(){
					startMove(obj[obj[j].index], {top:100});
				});
			});
			startMove(obj[obj[j+1].index], {top:130}, function(){
				startMove(obj[obj[j+1].index], {left:parseInt(getStyle(obj[obj[j+1].index], 'left'))+50}, function(){
					startMove(obj[obj[j+1].index], {top:100});
				});
			});
			var n = num[j];
			num[j] = num[j+1];
			num[j+1] = n;
		}

	}