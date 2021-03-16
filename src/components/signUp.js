import React, { useState, useEffect } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

const CreateAccount = () => {
  const [userdata, setUserdata] = useState({
    user: null,
    lastName: null,
    email: null,
  });
  const handleUserData = (e) =>
    setUserdata({
      ...userdata,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  return (
    <div>
      <form>
        <input
          onBlur={handleUserData}
          placeholder="Name"
          type="text"
          name="user"
        />
        <br></br>
        <input
          onBlur={handleUserData}
          placeholder="Surname"
          type="text"
          name="lastName"
        />
        <br></br>
        <input
          onBlur={handleUserData}
          placeholder="useremail"
          type="text"
          name="email"
        />
        <br></br>
        <button onClick={PostUser(userdata)}>submit</button>
      </form>
    </div>
  );
};

const PostUser = async function (userdata) {
  useEffect(() => {
    if (
      userdata.user !== null &&
      userdata.lastName !== null &&
      userdata.email !== null
    ) {
      console.log(userdata);
      axios
        .post("http://localhost:5000/login", userdata)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userdata]);
};

function SignUp() {
  const [signed, setSigned] = useState("");
  const [logged, setLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  useEffect(() => {
    if (logged == false) {
      setSigned("Not signed in!");
      setModal("sign in");
    } else {
      setSigned("Welcome back user!");
      setModal("log out");
    }
  }, []);

  const signIn = () => {
    return (
      <div>
        <form>
          <input placeholder="Name" type="text" name="name" />
          <br></br>
          <input placeholder="email" type="text" name="email" />
          <br></br>
          <button type="submit" name="signin">
            sign in
          </button>
        </form>
      </div>
    );
  };
  const logOut = () => {
    return (
      <div class="d-flex justify-content-between">
        <button>log out</button>
      </div>
    );
  };

  return (
    <div>
      <h5>{signed}</h5>
      <button onClick={showModal}>{modal}</button>
      <Modal show={show} onHide={closeModal}>
        {/* <div class="d-flex justify-content-around"> */}
        <Tabs defaultActiveKey="home">
          <Tab eventKey="home" title="sign up">
            {CreateAccount()}
          </Tab>
          <Tab eventKey="profile" title="sign in">
            {signIn()}
          </Tab>
          <Tab eventKey="contact" title="log out">
            {logOut()}
          </Tab>
        </Tabs>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignUp;
