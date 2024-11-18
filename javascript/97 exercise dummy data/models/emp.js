import mongoose from 'mongoose'
const employees_schema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    is_manager: Boolean

})
const Employees = mongoose.model('Employee',employees_schema)
export default Employees ;