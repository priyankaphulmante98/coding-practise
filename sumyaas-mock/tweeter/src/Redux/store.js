import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ appReducer, authReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = legacy_createStore(rootReducer, enhancer);

export { store };
