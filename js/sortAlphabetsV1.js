//Sort a string alphabetically using a function
var sortAlphabets = function(text) {
	//Steps
    //Convert string to array
    //Sort array
    //Convert back array to string

    return text.split('').sort().join('');
};

console.log(sortAlphabets("drpoklj"));		// Logs: "djklopr"