const express = require('express')
const app = express()
const port = 3000
const birds = require('./routes/birds')


app.use('/birds', birds)
const fs = require('fs'); // we can write middle log to a file

app.use(express.static("d:/Kartik Khiriya/own/new/web dev/javascript/90 middlewares/public"))

//this is a middleware function
// this is a middleware which stopsthe further going request and modifies it for a task 
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.


app.use((req, res, next) => { // next means next middleware - M1 for logging in
    console.log('M1')

    const date = new Date(); 
    const strdate = date.toDateString(); 
    fs.appendFileSync("./90 middlewares/log.txt", `\n${strdate} is a ${req.method} request`);
    console.log(req.headers);
    req.var = " inserted via middleware variable"

    next()  // if we remove this app will be hanged and only one request will be given
    // res.send("Hacked by M1") we cant do this as it will jam the app
})
// mw2
app.use((req, res, next) => {
    console.log('M2')
    next()
})

// after running 127.0.0.1:3000 app there will be m1 m2 returned in command panel console



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!'+req.var)
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// middleware modifies your request
// there are 5 types of mw