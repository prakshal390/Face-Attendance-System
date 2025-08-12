const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
   profilePicture: { type: String, default: "" },  // new field
});

module.exports = mongoose.model("User", userSchema);
