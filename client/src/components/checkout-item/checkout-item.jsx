import React from 'react';
import {connect} from 'react-redux';

import {claerItemFromCart, removeItem, addCart} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem, addCart, removeItem}) => {
  const {name, imageUrl, quantity, price} = cartItem;
  return <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => removeItem(cartItem)}>&#10094;</div>
      <TextContainer>{quantity}</TextContainer>
      <div onClick={() => addCart(cartItem)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(claerItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addCart: item => dispatch(addCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
