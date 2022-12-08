import * as types from "./actionTypes";

const initState = {
  isError: false,
  isLoading: false,
  questions:[]
};

const reducer = (oldState = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_QUESTION_REQUEST:
      return { isLoading: true, isError: false };
    case types.UPDATE_QUESTION_SUCCESS:
      return { isLoading: false, isError: false };
    case types.UPDATE_QUESTION_FAILURE:
      return { isLoading: false, isError: true };

    case types.GET_QUESTION_REQUEST:
      return { isLoading: true, isError: false };
    case types.GET_QUESTION_SUCCESS:
      return { isLoading: false, isError: false,data:payload };
    case types.GET_QUESTION_FAILURE:
      return { isLoading: false, isError: true };
    default:
      return oldState;
  }
};

export { reducer };
