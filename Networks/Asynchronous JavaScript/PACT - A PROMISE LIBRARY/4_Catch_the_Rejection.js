// Goal: Catch the Rejection
// Let's give our Pact users the ability to handle a reject callback as well as a resolve.
// Similar to our last example, except now we'll want to handle reject with catch:
// const pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         reject(42);
//     }, 500);
// });
// pact.catch((value) => {
//     console.log(value); // 42
// });



class Pact {
    constructor(executor) {
        this.thenCallback = null;
        this.catchCallback = null;

        const resolve = (value) => {
            if (this.thenCallback) {
                this.thenCallback(value);
            }
        };

        const reject = (error) => {
            if (this.catchCallback) {
                this.catchCallback(error);
            }
        };
        executor(resolve, reject);
    }

    then(callback) {
        this.thenCallback = callback;
    }

    catch(callback) {
        this.catchCallback = callback;
    }
}
module.exports = Pact;