import React from 'react';
import {connect} from 'react-redux';

import {toogleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ShopingIconContainer,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({toogleCartHidden, itemCount}) => (
  <CartIconContainer onClick={toogleCartHidden}>
    <ShopingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
