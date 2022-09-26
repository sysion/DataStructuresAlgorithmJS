/*/ 83. Remove Duplicates from Sorted List
https://leetcode.com/problems/remove-duplicates-from-sorted-list/

Given the head of a sorted linked list, delete all duplicates such that each element 
appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

   Sorted List                   Output
(1)-->(1)-->(2)             => (1)-->(2)
(1)-->(1)-->(2)-->(3)-->(3) => (1)-->(2)-->(3)     
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = null
 * }
 */
class ListNode{
	constructor(val){
		this.val=val;
		this.next=null;
	}
};

function LinkedList(arr){
	var list=new ListNode(arr[0]);
	var current=list;

	for(var i=1;i<arr.length;i++){
		current.next=new ListNode(arr[i]);
		current=current.next;
	}

	return list;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let removeDuplicatesFromSortedList = (head)=>{
	if (!head) return head;

	var current=head;

	while (current){
		if (current.next!==null && current.val===current.next.val){
			current.next=current.next.next;
		}
		else{
			current=current.next;
		}
	}
	
	return head;
};

//head = [1,1,2]				// [1,2]
//head = [1,1,2,3,3]			// [1,2,3]

l = [1,1,2]					// [1,2]
//l = [1,1,2,3,3]				// [1,2,3]
var head=LinkedList(l);

console.log(removeDuplicatesFromSortedList(head));