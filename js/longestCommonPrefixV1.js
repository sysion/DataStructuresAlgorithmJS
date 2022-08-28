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
    var cprefix = "";
    //var slen = Number.MAX_VALUE;
    var slen = strs[0].length;

    for (var i=0; i<strs.length; i++){
        if (strs[i].length<slen){
            slen=strs[i].length;
        }
    }
    
    for (var i=0; i<slen; i++){
        var cp=strs[0][i];
        var yn = true;

        for (var j=1; j<strs.length; j++){
            if (cp!==strs[j][i]){
                yn = false;
                break;
            }
        }

        if (yn) cprefix += cp;
        if (!yn) break;
    }

    return cprefix;
};

//strs = ["flower","flow","flight"];                // "fl"
//strs = ["dog","racecar","car"];                   // ""
//strs = ["dagagadadog","dagagadecar","dagagedar"]; // "dagag"
//strs = ["tweenyfog","tweenyinglog","tweenitag"];  // "tween"
strs = [ "lettedddd", "lets", "lett"];             // "let"

console.log(longestCommonPrefix(strs));