const script = [
  {
    tagName: "<!--...-->",
    tagDescription:
      "This is how you comment in HTML. Comments are useful in development when testing where you can disable line of codes or information when yopu work in teams.",
    tagExample: "<!-- this is a comment -->",
  },
  {
    tagName: "<!DOCTYPE>",
    tagDescription:
      "this is the declaraction that goes at the beginning of the page, it is a MUST and without this you can not work.",
    tagExample: "<!DOCTYPE html>",
  },
  {
    tagName: "<a>",
    tagDescription:
      "This is the anchor tag. You can create hyperlinks alongside the href tag",
    tagExample: "<a href='http://localhost:3000'>",
  },
  {
    tagName: "<abbr>",
    tagDescription:
      "Abbreviation tag, it is useful for creating acronyms for long names, and hovering over with the mouse reveals the full name.",
    tagExample:
      "The <abbr title='Ultimate Fighting Championship'>UFC</abbr> was founded in 1948.",
  },
  {
    tagName: "<acronym>",
    tagDescription: "see <abbr>.",
    tagExample: "not supported",
  },
  {
    tagName: "<address>",
    tagDescription:
      "The address tag defines the address of a person, the email it is rendered in italics and breaks are added at the begginning and end of the address tag.",
    tagExample:
      "<p>Contact:</p><address><a href='mailto:strawberry@fruit.com'>strawberry@fruit.com</a><br><a href='phone:+23789231232'>23789231232</a></address>",
  },
  {
    tagName: "<applet>",
    tagDescription:
      "This was made for plugins like Flash, modern browsers have stopped this.",
    tagExample: "not supported",
  },
  {
    tagName: "<area>",
    tagDescription:
      "This tag can make an area that is clickable for example images. This tag support different shapes with the Shape attribute you can make it rectangle, circle or poligonal regions.",
    tagExample: "<area shape='default | rect | circle | poly'>",
  },
  {
    tagName: "<article>",
    tagDescription: "Article is part of HTML semantics ",
    tagExample:
      "<article><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></article>",
  },
  {
    tagName: "<aside>",
    tagDescription:
      "Aside is part of HTML semantics, and it is useful when there is a need to put content on a side, an idea of this content could be advertisement or sidebar",
    tagExample:
      "<aside><p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p></aside>",
  },
  {
    tagName: "<audio>",
    tagDescription:
      "Audio element allows you to embed sound into the webpage, popular format include MP3 & WAV, OGG format is also available but not supported in Safari Browser",
    tagExample:
      "<audio controls><source src='lion.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>",
  },
  {
    tagName: "<b>",
    tagDescription: "Makes text bold for emphasising importance",
    tagExample: "<p>normal text - <b>bold text</b>.</p>",
  },
  {
    tagName: "<base>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<basefont>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<bdi>",
    tagDescription:
      "Bi-Directional Isolation is a tag useful when we are dealing with different languages from user input, such Arabic derived languages that start from right rather then left. This would not alterate the list/table direction",
    tagExample:
      "<ul><li>User <bdi>Dave</bdi>: 40 marks</li><li>User <bdi>Abdul</bdi>: 50 marks</li><li>User <bdi>إيان</bdi>: 80 marks</li></ul>",
  },
  {
    tagName: "<bdo>",
    tagDescription:
      "Bi-Directional Override can override the direction of the text with parameters ltr left to right and rtl right to left",
    tagExample: "<bdo dir='rtl'>right to left text</bdo>",
  },
  {
    tagName: "<big>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<blockquote>",
    tagDescription:
      "Blockquote is used for reference when citing other work, this will indent the quote. Note for short quotes che the <q> element.",
    tagExample:
      "<blockquote cite='http://www.worldwildlife.org/who/index.html'>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</blockquote>",
  },
  {
    tagName: "<body>",
    tagDescription:
      "This is the content section of your HTML, and it contains all the elements Headings, articles, semantic elements etc... Note that there can be only one Body.",
    tagExample: "<body><h1>Heading 1</h1><p>lorem ipsum ...</p></body>",
  },
  {
    tagName: "<br>",
    tagDescription: "Break tag allows you to enter a single line break.",
    tagExample:
      "<p>forcing a line break<br> can be done with the <br> tag<br> element</p>",
  },
  {
    tagName: "<button>",
    tagDescription:
      "The button element is useful for triggering events and run functions and submit forms",
    tagExample:
      "<button type='button' onclick='alert('you clcked the button')'>Click Me!</button>",
  },
  {
    tagName: "<canvas>",
    tagDescription:
      "Used with JavaScript the Canvas element can contain graphics ",
    tagExample:
      "<canvas id='canvas1'>Your browser does not support the canvas tag.</canvas><script>var canvas = document.getElementById('canvas1');var ctx = canvas.getContext('2d');ctx.fillStyle = '#FF0000';ctx.fillRect(0, 0, 80, 80);</script>",
  },
  {
    tagName: "<caption>",
    tagDescription:
      "Caption element must be used immediately after the <table> element, and it is used to define a table caption",
    tagExample:
      "<table><caption>Monthly savings</caption><tr><th>Month</th><th>Savings</th></tr><tr><td>January</td><td>$100</td></tr><tr><td>February</td><td>$50</td></tr></table>",
  },
  {
    tagName: "<center>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<cite>",
    tagDescription:
      "Cite element italicize text that is someone's creative work.",
    tagExample:
      "<p><cite>Beyond Order</cite> by Jordan Perterson is now available.</p>",
  },
  {
    tagName: "<code>",
    tagDescription:
      "Code element used to render computer code as normal text in monospace font. Code inside this tag is not executed.",
    tagExample:
      "<p>The HTML <code><b>bold</b></code> tag defines bold text</p>",
  },
  {
    tagName: "<col>",
    tagDescription:
      "The <col> tag specifies column properties like inline style for each column within a <colgroup> element relating to a Table. the span property ",
    tagExample:
      "<colgroup><col span='2' style='background-color:grey'></colgroup>",
  },
  {
    tagName: "<colgroup>",
    tagDescription:
      "This element specifies one or more group of columns inside the <table> tag. You can format and style with the <col> tag",
    tagExample: "<col span='2' style='background-color:grey'>",
  },
  {
    tagName: "<data>",
    tagDescription:
      "This element is useful for machine readable data and has to be used with the attribute value usuful to hold keys/IDs. Does not work with Safari browser",
    tagExample: "<data value='523745'>Cheese</data>",
  },
  {
    tagName: "<datalist>",
    tagDescription:
      "This element is used for Input option list and can be useful for autocomplete within list.",
    tagExample:
      "<input list='browsers' name='browser' id='browser'><datalist id='browsers'><option value='Edge'><option value='Firefox'><option value='Chrome'><option value='Opera'><option value='Safari'></datalist>",
  },
  {
    tagName: "<dd>",
    tagDescription:
      "This element is used to describe a term/name in a description list <dl>.",
    tagExample:
      "<dl><dt>Coffee</dt><dd>Black caffeinated hot drink</dd><dt>Iced-Tea</dt><dd>Soft cold drink</dd></dl>",
  },
  {
    tagName: "<del>",
    tagDescription:
      "This element is used to define a text that has been deleted and the browser will display it with a strikethrough.",
    tagExample: "<p>My favorite color is <del>white</del></p>",
  },
  {
    tagName: "<details>",
    tagDescription:
      "This element when clicked opens a section with relavant data. By default is closed, however this can be changed by assigning the attribute 'open'",
    tagExample:
      "<details open><summary>UFC</summary><p>The Ultimate Fighting Championship is an American mixed martial arts promotion company based in Las Vegas, Nevada.</p></details>",
  },
  {
    tagName: "<dfn>",
    tagDescription:
      "This element 'definition', is used to for specifying a term that is going to be defined. The browser will italicize the term.",
    tagExample:
      "<p><dfn>UFC</dfn> is the The Ultimate Fighting Championship for Mixed Martial Arts</p>",
  },
  {
    tagName: "<dialog>",
    tagDescription:
      "This element makes a border for a dilog box or sub window. Not supported in Safari browser. It can be specified to be active and available for interaction with the attribute 'open'.",
    tagExample: "<dialog open>This is dialog subwindow</dialog>",
  },
  {
    tagName: "<dir>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<div>",
    tagDescription:
      "Div is one of the most popular element used within the HTML, and is used to make a container that can contain all of the HTML element. Using a div makes it easy to manipulate it with JS functionality or CSS stylying by assigning ID or class names so they can be called. ",
    tagExample:
      "<div class='div1'><h2>I am inside a div.</h2><p>some text.</p</div>",
  },
  {
    tagName: "<dl>",
    tagDescription:
      "This element called decription list is used with the <dt> tag for general names and <dd> for each names",
    tagExample:
      "<dl><dt>Coffee</dt><dd>Black caffeinated hot drink</dd><dt>Iced-Tea</dt><dd>Soft cold drink</dd></dl>",
  },
  {
    tagName: "<dt>",
    tagDescription:
      "This element is used for general term names and to describe it we need the <dd> for each names. Both of them need to be inside <dl> element.",
    tagExample:
      "<dl><dt>Coffee</dt><dd>Black caffeinated hot drink</dd><dt>Iced-Tea</dt><dd>Soft cold drink</dd></dl>",
  },
  {
    tagName: "<em>",
    tagDescription: "This element is used for empathising text. ",
    tagExample: "<p>You <em>have passed</em> the exam. Congratulations!</p>",
  },
  {
    tagName: "<embed>",
    tagDescription:
      "This element is used for embedding media such as image/video or even HTML page from an external sources. There are other tags available for doing this that are usually preferred, such as <img> for images, <video> for videos and <iframe> for the HTML.",
    tagExample:
      "<embed type='image/jpg' src='pic_trulli.jpg' width='300' height='200'>",
  },
  {
    tagName: "<fieldset>",
    tagDescription:
      "This element is used for grouping related form elements together, can be usuful when you have multiple forms on a page.",
    tagExample:
      "<fieldset><legend>Credentials:</legend><label for='fname'>First name:</label><input type='text' id='fname' name='fname'><br><br><label for='lname'>Last name:</label><input type='text' id='lname' name='lname'><br><br><input type='submit' value='Submit'></fieldset>",
  },
  {
    tagName: "<figcaption>",
    tagDescription:
      "This element is used for adding a caption to photos inside a <figure> element. Usuful when the image fails to load for a reason the user is able to see the caption and have an idea.",
    tagExample:
      "<figure><img src='pic_trul.jpg' alt='Trulli'><figcaption>Figure 1 - Trulli flowers from Italy.</figcaption></figure>",
  },
  {
    tagName: "<figure>",
    tagDescription:
      "This element is used as a ccontainer for photos, dfiagrams illustrations and machine code aswell",
    tagExample:
      "<figure><img src='pic_trul.jpg' alt='Trulli'><figcaption>Figure 1 - Trulli flowers from Italy.</figcaption></figure>",
  },
  {
    tagName: "<font>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<footer>",
    tagDescription:
      "This element is part of the HTML semantics and it is used for bottom page information that can iclude links, about us section, adressess and other related data.",
    tagExample:
      "<footer><p>Built by : Kashif Tauseef</p><p><a href='mailto:Kashif@mail.com'>Kashif@mail.com</a></p></footer>",
  },
  {
    tagName: "<form>",
    tagDescription:
      "This element is used for gathering user data using with input fields, text area for large text, radio buttons etc and can be submitted to the database with the action attribute where is the landing page of your back-end, and the method that can be post for sending data or get for getting. ",
    tagExample:
      "<form action='/backEnd.php'><label for='firstName'>First name:</label><input type='text' id='firstName' name='firstName'><br><br><label for='lastName'>Last name:</label><input type='text' id='lastName' name='lastName'><br><br><input type='submit' value='Submit'></form>",
  },
  {
    tagName: "<frame>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<frameset>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<h1> ... <h6>",
    tagDescription:
      "This element is used for headings, and there are 6 predifined from <h1> for holding the biggest size and importance and decresing into more smaller subheadings.",
    tagExample: "<h1>Main Heading</h1><h2>Subheading..</h2>",
  },
  {
    tagName: "<head>",
    tagDescription:
      "This element is used for containing the metadata for your webpage, this is where you can link your external CSS and Js page or importing other libraries. Note that this is where you can declare the name of the page with <title>. Only 1 head is allowed and it must go after <html> declaration and before the <body> element.",
    tagExample: "<head><title>HTML Tutor</title></head>",
  },
  {
    tagName: "<header>",
    tagDescription:
      "This element is used as a container for introductory content for heading and author information, and can be easily styled with CSS.",
    tagExample:
      "  <header><h1>Book by Ahmed</h1><p>Posted by Ahmed</p><p>Hi my name is Ahmed!</p></header>",
  },
  {
    tagName: "<hr>",
    tagDescription:
      "This element is used for adding a break line between different <p> tags. Note that <br> tags can be used for no lines effect.",
    tagExample: "<p>some text</p><hr><p>more text</p>",
  },
  {
    tagName: "<html>",
    tagDescription:
      "This element is used for declaring the root of an HTML page. It must go after the <!DOCTYPE> declaration and before the <head> element",
    tagExample: "<html lang='en'>",
  },
  {
    tagName: "<i>",
    tagDescription:
      "This element is used for empathising for changing tonality or mood. The browser will render this element in italic.",
    tagExample: "<p>The <i>UFC</i>, a fun sport to watch!</p>",
  },
  {
    tagName: "<iframe>",
    tagDescription:
      "This element is used for displaying an external HTML page inside a frame. It can accept attributes like height, width for the sizing, allowfullscreen boolean, name, src for the URL of the HTML sandbox for more set of restrictions.",
    tagExample:
      "<iframe src='http://localhost:3000/' title='HTML Tutor website'></iframe>",
  },
  {
    tagName: "<img>",
    tagDescription:
      "This element is used for inserting images into the HTML document. It needs attributes like src for the url link, alt for describing the image and width and height for customising its size.",
    tagExample: "<img src='flower.jpg' alt='flowers' width='300' height='300'>",
  },
  {
    tagName: "<input>",
    tagDescription:
      "This element is used for entering data from a user inside a form, and it can be of different types: text (default), button,checkbox, color ,date, email, file, hidden, image, month, number, password, radio, range, research, search, submit, tel, time, url, week.",
    tagExample: "<input type='text' id='lname' placeholder='name'>",
  },
  {
    tagName: "<ins>",
    tagDescription:
      "This element is used when a new text part has been inserted into the document. For the opposite effect lok at <del> element.",
    tagExample: "<p>You have added <ins>Milk</ins> to you cart.</p>",
  },
  {
    tagName: "<kbd>",
    tagDescription:
      "This element is used for telling the user to use a keyboard input. The browsers render the shortcut in the monospace font. This element does the same as <code> element.",
    tagExample: "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.</p>",
  },
  {
    tagName: "<label>",
    tagDescription:
      "This element is used for defining the name for the input types. It can take the attributes 'for' for the ID of the input or form for the 'form' that it belongs to. ",
    tagExample:
      "<label for='gender'>Gender</label><input type='text' id='gender' name='gender'>",
  },
  {
    tagName: "<legend>",
    tagDescription:
      "This element is used for grouping related items inside a form. For a greater effect it can be used after <fieldset> to have a nice border to contain form elements. ",
    tagExample:
      "<fieldset><legend>Credentials:</legend><label for='fname'>First name:</label><input type='text' id='fname' name='fname'><br><br><label for='lname'>Last name:</label><input type='text' id='lname' name='lname'><br><br><input type='submit' value='Submit'></fieldset>",
  },
  {
    tagName: "<li>",
    tagDescription:
      "This element is used for displying list items. List items can be inside <ol> ordered list to display numbers ot <ul> unordered list with no numbers but dots. For the ordered list it can take an attribute 'value' that specifies a number that will increment with the list.",
    tagExample:
      "<p>The ordered list</p><ol><li>cream</li><li>milk</li><li>biscuits</li></ol><p>The unordered list</p><ul><li>cream</li><li>milk</li><li>biscuits</li</ul>",
  },
  {
    tagName: "<link>",
    tagDescription:
      "This element is used for linking your external CSS. This element must go inside the <head>. You must define the relationship with rel attribute, that can be: stylesheet, icon, author, media and you also need to define the 'href' for ther URL of the location of the document.",
    tagExample: "<link rel='stylesheet' href='stylesheet.css'>",
  },
  {
    tagName: "<main>",
    tagDescription:
      "This element is used for declaring the main article/ content of your document. It is useful for manipulting with CSS where it can follow a specific style for example. There can only be one main element and it can not be a descendant of semantic elements and should be unique. ",
    tagExample:
      "<main><h1>React JS</h1><p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes</p>",
  },
  {
    tagName: "<map>",
    tagDescription:
      "This element is used for having clickable image areas. It needs an attrubute name and it must contain the <area> element for defining shape and coordinates.",
    tagExample:
      "<img src='table.jpg' alt='table' usemap='#tablemap' width='400' height='400'><map name='tablemap'><area shape='rect' coords='290,172,333,250' alt='keys' href='/keys.html'></map>",
  },
  {
    tagName: "<mark>",
    tagDescription: "This element is used for higlighting text.",
    tagExample: "<p>Have you added <mark>mouse</mark> to your cart?</p>",
  },
  {
    tagName: "<meta>",
    tagDescription:
      "This element is used for descibing metadata for the HTML page. The metadata is just information for its data, it must be inside the <head> tags. It can take attributes like 'charset' for defining the character set which is UTF-8 for HTML5 and name attribute that can have the values: application_name, author, description, generator, keywords and viewport. Some HTTP response stuff can also be done here like refreshing with 'refresh' attribute. Both of them need content attribute which is a text value.",
    tagExample:
      "<meta http-equiv='refresh' content='30'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta name='author' content='Jon Bee'>",
  },
  {
    tagName: "<meter>",
    tagDescription:
      "This element is used as a measuring instrument for measuring and indicating a quantity (gauge)",
    tagExample:
      "<label for='USB_Z'>Disk used C:</label><meter id='USB_Z' value='45' min='0' max='100'>",
  },
  {
    tagName: "<nav>",
    tagDescription:
      "This element is used as a navigation bar that can be used across your HTML pages. It usually contains page links, logo, search bar etc..",
    tagExample:
      "<nav><a href='/Home'>Home</a><a href='/Community'>Community</a>--<ahref='/Quiz'>Quiz</a>--<a href='/Account'>Account</a>--</nav>",
  },
  {
    tagName: "<noframes>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<noscript>",
    tagDescription:
      "When JavaScript is not availbale for the browser or disabled this element can display a message to the user.",
    tagExample:
      "<noscript>Your browser does not support JavaScript or is disabled.</noscript>",
  },
  {
    tagName: "<object>",
    tagDescription:
      "This element is used for embedding videos, images HTML pages from external resources. There are other tags available for doing this that are usually preferred, such as <img> for images, <video> for videos and <iframe> for the HTML. You may notice that this element is similar to <embed>, however this element was designed to work with plugins and Java Applications, which most browsers have dropped support.",
    tagExample: "<object data='myVideo.mp4' width='500' height='300'></object>",
  },
  {
    tagName: "<ol>",
    tagDescription:
      "This element is used for displaying an ordered list with numbers. You can specify a number in the 'start' attribute, so it will start incrementing from that amount. The 'reversed' Attribute will reverse your list and the 'type' attribute will specify the kind of marker to use in the list",
    tagExample:
      "<p>Ordered list</p><ol><li>cream</li><li>milk</li><li>biscuits</li></ol>",
  },
  {
    tagName: "<optgroup>",
    tagDescription:
      "This element is used inside a drop down list to specify related input options to make it easy for the user.",
    tagExample:
      "<select name='sex' id='sex'><optgroup label='Gender'><option value='Male'>Male</option><option value='Female'>Female</option><option value='Prefer not to say'>Prefer not to say</option></optgroup></select>",
  },
  {
    tagName: "<option>",
    tagDescription:
      "This element is used to create a drop down list for user selection.",
    tagExample:
      "<select name='sex' id='sex'><option value='Male'>Male</option><option value='Female'>Female</option><option value='Prefer not to say'>Prefer not to say</option></select>",
  },
  {
    tagName: "<output>",
    tagDescription: "This element is a container with the outcome/calculation",
    tagExample:
      "<form oninput='result.value=parseInt(a.value)+parseInt(b.value)'><input type='range' id='b' name='b' value='50' /> +<input type='number' id='a' name='a' value='10' /> =<output name='result' for='a b'>60</output></form>",
  },
  {
    tagName: "<p>",
    tagDescription:
      "This element is used for containing paragraphs. Space is automatically added before and after the elements.",
    tagExample: "<p>Text inside paragraph.</p>",
  },
  {
    tagName: "<param>",
    tagDescription:
      "This element is used with <object> element and checks wheter a sound/video needs to be played on page load. It needs attributes 'name' and 'value' boolean (true/false.)",
    tagExample:
      "<object data='dolphin.wav'><param name='autoplay' value='true'></object>",
  },
  {
    tagName: "<picture>",
    tagDescription:
      "This element is used for displaying pictures with more flexibility on page resizing or when you're using a phone or computer you can diplay appropriately sized images.",
    tagExample:
      "<picture><source media='(min-width:600px)' alt='Flowers' srcset='flowers.jpg'><source media='(min-width:400px)' alt='Flowers small' srcset='flowers2.jpg'></picture>",
  },
  {
    tagName: "<pre>",
    tagDescription:
      "This element is used for preformatted text. Both line breaks and spaces are preserved",
    tagExample: "<pre>" + "text   with spaces and line " + "breaks</pre>",
  },
  {
    tagName: "<progress>",
    tagDescription:
      "This element is used for displaying progress such as loaded/downloaded",
    tagExample:
      "<label for='prog'>Current progress</label><progress id='prog' value='20' max='100'></progress>",
  },
  {
    tagName: "<q>",
    tagDescription:
      "This element is used for defining quotation, and the browser automatically puts quoutation marks around it.",
    tagExample:
      "<p>Seneca was a Stoic philosopher who said:<q>Luck is what happens when preparation meets opportunity.</q></p>",
  },
  {
    tagName: "<rp>",
    tagDescription:
      "This element is used for annotating ruby elements. It provides parentheses around a ruby text. It must be inside a <rt> element.",
    tagExample: "<ruby>明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp></ruby>",
  },
  {
    tagName: "<rt>",
    tagDescription:
      "This element is used for an explanation or pronunciation of characters from East Asian typography.",
    tagExample: "<ruby>明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp></ruby>",
  },
  {
    tagName: "<ruby>",
    tagDescription:
      "This element is used for ruby annotations, which is a small text attached for the pronunciation/meaning.",
    tagExample: "<ruby>明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp></ruby>",
  },
  {
    tagName: "<s>",
    tagDescription:
      "This element is used for text no longer in use. The browser will render is as strikethrough.",
    tagExample: "<p><s>$14.99</s></p><p>$9.99</p>",
  },
  {
    tagName: "<samp>",
    tagDescription:
      "This element is used for displying a sample output from a computer program",
    tagExample: "<p><samp>File is corrupted<br>Press esc to abort</samp></p>",
  },
  {
    tagName: "<script>",
    tagDescription:
      "This element is used for inline JavaScript code. Javascript can be saved in an extrenal page with .js extension. However for small tasks inline JS can be created and run within the HTML document.",
    tagExample:
      "<p id='test'></p><script>document.getElementById('test').innerHTML = 'Adding text with JavaScript';</script>",
  },
  {
    tagName: "<section>",
    tagDescription:
      "This element is part of HTML semantics. Section as the name says it is used for containing a section or more within a document.",
    tagExample: "<section><h2>Heading</h2><p>Section text</p></section>",
  },
  {
    tagName: "<select>",
    tagDescription:
      "This element is used for creating a drop down list. This should include <option> inside to display a list.",
    tagExample:
      "<select name='sex' id='sex'><option value='Male'>Male</option><option value='Female'>Female</option><option value='Prefer not to say'>Prefer not to say</option></select>",
  },
  {
    tagName: "<small>",
    tagDescription:
      "This element is used to make your text smaller. Usually used for comments and copyright declaration.",
    tagExample: "<small>small text</small>",
  },
  {
    tagName: "<source>",
    tagDescription:
      "This element is used for specifying the source for the following media elements: video, audio and picture.",
    tagExample:
      "<audio controls><source src='lion.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>",
  },
  {
    tagName: "<span>",
    tagDescription:
      "This element act like a div but is used for inline elements. It is commonly used for styling",
    tagExample:
      "<p>We have detected  <span style='color:red;font-weight:bold'>12</span> errors with your code.</p>",
  },
  {
    tagName: "<strike>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<strong>",
    tagDescription:
      "This element is used for making text bold/strong, to show importance.",
    tagExample: "<strong>strong text</strong>",
  },
  {
    tagName: "<style>",
    tagDescription:
      "This element is used for all the style information CSS inside the HTML document. For External Styling you can create a .CSS file and link it to the HTML.",
    tagExample: "<style>h1 {color:blue;}</style>",
  },
  {
    tagName: "<sub>",
    tagDescription:
      "This element is used for making your text appear half a carachter below the main text.",
    tagExample: "<p>Example of  <sub>subscript</sub> text.</p>",
  },
  {
    tagName: "<summary>",
    tagDescription:
      "This element must be used inside <details> element and contains text that can be showed on toggle.",
    tagExample:
      "<details open><summary>UFC</summary><p>The Ultimate Fighting Championship is an American mixed martial arts promotion company based in Las Vegas, Nevada.</p></details>",
  },
  {
    tagName: "<sup>",
    tagDescription:
      "This element is used for making your text appear half a carachter above the main text.",
    tagExample: "<p>Example of <sup>superscript</sup> text.</p>",
  },
  {
    tagName: "<svg>",
    tagDescription: "This element is used for SVG graphics.",
    tagExample:
      "<svg width='60' height='60'><circle cx='30' cy='30' r='30'  fill='red' />Sorry, your browser does not support inline SVG.</svg>",
  },
  {
    tagName: "<table>",
    tagDescription:
      "This element is used for defining a table. Table element have <tr> table row that can be either <th> table header or <td> table data elements.",
    tagExample:
      "<table><tr><th>Element</th><th>Description</th></tr><tr><td>description</td><td>Hypertext Markup Language</td></tr></table>",
  },
  {
    tagName: "<tbody>",
    tagDescription:
      "This element is used for grouping table body elements for stylying or creating dynamic table with JavaScript.",
    tagExample:
      "<table><thead><tr><th>Element</th><th>Description</th></tr></thead><tbody><tr><td>description</td><td>Hypertext Markup Language</td></tr></tbody><tfoot><tr><td>TOTAL</td><td>117</td></tr></tfoot></table>",
  },
  {
    tagName: "<td>",
    tagDescription:
      "This element is used for containing table data. It must be within <tr> element.",
    tagExample:
      "<table><tr><td>description</td><td>Hypertext Markup Language</td></tr></table>",
  },
  {
    tagName: "<template>",
    tagDescription:
      "This element is used as container to hold some HTML content hidden from the user when the page is loaded. Template can be displayed with a JavaScript function.",
    tagExample:
      "<template><h2>Pizza</h2><img src='pizza.jpg' width='200' height='200'></template>",
  },
  {
    tagName: "<textarea>",
    tagDescription:
      "This element is used getting text from the user similar to a text <input>, however this can hold multiline rows and columns that can be specified with 'rows' and 'cols' attributes. ",
    tagExample:
      "<textarea id='textArea1' name='textArea1' rows='4' cols='70'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes</textarea>",
  },
  {
    tagName: "<tfoot>",
    tagDescription:
      "This element is used for grouping table footer data for stylying or creating dynamic table with JavaScript.",
    tagExample:
      "<table><thead><tr><th>Element</th><th>Description</th></tr></thead><tbody><tr><td>description</td><td>Hypertext Markup Language</td></tr></tbody><tfoot><tr><td>TOTAL</td><td>117</td></tr></tfoot></table>",
  },
  {
    tagName: "<th>",
    tagDescription:
      "This element is used for table headers. It must be within <tr> element.",
    tagExample: "<table><tr><th>Element</th><th>Description</th></tr></table>",
  },
  {
    tagName: "<thead>",
    tagDescription:
      "This element is used for grouping table header elements for stylying or creating dynamic table with JavaScript. For long list of table Sticky can be used for CSS to keep the header while scrolling.",
    tagExample:
      "<table><thead><tr><th>Element</th><th>Description</th></tr></thead><tbody><tr><td>description</td><td>Hypertext Markup Language</td></tr></tbody><tfoot><tr><td>TOTAL</td><td>117</td></tr></tfoot></table>",
  },
  {
    tagName: "<time>",
    tagDescription:
      "This element is used for describing time on the browser (not dynamic). With the datetime attribute this becomes machine readable.",
    tagExample:
      "<p>The Exam is on <time datetime='2008-02-14 09:00'> Next Monday</time>.</p>",
  },
  {
    tagName: "<title>",
    tagDescription:
      "This element is used for creating a title for your HTML page. The browser will display this in its 'Tab'",
    tagExample: "<head><title>HTML Tutor</title></head>",
  },
  {
    tagName: "<tr>",
    tagDescription:
      "This element is used for adding a new row to your <table> element.",
    tagExample:
      "<table><tr><th>Element</th><th>Description</th></tr><tr><td>description</td><td>Hypertext Markup Language</td></tr></table>",
  },
  {
    tagName: "<track>",
    tagDescription:
      "This element is used for subtitles tracks for <audio> or <video> elements. The .vtt file should contain subtitles, caption files or other files containing text, that should be visible when the media is playing",
    tagExample:
      "<video width='320' height='240' controls><source src='mJackson.mp4' type='video/mp4'><track src='subttl.vtt' kind='subtitles' srclang='en' label='English'></video>",
  },
  {
    tagName: "<tt>",
    tagDescription: "Not Supported in HTML5.",
    tagExample: "",
  },
  {
    tagName: "<u>",
    tagDescription:
      "This element is used for underlining some text, commonly used for mispelled, unarticulated words etc..",
    tagExample: "<p>Example of <u>underlined</u> text.</p>",
  },
  {
    tagName: "<ul>",
    tagDescription:
      "This element is used for un unordered list. This must contain <li> list elements to populate the list, and the list will be displayed with a black dot, which can be removed with CSS text decorations.",
    tagExample: "<ul><li>Dave</li><li>Abdul</li><li>Abdi</li></ul>",
  },
  {
    tagName: "<var>",
    tagDescription:
      "This element is used for variables of mathematical expressions. The browser renders this element in italic. ",
    tagExample:
      "<p>The area of a rectangle is:  (<var>b</var> x <var>h</var>) <var>/</var> <var>2</var>.</p>",
  },
  {
    tagName: "<video>",
    tagDescription:
      "This element is used for display video content inside the document. You must give a URL in the 'scr' attribute, specify wheter you need 'controls' (from browser), and the height and width dimensions.",
    tagExample:
      "<video width='320' height='240' controls><source src='mJackson.mp4' type='video/mp4'></video>",
  },
  {
    tagName: "<wbr>",
    tagDescription:
      "This element is used for Word Break Opportunity, which specifies where you would like a line break within the text usuful for long words.",
    tagExample:
      "<p>JavaScript, often abbreviated as JS, is a programming language that conforms to the <wbr>ECMAScript<wbr> specification.</p>",
  },
];

module.exports = script;
