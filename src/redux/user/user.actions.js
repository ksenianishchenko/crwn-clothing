import userTypes from './user.types';

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (emailAndPasword) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPasword
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = (emailAndPasword) => ({
  type: userTypes.SIGN_UP_START,
  payload: emailAndPasword
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: userTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFailure = (error) => ({
  type: userTypes.SIGN_UP_FAILURE,
  payload: error
});
