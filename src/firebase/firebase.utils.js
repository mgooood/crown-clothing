import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBycqkfJww7h5dmV8ioJh82BuiFyiymffk",
  authDomain: "html-crwn-db.firebaseapp.com",
  databaseURL: "https://html-crwn-db.firebaseio.com",
  projectId: "html-crwn-db",
  storageBucket: "html-crwn-db.appspot.com",
  messagingSenderId: "407169946319",
  appId: "1:407169946319:web:b9a3c31dbf212570"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create a new user if there is no data
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;