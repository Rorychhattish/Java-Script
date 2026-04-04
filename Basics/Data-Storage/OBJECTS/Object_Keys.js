// Given an object, find the number of keys inside the object. Return this number.

function numberOfKeys(object) {
    const keys = Object.keys(object);
    return keys.length;
}

module.exports = numberOfKeys;