//importing required modules
const fs = require("fs");

//Creating a Folder named it thapa
fs.mkdirSync("Thapa");

//create a file in it named it bio.txt and data into it.
fs.writeFileSync("Thapa/bio.txt", "Random Text is Added Now");

// Add more data into the file at the end of the existing data.
fs.appendFileSync("Thapa/bio.txt", " this more text is added at the end.");

// Read the data without getting the buffer data at first.(file encoding)
const originalData = fs.readFileSync("Thapa/bio.txt",'utf-8');
console.log('File Content:\n', originalData);

// rename the file name to mybio.txt
fs.renameSync('Thapa/bio.txt', 'mybio.txt');

//delete both the file and the folder
fs.unlinkSync('mybio.txt');
fs.rmdirSync('Thapa');


