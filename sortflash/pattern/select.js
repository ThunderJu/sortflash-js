document.write("<script language=javascript src='./pattern/startMove2.js'></script>");
var timer = null;
	var timer1 = null;
	function select(num, obj){
		var i = 0;
		var minIndex;
		var min;
		timer = setInterval(function (){
			minIndex = i;
			min = num[i];
			if(i<num.length-1){
				selectSort(i, min, minIndex, num, obj);
				i++;
			}
			else{
				clearInterval(timer);
			}
		},5000);

	}

	function selectSort(i, min, minIndex, num, obj){
		for (var j = i+1; j < num.length; j++) {
			if (num[j]<min) {
				min = num[j];
				minIndex = j;
			}
		}
		if(minIndex!=i){
			var m = obj[i].index;
			obj[i].index = obj[minIndex].index;
			obj[minIndex].index = m;

			startMove(obj[obj[minIndex].index], {top:70}, function(){
				startMove(obj[obj[minIndex].index], {left:parseInt(getStyle(obj[obj[minIndex].index], 'left'))+Math.abs((obj[i].index-obj[minIndex].index))*50}, function(){
					startMove(obj[obj[minIndex].index], {top:100});
				});
			});
							
			startMove(obj[obj[i].index], {top:130}, function(){
				startMove(obj[obj[i].index], {left:parseInt(getStyle(obj[obj[i].index], 'left'))-Math.abs((obj[i].index-obj[minIndex].index)*50)}, function(){
					startMove(obj[obj[i].index], {top:100});
				});
			});	

			var n = num[i];
			num[i] = num[minIndex];
			num[minIndex] = n;
		}
	}
