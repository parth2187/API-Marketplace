const express = require("express");
const InitateMongoServer = require("./models/db");
const dotenv = require("dotenv");
const user = require("./routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initate mongo server
InitateMongoServer();

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello Parth, This is working API" });
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Port listening at http://localhost:${port}`);
});
