// Goal: Modify SquaredMap.js
// Given an array of elements in squaredMap, return an array with each element squared:
// squaredMap([2]); // [4]
// squaredMap([1,2,3]); // [1,4,9]
//  The squared function is imported for you at the top of the squaredMap.js file.



const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(squared);
}

module.exports = squaredMap;