const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  userPwd: String,
  userEmail: String,
});

const users = mongoose.model("users", userSchema);
module.exports = users;
