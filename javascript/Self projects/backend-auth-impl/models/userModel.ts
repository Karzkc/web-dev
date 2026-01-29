import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
})

const User = mongoose.models.User || mongoose.model("User",userSchema)
export default User