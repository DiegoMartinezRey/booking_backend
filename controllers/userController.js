const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const saltRounds = 10;

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      return res.json(user);
    } catch (error) {
      res.status(500).send("Not find any user");
    }
  },
  addUser: async (req, res) => {
    try {
      const userToAdd = req.body;
      const user = await User.create(userToAdd);
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).send("Failed to create user");
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).send("User cannot be deleted");
    }
  },
};

module.exports = userController;
