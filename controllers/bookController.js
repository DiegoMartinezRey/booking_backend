const Book = require("../models/Book");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const book = await Book.find();
      return res.json(book);
    } catch (error) {
      res.status(500).send("Not find any book");
    }
  },
  addBook: async (req, res) => {
    try {
      const bookToAdd = req.body;
      const book = await Book.create(bookToAdd);
      return res.status(201).json(book);
    } catch (error) {
      console.error("Error creating book:", error);
      res.status(400).send("Failed to create book");
    }
  },
};

module.exports = bookController;
