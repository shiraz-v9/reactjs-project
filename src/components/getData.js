import React, { useState, useEffect } from "react";
import axios from "axios";

function ListItem(props) {
  return (
    <div>
      <br />
      {/* eslint-disable-next-line */}
      <a>{props.value}</a>
    </div>
  );
}

const GetData = () => {
  const url = "https://calm-lake-25316.herokuapp.com";
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/home`)
      .then((res) => {
        setPost(res.data);
        fixHeight();
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fixHeight = () => {
    // var h = window.innerHeight - 55 + "px";
    document.getElementById("sideBar").style.maxHeight =
      window.innerHeight + "px";
    document.getElementById("sideBar").style.overflowY = "scroll";
  };

  return (
    <div className="list">
      <h5>AZ Tags</h5>

      {posts.map((x) => (
        <ListItem key={x._id.toString()} value={x.tagName} id={x.id} />
      ))}
    </div>
  );
};
export default GetData;
