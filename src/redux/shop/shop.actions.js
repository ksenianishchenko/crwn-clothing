import shopActionTypes from "./shop.types";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCHING_COLLECTION_STARTS
})

export const fetchCollectionSuccess = (collection) => ({
  type: shopActionTypes.FETCHING_COLLECTION_SUCCESS,
  payload: collection
})

export const fetchCollectionFailure = (error) => ({
  type: shopActionTypes.FETCHING_COLLECTION_SUCCESS,
  payload: error
})

export const fetchCollectionAsinc = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionFailure()));
  }
}
