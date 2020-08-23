import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../deco/Circle";

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Circle />
      <Link to="/test">test</Link>
    </Fragment>
  );
};

export default Home;
