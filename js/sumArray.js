/*
For example, if we are asked in a coding challenge or interview question to find the 
recursive solution, a technique to do so would be to first write out the iterative 
solution and then use that to map out the recursive one.

See below examples:
*/

function sum(l) {
    if (l.length === 0) {
        return 0;
    } else {
        return l[0] + sum(l.slice(1));
    }
}

sum([1,2,3,4]); //10
console.log(sum([1,2,3,4]));

/*
//This is what is happening at each step:
sum([1,2,3,4])
1 + sum([2,3,4])
1 + ( 2 + sum([3,4]) )
1 + ( 2 + ( 3 + sum([4]) ))
1 + ( 2 + ( 3 + ( 4 + sum([]) )))
1 + ( 2 + ( 3 + ( 4 + 0 ) ))
1 + ( 2 + ( 3 + 4 ) )
1 + ( 2 + 7 )
1 + 9
10
*/