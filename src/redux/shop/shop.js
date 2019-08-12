import shopActionTypes from './shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  error: null
}

const shopReducer = (state = initialState, action) => {
  switch(action.type) {
    case shopActionTypes.FETCHING_COLLECTION_STARTS:
      return {
        ...state,
        isFetching: true
      }
    case shopActionTypes.FETCHING_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case shopActionTypes.FETCHING_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
