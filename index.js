// core modules in js
// creating a file using coremodules - demo

const fs = require("fs");
const { buffer } = require("stream/consumers");

//this method is used to create(if not exists) / updates the file specified with
//data provided.
fs.writeFileSync('read.txt', 'welcome to my laptop');

fs.writeFileSync('read.txt', 'prasanth, welcome to my laptop'); // updates the existed file

//appends the text specified to file
fs.appendFileSync('read.txt', "\nhow are you im fine thank you");

//read the file contents
const buffer_data = fs.readFileSync("read.txt");
// console.log(buffer_data);

// OUTPUT

 // <Buffer 70 72 61 73 61 6e 74 68 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 6c 61 70 74 6f 70 0a 68 6f 77 20 61 72 65 20 79 6f 75 20 69 6d 20 66 69 6e 65 ... 10 more bytes>

// reason is stated below:
//      node.js includes an additional data type called Buffer
//      (not available in browser's javascript)
//      Buffer is mainly used to store binary data
//      while reading from a file or receiving packets over the network.

//how to get the orginal data??
// to tackle this situation use .toString
original_Data = buffer_data.toString();
console.log(original_Data);


// to rename the file
fs.renameSync("read.txt", 'readmodified.txt');  //old file name, newfilename as parameters.