import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDaJ8Z40A5cTxoq2rMySKEkGcisvoaKpVU",
  authDomain: "do-you-know-me-d16f4.firebaseapp.com",
  databaseURL: "https://do-you-know-me-d16f4-default-rtdb.firebaseio.com",
  projectId: "do-you-know-me-d16f4",
  storageBucket: "do-you-know-me-d16f4.appspot.com",
  messagingSenderId: "979987822692",
  appId: "1:979987822692:web:271e1db9d02c56e0ea4771",
  measurementId: "G-W5E3HJ5QN9"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export default firebase;
  