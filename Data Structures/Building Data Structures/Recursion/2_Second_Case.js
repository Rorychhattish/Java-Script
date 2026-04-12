// Goal: Handle Factorial < 2
// Keep the base case that we established in the first stage. Now create logic for when n is not 1. Let's start by making it work for 2.
// Be sure that factorial works for both 1 and 2!
// factorial(1); // 1
// factorial(2); // 2



function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

module.exports = factorial;