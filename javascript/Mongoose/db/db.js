import mongoose from "mongoose";

const dbConnect = async()=> await mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('console.log("Ohhh yesss , conected to db💦💦")'))
  .catch(err => console.error('❌ Fuck you !! 🥀 MongoDB Error:', err));

export default dbConnect;

 