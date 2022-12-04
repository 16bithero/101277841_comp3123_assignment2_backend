//Imports Mongoose to access MongoDB
const mongoose = require("mongoose")

//Defining employee schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxlength: 100,
        required: true
    },
    password: {
        type: String,
        maxlength: 50,
        required: true
    }
})

//Exports schema to the database with name "employee"
module.exports = mongoose.model("user", userSchema)