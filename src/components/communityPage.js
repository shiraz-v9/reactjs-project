import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function Community() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState("");
  const [input, setInput] = useState("");
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getposts`)
      .then((res) => {
        // console.log("posts loaded: ", res);
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
      } else {
        console.log("NOT POSTING dont worry G");
      }
    },
    [question]
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
        {props.answer.map((d) => (
          <div className="comments">
            <p>{d.user} replied ⤵</p>
            <ul key={d.user}>{d.answer}</ul>
          </div>
        ))}
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={() => console.log(props.answer)}>reply</button>
        </span>
      </div>
    );
  }

  return (
    <div className="community">
      <h1>Community Posts</h1>
      <h2>{JSON.stringify(question)}</h2>
      <p>
        here you can add post to community asking anything related to building
        websites and you can get great answers!
      </p>
      <span
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <button onClick={showModal}>ASK community</button>
      </span>
      {posts.map((x) => (
        <DropData
          key={x._id.toString()}
          author={x.postAuthor}
          question={x.postQuestion}
          answer={x.postAnswer}
        />
      ))}
      <Modal show={show} onHide={closeModal}>
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
                postAuthor: localStorage.getItem("user"),
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
