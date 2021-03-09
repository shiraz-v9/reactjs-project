const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

var mysql = require("mysql");

var db = mysql.createConnection({
  host: "mudfoot.doc.stu.mmu.ac.uk",
  port: "6306",
  user: "tauseefk",
  password: "drentaLd8",
  database: "tauseefk",
});

app.get("/home", (req, res) => {
  // db.connect();
  db.query("SELECT * FROM tauseefk.HTMLWebContent;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
