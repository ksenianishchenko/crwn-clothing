import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_71m6wiCSrQAZqkKgDLaUei-GJoAs4Wg",
  authDomain: "crwn-db-bff09.firebaseapp.com",
  databaseURL: "https://crwn-db-bff09.firebaseio.com",
  projectId: "crwn-db-bff09",
  storageBucket: "",
  messagingSenderId: "846897047398",
  appId: "1:846897047398:web:15b6dbe03d0c59af"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: `select_account`});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
