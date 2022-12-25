import * as types from "./auth.actionType";

const initState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isError: false,
  message: null,
};

const authReducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...oldState, isLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...oldState, isLoading: false, isAuth: true, user: payload };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isAuth: false,
        message: payload,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { authReducer };
