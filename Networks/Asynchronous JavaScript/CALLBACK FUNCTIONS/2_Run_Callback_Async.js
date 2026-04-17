// Goal: Make Run Callback Asynchronous
// Let's modify runCallback to make callbackFunction run asynchronously.
// Just like the example above, use setTimeout and invoke callbackFunction 1000 milliseconds (1 second) after runCallback has been called.



class Dialog {
    constructor() {
        // Sabaivanda pahila callbacks store garna array banaune
        this.callbacks = [];
    }
    onClose(callbackFunction) {
        // Naya callback lai array ma thapdai jane (Multiple storage)
        this.callbacks.push(callbackFunction);
    }
    close() {
        // Array ma vayejati sabai functions lai loop lagayera execute garne
        this.callbacks.forEach((callback) => {
            callback();
        });
    
    }
}
module.exports = Dialog;