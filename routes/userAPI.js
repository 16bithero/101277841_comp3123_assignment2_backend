const express = require("express");
const routes = express.Router();
const userModel = require("../models/userModel");
const { route } = require("./empAPI");

//Get all user
routes.get("/user", async(req,res) => {
    const user = await userModel.find()
    try {
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

routes.post("/user/login", async(req,res) =>{
    const userInput = req.body.username
    const passInput = req.body.password
    
    //Responses
    const noUser = {
        "status": false,
        "message": "No user with the username found in the database."
    }
    
    const wrongPass = {
        "status": false,
        "message": "Invalid password. Check and try again."
    }

    const validLogin = {
        "status": true,
        "message": "Login Success."
    }
    
    try {
        var validUser = await userModel.findOne({ username: userInput }).exec()
        if(!validUser) {
            return res.status(400).send(noUser)
        }
        validUser.comparePassword(passInput, (error, match) => {
            if(!match) {
                return res.status(400).send(wrongPass)
            }
        });
        res.status(200).send(validLogin)
    } catch (error) {
        res.status(400).send(error);
    }
})


//Creates new user
routes.post("/user/add", async(req,res) => {
    const {first_name, last_name, username, password} = req.body
    try{
        const exisiting = userModel.findOne({username})
        if(exisiting){
            res.json({error: "username exists"})
        }
        const newUser = new userModel(req.body)
        const signup = await newUser.save()
        res.status(201).send(signup)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = routes