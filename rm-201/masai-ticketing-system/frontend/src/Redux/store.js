import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import { appReducer } from "./app/app.reducer";
import { authReducer } from "./Auth/auth.reducer";

export const store = legacy_createStore(
  combineReducers({
    // app: appReducer,
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);
