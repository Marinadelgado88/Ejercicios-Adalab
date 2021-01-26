"use strict"
const pearsBasket = {
    initialValue:2,
    currentValue:4,
    maxValue:10,
    minValue:1,
    increment: () => 
    pearsBasket.currentValue +=3
}

console.log(`El valor actual es ${pearsBasket.currentValue}`)
console.log(`El valor incrementado será ${pearsBasket.increment()}`)

pearsBasket.substract=() => 
pearsBasket.currentValue -=1;

// esta es otra forma de hacerlo, pero es lo  mismo
console.log(`La resta sería ${pearsBasket.substract()}`)


/*

pearsBasket.reset=() => 
pearsBasket.currentValue = initialValue;)*/
