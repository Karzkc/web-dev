import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,"public"))) // using a middleware
app.get("/", (req, res) => {

  res.send("Hello World!"); // send plain text


});


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
