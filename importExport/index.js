// const add = require("./oper") //to import use this statement

// const oper = require("./oper") // returns an object contains all exported methods and 
// variables

// we also can get the module in another format
const {sub, add} = require("./oper");

// console.log(add(5,5));
// console.log(sub(5,5));

// how to access multiple methods from object we got
// just access using . operator
// console.log(oper.add(5,5));
// console.log(oper.sub(5,5));


// for last format we dont have to use . operator 
console.log(add(5,5));
console.log(sub(5,5));
