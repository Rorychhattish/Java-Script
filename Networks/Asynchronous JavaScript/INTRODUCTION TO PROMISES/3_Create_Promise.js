// Goal: Return a Resolved Promise
// Within the timer function, return a new resolved promise.
//  There is no need to do anything inside the executor function other than invoke the resolve function.




function timer() {
    // 1. Naya Promise instance create garne
    return new Promise((resolve) => {
        // 2. setTimeout use garera execution lai 1 second (1000ms) delay garne
        setTimeout(() => {
            // 3. Ek second pachi Promise lai resolve (success) garne
            resolve();
        }, 1000);
    });
}
module.exports = timer;