import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionOverview from '../../components/collections-overview/collections-overview';

const mapStateToProps = state => createStructuredSelector({
  isFetching: selectIsFetching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
