import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  }).then((res) => {
    return dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: res.data.token,
    }).catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE });
    });
  });
};

export { login };
