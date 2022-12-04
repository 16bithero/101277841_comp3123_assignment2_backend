//Import required modules
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const empRoutes = require("./empAPI")
var cors = require('cors')

app.use(cors())

//Connect to MongoDB
const database_url = "mongodb+srv://101277841_Renzzi:qw12345@cluster0.prgemqj.mongodb.net/assignment_two?retryWrites=true&w=majority"
mongoose.connect(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", empRoutes)

app.route("/")
    .get((req, res) => {
        res.send("Assignment 2 in Fullstack Dev")
    })

app.listen(PORT, () => { // start server and listen on specified port
    console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
  }) 
