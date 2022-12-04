//Imports Mongoose to access MongoDB
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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

//This function works as a checker, if its not a new user, or updating a user's information,
// hash function will be ignored, as it is already hashed
userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });
  
  //This method compares input password to the password that has been hashed and returns a boolean response in callback
  userSchema.methods.comparePassword = function(rawPassword, callback) {
    return callback(null, bcrypt.compareSync(rawPassword, this.password));
  };
  
  //Exports schema to the database with name "user"
  module.exports = mongoose.model("user", userSchema)