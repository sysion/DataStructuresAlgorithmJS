// recursion v2  ==> REVISIT
const arr = [];
function createArrayFromInput(startVal, endVal){
	if (startVal < endVal){
		arr.push(startVal);
		createArrayFromInput(startVal + 1, endVal);
	}
	else{
		arr.push(startVal);
	}

    return arr;
}

console.log(createArrayFromInput(1, 5));