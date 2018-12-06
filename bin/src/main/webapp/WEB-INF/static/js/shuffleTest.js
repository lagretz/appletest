function run(){
	var title = "";
	alert("in function");
	for(i = 0; i < 10; i++){
		title = pickNext();
		//alert("Title:  " + title.toString());
		/*alert("title: " + misery[0]);
		alert("Counter " + misery[1]);*/
		if(title.toString() == "Misery"){
			alert(title +"\n Counter:  " + misery[1] + "\n Average" + average.toString());
		}
		
		if(title.toString() == "Gunpowder & Lead"){
			alert(title +"\n Counter:  " + gun[1] + "\n Average" + average.toString());
		}
		
		if(title.toString() == "Love Song"){
			alert(title +"\n Counter:  " + love[1] + "\n Average" + average.toString());
		}
	
		if(title.toString() == "Taos"){
			alert(title +"\n Counter:  " + taos[1] + "\n Average" + average.toString());
		}
		
		if(title.toString() == "Move It"){
			alert(title +"\n Counter:  " + move[1] + "\n Average" + average.toString());
		}
	
		if(title.toString() == "Quando, Quando, Quando"){
			alert(title +"\n Counter:  " + quando[1] + "\n Average" + average.toString());
		}
		
		if(title.toString() == "Hey, Soul Sister"){
			alert(title +"\n Counter:  " + sister[1] + "\n Average" + average.toString());
		}
	
		if(title.toString() == "So What"){
			alert(title +"\n Counter:  " + what[1] + "\n Average" + average.toString());
		}
	
		if(title.toString() == "Get the Party Started"){
			alert(title +"\n Counter:  " + party[1] + "\n Average" + average.toString());
		}
	}
}