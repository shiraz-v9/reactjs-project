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
        <p>{props.answer}</p>
        <button>reply</button>
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

      {posts.map((x) => (
        <DropData
          key={x._id.toString()}
          question={x.postQuestion}
          answer={x.postAnswer.answer}
        />
      ))}
    </div>
  );
}

export default Community;
