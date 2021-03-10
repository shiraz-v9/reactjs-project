import React, { useState, useEffect } from "react";
import axios from "axios";

function GetData() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/home`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.tagName}</li>
        ))}
      </ul>
    </div>
  );
}
export default GetData;
