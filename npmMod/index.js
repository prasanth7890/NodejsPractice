const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue("Hello World"));//prints text in terminal with blue color

const res = validator.isEmail("thapa@thapa.com");
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));