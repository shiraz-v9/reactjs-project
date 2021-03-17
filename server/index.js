const express = require("express");
const app = express();
var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

app.get("/home/:tag", function (req, res) {
  const tag = req.params.tag;
  // console.log(tag); // should display 123
  db.query(
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
  var userPassword = req.body.userPassword;
  var email = req.body.email;
  console.log(JSON.stringify(req.body));
  db.query(
    "INSERT INTO tauseefk.HTMLWebUsers (userName, userPwd, userEmail) VALUES ('" +
      user +
      "', '" +
      userPassword +
      "', '" +
      email +
      "')",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
        console.log("row inserted", rows);
      }
    }
  );
});

app.post("/enter", urlencodedParser, (req, res) => {
  var email = req.body.Email;
  var userPassword = req.body.Password;

  console.log("logging user => ", JSON.stringify(req.body));
  db.query(
    "SELECT * FROM tauseefk.HTMLWebUsers WHERE userEmail = '" +
      email +
      "' AND userPwd='" +
      userPassword +
      "'",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else if (rows == "") {
        console.log("NO MATCH");
        // res.send("wrong credentials");
      } else {
        console.log(rows);
        res.send(rows);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
