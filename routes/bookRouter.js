const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/search", bookController.getBookByName);
router.post("/add", bookController.addBook);
router.delete("/:id", bookController.deleteBook);
router.patch("/:id", bookController.updateBook);

module.exports = router;
