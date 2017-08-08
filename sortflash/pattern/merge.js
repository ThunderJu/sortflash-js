document.write("<script language=javascript src='./pattern/startMove2.js'></script>");
var timer = null;
var timer1 = null;
function merge(num1, left, right, obj){
	var re = [];
	while(left.length>0&&right.length>0){
		if(left[0]<right[0]){
			re.push(left.shift());
		}
		else{
			var index = new Array();
			var index1 = new Array();
			
			for (var i = 0; i < num1.length; i++) {
				if (left[0]==num1[i]) {
					index.push(i);
				}
				if(right[0]==num1[i]){
					index1.push(i);
				}
			}
			var i = 0;

			startMove(obj[index[i]], {left:parseInt(getStyle(obj[index[i]], 'left'))+50});
			startMove(obj[index1[i]], {top: 70}, function(){
				startMove(obj[index1[i]], {left:parseInt(getStyle(obj[index1[i]], 'left'))-(index1[i]-index[i])*70},function(){
					startMove(obj[index1[i]], {top:100});
				});
			});		
			re.push(right.shift());
		}
	}
		
	return re.concat(left).concat(right);
}

function mergeSort(num1, num, obj){
	if(num.length==1){
		return num;
	}
	else{
		var mid = Math.floor(num.length/2);
		var left = num.slice(0, mid);
		var right = num.slice(mid);
	}
	return merge(num1, mergeSort(num1, left, obj), mergeSort(num1, right, obj), obj);
}