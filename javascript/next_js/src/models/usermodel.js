
import mongoose from "mongoose";
const minAge = 13;
const maxAge = 100;
const today = new Date();
const minDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate()); // 100 years ago
const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate()); // 13 years ago

const userTable = new mongoose.Schema({
    username: {
        type : string ,
        required : [true, "Please provide a username"],
        unique : true,
        
    },
    email :{
        type : string ,
        required : [true, "Please provide an email"],
        unique : true,
    },
    password : {
        type : string ,
        required : [true, "Please provide a password"],
        minlength : 6
    },
    dob :{
        type : Date,
        required : [true, "Please provide a date of birth"],
        min: [minDate, `Date of birth must be after ${minDate.toISOString().split("T")[0]}`], // 100 years ago
        max: [maxDate, `You must be at least ${minAge} years old!`], // 13 years ago
    },
    verified :{
        type : Boolean,
        default : false
    },
    forgetPasswordToken : string ,
    forgetPasswordExpiry : Date,
    verifyToken : string,
    verifyExpiry : Date,
})
const User = mongoose.models.users || mongoose.model("users",userTable)

export default User
