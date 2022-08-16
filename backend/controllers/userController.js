const User = require("../models/User");

exports.updateUser = async (req, res) => {
  const  id  = req.user._id

  try {

      await User.findByIdAndUpdate(id, { $set: { ...req.body } });

      res.status(200).send({ msg: "Updated !" });

  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
   
    const user = await User.findById(id);
    
    if (
      req.user._id.toString() === user._id.toString() ||
      req.user.role === "admin"
    ) {
      await User.findByIdAndDelete(id);
      res.status(200).send("user deleted...");
    } else {
      res.status(401).send("You are not authorized");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "all users", users });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send({ msg: "user finded", user });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.updateAdminUser = async (req, res) => {
  const  id  = req.params.id

  try {

      await User.findByIdAndUpdate(id, { $set: { ...req.body } });

      res.status(200).send({ msg: "Updated !" });

  } catch (error) {
    res.status(500).send("server error");
  }
};