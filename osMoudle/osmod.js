const os = require("os");

// tells the computer architecture using currently 32 or 64bit
console.log(os.arch());
console.log(os.hostname()); //hostname
console.log(os.platform());  // gives which platform
console.log(os.tmpdir()); // path of tempfolders
console.log(os.type()); //gives which os we are working on

const freeMemory = os.freemem();
console.log(freeMemory);  //free memory/ ram available right now in bites

console.log(freeMemory/1024/1024/1024); // in gb

const totalMemory = os.totalmem();
console.log(totalMemory/1024/1024/1024); // total ram present in gb