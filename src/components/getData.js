import React, { useState, useEffect } from "react";
import axios from "axios";

function ListItem(props) {
  return (
    <div>
      <br></br>

      <a>{props.value}</a>
    </div>
  );
}

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
    <div className="list">
      <h2>AZ Tags</h2>

      {posts.map((x) => (
        // <li ix="tags" key={d.id.toString()} href={d.id}>
        //   {d.tagName}
        // </li>
        <ListItem key={x.id.toString()} value={x.tagName} id={x.id} />
      ))}
    </div>
  );
}
export default GetData;
