function run(){
	var songName = "";
	do{
	//alert("in function");
	//for(i = 0; i < 10; i++){
		songName = pickNext();
	}while(songName == false);
		//alert("songName:  " + songName.toString());
		/*alert("songName: " + misery[0]);
		alert("Counter " + misery[1]);*/
		if(songName.toString() == "Misery"){
			alert(songName +"\n Counter:  " + misery[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/01 - Misery.mp3";
			document.getElementById('audio').load();
			return "";
		}
		
		if(songName.toString() == "Gunpowder & Lead"){
			alert(songName +"\n Counter:  " + gun[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/01 - Gunpowder & Lead.mp3";
			document.getElementById('audio').load();
			return "";
		}
		
		if(songName.toString() == "Love Song"){
			alert(songName +"\n Counter:  " + love[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/01 - Love Song.mp3";
			document.getElementById('audio').load();
			return "";
		}
	
		if(songName.toString() == "Taos"){
			alert(songName +"\n Counter:  " + taos[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/09 - Taos.mp3";
			document.getElementById('audio').load();
			return "";
		}
		
		if(songName.toString() == "Move It"){
			alert(songName +"\n Counter:  " + move[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/07 - Move It (Radioclit Remix).mp3";
			document.getElementById('audio').load();
			return "";
		}
	
		if(songName.toString() == "Quando, Quando, Quando"){
			alert(songName +"\n Counter:  " + quando[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/04 - Quando, Quando, Quando.mp3";
			document.getElementById('audio').load();
			return "";
		}
		
		if(songName.toString() == "Hey, Soul Sister"){
			alert(songName +"\n Counter:  " + sister[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/02 - Hey, Soul Sister.mp3";
			document.getElementById('audio').load();
			return "";
		}
	
		if(songName.toString() == "So What"){
			alert(songName +"\n Counter:  " + what[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/11 - So What [Explicit].mp3";
			document.getElementById('audio').load();
			return "";
		}
	
		if(songName.toString() == "Get the Party Started"){
			alert(songName +"\n Counter:  " + party[1] + "\n Average" + average.toString());
			document.getElementById('source').src = "../muc/01 - Get the Party Started.mp3";
			document.getElementById('audio').load();
			return "";
		}
}

function test() {
	var source = document.getElementById('source')
	alert(source.src);
	source.src = "../muc/01 - Misery.mp3";
	alert(source.src);
	document.getElementById('audio').load();
}
//}