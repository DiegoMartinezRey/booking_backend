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
};

module.exports = userController;
