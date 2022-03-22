import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSmQSB4BqGLzugL7FOg_Jvo7G2dRdjDmY",
  authDomain: "e-ride-12fa6.firebaseapp.com",
  projectId: "e-ride-12fa6",
  storageBucket: "e-ride-12fa6.appspot.com",
  messagingSenderId: "244656064035",
  appId: "1:244656064035:web:391963bbe7141120b09396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
