//http module here need to check why I am getting error for the last part of the course where we were adding the response for unavailable route.


const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('welcome onboard')
    }
    if (req.url === '/about') {
        res.end('about page')
    }
    else{
    res.end('error')
    }
})

server.listen(5000)