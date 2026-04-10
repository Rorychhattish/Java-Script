// Goal: Take the Square Root
// Using the squareRoot function, map each element in the array arr to its square root. Return the new array.
// const result = squareRoot([2,4,9]);
// console.log( result ); [1,2,3]
//  You can use the built-in function Math.sqrt which takes one single argument and returns the square root of that argument.



function squareRoot(arr) {
    return arr.map(Math.sqrt);
}
module.exports = squareRoot;

// Testing the code:
const result = squareRoot([1, 4, 9]);
console.log(result); // Output: [1, 2, 3]