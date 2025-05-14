// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbK2hkYjuSglbxsGlrrd6CY8aCXG8x-nQ",
  authDomain: "fizzfun-5b914.firebaseapp.com",
  projectId: "fizzfun-5b914",
  storageBucket: "fizzfun-5b914.firebasestorage.app",
  messagingSenderId: "668921027194",
  appId: "1:668921027194:web:5f171c9a09b7f9781bf9c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
