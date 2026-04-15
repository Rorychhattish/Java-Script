// Goal: Complete the Circle Function
// In Circle.js, you'll need to do two things:
// Pass the arguments to Shape via call.
//  Notice we are binding Circle with this using call. This way when Shape is invoked, it will store x and y on the Circle instance!
// Store radius on our Circle instance. You can do this exactly how we stored position on the Shape class.
// The final result behavior should be:
// const circle = new Circle(5,10,15);
// console.log(circle.position.x); // 5
// console.log(circle.position.y); // 10
// console.log(circle.radius); // 15



const Shape = require('./Shape');   // Shape means Move_Shape.js
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