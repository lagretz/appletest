var misery = ["Misery",0];
var gun = ["Gunpowder & Lead", 0];
var love = ["Love Song", 0];
var taos = ["Taos", 0];
var move = ["Move It", 0];
var quando = ["Quando, Quando, Quando", 0];
var sister = ["Hey, Soul Sister", 0];
var what = ["So What", 0];
var party = ["Get the Party Started", 0];

var average = 0.0;
//Taos is removed so size is a even number
var list = ["Misery", "Gunpowder & Lead", "Love Song", "Move It", "Quando, Quando, Quando", "Hey, Soul Sister", "So What", "Get the Party Started"];

function pickNext(){
	title = list[Math.round(Math.random()*8)];
	if(title.toString() == "Misery"){
		if(misery[1] <= Math.floor(average)){
			misery[1] = misery[1] + 1;
			average += (1/8);
			return title;
		}
	}
	
	if(title.toString() == "Gunpowder & Lead"){
		if(gun[1] <= Math.floor(average)){
			gun[1] = gun[1] + 1;
			average += (1/8);
			return title;
		}
	}
	
	if(title.toString() == "Love Song"){
		if(love[1] <= Math.floor(average)){
			love[1] = love[1] + 1;
			average += (1/8);
			return title;
		}
	}
	
	if(title.toString() == "Taos"){
		if(taos[1] <= Math.floor(average)){
			taos[1] = taos[1] + 1;
			average += (1/9);
			return title;
		}
	}
		
	if(title.toString() == "Move It"){
		if(move[1] <= Math.floor(average)){
			move[1] = move[1] + 1;
			average += (1/8);
			return title;
		}
	}
	
	if(title.toString() == "Quando, Quando, Quando"){
		if(quando[1] <= Math.floor(average)){
			quando[1] = quando[1] + 1;
			average += (1/8);
			return title;
		}
	}
	if(title.toString() == "Hey, Soul Sister"){
		if(sister[1] <= Math.floor(average)){
			sister[1] = sister[1] + 1;
			average += (1/8);
			return title;
		}
	}
	if(title.toString() == "So What"){
		if(what[1] <= Math.floor(average)){
			what[1] = what[1] + 1;
			average += (1/8);
			return title;
		}
	}
	
	if(title.toString() == "Get the Party Started"){
		if(party[1] <= Math.floor(average)){
			party[1] = party[1] + 1;
			average += (1/8);
			return title;
		}
	}
	return false;
}