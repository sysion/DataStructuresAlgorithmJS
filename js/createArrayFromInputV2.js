// recursion v1
function createArrayFromInput(startVal, endVal){
	if (startVal >= endVal){
		return [startVal];
		//return arr.push(startVal);
	}
	else{
		const arr = createArrayFromInput(startVal, endVal - 1);
        arr.push(endVal);

        return arr;
	}
}

console.log(createArrayFromInput(1, 5));