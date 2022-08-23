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

//O(n^2) - OK
var solution = function(k){
	k = k.sort();
	console.log(k);

	//in order to capture numbers not in array; k[k.length-1] is the maximum number in array k after sorting ascending
	for (var i=0; i<k[k.length-1]; i++){
		var cnt=0;
		for (var j=0; j<k.length; j++){
			if (k[j]>=i){
				cnt++;
			}
		}
		if (cnt == i){
			console.log(i);
			return i;
		}
	}
	console.log(-1);
	return -1;
}

num = [0,4,1,0,4];		//2
//num = [1,3,4,5];			//3
//num = [3,5];					//2	
//num = [0,4,3,0,4];		//3	
//num = [4,6,7,7,1,0];	//4	

solution(num);
