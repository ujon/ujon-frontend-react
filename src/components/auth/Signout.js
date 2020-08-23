import React from "react";
import { connect } from "react-redux";
import { signout } from "../../actions/auth";
import PropTypes from "prop-types";

const Signout = ({ signout }) => {
  return <button onClick={signout}>로그아웃</button>;
};

Signout.propTypes = {
  signout: PropTypes.func.isRequired,
};

export default connect(null, { signout })(Signout);
