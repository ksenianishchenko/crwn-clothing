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
