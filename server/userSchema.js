const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  userPassword: String,
  email: String,
});

const users = mongoose.model("users", userSchema);
module.exports = users;
