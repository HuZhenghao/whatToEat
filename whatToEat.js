var food = ["拉面","小米姑娘","干锅","八元三菜","水煮鱼","米粉","炒饭","煲仔饭","鸡汤粉","麻辣烫","回家吃","烫饭","鸡排饭","麻辣香锅","汤","饺子","鸡丁","黄焖鸡","烧鹅饭","清禾","北门烤肉饭"];
var button = document.getElementById("button");
button.onclick = function(){
	var num = Math.floor(Math.random()*22);
	document.getElementById("display").innerHTML = food[num];
}