//  Your Goal: Add Up Only Pizza Orders
// Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

// The orders will have a type keyword:
// const orders = [
//     { pizzas: 3, type: ORDER_TYPES.PIZZA },
//     { wings: 12, type: ORDER_TYPES.WINGS },
// ];
//  In this example we would only sum up pizzas from the first order!
// const totalPizzas = numberOfPizzas(orders);
// console.log( totalPizzas ); // 3


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