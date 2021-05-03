const { GetData } = require("./getData");
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
const axios = require("axios");
import MockAdapter from "axios-mock-adapter";
import render from "@testing-library/react";

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

it("Renders youtube videos", async () => {
  try {
    var div = document.createElement("div");

    await ReactDOM.render(
      <iframe
        height="415"
        src="https://www.youtube.com/embed/bWPMSSsVdPk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>,
      div
    );
    await ReactDOM.render(
      <iframe
        height="415"
        src="https://www.youtube.com/embed/qz0aGYrrlhU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>,
      div
    );
  } catch (error) {
    console.log(error);
  }
});
