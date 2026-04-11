// Goal: Find the Unique Values
// Given an array of values, return an array of unique values.
// Keep in mind what you learned in the previous stage about the index passed to the filter function. It will continue to increase, while indexOf will always return the first index of the value.



function unique(array) {
    return array.filter((el, i) => {
        return array.indexOf(el) === i;
    });
}

module.exports = unique;