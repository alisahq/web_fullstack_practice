var button = document.querySelector("button");
var page = document.querySelector("body");
page.style.background = "white";

button.addEventListener("click",function (){
	if(page.style.background === "white"){
		page.style.background = "purple";
	}
	else{
		page.style.background = "white";
	}
});

