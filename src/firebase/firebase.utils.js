import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBycqkfJww7h5dmV8ioJh82BuiFyiymffk",
  authDomain: "html-crwn-db.firebaseapp.com",
  databaseURL: "https://html-crwn-db.firebaseio.com",
  projectId: "html-crwn-db",
  storageBucket: "",
  messagingSenderId: "407169946319",
  appId: "1:407169946319:web:b9a3c31dbf212570"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;