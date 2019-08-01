import React from "react";
import {connect} from "react-redux";

import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg";
import {toogleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({toogleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingBag className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
