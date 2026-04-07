// Goal: Create Valid JSON
// Create JSON that can be parsed to a person object with 3 properties:
// name: with any string value
// age: with any number value
// isReal: with any boolean value
// An example of parsing the personJSON should work like this:
// const person = JSON.parse(personJSON);
// console.log(person.name); // "Harry Potter"
// console.log(person.age); // 18
// console.log(person.isReal); // false
//  Have fun with this! Got a favorite fictional character? 
//  JSON can be pretty strict! If you get SyntaxError: Unexpected token, you can look up JSON rules on MDN


const personJSON = `
    {
        "name": "Hack with 36",
        "age": 22,
        "isReal": true
    } 
`;

module.exports = personJSON;