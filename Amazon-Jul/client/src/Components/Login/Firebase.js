
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYGOtEEAnJ8DMpKbgwFvfR7-S0tsfCJto",
    authDomain: "feb-22892.firebaseapp.com",
    projectId: "feb-22892",
    storageBucket: "feb-22892.appspot.com",
    messagingSenderId: "181013806718",
    appId: "1:181013806718:web:da7069c334c349d38de22f",
    measurementId: "G-67HPXQWRL5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };