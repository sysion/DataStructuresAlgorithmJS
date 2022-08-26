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
    var xreversed = 0;
    var n = x;
    var tmp = 0;

    if (x < 0){
        return isPalindromeNumber;
    }

    while (n > 0){
        tmp = n%10;
        xreversed = xreversed*10+tmp;
        n = (n - tmp)/10;
    }

    console.log(xreversed);
    console.log(x);

    console.log(typeof xreversed);
    console.log(typeof x);

    if (x === xreversed){
        isPalindromeNumber = true;
    }   



    

    return isPalindromeNumber;
}

//x = 121;      // true
x = -121;     // false
//x = 10;       // false
//x=111111        // true
console.log(palindromeNumber(x));



/**
 * @param {number} x
 * @return {boolean}
 */

/*
Idea: We 'replaying number from the end and if 'replayed version is equal input then it means it had to be palindrome
*/
/*if(x!==0 && x%10===0) return false

let sum = 0    
let currNum = x
while(currNum > 0)  {
    sum = sum*10 + currNum%10
    currNum = Math.floor(currNum/10)
}

return sum===x
*/


/*/Language: Go
func isPalindrome(x int) bool {
    var reversedNum int
    tmp := x
    for tmp > 0 {
        reversedNum = reversedNum*10 + tmp%10
        tmp =tmp/10
    }
    return x == reversedNum
}
*/

