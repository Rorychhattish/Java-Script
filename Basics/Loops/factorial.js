// Taking in some integer value n, find the factorial for that number and return it.
//  Be careful not to multiply by 0! If you do, you'll wind up with 0 as a result.

function factorial(n) {
    let result = 1;
    for( let i = 1 ; i <= n; i++ ){
        result = result * i;
    }
    return result;
}

module.exports = factorial;