import { FETCH_USER } from "../../constants";
import { LOGIN } from "../../constants";
import { REGISTER } from "../../constants";
import axios from "axios";

export const register = userData => async dispatch => {
  const res = await axios.post("/api/users/create", userData);

  dispatch({ type: REGISTER, payload: res });
};

export const login = userData => async dispatch => {
  const res = await axios.post("/api/auth/login", userData);

  dispatch({ type: LOGIN, payload: res });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/auth/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
