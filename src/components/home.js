import GetData from "../components/getData";
import GetRequest from "../components/getRequest";
import Login from "../components/login";
import React from "react";

function home() {
  return (
    <div>
      <div id="sideBar">
        <GetData />
      </div>

      <div id="section">
        <div>
          {/* <Login></Login> */}
          <GetRequest></GetRequest>
        </div>
      </div>
    </div>
  );
}

export default home;
