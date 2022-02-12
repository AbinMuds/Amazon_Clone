// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZiLf7J0nEkIXJJvZNkGIJ1_Q5IMj1ZA",
  authDomain: "clone-82ccb.firebaseapp.com",
  projectId: "clone-82ccb",
  storageBucket: "clone-82ccb.appspot.com",
  messagingSenderId: "62999150359",
  appId: "1:62999150359:web:5363e95732eca273b18152",
  measurementId: "G-X71WWJW9D8"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };