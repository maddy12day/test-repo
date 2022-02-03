// require is used so that a function can use modules.
const name = require('./variableDeclare');
const greet = require('./function1');
const newList = require('./otherWaysToExport');

require('./functionCall');

// console.log(newList.items.name);
// console.log(newList.item[1]);
// greet(name.firstName,name.lastName);

// console.log(name);

// greet(firstName,lastName)