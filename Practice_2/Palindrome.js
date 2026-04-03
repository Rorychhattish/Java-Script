// Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.
// A palindrome is a word that is spelled the same forwards as it is backwards.
//  The word pop is a palindrome.


function isPalindrome(string) {
    let reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    return string === reversedStr;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
module.exports = isPalindrome;