const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, require: true },
    images: { type: Array, require: true },
    type: { type: String, require: true },
    availability: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
