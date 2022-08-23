// isInteger
function checkIsInteger(num) {
  if (Number.isInteger(num)) {
    return true;
  }
  return false;
}

//num = 4;      // true
num = 6.1;    // false

console.log(checkIsInteger(num));