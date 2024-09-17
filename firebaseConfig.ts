import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "ambentoweb.firebaseapp.com",
  projectId: "ambentoweb",
  storageBucket: "ambentoweb.appspot.com",
  messagingSenderId: "442159741495",
  appId: "1:442159741495:web:85d5bcc302eb447fc95db2"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
