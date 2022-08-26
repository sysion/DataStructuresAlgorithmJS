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

    if (x < 0){
        return isPalindromeNumber;
    }

    var xreversed = x.toString().split('').reverse().join('');

    //console.log(typeof x);              // number
    //console.log(typeof xreversed);      // string

    console.log(x.toString());
    console.log(xreversed);

    //if (x === xreversed) isPalindromeNumber = true;   // why is this false?
    if (x == xreversed) isPalindromeNumber = true;

    return isPalindromeNumber;
}

//x = 121;      // true
//x = -121;     // false
//x = 10;       // false
x=111111        // true
console.log(palindromeNumber(x));