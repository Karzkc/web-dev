use("CRUD_DB")
db.createCollection("New_Courses")
db.New_Courses.insertOne({
    "name":"kk",
    "language":"js"
})
console.log("DATA inserted !!");
