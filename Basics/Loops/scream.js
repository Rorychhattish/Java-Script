// Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times. For example:
// scream(5); // "aaaaa"
// scream(10); // "aaaaaaaaaa"
//  You can start with an empty string by assigning "" to a variable. let str = "";

function scream(n) {
    let result = "";
    for(let i = 0 ; i < n ; i++ ){
        if(i % 2 === 0) {
            result += "a";
        } 
        else {
            result += "A";
        }
    }
    return result;
}
console.log(scream(5));
console.log(scream(10));

module.exports = scream;