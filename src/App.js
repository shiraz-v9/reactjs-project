import "./App.css";
import useWindowDimensions from "./components/windowDimensions";
import Navbar from "./components/navbar";
import GetData from "./components/getData";
import GetRequest from "./components/getRequest";
import $ from "jquery";
import React, { useState, useEffect } from "react";

$(document).on("click", "a", function (event) {
  var target = $(event.target).closest("a");
  target.css("color", "grey");
  alert(target.text());
});

function App() {
  const { height, width } = useWindowDimensions("");

  // const AutoCSS = () => {
  //   useEffect(() => {
  //     document.getElementById("content").style.height = { height };
  //     document.getElementById("sideBar").style.height = { height };
  //   });

  //   return null;
  // };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="sideBar">
        <GetData id="list" />
      </div>

      <div id="section">
        <div id="content">
          Editorial width: {width} ~ height: {height}
          <GetRequest></GetRequest>
        </div>

        {/* <AutoCSS /> */}
      </div>
    </div>
  );
}

export default App;
