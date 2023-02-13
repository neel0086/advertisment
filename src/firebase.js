// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM5S7phjWVG7QH9wkP2atmI1gTYaV2lw0",
  authDomain: "trendify-79dd2.firebaseapp.com",
  projectId: "trendify-79dd2",
  storageBucket: "trendify-79dd2.appspot.com",
  messagingSenderId: "963488011346",
  appId: "1:963488011346:web:0dc28edbf7378476d9bb8b",
  measurementId: "G-SPL34H725E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);