import axios from "axios";
import { API_BASE_URL } from "./data/consts";

export const loginCall = async (emailPassword, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, emailPassword);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};