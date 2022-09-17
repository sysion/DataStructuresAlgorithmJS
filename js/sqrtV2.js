/*/ 69. Sqrt(x)
https://leetcode.com/problems/sqrtx/

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, 
such as pow(x, 0.5) or x ** 0.5.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part 
is truncated, 2 is returned.

Constraints:
0 <= x <= 2^31 - 1
*/

var sqrt = (x)=>{
	var guess=x/2;
	var result=0;

	var diff=Math.max(guess,result)-Math.min(guess,result);

	while(diff>=0.00001){
		result=x/guess;
		diff=Math.max(guess,result)-Math.min(guess,result);

		guess=0.5*(guess+result);		// new guess
	}

	/*/ handles case of perfect sqrt
	var fract=result.toString().split('.');
	if (fract[1]>0){
		var point=fract[1].split('');
		console.log(point);

		if ((point[0]===point[1]) && (point[1]===point[2]) && (point[2]==='9')){
			result=parseInt(fract[0])+1;
		}
	}*/

	var check = /\.[9]{3}/.test(result);
	if (check) result=result+1;
	
	return parseInt(result);
};

//x = 4		// 2
//x = 8		// 2
//x = 41	// 6
//x = 121	// 11
x = 25	// 4

console.log(sqrt(x));