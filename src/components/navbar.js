import React from "react";

function Navbar() {
  return (
    <div className="navbar sticky">
      <ul className="navul">
        <h5>
          HTML <strong>Tutor</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code"
            viewBox="0 0 16 16"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg>
        </h5>
      </ul>

      <ul className="navul">
        <a href="http://localhost:3000/">Home</a>
      </ul>
      <ul className="navul">
        <a href="http://localhost:3000/account">Account</a>
      </ul>
      <ul className="navul">
        <a href="http://localhost:3000/community">Community</a>
      </ul>
    </div>
  );
}

export default Navbar;
