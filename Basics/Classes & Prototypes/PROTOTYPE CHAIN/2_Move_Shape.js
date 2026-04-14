// Goal: Add Move Function
// Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.
// It should move the shape's position by adding the corresponding arguments value:
// const shape = new Shape(1, 1);
// shape.move(1, 4);
// console.log( shape.position.x ); // 2
// console.log( shape.position.y ); // 5




// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {
        x: x,
        y : y
    };
}
// Adding move function to Shape's prototype
Shape.prototype.move = function (x, y) {
    // Current position ma x ra y add garne
    this.position.x += x;
    this.position.y += y;
};

module.exports = Shape;