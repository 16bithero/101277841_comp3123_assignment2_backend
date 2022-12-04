import axios from 'axios'
  
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


getUserData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>  { 
        console.log(res.data)
        this.setState({...this.state, users : res.data})
    })
}