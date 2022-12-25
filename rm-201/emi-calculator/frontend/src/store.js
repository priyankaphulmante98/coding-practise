import { applyMiddleware, legacy_createStore } from "redux";
import { emiReducer } from "./Redux/emi.reducer";
import thunk from "redux-thunk"

export const store = legacy_createStore(emiReducer, applyMiddleware(thunk))



