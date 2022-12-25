import * as types from "./actionTypes";
import axios from "axios";

const login =
  ({ fullname, email, password }) =>
  (dispatch) => {
    // console.log(fullname)
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios
      .get(`https://mock-api-oc4h.onrender.com/user`)
      .then((res) => {
        // console.log(res.data)
        let user = res.data.find(
          (el) =>
            el.email == email &&
            el.fullname == fullname &&
            el.password == password
        );
        if (user) {
          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: user,
          });
          alert("Login successful");
        } else {
          alert("login failed");
          throw new Error();
        }
      })
      .catch((err) => {
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: "login failed" });
      });
  };

// Update User Details
export const updateUser = (edituser, id) => (dispatch) => {
  console.log(id, edituser);
  axios
    .patch(`https://mock-api-oc4h.onrender.com/user/${id}`, edituser)
    .then((res) =>
      // console.log(res)
      dispatch({ type: types.USER_UPDATE_PROFILE, payload: res.data })
    )
    .catch((err) => console.log(err));
};

//  Delete User Account

export const deleteAccount = () => (dispatch) => {};

export { login };
