//import just readFileSync and writeFileSync from fs module this process is known as destructuring

// asyncronous file reading and writing usisng fs module of node


const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (error, result)=>{
    if(error){
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (error2, result2)=>{
        if(error2){
            console.log(error2)
            return;
        }
        const second = result2;
        writeFile('./content/fourthFileTest.txt',`here is new for example of callback function to read and write in file \n${first}`,(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})
