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
	let carry=0;
	let len=a.length>=b.length?a.length:b.length;
	a=a.split('').reverse();
	b=b.split('').reverse();
	let result='';
	
	for (var i=0;i<len;i++){
		if (a[i]===undefined) a[i]=0;
		if (b[i]===undefined) b[i]=0;

		if (Number(a[i])===0 && Number(b[i])===0){
			if (carry===1){
				result=result+1;
				carry=0;
			}
			else{
				result=result+0;
			}
		}
		else if(Number(a[i])===1 && Number(b[i])===1){
			if (carry===1){
				result=result+1;
				carry=1;
			}
			else{
				result=result+0;
				carry=1;
			}
		}
		else if((Number(a[i])===1 && Number(b[i])===0) || (Number(a[i])===0 && Number(b[i])===1)){
			if (carry===1){
				result=result+0;
				carry=1;
			}
			else{
				result=result+1;
				carry=0;
			}
		}
	}

	if (carry===1) result=result+1;

	result=result.split('').reverse().join('');

	return result;
};

//a = "11", b = "1"       // "100"
//a = "1010", b = "1011"  // "10101"
//a = "110", b = "1011"   // "10001"
a = "1110", b = "1101"  // "11011"

console.log(addBinary(a, b));