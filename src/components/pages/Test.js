import React, { Fragment } from "react";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const Test = () => {
  return (
    <Fragment>
      <h1>Test</h1>
      <h2>AUTH</h2>
      <Signin />
      <Signup />
    </Fragment>
  );
};

export default Test;
