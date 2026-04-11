// Goal: Only True
// We can apply the same filtering logic to booleans.
// Given an array of booleans, keep only the true values:
// Only True
// Return the resulting array.



function onlyTrue(array) {
    return array.filter((val) => {
        return val === true;
    });
}

module.exports = onlyTrue;