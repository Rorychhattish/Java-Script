// Goal: Asynchronous Timer
// Let's modify the timer executor function to resolve after one second.
// You can run code after one second by using a timeout:
// setTimeout(function() {
//     // do something in here
// }, 1000);



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