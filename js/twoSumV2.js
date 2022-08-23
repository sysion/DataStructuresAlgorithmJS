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

// O(n)
var twoSum = function(nums, target){
    var result = [];
    var dict = {};

    for (var i=0; i<nums.length; i++){
        if (target - nums[i] > 0){
            if (dict[target - nums[i]] == undefined){   //key not in dict
                dict[target - nums[i]] = i;
            }
        }

        if (i > 0){
            if (dict[nums[i]] != undefined){    //key is in dict
                //console.log(nums[i]);
                //console.log(dict[nums[i]]);
                result.push(dict[nums[i]], i);
                break;
            }
        }

        //dict[3]=0
        //dict[3]=1
    }

    return result;
}

//nums = [2,7,11,15], target = 9      // [0,1]
nums = [3,2,4], target = 6          // [1,2]
//nums = [3,3], target = 6            // [0,1]
//nums = [8,13,7,5,3], target = 11    // [0,4]

console.log(twoSum(nums, target));
