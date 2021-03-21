const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
var crypto = require("crypto");
const html = require("../server/schema");
const users = require("../server/schema");
const posts = require("../server/schema");
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
  var encript = crypto.createCipher("aes-128-cbc", "mypassword");
  var pw = encript.update(userPassword, "utf8", "hex");
  pw += encript.final("hex");

  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var obj = { userName: user, userPwd: pw, userEmail: email };
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

  var encript = crypto.createCipher("aes-128-cbc", "mypassword");
  var encrypted = encript.update(userPassword, "utf8", "hex");
  encrypted += encript.final("hex");

  var decript = crypto.createDecipher("aes-128-cbc", "mypassword");
  var decripted = decript.update(encrypted, "hex", "utf8");
  decripted += decript.final("utf8");

  console.log("logging user => ", JSON.stringify(req.body));
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var query = { userPwd: decripted, userEmail: email };
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
});

app.get("/addpost", function (req, res) {
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    var obj = {
      postQuestion: "How to create a simple table in HTML?",
      postAnswer: {
        answer:
          "it's simple you can build tables with TH table header and TD table tags!",
        user: "Raphael",
      },
    };
    dbo.collection("posts").insertOne(obj, function (err, res) {
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

app.get("/getposts", function (req, res) {
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("htmlNode");
    dbo
      .collection("posts")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
