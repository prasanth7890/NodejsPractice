const path = require("path");

// gives specified path folder
console.log(path.dirname('D:/web/NODEJSYOUTUBE/Path/path.js'));

// gives the extension of file specified
console.log(path.extname('D:/web/NODEJSYOUTUBE/Path/path.js'));

//gives the file name
console.log(path.basename('D:/web/NODEJSYOUTUBE/Path/path.js'));

//returns an object whose properties represent significant elements of the path
console.log(path.parse('D:/web/NODEJSYOUTUBE/Path/path.js'));

//root folder? easy
const mypath = path.parse('D:/web/NODEJSYOUTUBE/Path/path.js');
console.log(mypath.root);
