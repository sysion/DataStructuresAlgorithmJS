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

    let openTag = [];
    let hashtable = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    /* loop through string s, add open parenthese to openTag array. if 
    tag is a close parenthese, check if openTag array is empty (if
    it is empty, then the string is starting with a close parenthese)
    or pop the last entry from openTag array and use this as key in
    hashtable; the return value from the hashtable should equal tag.*/
    for (let tag of s) {
        if (tag === '(' || tag === '{' || tag === '[') {
            openTag.push(tag);
        } else if (!openTag.length || hashtable[openTag.pop()] !== tag) {
            isValidParentheses = false;
            return isValidParentheses;
        }
    }
    
    isValidParentheses = !openTag.length;
    
    return isValidParentheses;
};

//s = "()";           // true
//s = "()[]{}";       // true
//s = "(]";           // false
//s = "([]{})";       // true
//s = "[{((}]";       // false
s = "{[}]()";       // false

console.log(validParentheses(s));

















