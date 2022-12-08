import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const AuthConext = createContext();
const initstate = {
  isAuth: false,
  users: [],
};
const getUsers = () => {
  return fetch("http://localhost:3004/users").then((res) => res.json());
};
const UpdateUser=()=>{
    
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initstate);

  const handleFetch = () => {
    getUsers().then((res) => dispatch({ type: "FETCH_USER", payload: res }));
  };
  const handlePost = (user) => {
    postUser(user).then((res) => console.log(res, "user added"));
  };
  console.log(state);
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <AuthConext.Provider value={{ state, dispatch, handlePost }}>
      {children}
    </AuthConext.Provider>
  );
};
