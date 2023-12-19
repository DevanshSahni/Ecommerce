const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

// All products' information
module.exports.Products = async (req, res) => {
  const products = await productModel.find();
  res.send(products);
};

// Specific product's information
module.exports.productInfo = async (req, res) => {
  const { productName } = req.body;
  const userID = req.user.id;
  const product = await productModel.findOne({ name: productName });
  const user = await userModel
    .findOne({ _id: userID }, { cart: 1 })
    .populate("cart.product");

  const item = user.cart.find(
    (cartItem) => cartItem.product._id.toString() === product._id.toString()
  );
  if (item) units = item.quantity;
  else units = 1;
  res.send({ product, quantity: units });
};

// Add product to cart or change quantity of item in cart
module.exports.addCart = async (req, res) => {
  const userID = req.user.id;
  const { productName, units } = req.body;
  const product = await productModel.findOne({name:productName}, {_id:1});
  const user = await userModel
    .findOne({ _id: userID }, { cart: 1 })
    .populate("cart.product");

  const existingProduct = user.cart.find(
    (cartProduct) => cartProduct.product._id.toString() == product._id.toString()
  );
  if (units == 0) {
    const newCart = user.cart.filter(
      (cartProduct) => cartProduct.product._id.toString() !== product._id.toString()
    );
    user.cart = newCart;
  } else if (existingProduct) {
    existingProduct.quantity = units;
  } else {
    user.cart.push({ product: product._id, quantity: units });
  }
  await user.save();
  res.send({message:"Item successfully added to cart"});
};

// All products in cart
module.exports.cart = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel
    .findOne({ _id: userID }, { cart: 1 })
    .populate("cart.product");
  const userCart = user.cart;
  res.send(userCart);
};
