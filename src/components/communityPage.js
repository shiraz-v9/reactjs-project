import React, { useState, useEffect } from "react";
import { Button, Modal, Toast } from "react-bootstrap";
import axios from "axios";

function Community() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState("");
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  const toggleToast = () => setToast(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getposts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTextArea = (e) => setInput(e.currentTarget.value);

  useEffect(
    function persistForm() {
      if (question !== [] && question !== "" && question !== null) {
        axios
          .post(`http://localhost:5000/addpost`, question)
          .then(function (response) {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [question]
  );

  const checkLoggedUser = () => {
    var user = localStorage.getItem("userName");
    if (user != undefined) {
      showModal();
    } else {
      console.log("not logged in");
      setToast();
    }
  };

  function DropData(props) {
    return (
      <div className="questions">
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p style={{ fontWeight: "bold" }}>{props.question}</p>
          <p>asked by {props.author}</p>
        </span>
        <p>answers:</p>
        {props.answer.map((d) => (
          <div className="comments">
            <strong>
              <p>{d.user} replied ⤵</p>
            </strong>

            <ul key={d.user}>{d.answer}</ul>
          </div>
        ))}
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={checkLoggedUser}>reply</button>
        </span>
      </div>
    );
  }

  return (
    <div className="community">
      <h1>Community Posts</h1>
      <p>
        here you can add post to community asking anything related to building
        websites and you can get great answers!
      </p>

      <span
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          padding: "5px",
        }}
      >
        <button onClick={checkLoggedUser}>ASK community</button>
        <span style={{ backgroundColor: "white" }}>
          <Toast show={toast} onClose={toggleToast}>
            <Toast.Header>
              <strong className="mr-auto">Alert!</strong>
            </Toast.Header>
            <Toast.Body>
              You can only post questions and answers when you're{" "}
              <a style={{ color: "blue" }} href="http://localhost:3000/account">
                Logged In
              </a>
            </Toast.Body>
          </Toast>
        </span>
      </span>
      {posts.map((x) => (
        <DropData
          key={x._id.toString()}
          author={x.postAuthor}
          question={x.postQuestion}
          answer={x.postAnswer}
        />
      ))}

      <Modal className="bModal" show={show} onHide={closeModal}>
        <div className="modalContent">
          <label>Question</label>
          <br></br>
          <textarea
            onBlur={handleTextArea}
            className="form-control"
            rows={3}
            placeholder="Ask community"
            name="postQuestion"
          />
          <button
            onClick={() =>
              setQuestion({
                postQuestion: input,
                postAuthor: localStorage.getItem("userName"),
              })
            }
          >
            Post
          </button>
        </div>

        <Modal.Footer>
          <Button variant="light" onClick={closeModal}>
            ❌
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Community;
