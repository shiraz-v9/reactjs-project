const obj = [
  {
    quizName: "Quiz 1 (level 1)",

    question: [
      {
        question: "What does HTML stand for?",
        option: [
          { answer: "Hyper Text Machine Language", isCorrect: false },
          { answer: "Home Tool Markup Language", isCorrect: false },
          { answer: "Hyper Text Markup Language", isCorrect: true },
          { answer: "Hyper Translator Machine Language", isCorrect: false },
        ],
      },
      {
        question: "How many tags are in a regular element?",
        option: [
          { answer: "1", isCorrect: false },
          { answer: "2", isCorrect: true },
          { answer: "3", isCorrect: false },
          { answer: "none", isCorrect: false },
        ],
      },
      {
        question: "what is the difference in an opening tag and a closing tag?",
        option: [
          { answer: "Closing tag has a / in front", isCorrect: true },
          { answer: "There is no difference ", isCorrect: false },
          { answer: "Opening tag has a / in front ", isCorrect: false },
          { answer: "Both tags have / in front", isCorrect: false },
        ],
      },
      {
        question: "< body > Is this an opening tag or a closing tag?",
        option: [
          { answer: "both", isCorrect: false },
          { answer: "self closing", isCorrect: false },
          { answer: "closing", isCorrect: false },
          { answer: "Opening", isCorrect: true },
        ],
      },
      {
        question: "Explain the < br  / > tag",
        option: [
          { answer: "it's deprecated", isCorrect: false },
          { answer: "bold text", isCorrect: false },
          {
            answer: "not in use anymore replace with /n newline",
            isCorrect: false,
          },
          {
            answer: "it's called break tag and it will give you a new line",
            isCorrect: true,
          },
        ],
      },
    ],
  },

  {
    quizName: "Quiz 2 (level 2)",

    question: [
      {
        question: "How is document type initialized in HTML5.?",
        option: [
          { answer: "</DOCTYPE>", isCorrect: false },
          { answer: "</DOCTYPE HTML>", isCorrect: false },
          { answer: "<!DOCTYPE HTML>", isCorrect: true },
          { answer: "</DOCTYPE html>", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following HTML Elements is used for making any text bold ?",
        option: [
          { answer: "<p>", isCorrect: false },
          { answer: "<b>", isCorrect: true },
          { answer: "<strong>", isCorrect: false },
          { answer: "<a>", isCorrect: false },
        ],
      },
      {
        question: "what is the difference in an opening tag and a closing tag?",
        option: [
          { answer: "Closing tag has a / in front", isCorrect: true },
          { answer: "There is no difference ", isCorrect: false },
          { answer: "Opening tag has a / in front ", isCorrect: false },
          { answer: "Both tags have / in front", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following HTML element is used for creating an unordered list?",
        option: [
          { answer: "<ui>", isCorrect: false },
          { answer: "<i>", isCorrect: false },
          { answer: "<em>", isCorrect: false },
          { answer: "<ul>", isCorrect: true },
        ],
      },
      {
        question:
          "Which of the following attributes is used to add link to any element?",
        option: [
          { answer: "src", isCorrect: false },
          { answer: "link", isCorrect: false },
          {
            answer: "ref",
            isCorrect: false,
          },
          {
            answer: "href",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];

module.exports = obj;
