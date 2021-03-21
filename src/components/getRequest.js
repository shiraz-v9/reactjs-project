import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

function GetRequest() {
  //Get text from my links and return data from db
  $(document).on("click", "a", function (event) {
    var target = $(event.target).closest("a");
    target.css("color", "grey");
    setUrl(target.text());
  });

  function ListItem(props) {
    return (
      <div id="dataContainer">
        <br></br>

        <h1>{props.tag}</h1>
        <br></br>
        <code>{props.example}</code>
        <br></br>
        <br></br>
        <p>{props.description}</p>
      </div>
    );
  }

  const [items, setItems] = useState([]);
  const [url, setUrl] = useState("<!--...-->");

  useEffect(() => {
    axios
      .get("http://localhost:5000/home/" + url)
      .then((res) => {
        // console.log(res);
        setItems(res.data);
        console.log("Tag received: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      {items.map((x) => (
        <ListItem
          key={x._id.toString()}
          tag={x.tagName}
          example={x.tagExample}
          description={x.tagDescription}
          id={x.id}
        />
      ))}
    </div>
  );
}

export default GetRequest;
