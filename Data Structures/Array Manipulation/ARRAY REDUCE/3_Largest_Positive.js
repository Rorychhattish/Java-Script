// Goal: Add the initial value
// Just like the illustration above, we want our initial value to be 1. This way, if there are no positive values we will just return 1.



// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (currentValue > accumulator) ? currentValue : accumulator;
    }, 1);
}

module.exports = largest;