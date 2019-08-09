import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from "../collection-preview/collection-preview";
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import {
  CollectionsOverviewContainer
} from './collections-overview.styles';

const CollectionOverview = ({collections}) => {
  return <CollectionsOverviewContainer>{
    collections.map((item) => <CollectionPreview
    key={item.id}
    title={item.title}
    items={item.items}
  />)}</CollectionsOverviewContainer>
}

const mapStateToProps = state => createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview);
