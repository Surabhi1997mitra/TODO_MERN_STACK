// declare our app as an express application

require("dotenv").config();

//application framework
const express = require("express");
const app = express();

//cors added 
const cors = require('cors')

//database
const connectDB = require("./config/db");
connectDB();

//routes
const todo = require("./routes/todo");

//apply cors
// cors
app.use(cors({ origin: true, credentials: true })); 

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (request, response) => {
    response.send("Server up and running")
});

// use routes
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});