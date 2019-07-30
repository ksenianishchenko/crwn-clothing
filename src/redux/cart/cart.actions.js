import {cartReducerTypes} from "./cart.types";

export const toogleCartHidden = () => {
  return {
    type: cartReducerTypes.TOOGLE_CART_HIDDEN
  }
}
