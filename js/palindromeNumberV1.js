/*/ 9. Palindrome Number
https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-2^31 <= x <= 2^31 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

var palindromeNumber = function(x){
    var isPalindromeNumber = false;
    var n = ''+x;
    var xlen = n.length;
    var xmid = -1;

    if (xlen%2 == 0){
        xmid = xlen/2;
        xLeftHalf = n.slice(0, xmid);
        xRightHalf = n.slice(xmid);
    }
    else{
        xmid = 1+(xlen/2);
        xLeftHalf = n.slice(0, xmid);
        xRightHalf = n.slice(xmid-1);
    }
    
    xRightHalf = xRightHalf.split('').reverse().join('');
    console.log(xLeftHalf);
    console.log(xRightHalf);

    if (xLeftHalf === xRightHalf) isPalindromeNumber = true;

    return isPalindromeNumber;
}

//x = 121;      // true
//x = -121;     // false
//x = 10;       // false
x=111111        // true
console.log(palindromeNumber(x));