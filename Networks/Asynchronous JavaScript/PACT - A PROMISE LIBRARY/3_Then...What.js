// Goal: Resolve Callback
// Let's ensure that resolve calls the .then callback with the resolve value!
// In the last stage, we passed two functions to the executor function. The first of these functions is the resolve function. This function should invoke the callback function passed into the then function.
//  We're going to need to set a class member variable in our then function that will store the function for later.



class Pact {
    constructor(executor) {
        this.thenCallback = null; // store callback

        const resolve = (value) => {
            if (this.thenCallback) {
                this.thenCallback(value); // call when resolved
            }
        };
        const reject = () => {};
        executor(resolve, reject);
    }
    then(callback) {
        this.thenCallback = callback; // save for later
    }

    catch(callback) {}
}
module.exports = Pact;