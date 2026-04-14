// Goal: Complete the Shape Function
// The Shape function will take two arguments: x and y. Store these values in an object position on the instance (this).
//  For reference see this example. The tests will invoke Shape with the new keyword, creating an object and setting it to this within the function.
// The position should have keys x and y containing the corresponding values:
// const shape = new Shape(5, 10);
// console.log(shape.position.x) // 5
// console.log(shape.position.y) // 10
//  Notice that position is an object with two keys x and y!




const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x,y/* pass arguments to shape */);
    // store radius on this
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;

// Testing the code:
const circle = new Circle(5, 10, 15);
console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius);     // 15