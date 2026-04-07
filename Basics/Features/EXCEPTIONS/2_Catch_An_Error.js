// Goal: Catch an Error!
// The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.
// The tests will pass as long as the function is called and the exception is caught.


function catchError(fn) {
    try {
        fn();   // function call (this will throw error)
        return false;
    }
    catch (error){
        //error caught
        return error;
    }
}

module.exports = catchError;
