// const { createServer } = require('node:http');
// this is through common js in json file there is type: common js which is bydefault 
// but if we do type:module there will be error here if we do this : - 
// import http from "http";
// we can import otehr variables using import
// import obj from './export.mjs'
// console.log(a);
const slugify = require('slugify');
console.log(slugify(__dirname,__filename),"-"); // all these require diranme filename are defined inside a function already 
// therr will be arror as type common is set

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/HTML');
//   res.end('<h1> hi ,Hello World </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// now we will import using require  

// const x = require("./req.js")
// console.log(x);

