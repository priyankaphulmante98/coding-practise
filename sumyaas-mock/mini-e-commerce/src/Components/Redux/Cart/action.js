
import {ADD_TO_CART,INC_QTY,DEC_QTY,REMOVE_FROM_CART} from "./actionTypes"

const addToCart = (payload)=>({
    type: ADD_TO_CART,
    payload
})

const increaseQty= (payload)=>({
    type: INC_QTY,
    payload
})

const decreaseQty= (payload)=>({
    type: DEC_QTY,
    payload
})

const removeFromCart= (payload)=>({
    type: REMOVE_FROM_CART,
    payload
})

export {addToCart,increaseQty,decreaseQty,removeFromCart}