// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfmK8sgIb64xVPIJg0gd9AHYLpRX-NuWU",
  authDomain: "clone-b34f5.firebaseapp.com",
  projectId: "clone-b34f5",
  storageBucket: "clone-b34f5.appspot.com",
  messagingSenderId: "243544135481",
  appId: "1:243544135481:web:c6d1933cac45667c897ae8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();

export { auth, db };
