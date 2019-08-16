import userTypes from './user.types';

const initialState = {
  currentUser: null,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
    case userTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}

export default userReducer;
