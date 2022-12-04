const express = require("express");
const axios = require('axios').default;
const routes = express.Router();
const empModel = require("./empModel")

  
//Get all employees
routes.get("/employees", async(req,res) => {
    const emp = await empModel.find()
    const allEmp = {
        "employees": emp
    }
    try {
        res.status(200).send(allEmp)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Creates new employee
routes.post("/employees/:fname/:lname/:email", async(req,res) => {
    try {
        const fname = req.params.fname
        const lname = req.params.lname
        const email = req.params.email
        console.log(fname,lname,email)
        const newEmp = new empModel({
            first_name: fname,
            last_name: lname,
            email: email
        })
        const emp = await newEmp.save()
        res.status(201).send(emp)
    } catch (error) {
        res.status(400).send(error)
    }
})




getUserData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>  { 
        console.log(res.data)
        this.setState({...this.state, users : res.data})
    })
}

module.exports = routes