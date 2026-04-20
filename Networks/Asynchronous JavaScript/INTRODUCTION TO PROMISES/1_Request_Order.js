// Goal: Make the Food!
// We need to make some food! 
// When the customer asks for food, the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.
//  The makeFood function is imported at the top of the file from Kitchen.
// Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.



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