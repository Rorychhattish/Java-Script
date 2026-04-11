// Goal: Finish the function to remove all duplicates
// Use the example provided in the details tab to guide you. You'll want to provide an initial value here that will eventually lead you towards your goal. Then you'll continue to accumulate non-duplicate numbers until you have an array that is full of only unique numbers.



// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

module.exports = removeDuplicates;