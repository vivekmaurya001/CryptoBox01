import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEKnjv4UcoAEU9Vf5wHqsAPizXpDPn0W8",
  authDomain: "cryptobox-39e44.firebaseapp.com",
  projectId: "cryptobox-39e44",
  storageBucket: "cryptobox-39e44.appspot.com",
  messagingSenderId: "56003965827",
  appId: "1:56003965827:web:43c78bc57ee5a5776cbcb6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const provider = new GoogleAuthProvider();
