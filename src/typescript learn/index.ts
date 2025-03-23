type obj = {
    pizza : string;
    status : string;
    id: number
}
type pizzaStructure = {
    name: string
    price : number
}

const pizza: pizzaStructure[] = [
    {name: 'maggheritta',price :8},
    {name: 'peperonni',price :10},
    {name: 'anchovis',price :6},
    {name: 'plain',price :4}
]

let cashInRegister = 100
let newOrderId = 1 
const orderQueue: obj[] = []

// const NewPizza=(name,price)=>{
//     const newObj = {name: name, price: price}
//     pizza.push(newObj)
// console.log(pizza)
// }
// NewPizza('newtwo',30)
// NewPizza('crape',32)

function PlaceOrder(name: string){
const getPizza = pizza.find((menu)=>{
    return menu.name == name
})
if(!getPizza){
  return(` we don't have ${getPizza} in our menu ` )
}
cashInRegister += getPizza.price
const orderobj:obj = {pizza : getPizza.name,status: 'ordered' , id: newOrderId++ }
orderQueue.push(orderobj)
console.log(orderobj)
console.log(getPizza)
console.log(cashInRegister)
console.log(orderQueue)
// return orderQueue

}

PlaceOrder('plain')
PlaceOrder('peperonni')

function completeOrder(id:number){
const order = orderQueue.find((order)=>{
    return order.id == id
})
if(!order){
return('order not found')
}
console.log(order.status)
order.status = 'completed'
}

