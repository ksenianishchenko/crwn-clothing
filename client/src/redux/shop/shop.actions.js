import shopActionTypes from "./shop.types";

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
