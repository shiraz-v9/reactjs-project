const express = require("express");
const app = express();
var router = express.Router();
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

app.get("/home/:id", function (req, res) {
  const id = req.params.id;
  console.log(id); // should display 123
  cloudSQL.query(
    "SELECT * FROM tauseefk.HTMLWebContent WHERE id=" + id + "",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
