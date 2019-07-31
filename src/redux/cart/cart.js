import {cartReducerTypes} from "./cart.types";
import {addItemToCart} from "./cart.util";

const initialState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartReducerTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartReducerTypes.ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;
