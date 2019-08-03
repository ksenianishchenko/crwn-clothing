import React from 'react';
import {connect} from 'react-redux';

import {claerItemFromCart, removeItem, addCart} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addCart, removeItem}) => {
  const {name, imageUrl, quantity, price} = cartItem;
  return <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addCart(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
  </div>
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(claerItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addCart: item => dispatch(addCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
