const mongoose = require("mongoose");
const { Schema } = mongoose;

const communityPosts = new Schema({
  postQuestion: String,
  postAuthor: String,
  postAnswer: [{}],
});

const posts = mongoose.model("posts", communityPosts);
module.exports = posts;
