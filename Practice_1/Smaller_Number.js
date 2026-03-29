// The function smallerNumber will be given two unequal numbers: num1 and num2.
// Your goal is to find the smaller number and return it!
// Example Usage:

// console.log( smallerNumber(3, 5) ); // 3

function smallerNumber(num1, num2) {
    if (num1 < num2){
        return num1;
    }
    else if (num2 < num1){
        return num2;
    }
}

module.exports = smallerNumber;