import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    // <li>
    <a>{props.value}</a>
    /* <button id="tagBtn">{props.id}</button> */
    // </li>
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
    <div>
      <p>AZ Tags</p>

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
