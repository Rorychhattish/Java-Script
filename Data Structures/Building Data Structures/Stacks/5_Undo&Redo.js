// Goal: Implement Undo and Redo
// Let's go ahead and implement undo and redo within OperationsManager.
// Push and pop your way to victory!




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