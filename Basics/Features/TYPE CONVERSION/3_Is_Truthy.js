// Goal: Is it Truthy?
// Given some value a return whether or not the value is truthy.
//  Remember that truthy values are any value excluding falsey values: false, 0, "", null, undefined, and NaN.


function isTruthy(a) {
    return !!a;
}

module.exports = isTruthy;