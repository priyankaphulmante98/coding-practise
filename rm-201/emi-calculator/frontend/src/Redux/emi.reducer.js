import * as types from "../Redux/emi.actionType";
const initState = {
  tenure: 0,
  loan: 0,
  rate: 0,
};

export const emiReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAN_UPDATE:
      return {
        ...state,
        loan: payload,
      };
    case types.RATE_UPDATE:
      return {
        ...state,
        rate: payload,
      };
    case types.TENURE_UPDATE:
      return {
        ...state,
        tenure: payload,
      };
    default:
      return state;
  }
};
