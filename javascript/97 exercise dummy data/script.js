import mongoose from 'mongoose';
import express from 'express';
import Employees from './models/emp.js';

await mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'd:/Kartik Khiriya/own/new/web dev/javascript/97 exercise dummy data/views');

function Data_Generator() {
  let name_arr = ["Kartik", "Kunal", "Danny", "Harry", "Harsh"];
  let lang_arr = ["Python", "Javascript", "C", "C++", "C#", "Java"];
  let city_arr = ["New York", "New Delhi", "Melbourne", "Wellington", "London"];
  let isManager_arr = [true, false];
  let final_arr = [];

  let name_rand = Math.floor(Math.random() * 5);
  let salary_rand = Math.floor(10000 + Math.random() * 50000);
  let lang_rand = Math.floor(Math.random() * 6);
  let city_rand = Math.floor(Math.random() * 5);
  let isManager_rand = Math.floor(Math.random() * 2);
  final_arr.push(name_arr[name_rand], salary_rand, lang_arr[lang_rand], city_arr[city_rand], isManager_arr[isManager_rand]);

  return final_arr;
}

app.get('/', async (req, res) => {
  let count = await Employees.countDocuments();
  console.log(count);
  res.render("index", { tex: count });
});

app.get('/insert', async (req, res) => {
  let generatedData = []; 

  for (let i = 0; i < 10; i++) {
    let data = Data_Generator();
    await Employees.create({
      name: data[0],
      salary: data[1],
      language: data[2],
      city: data[3],
      is_manager: data[4],
    });
    generatedData.push(data);
  }

  let count = await Employees.countDocuments();
  console.log("Data inserted, Total Records:", count);

  res.json({ count, data: generatedData });
});


app.get('/delete', async (req, res) => {
  await Employees.deleteMany({});
  console.log("All records deleted!");

  res.json({ count: 0, data: [] });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
