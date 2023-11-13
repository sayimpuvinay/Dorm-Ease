import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRAFVt-Av6-L7WDY5SkT-wxurVuVuecbY",
  authDomain: "dormease-303e2.firebaseapp.com",
  projectId: "dormease-303e2",
  storageBucket: "dormease-303e2.appspot.com",
  messagingSenderId: "653442274990",
  appId: "1:653442274990:web:b9cb12b4f057804d787f3f",
  measurementId: "G-VGLX0EV6WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
