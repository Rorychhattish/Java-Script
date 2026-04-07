// Goal: Combine Two Values
// Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string.
//  All 3 of the types mentioned above have the method .toString() available.



function combineToString(a, b) {
    return a.toString() + b.toString();
}

module.exports = combineToString;