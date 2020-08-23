import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT,
} from "./types";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("/auth");
      dispatch({
        type: USER_LOAD_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOAD_FAIL,
        payload: null,
      });
    }
  }
};
export const signup = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("/auth/signup", body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: null,
    });
  }
};
export const signin = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/auth/signin", body, config);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.error(err);
    dispatch({
      type: SIGNIN_FAIL,
      payload: null,
    });
  }
};
export const signout = () => (dispatch) => {
  dispatch({ type: SIGNOUT });
};
