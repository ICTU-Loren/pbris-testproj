// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFHn1DmEQq1HR5cjg3zMc-y3o0r6NDaQ8",
  authDomain: "pbris-testproj.firebaseapp.com",
  projectId: "pbris-testproj",
  storageBucket: "pbris-testproj.appspot.com",
  messagingSenderId: "1077505833173",
  appId: "1:1077505833173:web:551862a302ac05c1c64a5c",
  measurementId: "G-HPEPBHTSME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)