import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";

function Quiz() {
  const url = "https://calm-lake-25316.herokuapp.com";
  const [quiz, setQuiz] = useState("");
  const [attempt, setAttempt] = useState("");

  useEffect(() => {
    axios
      .get(`${url}/getquiz`)
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <p>
              <strong>{quiz[selection].quizName}</strong>
            </p>
            <p>
              Question {currentQuestion + 1}/{quiz[selection].question.length}
            </p>
          </div>

          <div className="questions toHide">
            <p>{quiz[selection].question[currentQuestion].question}</p>
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
        </div>
      );
    }
  };

  const renderScore = () => {
    if (quiz !== "" && showScore == true) {
      $(".toHide").hide();
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
        <button
          className="restartBtn"
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setCurrentQuestion(0);
          }}
        >
          restart 🔄
        </button>
        <button
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setSelection(0);
            setCurrentQuestion(0);
          }}
        >
          Quiz 1
        </button>
        <button
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setSelection(1);
            setCurrentQuestion(0);
          }}
        >
          Quiz 2
        </button>
        <button
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setSelection(2);
            setCurrentQuestion(0);
          }}
        >
          Quiz 3
        </button>
        <button
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setSelection(3);
            setCurrentQuestion(0);
          }}
        >
          Quiz 4
        </button>
        <button
          onClick={() => {
            setScore(0);
            $(".toHide").show("slow");
            setShowScore(false);
            setSelection(4);
            setCurrentQuestion(0);
          }}
        >
          Quiz 5
        </button>
      </span>
      <div>{selectQuiz()}</div>
    </div>
  );
}

export default Quiz;
