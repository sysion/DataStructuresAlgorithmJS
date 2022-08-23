/*/ 1. Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

twoSum = function(nums, target){
    /* javascript sort() converts numbers to string before comparing hence the need 
       to use a compare fuction to sort numbers in ascending or descending order */
    /*nums = nums.sort(function(a,b){
        return a-b;
    });*/

    console.log(nums);

    var result = [];

    for (var i=0; i<nums.length; i++){
        for (var j=1; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                console.log('nums[i] + nums[j] = %d', nums[i] + nums[j]);
                result.push(i,j);
                break;
            }
        }
    }

    return result;
}

//nums = [2,7,11,15], target = 9      // [0,1]
nums = [3,2,4], target = 6          // [0,2]
//nums = [3,3], target = 6            // [0,1]
//nums = [8,13,7,5,3], target = 11    // [0,3]

console.log(twoSum(nums, target));
























