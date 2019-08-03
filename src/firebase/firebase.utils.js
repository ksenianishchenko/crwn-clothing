import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_71m6wiCSrQAZqkKgDLaUei-GJoAs4Wg',
  authDomain: 'crwn-db-bff09.firebaseapp.com',
  databaseURL: 'https://crwn-db-bff09.firebaseio.com',
  projectId: 'crwn-db-bff09',
  storageBucket: 'crwn-db-bff09.appspot.com',
  messagingSenderId: '846897047398',
  appId: '1:846897047398:web:15b6dbe03d0c59af'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
