const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number,
  // addressess: ,
  // orders:,
})

module.exports=mongoose.model("User", userSchema);