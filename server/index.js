const express = require("express");
const app = express();
// var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const html = require("../server/schema");
const users = require("../server/schema");
const TagsObj = require("../server/tagsObject");

app.use(cors());
app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//new connection to no SQL Mongo DB
const mongo = require("mongodb").MongoClient;
const url =
  "mongodb+srv://kashif:StB0DkDiHdzxK9tB@cluster0.16ex3.mongodb.net/htmlNode?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to Mongose client"))
  .catch((error) => console.log(error));

// mongo.connect(url, function (err, db) {
//   if (err) throw err;
//   if (err) throw err;
//   console.log("=> Connected with Mongo DB!");
//   db.close();
// });

app.get("/resample", (req, res) => {
  html
    .insertMany(TagsObj)
    .then(function () {
      console.log("Data inserted"); // Success
      res.send(TagsObj);
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});

// var db = mysql.createConnection({
//   host: "mudfoot.doc.stu.mmu.ac.uk",
//   port: "6306",
//   user: "tauseefk",
//   password: "drentaLd8",
//   database: "tauseefk",
// });

app.get("/home", (req, res) => {
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    dbo
      .collection("tags")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.get("/home/:tag", function (req, res) {
  const tag = req.params.tag;
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var query = { tagName: tag };
    dbo
      .collection("tags")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.post("/login", function (req, res) {
  var user = req.body.user;
  var userPassword = req.body.userPassword;
  var email = req.body.email;
  console.log(JSON.stringify(req.body));

  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var obj = { userName: user, userPwd: userPassword, userEmail: email };
    dbo.collection("users").insertOne(obj, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log("1 document inserted");
        // res.send("1 document inserted");
        db.close();
      }
    });
  });
});

app.post("/enter", urlencodedParser, (req, res) => {
  var email = req.body.Email;
  var userPassword = req.body.Password;

  console.log("logging user => ", JSON.stringify(req.body));
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var query = { userPwd: userPassword, userEmail: email };
    dbo
      .collection("users")
      .find(query)
      .toArray(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.send(result);
          db.close();
        }
      });
  });

  // db.query(
  //   "SELECT * FROM tauseefk.HTMLWebUsers WHERE userEmail = '" +
  //     email +
  //     "' AND userPwd='" +
  //     userPassword +
  //     "'",
  //   (err, rows, fields) => {
  //     if (err) {
  //       console.log(err);
  //     } else if (rows == "") {
  //       console.log("NO MATCH");
  //       // res.send("wrong credentials");
  //     } else {
  //       console.log(rows);
  //       res.send(rows);
  //     }
  //   }
  // );
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
