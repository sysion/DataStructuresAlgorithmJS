/*
  Turing code challenge
=========================
2. Given an array k of integers, find the special integer x such that there are x integers in the array k
that are larger than or equal to x. 

The special integer doesn't have to exist in the array k.

You can assume that there's always going to be one special integer or none in array k. if no special
integers are found, return -1.

Example:
Inputs: num = [0,4,1,0,4]
Output: 2
Explanation: There are 2 values that are greater than or equal to 2.

Constraints:
- 1<=k.length<=100
- 0<=k[i]<=1000
- k contains only positive integers
*/

//https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/discuss/877869/Java-O(nlogn)-with-easy-explanation
//https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/discuss/883097/Java-O(N*log(N))-very-simple

//O(nlogn) - OK
var solution = function(k){
	k = k.sort();
	//console.log(k);
	for (var i=0; i<k.length; i++){	
		var num=k.length-i;
		var cond1=num<=k[i];
		var cond2=(i-1<0)||(num>k[i-1]);
		if (cond1&&cond2){
			console.log(num);
			return num;
		}
	}
	console.log(-1);
	return -1;
}

//num = [0,4,1,0,4];		//2
//num = [1,3,4,5];			//3
//num = [3,5];					//2	
//num = [0,4,3,0,4];		//3	
num = [4,6,7,7,1,0];	//4	

solution(num);
