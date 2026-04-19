// Goal: Complete the ForEach function
// This function will take two parameters:
// An array of elements
// A callback function that we want to run for each element in the array
// Be sure to call the callback function with both the current element in the array and the zero-based index.

// Example:
// forEach(['a','b','c'], (e,i) => {
//     console.log(e,i);
// });
// The console.log line should run three times, logging:
// a, 0
// b, 1
// c, 2



function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    // Array ko harek element ma pugna 'for' loop use garne
    for (let i = 0; i < arr.length; i++) {
        // Callback function lai current element ra index pathayera call garne
        callback(arr[i], i);
    }
}
module.exports = forEach;