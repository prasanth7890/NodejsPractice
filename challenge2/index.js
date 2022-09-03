// challenge 2  - Asynchronous CRUD

// creating a folder named thapa
const fs = require('fs');

// fs.mkdir("Thapa", (err) => {
//     console.log('Folder Created Succesfully');
// });

//create a file in it named bio.txt and insert some data
// fs.writeFile("Thapa/bio.txt", "Inserting some data using asynch methods",(err)=>{
//     console.log("textfile Created");
// });

// add more data into the file at the end
// fs.appendFile("Thapa/bio.txt", "adding some text at the end", ()=> {
//     console.log('appending data success');
// });

//read the data without getting the buffer data
// fs.readFile("Thapa/bio.txt", 'utf-8', (err, data) =>{
//     console.log(data);
// });

//rename file to mybio.txt
// fs.rename('Thapa/bio.txt', 'mybio.txt', ()=> {
//     console.log("Renamed to mybio.txt");
// });

//now delete both the file and the folder
// fs.unlink('Thapa/mybio.txt', ()=> {
//     console.log('File Deleted');
// });

