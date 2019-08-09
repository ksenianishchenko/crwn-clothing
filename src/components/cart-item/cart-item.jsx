import React from 'react';

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  ItemNameContainer
} from './cart-item.styles';

const CartItem = ({item}) => {
  const {imageUrl, name, price, quantity} = item;
  return <CartItemContainer>
    <ImageContainer src={imageUrl} alt={name} />
    <ItemDetailsContainer>
      <ItemNameContainer>{name}</ItemNameContainer>
      <span>{quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
}

export default CartItem;
