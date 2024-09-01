// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeMNYO_ORbsWW6lrKH_c5R7H1Q2CuyE-8",
  authDomain: "netflixgpt-a7c88.firebaseapp.com",
  projectId: "netflixgpt-a7c88",
  storageBucket: "netflixgpt-a7c88.appspot.com",
  messagingSenderId: "395483468368",
  appId: "1:395483468368:web:9b271fc2127318c2adb755",
  measurementId: "G-SHP22J5ZZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
