// Goal: Implement Helper Functions
// Implement isEmpty to return a boolean if items is empty.
//  For bonus points, use this method in pop to check for underflow!
// Implement peek to return the top element in items without changing the array.



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
