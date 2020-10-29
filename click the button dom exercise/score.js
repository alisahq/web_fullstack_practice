var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");
var resetButton = document.querySelector("#reset");
var numOfGame = document.querySelector("#n");
var numEntered = document.querySelector("#enter");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
	if(p1score === winningScore){
		p1display.classList.add("winner");
		gameOver = true;
	}
	p1display.textContent = p1score;
}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
	if(p2score === winningScore){
		p2display.classList.add("winner");
		gameOver = true;
	}
		p2display.textContent = p2score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}

numEntered.addEventListener("change",function(){
	numOfGame.textContent = numEntered.value;
	winningScore = Number(numEntered.value);
	reset();
});
