import "./App.css";
import useWindowDimensions from "./components/windowDimensions";
import Navbar from "./components/navbar";
import GetData from "./components/getData";
import { useState } from "react";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Navbar></Navbar>
      <aside
        id="aside"
        style={{ height: 927 - 56, backgroundColor: "#e5e5e5" }}
      >
        Hello world
        <p>
          width: {width} ~ height: {height}
          data: {GetData}
        </p>
      </aside>
    </div>
  );
}

export default App;
