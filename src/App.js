import "./App.css";
import useWindowDimensions from "./components/windowDimensions";
import Navbar from "./components/navbar";
// import getData from "./components/getData";
import { useState, useEffect, Component } from "react";
import Axios from "axios";

function MyComponent() {
  const colors = {
    Sea: "#a2ccb6",
    Sand: "#fceeb5",
    Peach: "#ee786e",
  };
  const [color, setColor] = useState(colors.Sand);
  useEffect(() => {
    document.getElementById("sideBar").style.background = color;
    document.getElementById("sideBar").style.height = "658px";
  });

  return null;
}

function App() {
  const [Data, setData] = useState("");
  const { height, width } = useWindowDimensions();
  const GetData = () => {
    Axios.get("http://localhost:5000/home").then((response) => {
      console.log(response);

      setData(JSON.stringify(response));
    });
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div
        id="sideBar"
        // style={{ height: { height }, backgroundColor: "#e5e5e5" }}
      >
        <p>
          width: {width} ~ height: {height}
          {Data}
        </p>
        <button onClick={GetData}>Show data</button>
      </div>
      <div id="section">
        Editorial
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
