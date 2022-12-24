import * as types from "./actionTypes";

const initState = {
  isError: false,
  isLoading: false,
  jobs:[]
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.POST_JOB_REQUEST:
      return {...state, isLoading: true, isError: false };
    case types.POST_JOB_SUCCESS:
      return {...state, isLoading: false, isError: false };
    case types.POST_JOB_FAILURE:
      return {...state, isLoading: false, isError: true };

    case types.GET_JOB_REQUEST:
      return { ...state,isLoading: true, isError: false };
    case types.GET_JOB_SUCCESS:
      return { ...state,isLoading: false, isError: false,jobs:payload };
    case types.GET_JOB_FAILURE:
      return {...state,isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
