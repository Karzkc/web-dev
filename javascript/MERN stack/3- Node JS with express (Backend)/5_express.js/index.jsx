import express from "express";
import path from "path";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.sendFile(path.join(__dirname,"index.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(path.dirname("/"),"index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})