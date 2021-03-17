import React, { useState, useEffect } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

const CreateAccount = () => {
  const [userdata, setUserdata] = useState({
    user: null,
    userPassword: null,
    email: null,
  });
  const [status, setStatus] = useState("");
  const handleUserData = (e) =>
    setUserdata({
      ...userdata,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const PostUser = (userdata) => {
    useEffect(() => {
      if (
        userdata.user != null &&
        userdata.user != "" &&
        userdata.userPassword != null &&
        userdata.userPassword != "" &&
        userdata.email != null &&
        userdata.email != ""
      ) {
        console.log(userdata);
        axios
          .post("http://localhost:5000/login", userdata)
          .then(function (response) {
            console.log(response.data);
            setStatus("Account Created");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("empty");
      }
    }, [userdata]);
  };

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
      <button onClick={PostUser(userdata)}>Create account</button>
    </div>
  );
};

function Login() {
  const [signed, setSigned] = useState("");
  const [logged, setLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const [key, setKey] = useState("sign in");
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  useEffect(
    function persistForm() {
      if (logged == false) {
        setSigned("Not signed in!");
        setModal("sign in");
        $("#MButton").show();
      } else {
        setSigned("Welcome back user!");
        setModal("");
        $("#MButton").hide();
        closeModal();
      }
    },
    [logged]
  );

  const LogMeIn = (credentials) => {
    useEffect(
      function persistForm() {
        // let nullVal = !Object.values(credentials).every((o) => o === null);
        // let emptyVal = !Object.values(credentials).every((o) => o === "");
        if (
          credentials.Password != null &&
          credentials.Password != "" &&
          credentials.Email != null &&
          credentials.Email != ""
        ) {
          console.log(credentials);
          axios
            .post("http://localhost:5000/enter", credentials)
            .then(function (response) {
              // console.log("matching user=> ", response.data);
              setLogged(true);
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          console.log("empty");
        }
      },
      [credentials]
    );
  };

  const SignIn = () => {
    const [credentials, setCredentials] = useState({
      Email: null,
      Password: null,
    });
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
        <button onClick={LogMeIn(credentials)}>Sign in</button>
      </div>
    );
  };

  const logOut = () => {
    if (logged == true) {
      return <button onClick={() => setLogged(false)}>Log Out</button>;
    }
  };

  return (
    <div>
      <span
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
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
