const {createServer} = require('node:http');

const  host='127.0.0.1';
const port='3000'
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(port,host,()=>{
    console.log(`Server started at http://${host}:${port} `);
});