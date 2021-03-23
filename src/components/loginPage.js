import React from "react";
import Login from "./login";

function loginPage() {
  return (
    <div className="loginPage">
      <h1>Account</h1>
      <h4>
        Sign in and you can do much more and join the community of HTML
        developers!
      </h4>
      <Login></Login>
    </div>
  );
}

export default loginPage;
