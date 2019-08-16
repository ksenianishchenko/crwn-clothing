import {all, call} from 'redux-saga/effects';

import {fetchCollectionStarts} from './shop/shop.sagas';
import {userSagas} from './user/user-sagas';

export function* rootSagas() {
  yield all([call(fetchCollectionStarts), call(userSagas)]);
}
