// Your Goal: Find the Number of Pizzas
// Find the number of pizzas in an order object.

// The object will look like this:
// const order = {
//     pizzas: 3,
//     extraCheese: true,
//     deliveryInstructions: "Round the back, please!",
// };
//  The function should take this order and retrieve the number of pizzas:
// const totalPizzas = numberOfPizzas(order);
// console.log( totalPizzas ); // 3


function numberOfPizzas(order) {
return order.pizzas;
}

module.exports = numberOfPizzas;