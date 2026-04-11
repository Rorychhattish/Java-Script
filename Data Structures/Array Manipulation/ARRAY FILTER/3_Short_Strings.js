// Goal: Keep Short Strings
// Given an array of strings, keep only the strings whose length is at most 3.

// An example:
// const result = shortStrings([
//     'abc',
//     'a',
//     'apples',
//     'television'
// ]);
// console.log(result); // ['abc', 'a']



function shortStrings(array) {
    return array.filter((str) => {
        return str.length <= 3;
    });
}

module.exports = shortStrings;