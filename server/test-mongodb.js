const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./src/.env" });

const uri = process.env.MONGODB_ATLAS_URL;
console.log("Testing connection to:", uri);

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    console.log("Attempting to connect...");
    await client.connect();
    console.log("✅ Successfully connected to MongoDB!");

    // Test database access
    const db = client.db(process.env.DB_NAME || "ecommerceMernDB");
    const collections = await db.listCollections().toArray();
    console.log(
      "Available collections:",
      collections.map((c) => c.name)
    );
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

testConnection();
