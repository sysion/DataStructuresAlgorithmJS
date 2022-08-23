// iterative
function createArrayFromInput(startVal, endVal){
    const arr = [];

    for(let i = startVal; i <= endVal; i++){
        arr.push(i);
    }

    return arr;
}

console.log(createArrayFromInput(1, 5));    // [ 1, 2, 3, 4, 5 ]