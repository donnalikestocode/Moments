// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5MgysOCwRFdUffoqxIFGp7nVIgBgHEo",
  authDomain: "moments-fbe82.firebaseapp.com",
  projectId: "moments-fbe82",
  storageBucket: "moments-fbe82.appspot.com",
  messagingSenderId: "812865638975",
  appId: "1:812865638975:web:16f1ace532bd1979c21e8a",
  measurementId: "G-TM8KX4DMC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)