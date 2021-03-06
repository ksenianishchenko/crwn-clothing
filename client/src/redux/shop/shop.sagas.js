import {takeLatest, put, call, all} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionSuccess, fetchCollectionFailure} from './shop.actions';
import shopActionTypes from './shop.types';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionStarts() {
  yield takeLatest(shopActionTypes.FETCHING_COLLECTION_STARTS, fetchCollections);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStarts)])
}
