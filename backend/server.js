const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5040;

const app = express();

const connectDB = require('./config/db')
connectDB();

//this middleware is used to  get the body data
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/goals", require("./routes/goalRoutes"));
//user resource

app.use(errorHandler);

//Server
app.listen(port, () => {
  console.log(`Started server on port: ${port}`);
});
