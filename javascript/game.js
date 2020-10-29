// create secret number
var secreteNumber = 4;

// ask the user for guess
var guess = Number(prompt("guess a number"));

//check if guess is right
if(guess === secreteNumber){
	alert("YOU GOT IT RIGHT!");
}

else if (guess > secreteNumber){
	alert("TOO HIGH!");
}

else{
	alert("TOO LOW!");
}

