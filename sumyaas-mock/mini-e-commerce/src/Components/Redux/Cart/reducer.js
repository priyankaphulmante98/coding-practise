import { ADD_TO_CART, REMOVE_FROM_CART, INC_QTY, DEC_QTY } from "./actionTypes";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart:[...state.cart,payload] };

    case INC_QTY:
      return { ...state, cart: modifiedCart };

    case DEC_QTY:
      return { ...state, cart: resultantCart };

    case REMOVE_FROM_CART:
    //   let updatedCart = state.cart.filter((prod) => {
    //     return !(prod.size === payload.size && prod.id == payload.id);
    //   });
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};
export default cartReducer