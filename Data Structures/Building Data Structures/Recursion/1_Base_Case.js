// Goal: Base Case
// Let's add a base case to the function factorial. A factorial is an integer times every positive integer below it.
// factorial (4); // 4 * 3 * 2 * 1 = 24
// Let's start with the base case for a factorial function: 1.
// Your task for this stage is simple: If n is equal to 1 return 1.
// console.log( factorial(1) ); // 1



function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

module.exports = factorial;