const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const port = process.env.PORT || 5040;


connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use goalRoutes to handle any endpoints that end with /api/goals
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler)

//Server

app.listen(port, () => {
  console.log(`Started server on port: ${port}`);
});
