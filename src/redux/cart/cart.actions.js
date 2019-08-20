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

export const claerItemFromCart = (item) => {
  return {
    type: cartReducerTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type: cartReducerTypes.REMOVE_ITEM,
    payload: item
  }
}

export const clearCart = () => {
  return {
    type: cartReducerTypes.CLEAR_CART
  }
}
