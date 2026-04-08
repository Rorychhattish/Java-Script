// Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise.


function eitherNotBoth(num) {
    const divBy3 = num % 3 === 0;
    const divBy5 = num % 5 === 0;
    return divBy3 !== divBy5;
}

module.exports = eitherNotBoth;