// Goal: Sort Numbers Descending
// Given an array of numbers sort them in descending order and return the array.



function sortDown(array) {
    const result = array.sort((a, b) => b - a);

    return result;
}

module.exports = sortDown;