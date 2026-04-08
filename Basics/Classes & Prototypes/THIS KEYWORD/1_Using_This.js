// Goal: Get Name
// Create a function which retrieves the property name on this.

// You can expect the property to exist. Example:
// const name = thisName.call({ name: 'Ted' }); 
// console.log(name); // Ted



function thisName() {
    return this.name;
}
const boundFunction = thisName.bind({ name: "Bob" });

module.exports = boundFunction;