const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  artist: String,
  photourl: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
