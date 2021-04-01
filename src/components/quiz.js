import React, { useState, useEffect } from "react";
import $ from "jquery";

function Quiz() {
  const [attempt, setAttempt] = useState("");
  useEffect(() => {
    if (localStorage.getItem("quiz1Score") == undefined) {
      console.log("no quiz");
      $(".toHide").show("slow");
      $(".message").hide();
    } else {
      console.log("set");
      $(".toHide").hide("slow");
      $(".message")
        .show()
        .text("You have already attempted this quiz. Try again?");
    }
  }, [attempt]);

  const quiz1 = [
    {
      question: "What does HTML stand for?",
      options: [
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
        {
          answer: "closing",
          isCorrect: false,
        },
        {
          answer: "Opening",
          isCorrect: true,
        },
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
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz1.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      localStorage.setItem("quiz1Score", true);
      setAttempt(true);
    }
  };
  return (
    <div className="quizPage">
      <h1>Quiz</h1>
      <p>Test your HTML knowledge and get ready for front end development</p>;
      <button
        className="message toHide"
        onClick={() => {
          localStorage.removeItem("quiz1Score");
          setAttempt(false);
          setScore(0);
          setCurrentQuestion(0);
        }}
      >
        Restart
      </button>
      <div className="quizScore">
        <p>
          You have scored {score} out of {quiz1.length}
        </p>
      </div>
      ) : (
      <>
        <div className="questions toHide">
          <div className="question-count">
            <p>
              <span>Question {currentQuestion + 1}</span>/{quiz1.length}
            </p>
          </div>
          <div className="question-text">
            <p>{quiz1[currentQuestion].question}</p>
          </div>
        </div>
        <div className="answers toHide">
          {quiz1[currentQuestion].options.map((x) => (
            <span style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={() => handleScore(x.isCorrect)}>
                {x.answer}
              </button>
            </span>
          ))}
        </div>
      </>
      )}
    </div>
  );
}

export default Quiz;
