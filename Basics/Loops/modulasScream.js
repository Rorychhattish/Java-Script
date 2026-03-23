// Let's modify our function to return a scream alternating between lower and capital case. For example:
// console.log( scream(5) ); // aAaAa
// console.log( scream(10) ); // aAaAaAaAaA
//  We'll need to add a capital "A" and lower-case "a" on alternating iterations. How might we do this with the modulus operator?

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