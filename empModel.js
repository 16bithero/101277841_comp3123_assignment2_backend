//Imports Mongoose to access MongoDB
const mongoose = require("mongoose")

//Defining employee schema
const empSchema = mongoose.Schema({
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
    email: {
        type: String,
        maxlength: 50,
        unique: true
    }
})

//Exports schema to the database with name "employee"
module.exports = mongoose.model("employee", empSchema)