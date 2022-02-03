// file system module that comes with node as default package that we can use directly without importing it.



//import just readFileSync and writeFileSync from fs module this process is known as destructuring
const {readFileSync, writeFileSync} = require('fs');  


// const fs = require('fs');  imports everyting from fs module

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/thirdCreatedTest.txt',`hello madhav you have successfully created this new file to test this writeFileSync method that comes in the file system module : ${first} \n ${second}\n test `, { flag:'a'})