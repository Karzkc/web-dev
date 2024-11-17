use("CRUD_DB")

//Create
// db.createCollection("New_Courses")
// db.New_Courses.insertOne({
//     "name":"kk",
//     "language":"js"
// })
// console.log("DATA inserted !!");
// same way insertmany() - return array 

//Read
// let a = db.New_Courses.find({"name":"kk"}) // find alll
// let b = db.New_Courses.findOne({"name":"kk"}) // find first one
// console.log(a.count());
// console.log(b);

//Update
db.New_Courses.updateMany({ "name": "kk" }, { $set: { "name": "karz" } })
console.log("updated successfully");
// same way update one many all ...


// Delete
db.New_Courses.deleteMany({ "name": "karz" })
console.log( "deleted successfully");

//NOTE - Upon running commands multiple times will Run that several time so be cautious



