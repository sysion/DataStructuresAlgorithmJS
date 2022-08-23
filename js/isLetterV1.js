//Javascript Function that returns true if a letter

var isLetter = function(ch){
	return /^[A-Z]$/i.test(ch);
}

//ch = 2;		// false			
//ch = '7';		// false
//ch = 'z';		// true
//ch = 'ab';	// true
ch = 'K';		// true

console.log(isLetter(ch));