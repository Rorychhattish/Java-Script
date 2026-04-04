// Goal: Handle an Undefined
// The double function here is almost complete! We also want double to be able to handle when x is undefined.

// Example:
// const result = double(); 
// console.log(result); // 0
// If no value is provided for x, return 0.
//  Be careful with order of operations here! In the expression x || y * z the y * z will evaluate before x || y unless you use a parenthesis: (x || y) * z.


function double(x) {
    return (x || 0 ) * 2;
}

module.exports = double;