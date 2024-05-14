const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.post("/add", bookController.addBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
