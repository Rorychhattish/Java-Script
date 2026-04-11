// Goal: Filter Less Than 5
// Given an array of elements, find the elements whose value is less than 5. Return the resulting array.



function onlyTrue(array) {
    return array.filter((val) => {
        return val === true;
    });
}

module.exports = onlyTrue;