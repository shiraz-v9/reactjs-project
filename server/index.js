const express = require("express");
const app = express();
var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
var mysql = require("mysql");

var db = mysql.createConnection({
  host: "mudfoot.doc.stu.mmu.ac.uk",
  port: "6306",
  user: "tauseefk",
  password: "drentaLd8",
  database: "tauseefk",
});

var cloudSQL = mysql.createConnection({
  host: "34.105.204.216",
  port: "3306",
  user: "root",
  password: "drentaLd8",
  database: "tauseefk",
});

app.get("/home", (req, res) => {
  // db.connect();
  cloudSQL.query("SELECT * FROM tauseefk.HTMLWebContent;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/home/:tag", function (req, res) {
  const tag = req.params.tag;
  console.log(tag); // should display 123
  cloudSQL.query(
    "SELECT * FROM tauseefk.HTMLWebContent WHERE tagName='" + tag + "';",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/login", function (req, res) {
  var user = req.body.user;
  var lastName = req.body.lastName;
  var email = req.body.email;
  console.log(
    "User name => " + user + ", lastName is=> " + lastName,
    +", email=> " + email
  );
  cloudSQL.query(
    "INSERT INTO tauseefk.HTMLWebUsers (userName, lastName, userEmail) VALUES ('" +
      user +
      "', '" +
      lastName +
      "', '" +
      email +
      "');",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("created");
      }
    }
  );

  // res.end("created");

  //
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
