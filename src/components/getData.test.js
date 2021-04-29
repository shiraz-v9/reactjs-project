const { GetData } = require("./getData");
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
const axios = require("axios");
import MockAdapter from "axios-mock-adapter";

it("Receive Tags from DB", () => {
  axios.get("https://calm-lake-25316.herokuapp.com/home").then((response) => {
    expect(response.data).toBeTruthy;
    // done();
  });
});

const items = ["<!--...-->", "<wbr>", "<samp>", "<picture>"];
const tag = items[Math.floor(Math.random() * items.length)];
it(`testing random Tag: ${tag}  attempt`, async () => {
  try {
    await axios
      .get(`https://calm-lake-25316.herokuapp.com/home/${tag}`)
      .then((res) => {
        expect(res.data).toBeTruthy();
        // done();
      });
  } catch (error) {
    console.log(error);
  }
});

it("Load community posts", async () => {
  try {
    await axios
      .get("https://calm-lake-25316.herokuapp.com/getposts")
      .then((res) => {
        expect(res.data).toBeTruthy();
        // done();
      });
  } catch (error) {
    console.log(error);
  }
});

it("Load Quizzes", async () => {
  try {
    await axios
      .get("https://calm-lake-25316.herokuapp.com/getquiz")
      .then((res) => {
        expect(res.data).toBeTruthy();
        // done();
      });
  } catch (error) {
    console.log(error);
  }
});

it("loading Images", () => {});
