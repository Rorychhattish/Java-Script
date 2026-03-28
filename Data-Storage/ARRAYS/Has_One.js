// Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

// console.log( hasOne([1,2,3]) ); // true
// console.log( hasOne([1,1,1]) ); // true
// console.log( hasOne([4,5,6]) ); // false

function hasOne(array) {
    for (let i = 0; i < array.length; i++)
        if(array[i] === 1){
        return true;
    }
    return false;
}

module.exports = hasOne;