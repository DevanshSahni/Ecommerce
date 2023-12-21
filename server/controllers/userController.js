const userModel = require("../models/userModel");

module.exports.userInformation = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel.findOne({ _id: userID });
  res.send(user);
};

module.exports.updateUser = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel.updateOne({ _id: userID }, req.body);
  res.status(200).send({ message: "Successfully updated" });
};

module.exports.userAddresses = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel.findOne({ _id: userID }, { addressess: 1 });
  res.send(user);
};

module.exports.saveUserAddress = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel.findOne({ _id: userID }, { addressess: 1 });
  let newAddress;
  if (user.addressess) {
    newAddress = user.addressess.filter(
      (address) => address._id.toString() !== req.body._id.toString()
    );
    newAddress.push(req.body);
  } else {
    newAddress = req.body;
  }
  await userModel.updateOne(
    { _id: userID },
    { $set: { addressess: newAddress } }
  );
  res.send({ message: "Successfully updated" });
};

module.exports.deleteAddress = async (req, res) => {
  const userID = req.user.id;
  const user = await userModel.findOne({ _id: userID }, { addressess: 1 });
  let newAddress = user.addressess.filter(
    (address) => address._id.toString() !== req.body.id.toString()
  );

  await userModel.updateOne(
    { _id: userID },
    { $set: { addressess: newAddress } }
  );
  res.send({ newAddress });
};
