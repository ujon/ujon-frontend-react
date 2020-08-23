import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Action
import { signin } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Signin = ({ isAuthenticated, signin }) => {
  const [signinFrom, setSigninFrom] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signinFrom;

  // Function
  const onChange = (e) =>
    setSigninFrom({ ...signinFrom, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    signin({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h2>SIGN IN</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  );
};

Signin.propTypes = {
  isAuthenticated: PropTypes.bool,
  signin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signin })(Signin);
