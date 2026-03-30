// Reverse
// Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.
// For example, reverse("cat") would return the string "tac".


function reverse(string) {
    let reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    return reversedStr;
}

module.exports = reverse;