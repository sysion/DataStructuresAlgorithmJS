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
	var i=1;
	var result=i*i;

	while(result<=x){
		i++;
		result=i*i;
	}

	return i-1;
};

//x = 4		// 2
//x = 8		// 2
//x = 41	// 6
x = 121	// 11

console.log(sqrt(x));