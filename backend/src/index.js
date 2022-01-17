const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Port listening at http://localhost:${port}`);
});
