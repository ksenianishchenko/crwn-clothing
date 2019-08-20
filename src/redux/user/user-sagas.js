import {takeLatest, put, all, call} from 'redux-saga/effects';

import userTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {signInFailure, signInSuccess, signOutFailure, signOutSuccess} from './user.actions';

export function* getAuthUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({id: snapshot.id, ...snapshot.data()}))
  } catch(error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignIn() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getAuthUserSnapshot(user);
  } catch(error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignIn({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getAuthUserSnapshot(user);
  } catch(error) {
    yield put(signInFailure(error.message))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getAuthUserSnapshot(userAuth);
  } catch(error) {
    yield put(signInFailure(error.message));
  }
}

export function* onUserSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }catch(error) {
    yield put(signOutFailure(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* emailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

export function* checkUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, onUserSignOut)
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutUserStart)
  ])
}
