export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return { ...state, isauth: true };
    case "FETCH_USER":
      return { ...state, users: payload };
    default:
      return state;
  }
};
