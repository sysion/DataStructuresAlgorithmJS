/*/ 70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

// bottom-up, recursion+memoization
var climbingStairs = (n)=>{
	if (n<=0) return 0;
	if (n<=1) return 1;		// 1 step
	if (n<=2) return 2;		// 1+1 steps or 2 steps at once

	// to get to the ith step, we can either
	// 1. take (i-1) step at a time i.e. one step at a time
	// 2. take (i-2) step at a time i.e. two steps at a time
	// we can get to ith step in (i-1)+(i-2) distinct  ways

	let tab={};

	for (let i=3;i<=n;i++){
		tab[i]=climbingStairs(i-1)+climbingStairs(i-2);
	}

	return tab[n];
};

//n = 1       // 1
//n = 2       // 2
//n = 3       // 3
//n = 4       // 5
//n = 5       // 8
//n = 6       // 13
n = 7       // 21

/* n=5
1 1 1 1 1
1 1 1 2
1 1 2 1
1 2 1 1
2 1 1 1
2 2 1
2 1 2
1 2 2
*/

console.log(climbingStairs(n));