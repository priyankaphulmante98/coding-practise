import * as types from "./actionTypes";

const initState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isError: false,
  message: null,
};

const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...oldState, isLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...oldState, isLoading: false, isAuth: true, user: payload };
    case types.USER_LOGIN_FAILURE:
      return {...oldState,isLoading: false, isAuth: false,message: payload,isError: true,
      };
    case types.USER_UPDATE_PROFILE:
      return { ...oldState, isLoading: true, isAuth: true, user: payload };
    default:
      return oldState;
  }
};

export { reducer };
