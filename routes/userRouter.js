const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/add", userController.addUser);
router.patch("/:id", userController.updateUser);
router.patch("/booking/:id", userController.updateUserBooking);
router.delete("/:id", userController.deleteUser);
router.patch("/unbook/:id", userController.deleteUserBooking);
router.post("/login", userController.checkUser);

module.exports = router;
