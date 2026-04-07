// Goal: Return in our Function
// Modify catchError to return the error if one is thrown.
// If no error is thrown, return false.


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