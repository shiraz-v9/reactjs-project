const mongoose = require("mongoose");
const { Schema } = mongoose;

// const answersSchema = new Schema({
//   userID: String,
//   user: String,
//   answer: String,
//   answerDate: Date,
// });

// const answers = mongoose.model("answers", answersSchema);

const communityPosts = new Schema({
  postQuestion: String,
  postAuthor: String,
  postDate: Date,
  postAnswer: [
    { userID: String, user: String, answer: String, answerDate: Date },
  ],
});

const posts = mongoose.model("posts", communityPosts);

module.exports = posts;
// module.exports = answers;
