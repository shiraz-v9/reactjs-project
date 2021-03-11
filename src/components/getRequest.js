import React, { useState, useEffect } from "react";
import axios from "axios";

function GetRequest() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        // console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const DropName = () => {
  //     items.map((answer, i) => {
  //       console.log("Entered");
  //       // Return the element. Also pass key
  //       return <h1 key={answer.id} answer={answer.username} />;
  //     });
  //   };

  return (
    <div>
      <h1>hi</h1>
      {/* {DropName} */}
      {items.map((d) => (
        <li key={d.id.toString()}>{d.username}</li>
      ))}
    </div>
  );
}

export default GetRequest;
