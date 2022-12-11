import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

export const store = legacy_createStore(
  combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    Auth: AuthReducer,
  }),
  applyMiddleware(thunk)
);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
