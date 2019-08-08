import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from "../collection-preview/collection-preview";
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => {
  return <div className='collections-overview'>{
    collections.map((item) => <CollectionPreview
    key={item.id}
    title={item.title}
    items={item.items}
  />)}</div>
}

const mapStateToProps = state => createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview);
