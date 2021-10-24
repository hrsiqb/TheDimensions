// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log('here')
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8CnMde-HaQKebMU994Xt7rI3IkihnKq8",
  authDomain: "thedimensionspvtltd.firebaseapp.com",
  projectId: "thedimensionspvtltd",
  storageBucket: "thedimensionspvtltd.appspot.com",
  messagingSenderId: "969548320091",
  appId: "1:969548320091:web:bc5949627d3b6ad50cde7e",
  measurementId: "G-Y8600M9TCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);