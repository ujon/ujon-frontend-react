import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Link to="/test">test</Link>
    </Fragment>
  );
};

export default Home;
