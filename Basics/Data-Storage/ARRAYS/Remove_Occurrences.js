// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
// Modify the array directly and do not return anything from this function.

// An example:
// const array = [1, 2, 3, 1];
// removeOccurrences(array, 1);
// console.log( array ); // [2, 3]
//  Note: Be careful here with modifying the array. You cannot re-assign the array argument passed in, otherwise the original array will not be updated. Instead, you'll need to modify the array directly using splice or something similar.

function removeOccurrences(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1); 
        }
    }
}

module.exports = removeOccurrences;