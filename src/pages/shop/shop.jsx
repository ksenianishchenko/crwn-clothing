import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import {selectIsFetching, selectIsCollectionLoading} from '../../redux/shop/shop.selectors';
import {fetchCollectionAsinc} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {

  componentDidMount() {
    const {fetchCollections} = this.props;
    fetchCollections();
  }

  render() {
    const {match, isFetching, isCollectionsLoading} = this.props;
    return <div className='shop-page'>
      <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={isFetching} {...props}/>} />
      <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoading} {...props} />} />
    </div>
  }
}

const mapStateToProps = state => createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionsLoading: selectIsCollectionLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => (
    dispatch(fetchCollectionAsinc())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
