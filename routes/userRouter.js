const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/add", userController.addUser);
router.delete("/id", userController.deleteUser);
router.post("/login", userController.checkUser);

module.exports = router;
