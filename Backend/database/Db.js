const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const { MONGO_URI } = process.env;
const databaseURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(databaseURI);
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error(`Failed to connect to MongoDB database: ${error.message}`);
  }
};

module.exports = connectDB;
