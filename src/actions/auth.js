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
