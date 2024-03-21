// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_fDoBDFVELcb9LtD0DFYh-z3Y-UX8SsQ",
  authDomain: "fir-1-c7f12.firebaseapp.com",
  databaseURL: "https://fir-1-c7f12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-1-c7f12",
  storageBucket: "fir-1-c7f12.appspot.com",
  messagingSenderId: "212393282467",
  appId: "1:212393282467:web:4313c5c4a9ae0df1f6a816",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app);
export const db = getDatabase(app);
