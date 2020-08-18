import axios from "axios";
import {
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT,
} from "./types";

export const signup = async () => {};
export const signin = () => async (dispatch) => {};
export const signout = () => (dispatch) => {
  dispatch({ type: SIGNOUT });
};
