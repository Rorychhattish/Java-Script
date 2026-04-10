// Goal: Sort Strings Descending
// Now it's time to flip the sort!
// Given an array of strings, sort the strings in descending order ('c','b','a'...) and return the resulting sorted array.



function sortStringsDown(array) {
    const result = array.sort().reverse();
    return result;
}

module.exports = sortStringsDown;