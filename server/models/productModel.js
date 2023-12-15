const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
  name: String,
  artist: String,
  photourl: String,
  price: Number,
  description: String,
})

module.exports=mongoose.model("Product", productSchema);