import mongoose from "mongoose";
import express from 'express'

import dbConnect from "./db/db.js";
import {test} from "./models/user.model.js";

const app = express()
const port = 3000

dbConnect()
test()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})