// Write a function countElements that takes in an array and returns an object a count of each element in the array.
// const elements = ["e", "k", "e", "z", "i", "z"];
// countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}


function countElements(elements) {
    let counts = {};
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (counts[element]) {
            counts[element] += 1;
        }
        else {
            counts[element] = 1;
        }
    }
    return counts;
}

module.exports = countElements;