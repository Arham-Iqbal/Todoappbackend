const express = require("express");
const app = express();
require("dotenv").config();
// const PORT = process.env.PORT; // Use uppercase PORT for the environment variable
const dbconnect = require("./config/database");


// Middleware to parse JSON request body
app.use(express.json());

// Routes
const todoroutes = require("./routes/todos");
const { configDotenv } = require("dotenv");
app.use("/go", todoroutes);

// Connect to the database
dbconnect();

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  
});

// Corrected syntax for the app.get route
app.get('/', (req, res) => {
    console.log("Hello bhaiji");
    res.send("Hello bhaiji"); // Send a response to the client
});
