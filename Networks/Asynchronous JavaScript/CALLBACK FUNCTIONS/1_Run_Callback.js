// Goal: Complete Run Callback
// Let's try this out for ourselves! Complete the function runCallback to invoke callbackFunction immediately.



/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}
module.exports = runCallback;