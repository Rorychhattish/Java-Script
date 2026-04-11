// Goal: Complete the function
// Applying what you've learned, complete the function sum by adding together the accumulator and the currentValue.



// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (currentValue > accumulator) ? currentValue : accumulator;
    }, 1);
}

module.exports = largest;