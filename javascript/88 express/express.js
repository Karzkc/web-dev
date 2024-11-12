const express = require('express')
const app = express()
const port = 3000
app.use(express.static('d:\\Kartik Khiriya\\own\\new\\web dev\\javascript\\88 express\\public')) // publlic folder will show all kind of filesd which you want to show  to public

app.get('/', (req, res) => {
  res.send('Hello World! how are you')
})
// })
// app.get('/home', (req, res) => {
//   res.send('this is home')
// })
// app.get('/contact', (req, res) => {
//   res.send('this is contact')
// })
// app.get('/about', (req, res) => {
//   res.send('this is about')
// })
//to avoid multiple these insted we'll use slug
app.get('/:slug/:second', (req, res) => {
  res.send(`hello this is ${req.params.slug} and ${req.params.second}`)
  // console.log(req.params);
  // console.log(req.query);
  //output { slug: 'whatever', second: 'da' }
// { dark: 'true' }
})
app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})