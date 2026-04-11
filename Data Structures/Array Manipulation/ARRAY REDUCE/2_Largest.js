// Goal: Complete the Largest Value function
// It's time to complete the largest value function! Determine which is larger, the accumulator or the currentValue. Whichever is larger, return it! Then it will become the accumulator for the next iteration.



// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (currentValue > accumulator) ? currentValue : accumulator;
    }, 1);
}

module.exports = largest;