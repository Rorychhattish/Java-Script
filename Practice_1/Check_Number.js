// The function checkNumber takes a single argument: a number num
// The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.
// Example Usage:
// console.log( checkNumber( -3 ) ); // negative
// console.log( checkNumber( 0 ) ); // zero
// console.log( checkNumber( 2 ) ); // positive

function checkNumber(num) {
    if (num > 0){
        return "positive";
    }
    else if (num < 0){
        return "negative";
    }
    else {
        return "zero";
    }
}
console.log(checkNumber(-3)); // negative
console.log(checkNumber(0)); // zero
console.log(checkNumber(2)); // positive
module.exports = checkNumber;