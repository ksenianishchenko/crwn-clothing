import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import CartItem from '../cart-item/cart-item';
import {toogleCartHidden} from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, toogleCartHidden}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length
        ? cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      toogleCartHidden();
      history.push('/checkout');
    }}>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
