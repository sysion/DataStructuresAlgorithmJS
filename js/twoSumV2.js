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


/*
code by: Fedolodic@leetcode - same as my above solution but more compact!

let dic = {}
for(let i = 0; i < nums.length; i++) {
    if (target-nums[i] in dic) {
        return [dic[target-nums[i]], i]
    }
    dic[nums[i]] = i
}


// Very good explanation of similar solution by emmanuelmota@leetcode
var twoSum = function(nums, target) {
    // create a new Map
    let map = new Map();
    // loop over the nums
    for (var i = 0; i < nums.length; i++) {
      // store the compliment between current num and the target
      // if target 10, and num[i] = 6 there is only ONE number that we can add to 6 to make it 10. 
        // That is the number 4. We call it the compliment because it compliments 6 to hit the target 10.
        // EG if target = 10 and nums[i] = 6....  10 - 6 = compliment = 4
        let compliment = target - nums[i];
        // What we are going to do is check if the compliment exists in the hashmap.
        // If the map already contains the compliment we will return an array with the index of the compliment. And current index.
        // When calling map.get(compliment) in the return, this will return the VALUE at that key 
        if ( map.has(compliment)) {
           return [map.get(compliment), i];
           } else {
               // Since the compliment does not exist as a key in the map.
               // We store the key num[i], and index as the value for that key.
               map.set( nums[i] , i)
           }

    }
    // If there is no compliment we will return an empty array. 
return [];
};
*/