// Goal: Group by Type
// Finish the function group. Sort each food by it's type and return an object in the format shown above.
// Don't depend on the types to only be "fruit" and "vegetable". We will be testing for additional food types in the test cases, so no hardcoding string values!
//  For the initial value, think about what you want that final value to look like. In the last one stage we finished with an array, so we chose an initial value of [].



// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        const type = currentValue.type;
        if (!accumulator[type]) {
            accumulator[type] = [];
        }
        accumulator[type].push(currentValue.food);
        return accumulator;
    }, {});
}

module.exports = group;