// Goal: Sort Numbers Ascending
// Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.


function sortUp(array) {
    const result = array.sort((a, b) => a - b);
    return result;
}

module.exports = sortUp;