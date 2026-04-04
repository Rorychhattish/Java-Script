// Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

// Assume both arrays are the same length.
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// sumTogether(arr1, arr2); // returns [4, 6, 8];


function sumTogether(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        result.push(sum);
    }
    return result;
}
module.exports = sumTogether;