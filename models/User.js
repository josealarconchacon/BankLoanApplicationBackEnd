const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String, // Store Google ID for OAuth users
});

module.exports = mongoose.model("User", userSchema);
