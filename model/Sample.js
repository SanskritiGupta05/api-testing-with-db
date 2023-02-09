const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
  date: Date
});

module.exports = mongoose.model("Sample", sampleSchema);