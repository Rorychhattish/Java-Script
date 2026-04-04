// Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
// If the first character is x return true. If not, return false.
// console.log( startsWithX("x") ); // true
// console.log( startsWithX("zyx") );  // false

function endsWithX(string) {
    const lastIndex = string.length - 1;
    const lastChar = string[lastIndex];
    if(lastChar === "X" || lastChar === "x"){
        return true;
    }
    else{
        return false;
    }
}

module.exports = endsWithX;