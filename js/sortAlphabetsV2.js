//Sort a string alphabetically using a function
function sortAlphabet(text) {
	return [...text].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(sortAlphabet("drpoklj"));       // Logs: "djklopr"