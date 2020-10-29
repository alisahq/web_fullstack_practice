var todos = [];
var input = prompt("What would you like to do?")


while(input !== "quit"){
	if(input === "list"){
	console.log("**********");
	//for each can pass the second argument, which refers to the index we have to the corresponding array element
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
	console.log("**********");
	}
	else if(input === "new"){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}
	else if(input == "delete"){
		var index = prompt("enter the index of todo to delete.");
		todos.splice(index,1);
		console.log("Deleted Todo");
		//splice(a,b) is a function make a cut and remove a specific number of element in the array
		//the second argument is the number of element that is following that index
	}
	input = prompt("What would you like to do?");
}

console.log("OKAY YOU QUIT THE APP");