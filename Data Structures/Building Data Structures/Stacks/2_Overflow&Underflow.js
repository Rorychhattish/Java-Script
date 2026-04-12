// Goal: Throw Errors
// Ok, let's throw errors for stack overflows and underflows within our Stack class.
// If executing push will exceed the MAX_STACK_SIZE, throw an Error.
// MAX_STACK_SIZE is a number value. The number of elements in the items array cannot exceed this number.
// If a pop is attempted on a stack with zero elements, throw an Error.
//  To throw an Error, you can throw new Error("any error message"). 



const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length >= MAX_STACK_SIZE) {
            throw new Error("Stack Overflow: Cannot add more items.");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow: Cannot pop from an empty stack.");
        }
        return this.items.pop();
    }
    isEmpty() {
        if ( this.items.length == 0){
        return true;
        }
        else{
             return false;
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
