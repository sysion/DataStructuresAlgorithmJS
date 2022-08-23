/*/ 342. Power of Four
https://leetcode.com/problems/power-of-four/

Given an integer n, return true if it is a power of four. Otherwise, return false.
An integer n is a power of four, if there exists an integer x such that n == 4^x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true

Constraints:
-2^31 <= n <= 2^31 - 1
*/

powerOfFour = function(n){
	//if (n < 0) n *= -1;
	if (n <= 0) return false;

	remainder = n%4;
	n = n/4;

	console.log('remainder = %s, n = %s', remainder, n);

	if(n == 1 && remainder == 0){
		return true;
	}
	else if (n < 1){
		return false;
	}

	return powerOfFour(n);

	/*if (n > 1){
		powerOfFour(n);
	}
	else if(n == 1 && remainder == 0){
		return true;
	}
	else{
		return false;
	}*/
}

console.log(powerOfFour(3));