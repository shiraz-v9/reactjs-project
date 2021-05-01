import React, { useState, useEffect } from "react";
import { Button, Modal, Toast, Form } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

function Community() {
  const url = "https://calm-lake-25316.herokuapp.com";
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState({
    postQuestion: "",
    postAuthor: "",
    postAuthorID: "",
  });
  const [answer, setAnswer] = useState({ message: "" });
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const [postid, setPostid] = useState({ id: "", message: "", user: "" });
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [search, setSearch] = useState("");
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  const closeModal2 = () => setShow2(false);
  const showModal2 = () => setShow2(true);
  const toggleToast = () => setToast(false);

  //get posts
  useEffect(() => {
    axios
      .get(`${url}/getposts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTextArea = (e) => setInput(e.currentTarget.value);

  const handleReply = (e) => {
    setAnswer({
      ...answer,
      userID: localStorage.getItem("id"),
      message: e.currentTarget.value,
      user: localStorage.getItem("userName"),
      answerDate: moment().format("LLL"),
    });
  };
  //questions
  useEffect(
    function persistForm() {
      if (question.postQuestion !== "") {
        axios
          .post(`${url}/addpost`, question)
          .then(function (response) {
            closeModal();
            window.location.reload();
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
      setToast();
    }
  };

  const validation = () => {
    if (!input.length) {
      setMessage("add message");
    } else {
      setMessage("");
      setQuestion({
        ...question,
        postQuestion: input,
        postAuthor: localStorage.getItem("userName"),
        postAuthorID: localStorage.getItem("id"),
        postDate: moment().format("LLL"),
      });
    }
  };

  const replyValidation = () => {
    if (localStorage.getItem("userName") == undefined) {
      setMessage2("You're not logged in");
    } else if (answer.message == undefined) {
      setMessage2("add reply");
    } else {
      setPostid(answer);
      setMessage2("");
    }
  };
  //replies
  useEffect(
    function persistForm() {
      if (postid.message == "") {
      } else {
        axios
          .post(`${url}/replypost`, postid)
          .then(function (response) {
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
  //search
  useEffect(
    function persistForm() {
      if (search != "") {
        axios
          .post(`${url}/findposts`, search)
          .then(function (res) {
            setPosts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [search]
  );

  function DropData(props) {
    return (
      <div className="questions">
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>asked by {props.author}</p>
          <p>{props.date}</p>
        </span>
        <p style={{ fontWeight: "bold" }}>{props.question}</p>
        <p>answers:</p>
        {props.answer.map((d, i) => (
          <div className="comments" key={i}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <p>{d.user} replied ⤵</p>
              <p>{d.answerDate}</p>
            </span>
            <p>{d.answer}</p>
          </div>
        ))}

        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
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
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <button onClick={checkLoggedUser}>ASK community</button>
        <div className="input-group">
          <input
            id="searchBox"
            style={{ width: "50%", marginLeft: "10px" }}
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search with two button addons"
          ></input>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setSearch({ search: "" });
              document.getElementById("searchBox").value = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setSearch({ search: document.getElementById("searchBox").value });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </span>

      <Toast id="toast" show={toast} onClose={toggleToast}>
        <Toast.Header>
          <strong className="mr-auto">
            <p>Alert!</p>
          </strong>
        </Toast.Header>

        <Toast.Body>
          <p>
            You can only post questions and answers when you're{" "}
            <a className="active1" href="/account">
              Logged In
            </a>
          </p>
        </Toast.Body>
      </Toast>

      {posts.map((x) => (
        <DropData
          key={x._id.toString()}
          id={x._id}
          author={x.postAuthor}
          question={x.postQuestion}
          answer={x.postAnswer}
          date={x.postDate}
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
            placeholder="Reply"
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
