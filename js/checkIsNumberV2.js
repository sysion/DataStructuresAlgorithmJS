function isNumber(n) {
    // negative or positive
    return /^[-]?\d+$/.test(n);
}

// check 
[0, 1, 2, -1, 1.345e+17, Infinity, false, true, NaN, '1', '0'].map(function(itm){
    console.log(itm+' = '+isNumber(itm));
    return itm+'= '+isNumber(itm);
});

/*/ returned values
0 => true
1 => true
2 => true
-1 => true
134500000000000000 => true
Infinity => true
false => false
true => false
NaN => false
'1' => false
'0' => false
*/

// Not accurate in some cases, re-visit this !!!