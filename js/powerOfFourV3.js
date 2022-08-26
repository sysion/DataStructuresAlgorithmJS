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

//code by: kqhasaki@leetcode

/**
 * @param {number} n
 * @return {boolean}
 */
var powerOfFour = function(n) {
    if (n <= 0) 
        return false
    if (n === 1) {
        return true
    } else {
        if (n % 4 !== 0) 
            return false
        return powerOfFour(n / 4)
    }
};


/*/ proof and code by: akshaymarch7@leetcode
x = 4^a
x = (2^2)^a
x = 2^(2*a)
log(x) = log 2^(2*a)  - base 2
log(x) = 2^a  i.e. log(x) MUST be even

var powerOfFour= n => n>0 && Math.log2(n)%2 === 0;
*/

console.log(powerOfFour(16));