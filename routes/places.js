var express = require("express");
var router = express.Router();

var { places_db } = require("../connection/database");

/* Get List of Places */
router.get("/", async function (req, res) {
  let { place } = req.query;

  let searchRegex = RegExp(`^${place || " "}.*`)

  console.log(searchRegex)
  let places_collection = places_db.collection("places");
  let results = await places_collection.find({
    "City": searchRegex
  }).limit(10).toArray()

  res.send(results).status(200);
});
module.exports = router;
