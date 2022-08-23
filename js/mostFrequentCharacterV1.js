/*
  Turing code challenge
=========================
1. Given a string s, return the most frequent character (an alphabet letter) in the string

Example 1:
Input: s = "abcddefda11111333333333"
Output: 'd'

Example 2:
Input: s = "AA0AB0BB0ccc0aa0aw00wo0BBw123123"
Output: 'B'

Constraints:
- 1<=s.length<=100
- s contains lower-case and upper-case English letters and numbers.
*/
var solution = function(s){
	let c = '';

	//let regExp = /([a-zA-Z]+)/g;	//ok for "abcddefda11111333333333" but not ok for "AA0AB0BB0ccc0aa0aw00wo0BBw123123"
	//m = regExp.exec(s);
	//s = m[0];
	//let arr = s.split('');
	//arr.sort();		//["a", "a", "b", "c", "d", "d", "d", "e", "f"]

	let regExp = /[0-9]+/g;
	let m = s.replace(regExp, '');
	let arr = m.split('');
	arr.sort();

	//O(n^2) - OK
	var maxcnt=0;

	for (var i=0; i<arr.length; i++){
		var cnt=0;

		for (var j=0; j<m.length; j++){
			//console.log(arr[i]);

			if (arr[i]==arr[j]) cnt++;
		}

		if (cnt>=maxcnt){
			c=arr[i];
			maxcnt=cnt;
		}
	}
				
	console.log(c);
	return c;
};

//solution("abcddefda11111333333333");											// d
//solution("AA0AB0BB0ccc0aa0aw00wo0BBw123123");							// B
solution("76676aaaaaaaaaAAaaaGGhtBbbAAAAAA787878");				// a