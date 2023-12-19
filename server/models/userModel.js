const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: Number,
});

const orderSchema = new mongoose.Schema({
  product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
  quantity: Number,
  date: Date,
  cost: Number,
  address: addressSchema,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number,
  addressess: [addressSchema],
  orders: [orderSchema],
  cart: [
    {
      product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
