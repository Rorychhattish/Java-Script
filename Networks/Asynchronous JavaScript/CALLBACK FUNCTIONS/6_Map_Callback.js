// Goal: Complete the Map Function
// Map each element in the array to its new value returned by the callback function.
// Just like the previous stage, you'll want to run a function on each element in the array. Only this time you'll need to create a new array which you'll return at the end of the map iteration.



function map(array, callback) {
    // 1. Naya array initialize garne
    const mappedArray = [];
    // 2. Loop lagayera harek element check garne
    for (let i = 0; i < array.length; i++) {
        // 3. Callback le return gareko naya value lai results array ma thapne
        const result = callback(array[i], i);
        mappedArray.push(result);
    }
    // 4. Pura process sakiye-pachi naya array return garne
    return mappedArray;
module.exports = map;