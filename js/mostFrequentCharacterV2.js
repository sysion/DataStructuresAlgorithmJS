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

	//O(n) - OK
	let arr_n={};	//dict (also called hashtable) i.e. associative array or map ==> arr_n = new Object() can also be used for definition.
	var maxcnt=0;
	//var cnt=0;
	for (var i=0; i<arr.length; i++){
		if (arr_n[arr[i]]>0){
			arr_n[arr[i]] = arr_n[arr[i]]+1;
		}
		else{
			arr_n[arr[i]] = 1;
		}

		if (arr_n[arr[i]]>=maxcnt){
			maxcnt=arr_n[arr[i]];
			c=arr[i];
		}
	}

	//console.log(arr_n);
	console.log(c);
	return c;

};

solution("abcddefda11111333333333");											// d
//solution("AA0AB0BB0ccc0aa0aw00wo0BBw123123");							// B
//solution("76676aaaaaaaaaAAaaaGGhtBbbAAAAAA787878");				// a