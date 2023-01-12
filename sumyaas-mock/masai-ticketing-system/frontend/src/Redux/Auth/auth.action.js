import * as types from "./auth.actionType";
import axios from "axios";

const login =
  ({ email, password }) =>
  (dispatch) => {
    // console.log(fullname)
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios
      .get(`https://mock-api-oc4h.onrender.com/user`)
      .then((res) => {
        // console.log(res.data
        dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: res.data,
        });
        alert("Login successful");
      })
      .catch((err) => {
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
      });
  };

export { login };
