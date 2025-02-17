import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const conn = mongoose.connection
        conn.on("connected",()=>{
            console.log("Connected to MongoDB !!!");
        })
        conn.on('error',(err)=>{
            console.log("Error occured while connecting to MongoDB !!! , Make sure MongoDB is running! "+err);
            process.exit()
            
        })
    } catch (error) {
        console.log("Something Went wrong !!!");
        console.log(error);

    }
}