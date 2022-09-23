/*/ 21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

(1)-->(2)-->(4)                     // list1
(1)-->(3)-->(4)                     // list2
(1)-->(1)-->(2)-->(3)-->(4)-->(4)   // merged list
*/

var mergeTwoSortedLists = (list1, list2)=>{
    if (! list1) return list2;
    if (! list2) return list1;
     
    var result = [...list1,...list2];
    return result.sort();
};

//list1 = [1,2,4], list2 = [1,3,4]        // [1,1,2,3,4,4]
//list1 = [], list2 = []                  // []
//list1 = [], list2 = [0]                 // [0]
list1 = [1,3,5,7], list2 = [1,2,4,6]    // [1,1,2,3,4,5,6,7]

console.log(mergeTwoSortedLists(list1, list2));