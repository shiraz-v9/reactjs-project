import React, { useState, useEffect } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";

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
  }, [logged]);

  const createAccount = () => {
    return (
      <div>
        <form>
          <input placeholder="Name" type="text" name="name" />
          <br></br>
          <input placeholder="Surname" type="text" name="Surname" />
          <br></br>
          <input placeholder="Email" type="text" name="Email" />
        </form>
      </div>
    );
  };
  const signIn = () => {
    return <h1>omg HIIII</h1>;
  };
  const logOut = () => {
    return <h1>omg HIIII</h1>;
  };

  return (
    <div>
      <h5>{signed}</h5>
      <Button variant="primary" onClick={showModal}>
        {modal}
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="sign up">
            {createAccount()}
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
