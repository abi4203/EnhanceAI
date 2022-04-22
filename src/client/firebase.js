// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTSn66Kc_k9TOzP8rOgGKb4KmrCi0zBvU",
  authDomain: "enhanceai-cd2ac.firebaseapp.com",
  projectId: "enhanceai-cd2ac",
  storageBucket: "enhanceai-cd2ac.appspot.com",
  messagingSenderId: "1069515562905",
  appId: "1:1069515562905:web:44de78618df4cd098e3d08",
  measurementId: "G-7ZPQ57MGJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword;
export const signUp = createUserWithEmailAndPassword;
export const signOut =   onAuthStateChanged;