import http from "http";

import fs from "fs";
// this is basic http server
const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/html')
    const url = req.url;

    if (url === "/") {
        res.statusCode = 200;
        res.end("Hello World");
        
    }
    else if (url === "/about") {
        res.statusCode = 200;
        try {
            let data = fs.readFileSync('about.html');
            res.end(data.toString());
        } catch (err) {
            res.statusCode = 500;
            res.end("Error loading about.html");
        }
    }


    
} )

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
})


