var numOfSquare = 6;

var colors = generateRandomColors(numOfSquare);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var easyBTN = document.querySelector("#easyBTN");
var hardBTN = document.querySelector("#hardBTN");


easyBTN.addEventListener("click",function(){
	this.classList.add("selected");
	hardBTN.classList.remove("selected");
	numOfSquare = 3;
	colors = generateRandomColors(numOfSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
			//hide sth
		}
	}
	colors = generateRandomColors(numOfSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the color displayed to the match color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

hardBTN.addEventListener("click",function(){
	this.classList.add("selected");
	easyBTN.classList.remove("selected");
	numOfSquare = 6;
	colors = generateRandomColors(numOfSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		// display sth
	}
	colors = generateRandomColors(numOfSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the color displayed to the match color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click",function(){
	//genereate all new colors
	colors = generateRandomColors(numOfSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the color displayed to the match color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.background= "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
	//change each color to match the given color
	squares[i].style.backgroundColor = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into the array
		arr.push(randomColor());
	}
	return arr;
	//return that array
}

function randomColor(){
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);
	//pick a "red" from 0-255
	//pick a "green" from 0-255
	//pick a "blue" from 0-255
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";

}
