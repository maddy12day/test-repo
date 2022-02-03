// here we have discussed about few os modules that comes as default with node and we don't need to import them to use them.


const os = require('os');

//to get uptime of system in seconds but here seconds go upto 100
console.log(os.uptime());

//get system user information
const  userInfo = os.userInfo();
// console.log(os.userInfo());      we can either directly console log it or we can assign it to a variable and then print that variable
console.log(userInfo);

//about the system info in detail 

const systemDetail = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(systemDetail)