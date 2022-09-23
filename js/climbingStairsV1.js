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

// bottom-up, simple memoization
var climbingStairs = (n)=>{
	let tab={}; 				// memoization table

	for (let i=0;i<=n;i++){
		if (i===0){ 			// base case
			tab[0]=0;
		} 
		if (i===1){ 			// base case
			tab[1]=1;
		} 
		else if (i===2){	 	// base case
			tab[2]=2;
		} 
		else{
			tab[i]=tab[i-1] + tab[i-2]; // add new entry to our table
		}
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