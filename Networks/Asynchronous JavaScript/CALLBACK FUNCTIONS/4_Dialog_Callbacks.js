// Goal: Accept Multiple Callback Functions
// Let's add the ability to wire up multiple callback functions.
// Each time onClose is called, we'll need to store an additional callback function on our dialog class. Once close is called, we'll invoke all of those callback functions.
//  This may require you to initialize an array on the Dialog class. If you need some place for initialization code, the constructor is a great place! Remember the constructor is called once, when a new instance is created.



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