const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  quizName: String,
  question: [
    { question: String, option: [{ answer: String, isCorrect: Boolean }] },
  ],
});

const quiz = mongoose.model("quiz", quizSchema);
module.exports = quiz;
