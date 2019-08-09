import React from 'react';
import {connect} from 'react-redux';

import {addCart} from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return <CollectionItemContainer>
    <BackgroundImage imageUrl={imageUrl}/>
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}$</PriceContainer>
    </CollectionFooterContainer>
    <AddButton inverted onClick={() => addItem(item)}>ADD TO CART</AddButton>
  </CollectionItemContainer>
}

const mapDispatchToProps = dispatch => ({
  addItem: item => (dispatch(addCart(item)))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
