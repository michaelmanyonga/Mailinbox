// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMNzmeuXnFaSkBXP1Vokcdz5Is_ZeFCbw",
  authDomain: "mailinbox-d97f7.firebaseapp.com",
  projectId: "mailinbox-d97f7",
  storageBucket: "mailinbox-d97f7.appspot.com",
  messagingSenderId: "1286258137",
  appId: "1:1286258137:web:59c332d3c9aa2508f9edc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);