function getInput(){
	var rps = prompt("Please enter r, p, or s for rock, paper, and scissors, respectively.");
	//r = 0, p = 1, s = 2
	var rpsNum = 0;

	while (rps !== 'r' && rps !== 's' && rps !== 'p'){
		var rps = prompt("Please enter r, p, or s for rock, paper, and scissors, respectively.");
	}
	switch(rps){
		case "r":
			rpsNum = 0;
			break;
		case "p":
			rpsNum = 1;
			break;
		case "s":
			rpsNum = 2;
	}
	return rpsNum;
}

function getRandomRPS(rps){
	var rand = Math.random()
	//r = 0, p = 1, s = 2
	rand *= 3
	rand = Math.floor(rand);
	return rand;
}

function whoWins(){
	var userInput = getInput();
	var compInput = getRandomRPS();

	//output computer's choice
	compAnswer(compInput);

	//compare computer's choice
	if(compInput === userInput){
		alert("You tied with the computer. Try again.");
	}else{
		switch(userInput){
			case 0:
				if(compInput === 1){
					alert("Paper covers Rock. Computer wins.");
				}else{
					alert("Rock smashes Scissors. You win.");
				}
				break;
			case 1:
				if(compInput === 0){
					alert("Paper covers Rock. You win.");
				}else{
					alert("Scissors cut Paper. Computer wins.");
				}
				break;
			case 2:
				if(compInput === 0){
					alert("Rock smashes Scissors. Computer wins.");
				}else{
					alert("Scissors cut Paper. You win.");
				}
		}
	}
}

function compAnswer(compInput){
	switch(compInput){
		case 0:
			alert("Computer chose rock");
			break;
		case 1:
			alert("Computer chose paper");
			break;
		case 2:
			alert("Computer chose scissors");
	}
}


whoWins();
















