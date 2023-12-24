// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require("express");
//Require body-parser to use it as middle-ware
const bodyParser = require("body-parser");

// Require Cors for cross origin allowance
const cors = require("cors");

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//allow cross origin
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

//store the port will be used on a variable called "port".
const port = process.env.PORT || 3000;
// Setup Server
const server = app.listen(port, function listening() {
  console.log(`http://localhost:${port}`);
});

//Post request to get the data from the client side and store the reqest body to the "projectData" variable
app.post("/PostToServer", (req, res) => {
  //store the request body to the "projectData" variable
  projectData = { ...req.body };

  //print what the variable contain to the terminal of the servedr side
  console.log(projectData);

  //send to the client side that the server finished the post request
  res.send();
});

//get request to send the "projectData" variable to the client side
app.get("/update", (req, res) => {
  res.send(projectData);
});
