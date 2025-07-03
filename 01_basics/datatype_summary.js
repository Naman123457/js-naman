//  Primitive

//const { useInsertionEffect } = require("react");

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
let myCourse="javascript from basic"
let myCourse2=myCourse
myCourse2="i am naman"
console.log(myCourse)
console.log(myCourse2)
let useOne={
    email:"carry69yt@gmail.com",
    name:"naman"
}
let useTwo=useOne
useTwo.email="naman.kumar0418@gmail.com"
console.log(useOne.email)
console.log(useTwo.email)
/*
useOne is an object (non-primitive).

useTwo = useOne means both variables reference the same object in memory.

So, when you modify useTwo.email, it also changes useOne.email — because they both point to the same object
*/