import React, { useState, useEffect } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

const CreateAccount = () => {
  const [postuser, setPostuser] = useState(null);
  const [status, setStatus] = useState("Create a new account");
  const [message, setMessage] = useState("");
  const [userdata, setUserdata] = useState({
    user: null,
    userPassword: null,
    email: null,
  });

  const handleUserData = (e) =>
    setUserdata({
      ...userdata,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  useEffect(() => {
    if (postuser !== null) {
      console.log(postuser);
      axios
        .post("http://localhost:5000/login", postuser)
        .then(function (response) {
          console.log(response.data);
          // localStorage.setItem("user", JSON.stringify(userdata));
          setMessage(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setMessage("not created, check data again");
        });
    } else {
      console.log("NOT CREATING USER DW");
    }
  }, [postuser]);

  return (
    <div className="modalContent">
      <p>{status}</p>
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
        <button onClick={() => setPostuser(userdata)}>Create account</button>
        <p>{message}</p>
      </span>
    </div>
  );
};

function Login() {
  const [signed, setSigned] = useState("");
  const [logged, setLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const [key, setKey] = useState("sign in");
  const [message, setMessage] = useState("");
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
        .post("http://localhost:5000/enter", logindata)
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
            setLogged(true);
            console.log(response.status);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("credentials not sent");
    }
  }, [logindata]);

  const SignIn = () => {
    const handleSigninData = (e) =>
      setCredentials({
        ...credentials,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    return (
      <div className="modalContent">
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
      console.log("CANNOT leave empty");
    } else {
      setLogindata(credentials);
      console.log("Validation not working");
    }
  };

  const logOut = () => {
    if (logged === true) {
      return (
        <button
          onClick={() => {
            setLogged(false);
            localStorage.clear();
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
    </div>
  );
}

export default Login;
