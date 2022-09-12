/*/ 35. Search Insert Position
https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the 
target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:
1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums contains distinct values sorted in ascending order.
-10^4 <= target <= 10^4
*/

var searchInsertPosition=(nums,target)=>{
    var pos=0;
    var numLen=nums.length-1;
    var mid=numLen;

    while (pos<=numLen){
        //mid=1+(nums.length-1)>>1;
        mid=Math.floor((pos+numLen)/2);
        if (nums[mid]===target){
            return mid;
        } else if (target>nums[mid]){
            pos=mid+1;
        } else {
            numLen=mid-1;
        }
    }
    
    return pos;
};

//nums = [1,3,5,6], target = 5        // 2
//nums = [1,3,5,6], target = 2        // 1
//nums = [1,3,5,6], target = 7        // 4
//nums = [3,5,8,11], target = 1       // 0
nums = [2,3,4,5,6,7,8], target = 4  // 2
//nums = [-12,-11,-9,-7,-5,-3,-2], target = -6  // 4 

console.log(searchInsertPosition(nums,target));