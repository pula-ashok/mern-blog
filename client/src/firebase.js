// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "mern-blog-93eac.firebaseapp.com",
  projectId: "mern-blog-93eac",
  storageBucket: "mern-blog-93eac.appspot.com",
  messagingSenderId: "930788166462",
  appId: "1:930788166462:web:667af7743c4d0b660cba6f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
