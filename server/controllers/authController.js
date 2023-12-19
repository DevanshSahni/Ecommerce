const userModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie("jwt", accessToken, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).send({ accessToken, message: "User found" });
  } else {
    res.status(401).send({ message: "Incorrect password" });
  }
};

module.exports.logout = async (req, res) => {
  const token = req.cookies.jwt;

  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: false,
    maxAge: 0,
  });

  res.send({ message: "Logged out" });
};

module.exports.userDelete = async (req, res) => {
  const userID = req.user.id;
  const token = req.cookies.jwt;

  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: false,
    maxAge: 0,
  });

  await userModel.deleteOne({ _id: userID });

  res.send({ message: "Account deleted" });
};
