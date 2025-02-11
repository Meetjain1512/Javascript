const score = 400
const balance = new Number(100)
console.log(balance)
console.log(typeof balance)
console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toFixed(2)) 
const newnum = 23.8966
console.log(newnum.toPrecision(3))
const num = 100000
console.log(num.toLocaleString('en-IN'))

// Maths
console.log(Math.PI)
console.log(Math.abs(-100)) // absolute value
console.log(Math.round(4.8)) // round off
console.log(Math.ceil(4.8)) // round up
console.log(Math.floor(4.8)) // round down
console.log(Math.pow(2,3)) // power
console.log(Math.sqrt(16)) // square root
console.log(Math.min(1,2,3,4,5)) // minimum
console.log(Math.max(1,2,3,4,5)) // maximum
console.log(Math.random()) // random number value is between 0 to 1 excluding 1
console.log((Math.random()*10)) // random number between 0 to 100
console.log(((Math.random()*10)+1))
console.log(Math.floor((Math.random()*10)+1))
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))) //has no minimum value
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //has minimum value