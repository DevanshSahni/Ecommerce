const productModel = require("../models/productModel");
const User = require("../models/userModel");

module.exports.Signup = async (req, res) => {
  const { email } = req.body;

  const result = await User.countDocuments({ email });

  if (result) {
    res.status(401).send({ message: "User already exists" });
    return;
  }

  const user = new User(req.body);
  await user.save();

  res.status(200).send({ message: "User created" });
};

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(401).send({ message: "User not found" });
  } else if (user.password === password) {
    res.status(200).send({ message: "User found" });
  } else {
    res.status(401).send({ message: "Incorrect password" });
  }
};

module.exports.Products = async (req, res) => {
  const products = await productModel.find();
  res.send(products);
};
