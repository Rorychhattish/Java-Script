// Goal: Multiple Callbacks
// Our Pact class wouldn't be complete if we couldn't wire up multiple .then and .catch callbacks!
// Let's give it a shot. So we're trying accomplish this:
// let pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 100);
// });
// pact.then((val) => {
//     console.log(val); // 42
// });
// pact.then((val) => {
//     console.log(val); // 42
// });
// We also want to do the same for catch and reject:
// let pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         reject(42);
//     }, 100);
// });
// pact.catch((val) => {
//     console.log(val); // 42
// });
// pact.catch((val) => {
//     console.log(val); // 42
// });
//  This could be a bit of a tricky re-factor. Instead of storing one function with catch and reject,
//  we'll want to be able to hold any number of functions and callback each of them with the resolve/reject value. How do we hold multiple values? 



class Pact {
    constructor(executor) {
        this.thenCallbacks = [];   // store multiple then callbacks
        this.catchCallbacks = [];  // store multiple catch callbacks

        const resolve = (value) => {
            this.thenCallbacks.forEach(cb => cb(value));
        };

        const reject = (error) => {
            this.catchCallbacks.forEach(cb => cb(error));
        };
        executor(resolve, reject);
    }

    then(callback) {
        this.thenCallbacks.push(callback); // add to array
    }

    catch(callback) {
        this.catchCallbacks.push(callback); // add to array
    }
}
module.exports = Pact;