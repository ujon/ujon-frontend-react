import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Action
import { signup } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Signup = ({ isAuthenticated, signup }) => {
  const [signupFrom, setSignupFrom] = useState({
    name: "",
    email: "",
    password: "",
    passwordVerify: "",
  });
  const { name, email, password, passwordVerify } = signupFrom;

  // Function
  const onChange = (e) =>
    setSignupFrom({ ...signupFrom, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordVerify) {
      console.log("비밀번호가 일치하지 않음");
    } else {
      signup({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h2>SIGN UP</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name="name"
          type="text"
          placeholder="Text"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
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
        <input
          name="passwordVerify"
          type="password"
          placeholder="Password Verify"
          value={passwordVerify}
          onChange={(e) => onChange(e)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  );
};

Signup.propTypes = {
  isAuthenticated: PropTypes.bool,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
