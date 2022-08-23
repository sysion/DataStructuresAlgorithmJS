//The typeof operator will return an object for strings created with new String(). 
//This can be handled using the instanceof operator.

function checkIsString(text) {
    if (typeof text === 'string' || text instanceof String) {
        return true;
    }
    else {
        return false;
    } 
}

text = 'qwerty';                  // true
//text = 'poiuyt';                  // true
//text = new String('asjkl');       // true
//text = 234567;                    // false

console.log(checkIsString(text));

