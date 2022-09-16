/*/ 67. Add Binary
https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

var addBinary = (a, b)=>{
	a=parseInt(a,2);			// convert binary to integer(base 10)
	b=parseInt(b,2);			// convert binary to integer(base 10)

	var result=a+b;				// integer addition (base 10)
	result=result.toString(2);	// convert integer(base 10) to base 2

	return result;
};

//a = "11", b = "1"       // "100"
//a = "1010", b = "1011"  // "10101"
//a = "110", b = "1011"   // "10001"
a = "1110", b = "1101"  // "11011"

console.log(addBinary(a, b));