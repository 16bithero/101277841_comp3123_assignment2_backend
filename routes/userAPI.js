const express = require("express");
const routes = express.Router();
const userModel = require("../models/userModel")

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

//Delete employee by ID
routes.delete("/user/delete/:eid", async(req, res) => {
    try {
        const userID = req.params.eid
        const deleteUser = await userModel.findByIdAndDelete(userID)
        if(!deleteUser){
            res.status(400).send({message: "Employee not found."})
        }
        res.status(204).send(deleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = routes