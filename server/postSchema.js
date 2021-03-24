const mongoose = require("mongoose");
const { Schema } = mongoose;

const communityPosts = new Schema({
  postQuestion: String,
  postAuthor: String,
  postDate: Date,
  postAnswer: [{ user: String, answer: String, answerDate: Date }],
});

// const answers = new Schema({
//   _id: Schema.Types.ObjectId,
//   user: String,
//   answer: String,
// });

const posts = mongoose.model("posts", communityPosts);
module.exports = posts;
