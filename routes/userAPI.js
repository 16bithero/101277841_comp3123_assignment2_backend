const express = require("express");
const routes = express.Router();
const userModel = require("../models/userModel")

//Get all user
routes.get("/user", async(req,res) => {
    const user = await userModel.find()
    try {
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})


//Creates new user
routes.post("/user/add", async(req,res) => {
    try {
        const newUser = new userModel(req.body)
        const signup = await newUser.save()
        res.status(201).send(signup)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = routes