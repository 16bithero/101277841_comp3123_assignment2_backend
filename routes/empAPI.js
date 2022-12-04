const express = require("express");
const routes = express.Router();
const empModel = require("../models/empModel")

  
//Get all employees
routes.get("/employees", async(req,res) => {
    const emp = await empModel.find()
    try {
        res.status(200).send(emp)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Creates new employee
routes.post("/employees/add", async(req,res) => {
    try {
        const newEmp = new empModel(req.body)
        const emp = await newEmp.save()
        res.status(201).send(emp)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Update employee details by ID
routes.put("/employees/update/:eid", async(req, res) => {
    try {
        const updateEmp = await empModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send(updateEmp)
    } catch (error) {
        res.status(400).send(error)
    }

})

//Delete employee by ID
routes.delete("/employees/delete/:eid", async(req, res) => {
    try {
        const empID = req.params.eid
        const deleteEmp = await empModel.findByIdAndDelete(empID)
        if(!deleteEmp){
            res.status(400).send({message: "Employee not found."})
        }
        res.status(204).send(deleteEmp)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = routes