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
    var pos=-1;

    var mid=nums.length%2===0?nums.length/2:1+(nums.length-1)/2;

    if (target<nums[0]){
        pos=0;
    }
    if (target>nums[nums.length-1]){
        pos=nums.length;
    }
    if (target<nums[mid-1]){
        for (var i=0;i<mid;i++){
            if (target===nums[i] || nums[i]>target){
                pos=i;
                break;
            }
        }
    }
    else if (target>nums[mid]){ 
        for (var i=0;i<mid;i++){
            if (target===nums[i] || nums[i]>target){
                pos=i;
                break;
            }
        }
    }
    else if (target===nums[mid]){ 
        pos=mid;
    }

    return pos;
};

//nums = [1,3,5,6], target = 5        // 2
//nums = [1,3,5,6], target = 2        // 1
nums = [1,3,5,6], target = 7        // 4
//nums = [3,5,8,11], target = 1       // 0
//nums = [2,3,4,5,6,7,8], target = 4  // 2

console.log(searchInsertPosition(nums, target));