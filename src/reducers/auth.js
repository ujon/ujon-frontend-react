import {
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token');
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action){

}