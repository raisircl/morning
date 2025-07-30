const {createServer} = require('node:http')

const path =require('path')
const fs = require('fs')

const hostname='127.0.0.1';
const port=3000;
var page_header=` <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js CSS Example</title>
                <link rel="stylesheet" href="/style.css">
            </head>`;
var page_footer =` </html>`;
var page_navbar=``;

const server=createServer((req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    const req_url=req.url;
    
    console.log("server started");

    const req_file_path=path.join(__dirname,req.url);
    console.log(`Physical File path is ${req_file_path}`);

    if(req_url=='/')
    {
        res.statusCode=200;
        res.end(`
            ${page_header}
           
            <body>
                <img src='/dashboard.gif' alt='dashboard'/>
                <h1>Hello from Node.js!</h1>
                <p>This text should be styled by the external CSS file.</p>
            </body>
            ${page_footer}
        `);
    }
    else if(req_url=='/about')
    {
        res.statusCode=200;
        res.end(`
            ${page_header}
             <body>
                <h1>About Page</h1>
            </body>
            ${page_footer}
        `);
    }
    else if(req_url=='/services')
    {
        res.statusCode=200;
        res.end(`
            ${page_header}
            <body>
                <h1>Services Page</h1>
            </body>
            ${page_footer}
        `);
    }
    else if(req_url=='/blogs')
    {
        res.statusCode=200;
        res.end(`
            ${page_header}
            <body>
                <h1>Blogs Page</h1>
            </body>
            ${page_footer}
        `);
    }
    else if(req_url=='/contact')
    {
        res.statusCode=200;
        res.end(`
            ${page_header}
            <body>
                <h1>Contact Page</h1>
            </body>
            ${page_footer}
        `);
    }
    else if (req.url === '/style.css') {
        // Serve CSS
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS file not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    }
    else if (req.url === '/dashboard.gif') {
        const filepath=path.join(__dirname, 'dashboard.gif');
        
        console.log(`Dir Name is ${__dirname}`);

        console.log(filepath);
        fs.readFile(filepath, (err, data) => {
            if (err) {
                //res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.setHeader('Content-Type','text/plain');
                res.statusCode=404;
                res.end('image file not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/gif' });
                res.end(data);
            }
        });
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server Running at http://${hostname}:${port}`);
});