import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB8cR0QNv49q4kLQKwvoGujFu4sFMLrZV4",
  authDomain: "v-shopping-7501f.firebaseapp.com",
  projectId: "v-shopping-7501f",
  storageBucket: "v-shopping-7501f.appspot.com",
  messagingSenderId: "347437358564",
  appId: "1:347437358564:web:6101d4d0fa69cd6e17fbf1",
  measurementId: "G-MY91ZR284L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;