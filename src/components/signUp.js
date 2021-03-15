import React, { useState, useEffect } from "react";

function SignUp() {
  const [signed, setSigned] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (logged == false) {
      setSigned("Not signed in!");
    } else {
      setSigned("Welcome back user!");
    }
  }, [logged]);

  return <h5>{signed}</h5>;
}

export default SignUp;
