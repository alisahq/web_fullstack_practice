function isEven(n){
	if(n % 2 === 0){
		return true;
	}
	return false;
	//return n%2 === 0;
}

function factorial(n){
	var result = 1;
	for(var i = n; i > 0; i--){
		result = i * result;
	}
	return result;
}

function kebabToSnake(str){
		var newstr = str.replace(/-/g,"_");
		return newstr;
}