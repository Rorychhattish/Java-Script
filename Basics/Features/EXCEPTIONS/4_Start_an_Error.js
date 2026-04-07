// Goal: Start an Error
//  Write code that will make one of these errors occur.
// As long as any of the error types mentioned above are thrown, the test cases will pass.


function startError() {
    const x = 3;
    x(); // TypeError: x is not a function
}

module.exports = startError;