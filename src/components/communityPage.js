import React, { useState, useEffect } from "react";
import axios from "axios";

function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getposts`)
      .then((res) => {
        console.log("posts loaded: ", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function DropData(props) {
    return (
      <div className="questions">
        <p style={{ fontWeight: "bold" }}>{props.question}</p>
        <p>answers:</p>
        {props.answer.map((d) => (
          <div className="comments">
            <p>{d.user} replied:</p>
            <li key={d.user}>{d.answer}</li>
          </div>
        ))}
        <button onClick={() => console.log(props.answer)}>reply</button>
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
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <button>ASK community</button>
      </span>
      {posts.map((x) => (
        <DropData
          key={x._id.toString()}
          question={x.postQuestion}
          answer={x.postAnswer}
        />
      ))}
    </div>
  );
}

export default Community;
