// Goal: Complete Dialog Functions
// We're going to write two functions for our dialog component:
// onClose - This method will take a callback function as an argument and store it on our Dialog instance.
// close - This function will be used to close the dialog. When we close the dialog, we'll want to call the callbackFunction.
// In practice, when we want to use the Dialog component, we could wire up some logic to execute when a specific dialog is closed. For example, we could refresh the data on the page:
// const dialog = new Dialog();
// dialog.onClose(function() {
//     // refresh data on the page to reflect state 
//     // changes made inside of the dialog
//     refreshData(); 
// });
//  Remember in the last stage the callback was invoked asynchronously by setTimeout. This callback is similar! The main difference here is the close function is kicked off by the user when they click out of the dialog.




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