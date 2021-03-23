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
        setPost(res.data);
        fixHeight();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fixHeight = () => {
    var h = window.innerHeight - 55 + "px";
    document.getElementById("sideBar").style.maxHeight = h;
    document.getElementById("sideBar").style.overflowY = "scroll";
  };

  return (
    <div className="list">
      <h5 className="sticky">AZ Tags</h5>

      {posts.map((x) => (
        <ListItem key={x._id.toString()} value={x.tagName} id={x.id} />
      ))}
    </div>
  );
}
export default GetData;
