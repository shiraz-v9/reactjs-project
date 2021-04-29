import { React, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import CodeMirror from "./codeMirror";

function WelcomePage() {
  const CodeBox = (props) => {
    const [html, setHtml] = useState(props.data);

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setSrcDoc(`
    //     <html>
    //       <body>${html}</body>
    //       <style>${css}</style>
    //       <script>${js}</script>
    //     </html>
    //   `);
    //   }, 250);

    //   return () => clearTimeout(timeout);
    // }, [html, css, js]);

    return (
      <div style={{ height: "auto" }}>
        <CodeMirror
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </div>
    );
  };

  return (
    <div className="welcome">
      <h1>HTML learning</h1>
      <p>
        HTML (HyperText Markup Language) is the most basic building block of the
        Web. It defines the meaning and structure of web content. Other
        technologies besides HTML are generally used to describe a web page's
        appearance/presentation (CSS) or functionality/behavior (JavaScript).
      </p>
      <p>
        "Hypertext" refers to links that connect web pages to one another,
        either within a single website or between websites. Links are a
        fundamental aspect of the Web. By uploading content to the Internet and
        linking it to pages created by other people, you become an active
        participant in the World Wide Web.
      </p>
      <p>
        HTML uses "markup" to annotate text, images, and other content for
        display in a Web browser. HTML markup includes special "elements" such
        as{" "}
        <code>
          head, title, body, header, footer, article, section, p, div, span,
          img, aside, audio, canvas, datalist, details, embed, nav, output,
          progress, video, ul, ol, li
        </code>{" "}
        and many others.
      </p>
      <h3>remember 💡</h3>
      <span style={{ display: "flex", flexDirection: "row" }}>
        <img
          alt="html logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
          style={{ width: "100px", height: "100px" }}
        />

        <ul>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>
            HTML5 is the latest evolution of the standard that defines HTML
          </li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>
            HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc
          </li>
        </ul>
      </span>
      <h3>HTML Crash Course video</h3>
      <iframe
        // width="560"
        height="415"
        src="https://www.youtube.com/embed/qz0aGYrrlhU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <hr />
      <h3>HTML tutors essentials!</h3>
      <p>According to Colombia edu thes are the most used HTML tags</p>
      <div className="questions">
        <p>To create the HTML this is a must.</p>
        <CodeBox data="<HTML>. . . </HTML>" />
      </div>
      <div className="questions">
        <p>The head, or prologue, of the HTML document</p>
        <CodeBox data="<head> . . . </head>" />
      </div>
      <div className="questions">
        <p>All the other content in the HTML document</p>
        <CodeBox data="<body> . . . </body>" />
      </div>

      <div className="questions">
        <p>All the other content in the HTML document</p>
        <CodeBox data="<title> . . . </title>" />
      </div>
      <div className="questions">
        <p>Headings</p>
        <CodeBox data="<h1> . . . </h1>" />
      </div>
      <div className="questions">
        <p>
          Paragraph Hitting a return in the HTML file will not make a new
          paragraph when the file is viewed. You need to use this tag to make a
          new paragraph.
        </p>
        <CodeBox data="<p>some paragraphs</p>" />
      </div>
      <div className="questions">
        <p>Line Break This tag will show a blank line.</p>
        <CodeBox data="<BR>" />
      </div>
      <div className="questions">
        <p>Horizontal Rule Creates a horizontal line on the page.</p>
        <CodeBox data="<HR>" />
      </div>
      <div className="questions">
        <p>
          Comment The comments you write in the middle will not show up on the
          page when viewed.
        </p>
        <CodeBox data="<!- . . . ->" />
      </div>
      <div className="questions">
        <p>Link (A=Anchor) links the current HTML file to another file.</p>
        <CodeBox data="<a href=''> . . . </a>" />
      </div>
      <div className="questions">
        <p>
          "Table"=Starts a table. "TR" (Table Row) = Starts a row. "TD" (Table
          Data) = Starts a cell to enter data. "/TD" = Puts an End to data
          entry. "/TR" = Puts an end to a row. "/table" = Ends Table.
        </p>
        <CodeBox
          data="<table>
        <TR>
        <TD>
        </TD>
        </TR>
        </table>"
        />
      </div>
      <div className="questions">
        <p>Italic Makes text italic</p>
        <CodeBox data="<i> . . . </i>" />
      </div>
      <div className="questions">
        <p>Bold Makes text bold</p>
        <CodeBox data="<b> . . . </b>" />
      </div>
      <div className="questions">
        <p>Image Put the name of the graphic (.gif or .jpg) in the quotes.</p>
        <CodeBox data="<img src='image.gif'>" />
      </div>
      <span style={{ textAlign: "center" }}>
        <p>
          Get the full reference list of HTML tags <a href="/tags">here</a>
        </p>
      </span>
    </div>
  );
}

export default WelcomePage;
