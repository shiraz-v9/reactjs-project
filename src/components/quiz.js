import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";

function Quiz() {
  const [quiz, setQuiz] = useState("");
  const [attempt, setAttempt] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("quiz1Score") == undefined) {
  //     console.log("no quiz");
  //     $(".toHide").show("slow");
  //     $(".message").hide();
  //     // console.log(JSON.stringify(quiz1));
  //   } else {
  //     console.log("set");
  //     $(".toHide").hide("slow");
  //     $(".message")
  //       .show()
  //       .text("You have already attempted this quiz. Try again?");
  //   }
  // }, [attempt]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getquiz")
      .then((res) => {
        console.log("DATA RECEIVED", res.data);
        setQuiz(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [selection, setSelection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz[selection].question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      localStorage.setItem("quiz1Score", true);
      setAttempt(true);
    }
  };

  const selectQuiz = () => {
    if (quiz !== "") {
      return (
        <div>
          <p style={{ textAlign: "center" }}>
            <strong>{quiz[selection].quizName}</strong>
          </p>

          <p>
            <div className="questions toHide">
              <li>{quiz[selection].question[currentQuestion].question}</li>
            </div>
            <div className="answers toHide">
              {quiz[selection].question[currentQuestion].option.map((y) => (
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <button onClick={() => handleScore(y.isCorrect)}>
                    {y.answer}
                  </button>
                </span>
              ))}
            </div>
          </p>
        </div>
      );
    }
  };

  const renderScore = () => {
    if (quiz !== "" && showScore == true) {
      return (
        <div className="quizScore">
          <p>
            You have scored {score} out of {quiz[selection].question.length}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="quizPage">
      <h1>Quiz</h1>
      <p>Test your HTML knowledge and get ready for front end development</p>;
      <div>{renderScore()}</div>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <button>Restart</button>
        <button onClick={() => setSelection(0)}>Quiz 1</button>
        <button onClick={() => setSelection(1)}>Quiz 2</button>
      </span>
      <div>{selectQuiz()}</div>
    </div>
  );
}

export default Quiz;
