const mongoose = require("mongoose");
const { Schema } = mongoose;

const htmlSchema = new Schema({
  tagName: String,
  tagDescription: String,
  tagExample: String,
});

const html = mongoose.model("tags", htmlSchema);
module.exports = html;

const userSchema = new Schema({
  user: String,
  userPassword: String,
  email: String,
});

const users = mongoose.model("users", userSchema);
module.exports = users;

const communityPosts = new Schema({
  postQuestion: String,
  postAnswer: [{}],
});

const posts = mongoose.model("posts", communityPosts);
module.exports = posts;
