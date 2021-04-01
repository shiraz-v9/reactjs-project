const obj = [
  {
    quizName: "quiz1",

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
        options: [
          { answer: "1", isCorrect: false },
          { answer: "2", isCorrect: true },
          { answer: "3", isCorrect: false },
          { answer: "none", isCorrect: false },
        ],
      },
      {
        question: "what is the difference in an opening tag and a closing tag?",
        options: [
          { answer: "Closing tag has a / in front", isCorrect: true },
          { answer: "There is no difference ", isCorrect: false },
          { answer: "Opening tag has a / in front ", isCorrect: false },
          { answer: "Both tags have / in front", isCorrect: false },
        ],
      },
      {
        question: "< body > Is this an opening tag or a closing tag?",
        options: [
          { answer: "both", isCorrect: false },
          { answer: "self closing", isCorrect: false },
          { answer: "closing", isCorrect: false },
          { answer: "Opening", isCorrect: true },
        ],
      },
      {
        question: "Explain the < br  / > tag",
        options: [
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
];

module.exports = obj;
