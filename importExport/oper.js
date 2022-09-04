const add = (a,b) => {
    return a + b;
}   

const sub = (a,b) => {
    return a - b;
}  

// module.exports = add; // exports a single method or variable
// module.exports = sub;  //multiple functions exporting wont export all methods

// to export every method write like this, basically assiging methods individually
// module.exports.add = add;
// module.exports.sub = sub;

//exporting every member function is a headache
// to get rid of that use 
module.exports = {add, sub};