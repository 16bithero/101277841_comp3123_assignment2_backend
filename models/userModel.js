//Imports Mongoose to access MongoDB
const mongoose = require("mongoose")

//Defining employee schema
const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        maxlength: 100,
        required: true
    },
    last_name: {
        type: String,
        maxlength: 50,
        required: true
    },
    username: {
        type: String,
        maxlength: 100,
        required: true,
        unique: true
    },
    password: {
        type: String,
        maxlength: 50,
        required: true
    }
})

//Exports schema to the database with name "employee"
module.exports = mongoose.model("user", userSchema)