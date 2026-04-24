// Goal: Writing the Constructor
// We'll need to declare a new constructor on Pact. This constructor will take an executor function as it's only argument.
// The executor function should be called immediately from the constructor with two arguments of it's own, both of which are new functions.
// Let's take a closer look at the executor function example and consider how we can achieve this functionality.
// For Pact it should look like this:
// const pact = new Pact((resolve, reject) => {
//     console.log(typeof resolve); // function
//     console.log(typeof reject); // function
// });
//  If you can make the above comments true, you'll pass the tests! You'll need to ensure that both resolve and reject are functions passed to the executor.




class Pact {
    constructor(executor) {
        // Define the resolve and reject functions to pass to the executor
        const resolve = () => {
            // Logic for resolving the promise will go here
        };
        const reject = () => {
            // Logic for rejecting the promise will go here
        };
        // The executor is called immediately with our two new functions
        executor(resolve, reject);
    }
    then(callback) {
        // Registered success callback
    }

    catch(callback) {
        // Registered error callback
    }
}
module.exports = Pact;