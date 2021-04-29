import React, { useState, useEffect } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

const CreateAccount = () => {
  const url = "https://calm-lake-25316.herokuapp.com";
  const [postuser, setPostuser] = useState(null);
  const [message, setMessage] = useState("");
  const [userdata, setUserdata] = useState({
    user: "",
    userPassword: "",
    email: "",
  });

  const handleUserData = (e) =>
    setUserdata({
      ...userdata,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  useEffect(() => {
    if (postuser !== null) {
      axios
        .post(`${url}/login`, postuser)
        .then(function (response) {
          console.log(response.data);
          setMessage(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setMessage("not created, check data again");
        });
    }
  }, [postuser]);

  const newUserValidation = () => {
    console.log(userdata);
    if (
      !userdata.user.length ||
      !userdata.userPassword.length ||
      !userdata.email.length
    ) {
      setMessage("CANNOT leave empty");
    } else if (userdata.userPassword.length <= 5) {
      setMessage("Password must be greater than 5 carachters");
    } else if (
      userdata.user.trim() == "" ||
      userdata.userPassword.trim() == "" ||
      userdata.email.trim() == ""
    ) {
      setMessage("No empty spaces");
    } else {
      setMessage("");
      setPostuser(userdata);
    }
  };

  return (
    <div className="modalContent">
      <p style={{ color: "black" }}>Create a new Account</p>
      <input
        onBlur={handleUserData}
        placeholder="Name"
        className="form-control"
        type="text"
        name="user"
      />
      <br></br>
      <input
        type="password"
        onBlur={handleUserData}
        placeholder="Password"
        className="form-control"
        name="userPassword"
      />
      <br></br>
      <input
        onBlur={handleUserData}
        placeholder="Email"
        className="form-control"
        type="text"
        name="email"
      />
      <br></br>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <button onClick={newUserValidation}>Create account</button>
        <p style={{ color: "red" }}>{message}</p>
      </span>
    </div>
  );
};

function Login() {
  const url = "https://calm-lake-25316.herokuapp.com";
  const [signed, setSigned] = useState("");
  const [logged, setLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const [key, setKey] = useState("sign in");
  const [message, setMessage] = useState("");
  const [ID, setID] = useState();
  const [commentID, setCommentID] = useState();
  const [postID, setPostID] = useState();
  const [questionID, setQuestionID] = useState();
  const [comments, setComments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [credentials, setCredentials] = useState({
    Email: "",
    Password: "",
  });
  const [logindata, setLogindata] = useState("");
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  //CHECK FOR LOGGED IN USER
  useEffect(() => {
    const data = localStorage.getItem("loggedUser");
    if (data) {
      setLogged(true);
    }
  });

  useEffect(
    function persistForm() {
      if (logged === false) {
        setSigned("Not signed in!");
        setModal("sign in");
        $("#MButton").show();
      } else {
        setSigned("Welcome back " + localStorage.getItem("userName"));
        setID(localStorage.getItem("id"));
        setModal("");
        $("#MButton").hide();
        closeModal();
      }
    },
    [logged]
  );

  useEffect(() => {
    if (logindata !== "") {
      axios
        .post(`${url}/enter`, logindata)
        .then(function (response) {
          if (!response.data.length) {
            console.log("error", response);
            setMessage("invalid credentials");
          } else {
            setMessage("");
            localStorage.setItem(
              "loggedUser",
              JSON.stringify({ logged: true, user: logindata.Email })
            );
            localStorage.setItem("userName", response.data[0].userName);
            localStorage.setItem("id", response.data[0]._id);
            setID(response.data[0]._id);
            setLogged(true);
            console.log(response.status);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [logindata]);

  //GET COMMENTS
  useEffect(
    function persistForm() {
      const ID = localStorage.getItem("id");
      if (ID != undefined || ID != null) {
        axios
          .get(`${url}/myanswers/${ID}`)
          .then((res) => {
            setComments(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [logged]
  );

  //DELETE COMMENTS
  useEffect(
    function persistForm() {
      if (commentID !== undefined) {
        axios
          .delete(`${url}/deletecomment/${commentID}/${postID}`)
          .then((res) => {
            console.log("deleted ", res.data);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [commentID]
  );

  //GET USER POSTS
  useEffect(() => {
    axios
      .get(`${url}/getuserposts/${localStorage.getItem("id")}`)
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [logged]);

  //DELETE USER POSTS
  useEffect(
    function persistForm() {
      if (questionID !== undefined) {
        console.log(questionID);
        axios
          .delete(`${url}/deletequestion/${questionID}`)
          .then((res) => {
            console.log("deleted ", res.data);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [questionID]
  );

  const myComments = () => {
    if (comments.length) {
      return (
        <div>
          <h2>My Comments</h2>
          {comments.map((x, i) =>
            x.postAnswer.map((c) => (
              <span
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p>{c.answer}</p>{" "}
                <button
                  key={i}
                  value={i}
                  onClick={() => {
                    setCommentID(c._id);
                    setPostID(x._id);
                  }}
                >
                  delete
                </button>
              </span>
            ))
          )}
        </div>
      );
    }
  };

  const myQuestions = () => {
    if (questions.length) {
      return (
        <div>
          <h2>My Questions</h2>
          {questions.map((x, i) => (
            <span
              key={x._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <p key={x._id}>{x.postQuestion}</p>{" "}
              <button
                value={i}
                onClick={() => {
                  setQuestionID(x._id);
                }}
              >
                delete
              </button>
            </span>
          ))}
        </div>
      );
    }
  };

  const SignIn = () => {
    const handleSigninData = (e) =>
      setCredentials({
        ...credentials,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    return (
      <div className="modalContent">
        <p style={{ color: "black" }}>Sign in</p>
        <form>
          <input
            onBlur={handleSigninData}
            className="form-control"
            placeholder="Email"
            type="text"
            name="Email"
          />
          <br></br>
          <input
            onBlur={handleSigninData}
            className="form-control"
            placeholder="Password"
            type="password"
            name="Password"
          />
          <br></br>
        </form>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <button onClick={validation}>Sign in</button>
          <p style={{ color: "red" }}>{message}</p>
        </span>
      </div>
    );
  };

  const validation = () => {
    console.log(credentials);
    if (!credentials.Email.length || !credentials.Password.length) {
      setMessage("CANNOT leave empty");
    } else {
      setLogindata(credentials);
      setMessage("");
    }
  };

  const logOut = () => {
    if (logged === true) {
      return (
        <button
          onClick={() => {
            setLogged(false);
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </button>
      );
    }
  };

  return (
    <div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <h5>{signed}</h5>
        <button id="MButton" onClick={showModal}>
          {modal}
        </button>
        {logOut()}
      </span>
      <Modal show={show} onHide={closeModal}>
        <Tabs
          id="controlled-tab-example"
          // defaultActiveKey={modal}
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="sign up" title="sign up">
            {CreateAccount()}
          </Tab>
          <Tab eventKey="sign in" title="sign in">
            {SignIn()}
          </Tab>
        </Tabs>
        <Modal.Footer>
          <Button variant="light" onClick={closeModal}>
            ❌
          </Button>
        </Modal.Footer>
      </Modal>
      <div>{myComments()}</div>
      <div>{myQuestions()}</div>
    </div>
  );
}

export default Login;
