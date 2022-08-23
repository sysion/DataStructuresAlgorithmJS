//Size of Associative Array

Object.size = function(arr) {
    var size = 0;

    for (var key in arr) {
        if (arr.hasOwnProperty(key)) size++;
    }

    return size;
};

//arr = {dog: 'alsatian', monkey: 'whitehead', lizard: 'agama', cat: 'lynx'};                   // 4
//arr = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6'};           // 6
arr = {'nursery': 13, 'primary': 22, 'secondary': 47};                                        // 3
console.log(Object.size(arr));