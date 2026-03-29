// Given an integer value num, determine if it is even.
// If it is even, return true. Return false otherwise.
// Example Usage:
// console.log( isEven(1) ); // false
// console.log( isEven(4) ); // true

function isEven(num) {
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(1));
console.log(isEven(4));
module.exports = isEven;