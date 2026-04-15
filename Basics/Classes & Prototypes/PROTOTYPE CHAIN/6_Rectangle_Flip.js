// Goal: Create a Flip Function
// Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.
//  You may need to store a temporary variable in order to flip the dimensions!

// Example:
// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.height, rectangle.width); // 10, 20
// rectangle.flip();
// console.log(rectangle.height, rectangle.width); // 20, 10
//  Be careful you don't declare the method flip on Rectangle.prototype before using Object.create! The Object.create method will return a completely new object to which you can attach the method.



const Shape = require('./Shape');
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
// Testing the behavior:
const rect = new Rectangle(0, 0, 20, 40);
console.log(rect.height, rect.width); // Output: 20, 40

rect.flip();
console.log(rect.height, rect.width); // Output: 40, 20