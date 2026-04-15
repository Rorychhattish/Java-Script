// Goal: Complete the Rectangle
// Complete the Rectangle function and link its prototype to Shape's prototype.
// This will be similar to our Circle! Rectangle will be a Shape plus a couple properties: height and width. We'll want to store these on the Rectangle instance.
// const rect = new Rectangle(0, 0, 20, 40);
// console.log(rect.x, rect.y); // 0, 0
// console.log(rect.height, rect.width); // 20, 40



const Shape = require('./Shape');        // Shape means Move_Shape.js
function Rectangle(x, y, height, width) {
    //Pass the arguments to Shape via call
    Shape.call(this, x, y);
    //Store height and width on the Rectangle instance
    this.height = height;
    this.width = width;
}
//Link Rectangle.prototype to Shape.prototype
Rectangle.prototype = Object.create(Shape.prototype);
//Reset the constructor
Rectangle.prototype.constructor = Rectangle;
//Create a function flip on the rectangle prototype
Rectangle.prototype.flip = function () {
    // Storing height in a temporary variable to flip
    let temp = this.height;
    this.height = this.width;
    this.width = temp;
};
module.exports = Rectangle;

//Test
const rect = new Rectangle(0, 0, 20, 40);
console.log(rect.height, rect.width); // Output: 20, 40
rect.flip();
console.log(rect.height, rect.width); // Output: 40, 20