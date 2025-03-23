
var pizza = [
    { name: 'maggheritta', price: 8 },
    { name: 'peperonni', price: 10 },
    { name: 'anchovis', price: 6 },
    { name: 'plain', price: 4 }
];
var cashInRegister = 100;
var newOrderId = 1;
var orderQueue = [];
// const NewPizza=(name,price)=>{
//     const newObj = {name: name, price: price}
//     pizza.push(newObj)
// console.log(pizza)
// }
// NewPizza('newtwo',30)
// NewPizza('crape',32)
function PlaceOrder(name) {
    var getPizza = pizza.find(function (menu) {
        return menu.name == name;
    });
    if (!getPizza) {
        return (" we don't have ".concat(getPizza, " in our menu "));
    }
    cashInRegister += getPizza.price;
    var orderobj = { pizza: getPizza.name, status: 'ordered', id: newOrderId++ };
    orderQueue.push(orderobj);
    console.log(orderobj);
    console.log(getPizza);
    console.log(cashInRegister);
    console.log(orderQueue);
    // return orderQueue
}
PlaceOrder('plain');
PlaceOrder('peperonni');
function completeOrder(id) {
    var order = orderQueue.find(function (order) {
        return order.id == id;
    });
    if (!order) {
        return ('order not found');
    }
    console.log(order.status);
    order.status = 'completed';
}
