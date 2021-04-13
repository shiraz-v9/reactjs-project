import GetData from "../components/getData";
import GetRequest from "../components/getRequest";
import React from "react";

function home() {
  return (
    <div>
      <div id="sideBar">
        <GetData />
      </div>

      <div id="section">
        <div>
          <GetRequest></GetRequest>
        </div>
      </div>
    </div>
  );
}

export default home;
