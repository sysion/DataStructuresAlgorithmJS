/*
For example, if we are asked in a coding challenge or interview question to find the 
recursive solution, a technique to do so would be to first write out the iterative 
solution and then use that to map out the recursive one.

See below examples:
*/

function fact(num){
    if (num === 1) 
        return 1;
    else
        return num * fact(--num);
}
 
fact(4); //24
console.log(fact(4));

/*
//This is what is happening at each step:
fact(4)
4 * fact(3)
4 * ( 3 * fact(2) )
4 * ( 3 * ( 2 * fact(1) ))
4 * ( 3 * ( 2 * 1 ) )
4 * ( 3 * 2 )
4 * 6
24
*/