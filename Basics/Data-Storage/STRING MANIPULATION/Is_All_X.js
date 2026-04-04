// Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.

// Examples:
// isAllX("Xx"); // true
// isAllX("xAbX"); // false

function isAllX(string) {
    for(let i = 0; i < string.length; i++){
        const char = string[i];
        if (char !== "x" && char !== "X") {
            return false;
        }
    }
    return true;
}
module.exports = isAllX;