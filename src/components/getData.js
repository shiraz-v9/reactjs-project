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
        console.log("Data loaded: ", res);
        setPost(res.data);
        fixHeight();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fixHeight = () => {
    var h = window.innerHeight - 45 + "px";
    // document.getElementById("sideBar").style.backgroundColor = "orange";
    document.getElementById("sideBar").style.maxHeight = h;
    document.getElementById("sideBar").style.overflow = "scroll";
    console.log("here it is ", h);
  };

  return (
    <div className="list">
      <h2 className="sticky">AZ Tags</h2>

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
