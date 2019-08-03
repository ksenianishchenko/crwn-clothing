import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {toogleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, toogleCartHidden}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
        ? cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      toogleCartHidden();
      history.push('/checkout');
    }}>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
