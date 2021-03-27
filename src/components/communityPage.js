import React, { useState, useEffect } from "react";
import { Button, Modal, Toast, Form } from "react-bootstrap";
import axios from "axios";

function Community() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState({
    postQuestion: "",
    postAuthor: "",
  });
  const [answer, setAnswer] = useState({ message: "" });
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const [postid, setPostid] = useState({ id: "", message: "", user: "" });
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [value, setValue] = useState("");
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  const closeModal2 = () => setShow2(false);
  const showModal2 = () => setShow2(true);
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

  const handleReply = (e) => {
    // e.preventDefault();
    setAnswer({
      ...answer,
      userID: localStorage.getItem("id"),
      message: e.currentTarget.value,
      user: localStorage.getItem("userName"),
    });
  };

  useEffect(
    function persistForm() {
      if (question.postQuestion !== "") {
        axios
          .post(`http://localhost:5000/addpost`, question)
          .then(function (response) {
            console.log(response.data);
            closeModal();
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("stopped");
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

  const validation = () => {
    if (!input.length) {
      console.log("add message");
      setMessage("add message");
    } else {
      setMessage("");
      setQuestion({
        ...question,
        postQuestion: input,
        postAuthor: localStorage.getItem("userName"),
      });
    }
  };

  const replyValidation = () => {
    console.log(answer);
    if (localStorage.getItem("userName") == undefined) {
      setMessage2("You're not logged in");
    } else if (answer.message == undefined) {
      setMessage2("add reply");
      console.log("add reply - not logged in");
    } else {
      setPostid(answer);
      setMessage2("");
    }
  };

  useEffect(
    function persistForm() {
      if (postid.message == "") {
        console.log("not posting");
      } else {
        console.log("USE EFFECT REPKLYPOST");
        axios
          .post(`http://localhost:5000/replypost`, postid)
          .then(function (response) {
            console.log(response.data);
            closeModal2();
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [postid]
  );

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
        {props.answer.map((d, i) => (
          <div className="comments" key={i}>
            <strong>
              <p>{d.user} replied ⤵</p>
            </strong>

            <ul>{d.answer}</ul>
          </div>
        ))}

        <span
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <button
            onClick={() => {
              setAnswer({ id: props.id });
              showModal2();
            }}
          >
            Reply
          </button>
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
        <span style={{ backgroundColor: "#393939", color: "white" }}>
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
          id={x._id}
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
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <button onClick={validation}>Post</button>
            <p style={{ color: "red" }}>{message}</p>
          </span>
        </div>

        <Modal.Footer>
          <Button variant="light" onClick={closeModal}>
            ❌
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className="bModal" show={show2} onHide={closeModal2}>
        <div className="modalContent">
          <label>Reply</label>
          <br></br>
          <Form.Control
            name="comment"
            as="textarea"
            rows={3}
            className="form-control"
            onChange={handleReply}
            placeholder="Ask community"
          />
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <button onClick={replyValidation}>Post</button>
            <p style={{ color: "red" }}>{message2}</p>
          </span>
        </div>

        <Modal.Footer>
          <Button variant="light" onClick={closeModal2}>
            ❌
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Community;
