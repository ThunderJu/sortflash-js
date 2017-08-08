document.write("<script language=javascript src='./pattern/startMove2.js'></script>");
	var timer = null;
	var timer1 = null;
	function insertion(num, obj){
		var i = 0;
		var insert;
		timer = setInterval(function (){
			
			if (i<num.length-1) {
				insert = num[i+1];
				minindex = i+1;
				numindex = i+1;
				var j = i;
				timer1 = setInterval(function (){
					if(j>=0){
						if (insert<num[j]) {
							numindex = j;
							startMove(obj[minindex], {top:130}, function(){
								
								startMove(obj[minindex], {left:parseInt(getStyle(obj[minindex], 'left'))-50}, function(){
									startMove(obj[minindex], {top:100});
								});
							});
							startMove(obj[numindex], {top:70}, function(){
								startMove(obj[numindex], {left:parseInt(getStyle(obj[numindex], 'left'))+50}, function(){
									startMove(obj[numindex], {top:100});
								});
							});
							num[j+1] = num[j];
							num[numindex] = insert;
						}
						j--
					}
					else{
						clearInterval(timer1);
					}
				},2000);
				i++;
			}
			else{
				clearInterval(timer);
			}
		},7000);
	}