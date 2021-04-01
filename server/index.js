const express = require("express");
const app = express();
require("dotenv/config"); //DB credential file is on gitIgnore list

const cors = require("cors");
const bodyParser = require("body-parser");
var crypto = require("crypto");
const html = require("./tagSchema");
const users = require("./userSchema");
const posts = require("./postSchema");
const quiz = require("./quizSchema");
const TagsObj = require("../server/tagsObject");
const quizOBJ = require("../server/quizObject");

app.use(cors());
app.use(express.json());

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

//new connection to no SQL Mongo DB
const mongo = require("mongodb").MongoClient;
const url = process.env.myConnection;
const mongoose = require("mongoose");
const { post } = require("jquery");
const { response } = require("express");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to Mongose"))
  .catch((error) => console.log(error));

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

app.get("/home", async (req, res) => {
  try {
    const justTags = await html.find({});
    res.json(justTags);
  } catch (err) {
    console.log(err);
  }
});

app.get("/home/:tag", async (req, res) => {
  const tag = req.params.tag;
  var query = { tagName: tag };
  try {
    const find = await html.find(query).exec();
    res.json(find);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  var user = req.body.user;
  var userPassword = req.body.userPassword;
  var email = req.body.email;

  var encript = crypto.createCipher("aes-128-cbc", "mypassword");
  var pw = encript.update(userPassword, "utf8", "hex");
  pw += encript.final("hex");

  var obj = { userName: user, userPwd: pw, userEmail: email };

  const createAccount = new users(obj);

  try {
    await createAccount.save();
    res.send("Account created!");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

app.post("/enter", async (req, res) => {
  var email = req.body.Email;
  var userPassword = req.body.Password;

  var encript = crypto.createCipher("aes-128-cbc", "mypassword");
  var encrypted = encript.update(userPassword, "utf8", "hex");
  encrypted += encript.final("hex");

  var decript = crypto.createDecipher("aes-128-cbc", "mypassword");
  var decripted = decript.update(encrypted, "hex", "utf8");
  decripted += decript.final("utf8");

  var person = { userPwd: encrypted, userEmail: email };

  try {
    const q = await users.find(person, "userName _id").exec();
    res.json(q);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addpost", async (req, res) => {
  var question = req.body;
  const ask = new posts(question);
  try {
    await ask.save();
    res.send("posted");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getquiz", async (req, res) => {
  const aquiz = await quiz.find({ quizName: "quiz1" });
  try {
    res.json(aquiz);
    // res.send("hello");
    console.log(aquiz);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.post("/resamplequiz", (req, res) => {
  try {
    quiz.create(quizOBJ);
    console.log("Data inserted"); // Success
    res.json(quizOBJ);
  } catch (error) {
    console.log(error);
  }
});
//only updates original comment!
// app.post("/replypost", async (req, res) => {
//   // var reply = req.body.reply;
//   var id = "605a5e6edc36f50e84c24f58";
//   await posts.findByIdAndUpdate(
//     id,
//     {
//       postAnswer: {
//         user: "kashiff",
//         answer: "sorrybut i dont know",
//       },
//     },

//     function (err, doc) {
//       console.log(doc);
//       res.send("comment posted!");
//     }
//   );
// });

app.post("/replypost", async (req, res) => {
  console.log(req.body);
  var obj = {
    userID: req.body.userID,
    user: req.body.user,
    answer: req.body.message,
  };

  try {
    await posts.findOne({ _id: req.body.id }).then(function (comment) {
      comment.postAnswer.push(obj);
      comment.save();
      // res.json(comment);
      res.send("comment posted");
    });
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

app.get("/getposts", async (req, res) => {
  const communityPost = await posts.find({});
  try {
    res.json(communityPost);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
