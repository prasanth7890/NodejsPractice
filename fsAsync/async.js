const fs = require("fs");


//      sync
//in synchronous methods waits for each function to execute one by one 
// and displays the output in same order 
// even if it is taking more time

const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);
console.log("after the data");

// Output:
// today is awsome!Hello World from prasanthHello World from prasanth
// after the data

//.....................................................

//      Async
// asynchronous methods executes gives which output comes first 
// irrespective of the order they called
const data = fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('async testing');

// output:
// async testing
// today is awsome!Hello World from prasanthHello World from prasanth