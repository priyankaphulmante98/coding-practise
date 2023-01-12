import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';


import thunk from 'redux-thunk'

import productReducer from './Product/reducer';

import cartReducer from './Cart/reducer';


const store = legacy_createStore(
combineReducers({
    reducer: productReducer,
    cart: cartReducer
    
  }),applyMiddleware(thunk));
  export default store