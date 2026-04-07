// Goal: Convert to Number
// Given a string, convert it to a number.
// If the string is not a number, return 0.
//  You will be able to tell if the string is not a number if it converts to NaN. It might be helpful to know that NaN is falsey! Additionally, you can use the typeof operator.



function toNumber(string) {
    const num = Number(string);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}

module.exports = toNumber;