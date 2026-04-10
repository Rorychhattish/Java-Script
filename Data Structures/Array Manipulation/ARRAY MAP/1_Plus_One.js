// Goal: Map Add One
// Take the array arr and add one to every element, return the resulting array.



function plusOne(arr) {
    return arr.map((num) => {
        return num + 1;
    });
}

module.exports = plusOne;