import {cartReducerTypes} from "./cart.types";

export const toogleCartHidden = () => {
  return {
    type: cartReducerTypes.TOOGLE_CART_HIDDEN
  }
}

export const addCart = (item) => {
  return {
    type: cartReducerTypes.ADD_CART,
    payload: item
  }
}
