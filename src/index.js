const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const database = process.env.MONGODB_URL;
mongoose
  .connect(database)
  .then(() => console.log("Database connected successfully."))
  .catch((error) => console.log(error));

app.use(express.urlencoded({ extended: false}));
app.use("/api", require("../src/routes/user"));

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Server is running on port ${port}`));