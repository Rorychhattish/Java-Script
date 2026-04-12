// Goal: Implement Redo All
// Let's go ahead and implement redoAll where we keep redo-ing until we have no more undos left.



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