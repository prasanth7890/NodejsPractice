const fs = require("fs");

// fs.writeFile("read.txt", "today is awsome!", (err) => {
//     console.log('Task Completed!');
// });

//we pass them a function as an argument - a callback - 
// that gets called when that task completes
// the callback has an argument that tells you whether
// the operation completed succesfully
// Now we need to say what to do when fs.writeFile
// has completed (even if its nothing), and start
// checking for errors.

// fs.appendFile("read.txt", 'Hello World from prasanth', (err) => {
//     console.log('completed');
// });

fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});
