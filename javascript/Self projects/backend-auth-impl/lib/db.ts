import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/')
        console.log("connected successfully")
    } catch (error) {
        console.error(error)
    }
}

export default dbConnect