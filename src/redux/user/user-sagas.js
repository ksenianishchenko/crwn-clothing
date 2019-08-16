import {takeLatest, put, all, call} from 'redux-saga/effects';

import userTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {signInFailure, signInSuccess} from './user.actions';

export function* getAuthUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    put(signInSuccess({id: snapshot.id, ...snapshot.data()}))
  } catch(error) {
    put(signInFailure(error.message));
  }
}

export function* onGoogleSignIn() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    getAuthUserSnapshot(user);
  } catch(error) {
    put(signInFailure(error.message));
  }
}

export function* onEmailSignIn({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    getAuthUserSnapshot(user);
  } catch(error) {
    yield put(signInFailure(error.message))
  }
}

export function* googleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn)
}

export function* emailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, onEmailSignIn)
}

export function* userSagas() {
  yield all([call(googleSignInStart), call(emailSignInStart)])
}
