import {all, call} from 'redux-saga/effects';

import {fetchCollectionStarts} from './shop/shop.sagas';

export function* rootSagas() {
  yield all([call(fetchCollectionStarts)]);
}
