// Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];
        if (!uniqueArray.includes(currentNumber)) {
            uniqueArray.push(currentNumber);
        }
    }
    return uniqueArray;
}

module.exports = unique;