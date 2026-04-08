// Goal: Bind it Bob
// Create a new function from thisName that is bound to an object with the name "Bob".
// Export this new function instead of thisName.
// When it is called, it should return "Bob":
// const result = newFunction();
// console.log(result); // "Bob"



function thisName() {
    return this.name;
}
const boundFunction = thisName.bind({ name: "Bob" });

module.exports = boundFunction;