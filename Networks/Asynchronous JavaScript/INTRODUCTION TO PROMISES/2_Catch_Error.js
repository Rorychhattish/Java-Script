// Goal: Handle Rejection
// What if the kitchen was all out of a particular ingredient? Let's be sure to catch an error from the makeFood promise.
// When we need to create a new order, we'll request the food:
// const order = new Order();
// order.request({ burgers: 1 });
// If there is an error on the request, it should be stored on the order:
// console.log(order.error); // Out of buns
//  Be sure to store the error on the order instance just like isReady!




const { makeFood } = require('./Kitchen');
class Order {
    constructor() {
        this.isReady = false;
        // Error store garna euta naya property initialize garne
        this.error = null;
    }
    request(food) {
        // makeFood call garne
        makeFood(food)
            .then(() => {
                // Success: Food ready bhayo
                this.isReady = true;
            })
            .catch((err) => {
                // Rejection: Kitchen ma kehi samasya bhayo (e.g., "Out of buns")
                // Aayeko error lai order instance ma store garne
                this.error = err;
            });
    }
}
module.exports = Order;