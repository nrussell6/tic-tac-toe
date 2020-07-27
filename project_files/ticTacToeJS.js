//Defining Game Spaces
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var button5 = document.querySelector(".button5");
var button6 = document.querySelector(".button6");
var button7 = document.querySelector(".button7");
var button8 = document.querySelector(".button8");
var button9 = document.querySelector(".button9");

//Defining Reset Button
var resetButton = document.querySelector(".resetButton");

//defines game pieces
var xTurn = "X";
var oTurn = "O";

var claimedBy = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

var currentTurn = xTurn; //governs whose turn it is
var gameOn = "yes"; //while true game is on. When false game is over.

function turnChange(){ //switches turn
	if(currentTurn == xTurn){
		currentTurn = oTurn;
	} else{
		currentTurn = xTurn;
	}
}

function gameSpaceEventListener(){
	button1.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[0] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button2.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[1] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button3.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[2] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button4.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[3] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button5.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[4] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button6.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[5] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button7.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[6] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button8.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[7] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
	button9.addEventListener("click", function(){
		console.log(this.className + " Clicked");
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[8] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none"; //disables additional clicking
	});
}

function resetButtonToggle(){ //Makes each space clickable or unclickable
	switch(gameOn){
		case "yes":
			button1.style.cssText = "pointer-events: auto";
			button2.style.cssText = "pointer-events: auto";
			button3.style.cssText = "pointer-events: auto";
			button4.style.cssText = "pointer-events: auto";
			button5.style.cssText = "pointer-events: auto";
			button6.style.cssText = "pointer-events: auto";
			button7.style.cssText = "pointer-events: auto";
			button8.style.cssText = "pointer-events: auto";
			button9.style.cssText = "pointer-events: auto";
			break;
		case "no":
			button1.style.cssText = "pointer-events: none";
			button2.style.cssText = "pointer-events: none";
			button3.style.cssText = "pointer-events: none";
			button4.style.cssText = "pointer-events: none";
			button5.style.cssText = "pointer-events: none";
			button6.style.cssText = "pointer-events: none";
			button7.style.cssText = "pointer-events: none";
			button8.style.cssText = "pointer-events: none";
			button9.style.cssText = "pointer-events: none";
			break;

	}
}

function gameReset(){
	gameOn = "yes";
	resetButtonToggle(gameOn);
	//button1
	button1.innerHTML = " "; //resets innerHTML.
	claimedBy[0] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button1.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button2
	button2.innerHTML = " "; //resets innerHTML.
	claimedBy[1] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button2.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button3
	button3.innerHTML = " "; //resets innerHTML.
	claimedBy[2] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button3.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button4
	button4.innerHTML = " "; //resets innerHTML.
	claimedBy[3] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button4.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button5
	button5.innerHTML = " "; //resets innerHTML.
	claimedBy[4] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button5.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button6
	button6.innerHTML = " "; //resets innerHTML.
	claimedBy[5] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button6.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button7
	button7.innerHTML = " "; //resets innerHTML.
	claimedBy[6] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button7.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button8
	button8.innerHTML = " "; //resets innerHTML.
	claimedBy[7] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button8.style.cssText = "pointer-events: auto"; //enables additional clicking

	//button9
	button9.innerHTML = " "; //resets innerHTML.
	claimedBy[8] = " "; //resets claimed by
	currentTurn = "X"; //Sets first turn to X
	// button9.style.cssText = "pointer-events: auto"; //enables additional clicking

}

function victoryCondition(){
	var winner = " "; //Will be set to who the winner is.
	
	//X WINS
	//spaces 1, 2, 3
	if(claimedBy[0] == "X" && claimedBy[1] == "X" && claimedBy[2] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 1, 4, 7
	else if(claimedBy[0] == "X" && claimedBy[3] == "X" && claimedBy[6] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 1, 5, 9
	else if(claimedBy[0] == "X" && claimedBy[4] == "X" && claimedBy[8] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 2, 5, 8
	else if(claimedBy[1] == "X" && claimedBy[4] == "X" && claimedBy[7] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 3, 5, 7
	else if(claimedBy[2] == "X" && claimedBy[4] == "X" && claimedBy[6] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 3, 6, 9
	else if(claimedBy[2] == "X" && claimedBy[5] == "X" && claimedBy[8] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 4, 5, 6
	else if(claimedBy[3] == "X" && claimedBy[4] == "X" && claimedBy[5] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 7, 5, 3
	else if(claimedBy[6] == "X" && claimedBy[4] == "X" && claimedBy[2] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 7, 8, 9
	else if(claimedBy[6] == "X" && claimedBy[7] == "X" && claimedBy[8] == "X"){
		winner = "X";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}

	//O WINS
	//spaces 1, 2, 3
	if(claimedBy[0] == "O" && claimedBy[1] == "O" && claimedBy[2] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 1, 4, 7
	else if(claimedBy[0] == "O" && claimedBy[3] == "O" && claimedBy[6] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 1, 5, 9
	else if(claimedBy[0] == "O" && claimedBy[4] == "O" && claimedBy[8] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 2, 5, 8
	else if(claimedBy[1] == "O" && claimedBy[4] == "O" && claimedBy[7] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 3, 5, 7
	else if(claimedBy[2] == "O" && claimedBy[4] == "O" && claimedBy[6] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 3, 6, 9
	else if(claimedBy[2] == "O" && claimedBy[5] == "O" && claimedBy[8] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 4, 5, 6
	else if(claimedBy[3] == "O" && claimedBy[4] == "O" && claimedBy[5] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 7, 5, 3
	else if(claimedBy[6] == "O" && claimedBy[4] == "O" && claimedBy[2] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
	//spaces 7, 8, 9
	else if(claimedBy[6] == "O" && claimedBy[7] == "O" && claimedBy[8] == "O"){
		winner = "O";
		console.log(winner + " Wins the game!");
		gameOn = "no";
		resetButtonToggle();
	}
}

function gameFlow(){
	gameSpaceEventListener();
	document.addEventListener("click", function(){
		console.log(claimedBy);

		victoryCondition();
	});

	//Lets "Game Reset Button" reset the game board.
	resetButton.addEventListener("click", function(){
		gameReset();
	});
}

gameFlow();

