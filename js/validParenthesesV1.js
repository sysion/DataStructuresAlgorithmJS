/*/ 20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/

var validParentheses = (s)=>{
    let isValidParentheses = false;

    let hashtable = {
        '(':')',
        '[':']',
        '{':'}'
    };

    let arr = s.split('');
    console.log(arr);

    let order=arr.length-1;
    let openPos=0; closePos=0;

    for (let i=0;i<arr.length;i++){
        let openPos = i;

        if (hashtable[arr[i]]){
            for (let j=i+1; j<arr.length;j++){
                if (arr[j]!= hashtable[arr[i]]){
                    isValidParentheses = false;
                }
                else{
                    if (openPos==closePos && j>closePos){
                        //console.log('1. openPos = %s, closePos = %s, j = %s', openPos, closePos, j);
                        closePos=j;
                        isValidParentheses=true;
                        break;
                    }
                    if (openPos<closePos && j>closePos){
                        //console.log('2. openPos = %s, closePos = %s, j = %s', openPos, closePos, j);
                        isValidParentheses=false;
                        return isValidParentheses;
                    }
                    else if (openPos<closePos && j<closePos){
                        //console.log('3. openPos = %s, closePos = %s, j = %s', openPos, closePos, j);
                        isValidParentheses = true;
                        i++;
                        break;
                    }
                    else{
                        //console.log('4. openPos = %s, closePos = %s, j = %s', openPos, closePos, j);
                        closePos=j;
                        isValidParentheses=true;
                        break;
                    }
                }
            }   
        }
        else{
            isValidParentheses = false;
        }

        if ((i+1) == closePos) i++;
    }

    return isValidParentheses;
};

//s = "()";           // true
//s = "()[]{}";       // true
//s = "(]";           // false
//s = "([]{})";       // true
//s = "[{((}]";       // false
s = "{[}]()";       // false

console.log(validParentheses(s));

















