import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import {selectShopCollections} from '../../redux/shop/shop.selectors';

const Shop = ({collections}) => {
  return <div className='shop-page'>
    <CollectionOverview />
  </div>
}

const mapStateToProps = state => createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps, null)(Shop);
