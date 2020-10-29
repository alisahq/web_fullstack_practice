function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i --){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var firstElem = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== firstElem){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result = result + arr[i];
	}
	return result;
}

function max(arr){
	var maxNum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > maxNum){
			maxNum = arr[i];
		}
	}
	return maxNum;
}