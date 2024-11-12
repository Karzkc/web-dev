const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000
app.use(express.static('d:\\Kartik Khiriya\\own\\new\\web dev\\javascript\\89 methods express\\public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("this is get request!shown on browser console");
  res.send('Hello World! how are you - get request')
}).post('/', (req, res) => {
  console.log("this is a post request! shown on vscopde terminal via nodemon");
  res.send('Hello World! how are you- post')
}).put('/', (req, res) => {
  console.log("this is a put request! ");
  res.send('Hello World! how are you -put')
}).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/index', (req, res) => {
  console.log("this is index.html ");
  res.sendFile("/templates/index.html", { root: __dirname })
})
app.get('/api', (req, res) => {
  console.log("this is json ");
  res.json({
    "name": "kartik",
    "version": "1.0.0",
    "description": "amazing package , new to js",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Kartik",
    "license": "ISC",
    "dependencies": {
      "express": "^4.21.1",
      "fs": "^0.0.1-security",
      "slugify": "^1.6.6"
    },
    "keywords": []
  }
  )
})
