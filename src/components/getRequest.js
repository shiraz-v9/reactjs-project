import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";

function GetRequest() {
  const url2 = "";
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  //Get text from my links and return data from db
  $(document).on("click", "a", function (event) {
    var target = $(event.target).closest("a");
    target.css("color", "grey");
    setUrl(target.text());
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // const handleChange = (editor, data, value) => {
  //   onChange(setHtml);
  // };

  function ListItem(props) {
    setHtml(props.example);
    return (
      <div id="dataContainer">
        <h1>HTML tutorial</h1>
        <br></br>

        <h2>{props.tag} element</h2>
        {/* <br></br> */}
        {/* <code>{props.example}</code> */}
        <div className="codeMirror">
          <CodeMirror
            language="xml"
            displayName="HTML"
            // onBeforeChange={handleChange}
            value={props.example}
            // onChange={ }
            className="code-mirror-wrapper"
            options={{
              lineWrapping: true,
              lint: true,
              mode: "xml",
              theme: "material",
              lineNumbers: false,
            }}
          />
        </div>
        <br></br>
        <div className="iframe">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            // frameBorder="0"
            width="100%"
            // height="100%"
          />
        </div>
        <br></br>
        <p>{props.description}</p>
      </div>
    );
  }

  const [items, setItems] = useState([]);
  const [url, setUrl] = useState("<!--...-->");

  useEffect(() => {
    axios
      .get(`${url2}/home/${url}`)
      .then((res) => {
        // console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      {items.map((x) => (
        <ListItem
          key={x._id.toString()}
          tag={x.tagName}
          example={x.tagExample}
          description={x.tagDescription}
          id={x.id}
        />
      ))}
    </div>
  );
}

export default GetRequest;
