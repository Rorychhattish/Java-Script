// Let's find the longer half of the string before and after the x!
// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
// Take the longer string and return it!
// This will be a tough function to write! Using everything you learned, you will be able to accomplish it. (You got this! )

// Examples:
// splitAtX("Happyxdays"); // "Happy"
// splitAtX("10xDeveloper"); // "Developer"
//  For the string "Happyxdays", we would look at the two strings before and after the x: "Happy" and "days". "Happy" is longer, so we would return it.

function splitAtX(string) {
    const index = string.indexOf("x");
    const before = string.slice(0, index);
    const after = string.slice(index + 1);
    if (before.length > after.length) {
        return before;
    } else {
        return after;
    }
}

module.exports = splitAtX;