const userModel = require("../model/userModel.js");

// Add User
const addUser = async (req, res) => {
  try {
    const { name, email, district, state } = req.body;
    const newUser = new userModel({
      name,
      email,
      district,
      state,
    });
    await newUser.save();
    res.status(200).json({ message: "user added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get all user
const getAllUsers = async (req, res) => {
  try {
    const Alluser = await userModel.find();
    res.status(200).json(Alluser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// getsingleuser
const getSingleUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// update user
const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updateuser = await userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json(updateuser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// delete user
const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfuly" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getSingleUsers,
  updateUsers,
  deleteUsers,
};
