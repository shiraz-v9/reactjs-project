import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror2 } from "react-codemirror2";
import CodeMirror from "./codeMirror";

function GetRequest() {
  const url2 = "https://calm-lake-25316.herokuapp.com";
  const [html, setHtml] = useState("");
  const [html2, setHtml2] = useState();
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [modaliFrame, setModaliFrame] = useState("");
  //Get text from my links and return data from db
  $(document).on("click", "a", function (event) {
    var target = $(event.target).closest("a");
    target.css("color", "grey");
    setUrl(target.text());
  });
  //closing modal behaviour
  $("#closed").click(function () {
    setHtml2("");
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModaliFrame(`
        <html>
          <body>${html2}</body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html2]);

  const Modal = () => {
    return (
      <div>
        <div class="modalContent">
          <div style={{ height: "auto" }}>
            <p style={{ color: "black" }}>insert code in the box</p>
            <CodeMirror
              language="xml"
              displayName="HTML"
              value={html2}
              onChange={setHtml2}
            />
          </div>
          <br />
          <div className="iframe">
            <iframe
              srcDoc={modaliFrame}
              title="output"
              sandbox="allow-scripts"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  };

  const Highlighter = () => {
    return (
      <CodeMirror2
        language="xml"
        displayName="HTML"
        value={html}
        // onChange={setHtml}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "xml",
          theme: "monokai",
          lineNumbers: false,
        }}
      />
    );
  };

  const ListItem = (props) => {
    useEffect(() => {
      setHtml(props.example);
    });
    return (
      <div id="dataContainer">
        <h2>Element {props.tag}</h2>
        <div className="codeMirror">{Highlighter()}</div>
        <br></br>
        <button
          type="button"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Test it Yourself!
        </button>

        <div className="iframe">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
          />
        </div>
        <br></br>
        <p>{props.description}</p>
      </div>
    );
  };

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
    <>
      <div>
        {items.map((x) => (
          <ListItem
            key={x._id.toString()}
            tag={x.tagName}
            example={x.tagExample}
            description={x.tagDescription}
            id={x._id}
          />
        ))}
      </div>

      <div
        id="myModal"
        data-backdrop="static"
        aria-labelledby="staticBackdropLabel"
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" style={{ color: "black" }}>
                Try yourself editor
              </h5>
            </div>
            {Modal()}
            <div class="modal-footer">
              <button
                id="closed"
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                ❌
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetRequest;
