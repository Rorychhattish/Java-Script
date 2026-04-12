// Goal: Build Stacks
// Let's add two stacks to our OperationsManager constructor: operations and undos.
// You'll notice the Stack file has already been imported for you in OperationsManager.js. To create a new stack you can simply invoke it after the new operator new Stack().
//  We'll store operations and undos on the operations manager instance. Similar to how we stored items on our stack, use this to refer to the instance and create the instance variable for both stacks. (i.e. this.operations).
// Next, implement addOperation. This function will take the operation argument and simply add it to the top of our operations stack.
//  Do you recall how to add a new element to the top of our stack from the previous stage?
// Example use of Operations Manager:
// const manager = new OperationsManager();
// console.log( manager.operations.isEmpty() ); // true
// manager.addOperation({ drawingType: 'dot', x: 50, y: 20 });
// console.log( manager.operations.isEmpty() ); // false




const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
        this.undos = new Stack();
    }

    undo() {
        const op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        const op = this.undos.pop();
        this.operations.push(op);
    }

    redoAll() {
        while (!this.undos.isEmpty()) {
            this.redo();
        }
    }
}

module.exports = OperationManager;