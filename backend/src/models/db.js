const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const InitateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
    throw err;
  }
};

module.exports = InitateMongoServer;
