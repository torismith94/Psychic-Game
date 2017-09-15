
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", 
			"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
			 "s", "t", "u", "v", "w", "x", "y", "z"];

var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var list = [];

 document.getElementById("wins").innerHTML = ("Wins: " + userWins);
 document.getElementById("losses").innerHTML = ("Losses: " + userLosses);
 document.getElementById("lives").innerHTML = ("Guesses left: " + guessesLeft);
 //document.getElementById("guesses").innerHTML = ("Your guesses so far: ");


//document my guesses array

function guessList(userGuess) {
	list.push(userGuess);
	return document.getElementById("guesses").innerHTML = ("Your guesses so far: " + list);
}

function decrement(guessesLeft) {
	//guessesLeft = guessesLeft - 1;
	return document.getElementById("lives").innerHTML = ("Guesses Left: " + guessesLeft);
	console.log(guessesLeft);
}

function reset() {
	list = [];
	guessesLeft = 9;
	document.getElementById("lives").innerHTML = ("Guesses Left: " + guessesLeft);
	document.getElementById("guesses").innerHTML = ("Your guesses so far: " + list);
	
}

alert("Are you ready to play?");

	document.onkeyup = function(event) {
//****need to write a function for if another key besides a-z is pressed

// Determines which key was pressed from the User (userGuess)
//always converts to lower case in case caps is on 
	var userGuess = event.key;
	

// computer needs to pick a random letter 
		
	var computerGuess = computerChoices[Math.floor(Math.random() * 
		computerChoices.length)];
	console.log(computerGuess);

	document.getElementById("guesses").innerHTML = guessList(userGuess);


if (guessesLeft >= 1) {


	if ((userGuess===computerGuess)) {
		userWins++;
		alert("You win!");
		document.getElementById("wins").innerHTML = ("Wins: " + userWins);
		reset();
		//document.getElementById("lives").innerHTML = reset();		
		//guessesLeft = 9;
		// list = []; 

	}

	else { 
		guessesLeft = guessesLeft - 1;
		document.getElementById("lives").innerHTML = decrement(guessesLeft);
		//document.getElementById("guesses").innerHTML = ("Your guesses so far: ");
		
	} 
}

else if (guessesLeft < 1) {
 		userLosses++;
 		document.getElementById("losses").innerHTML = ("Losses: " + userLosses);
 		alert("Out of lives, you lose! Press any key to play again.");
 		reset();
 		//document.getElementById("lives").innerHTML = reset(guessesLeft);	
 		//guessesLeft = 9;

	
	}


}