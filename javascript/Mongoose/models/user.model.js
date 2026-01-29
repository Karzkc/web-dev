import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number
    }
}, { timestamps: true })

const UserModel = mongoose.model("User", userSchema)
async function test() {
    const user = new UserModel({ name: "Kartik", email: "test@example.com", age: 20 });
    await user.save();

    //   const users = await User.find({ age: { $gt: 18 } });
    //   console.log(users);
}

export { test }
