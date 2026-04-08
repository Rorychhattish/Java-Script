// Goal: Fix the Context
// Within the function Celebrity, a method is used to fetch the celebrity's age. The second argument to fetchAge is a callback function. The callback function will receive age as an argument.
//  Unfortunately, due to the function call-site, this will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a TypeError.
// Fix this.age to refer to the same this as the function Celebrity.


const fetchAge = require('./fetchAge');
function Celebrity(name) {
    this.name = name;
    fetchAge(this.name, (age) => {
        this.age = age;
    });
}

module.exports = Celebrity;