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

// O(logN)
var powerOfFour = function(n){
	var isPowerOfFour = false;
	var remainder = -1;

	//if (n < 0) n *= -1;
	if (n < 0) return isPowerOfFour;

	while (n > 1){
		remainder = n%4;
		n = n/4

		console.log('remainder = %s, n = %s', remainder, n);
		//console.log('remainder = '+remainder+', n = '+n);
	}

	if (n == 1 && remainder == 0){
		isPowerOfFour = true;
	}

	return isPowerOfFour; 
}

console.log(powerOfFour(-64));


/*/ Time complexity
n => n/4 => n/16 => n/64 => n/256 => ...
n => n/4 => (n/4)/4 => (n/16)/4 => (n/64)/4 => ... (n/4^n)/4

Always dividing by 4 (which is constant) i.e. k
hence n/k in the long run is n since k is constant i.e. O(n) 
*/