import mongoose from 'mongoose'
import express from 'express'
import { Todo } from './models/todo.js'
let conn = await mongoose.connect("mongodb://localhost:27017/todo")


const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({desc : "This is my first todo" , isDone:false , date:3});
  todo.save()
  res.send('Hello World!')
})
app.get('/todo', async (req, res) => {
  let todo = await Todo.findOne({})
  
  res.json({title:todo.title, desc:todo.desc,done:todo.isDone,days:todo.date})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// database will be added as much you'll refresh the app