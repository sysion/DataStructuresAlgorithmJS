/*/ 14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

var longestCommonPrefix = function(strs){    
    strs.sort();
    console.log(strs);

    var cprefix = strs[0];

    // iamawebgeek@leetcode
    /* The thing with js is that we can sort strings and when we sort an array of different 
    strings they will be sorted alphabetically, which means all we are left to do is find 
    the common part between the first and the last values in the sorted array. As simple as 
    this: */

    for (let i = 0; i < cprefix.length; i++){
        console.log('cprefix[i]='+cprefix[i]+', strs[strs.length-1][i]='+strs[strs.length - 1][i]);
        if (cprefix[i] !== strs[strs.length - 1][i]) return cprefix.substr(0, i);
    }

    return cprefix;
};

//strs = ["flower","flow","flight"];                // "fl"
//strs = ["dog","racecar","car"];                   // ""
//strs = ["dagagadadog","dagagadecar","dagagedar"]; // "dagag"
//strs = ["tweenyfog","tweenyinglog","tweenitag"];  // "tween"
strs = [ "lettedddd", "lets", "lett"];             // "let"

console.log(longestCommonPrefix(strs));