// Goal: Link the prototypes
// Use Object.create to link Circle.prototype to Shape.prototype.
// This will ensure that any methods on Shape.prototype will also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); just like we did on the shape instance!


const Shape = require('./Shape');       // Shape means Move_Shape.js
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