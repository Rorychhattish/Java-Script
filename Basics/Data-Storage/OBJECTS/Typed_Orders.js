//  Your Goal: Create an Enumeration
// Let's create an enumeration like CARD_SUITS above. Our enumeration will be named ORDER_TYPES and describe the different types of orders that are possible in our system.
// The first type should be PIZZA, with a value of 0.
// After that, create at least 2 more options of your choice!
//  Get creative! Some ideas for other choices: WINGS, SALAD, BURGER, FRIES, SANDWICH.

const ORDER_TYPES = require('./orderTypes');
function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++ ){
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

module.exports = numberOfPizzas;