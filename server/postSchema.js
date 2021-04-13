const mongoose = require("mongoose");
const { Schema } = mongoose;

const communityPosts = new Schema({
  postQuestion: String,
  postAuthor: String,
  postAuthorID: String,
  postDate: String,
  postAnswer: [
    { userID: String, user: String, answer: String, answerDate: String },
  ],
});

const posts = mongoose.model("posts", communityPosts);
module.exports = posts;
