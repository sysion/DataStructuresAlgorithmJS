// recursion
function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);
    countDownFrom(number - 1);
}

countDownFrom(5);	// 5 4 3 2 1