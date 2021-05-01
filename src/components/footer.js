import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p>Website by Kashif Tauseef ID 170 88 205</p>
        <p>Made for the project unit MMU BSc Software Engineering (6G6Z1101)</p>
        <p>
          contact: <a href="mailto:kashiftauseef@gmail.com">Admin</a>
        </p>
      </span>
    </footer>
  );
}

export default Footer;
