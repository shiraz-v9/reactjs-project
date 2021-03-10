import "./App.css";
import useWindowDimensions from "./components/windowDimensions";
import Navbar from "./components/navbar";
import GetData from "./components/getData";
import { useState, useEffect } from "react";

function App() {
  const { height, width } = useWindowDimensions("");

  const AutoCSS = () => {
    useEffect(() => {
      // document.getElementById("sideBar").style.backgroundColor = { color };
      document.getElementById("sideBar").style.height = { height };
    });

    return null;
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
        </p>

        <GetData id="list" />
      </div>

      <div id="section">
        Editorial
        <AutoCSS />
      </div>
    </div>
  );
}

export default App;
