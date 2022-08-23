//Javascript Function that returns true if a letter

function isLetter(ch) {
	return ch.toLowerCase() != ch.toUpperCase()
}

ch = 2;		// false - how to capture error thrown here? re-visit !!!			
//ch = '7';		// false
//ch = 'z';		// true
//ch = 'ab';	// true
//ch = 'K';		// true

console.log(isLetter(ch));