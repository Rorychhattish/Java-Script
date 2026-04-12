// Goal: Generalize!
// Let's make factorial work for every positive integer!
// factorial(5); // 120 
//  Factorial of 5 is 5 * 4 * 3 * 2 * 1 or 120.



function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

module.exports = factorial;