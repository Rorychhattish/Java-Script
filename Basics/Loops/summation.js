// We want to write a function summation that will find the sum of all the values from 1 to (and including) n. The value n is passed into our function.
// Similar to the for loop above, you can initialize some value i to start at 1. The value should reach n but never exceed it.

function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
module.exports = summation;