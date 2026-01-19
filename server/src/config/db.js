const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/.env" });

const connectDB = async () => {
  try {
    const mongoDBAtlasURL = process.env.MONGODB_ATLAS_URL;

    if (!mongoDBAtlasURL) {
      throw new Error(
        "MONGODB_ATLAS_URL is not defined in environment variables"
      );
    }

    await mongoose.connect(mongoDBAtlasURL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log("Server will continue without database connection");
    // Don't exit the process, let the server run without DB for now
    // process.exit(1);
  }
};

module.exports = connectDB;
