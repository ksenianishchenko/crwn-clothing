import {takeLatest, put, all, call} from 'redux-saga/effects';

import userTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {googleSignInSuccess, googleSignInFailure} from './user.actions';

export function* onGoogleSignIn() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    put(googleSignInSuccess({id: snapshot.id, ...snapshot.data()}))
  } catch(error) {
    put(googleSignInFailure(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn)
}

export function* userSagas() {
  yield all([call(googleSignInStart)])
}
