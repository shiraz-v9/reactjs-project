import { useState, useEffect } from "react";
import Axios from "axios";

const GetData = () => {
  const [Data, setData] = useState("hello");
  Axios.get("http://localhost:5000/home").then((response) => {
    // setData(response);
    console.log(Data);

    return console.log(response.data);
  });
};

export default GetData;
// export default function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
