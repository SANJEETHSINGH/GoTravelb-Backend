const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

const client = new MongoClient(uri);


const places_db = client.db("places")

module.exports = {places_db}