const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true, maxlenght: 15 },
    surname: { type: String, require: true, maxlenght: 15 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    bookings: { type: Array, default: [] },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
