// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRAFVt-Av6-L7WDY5SkT-wxurVuVuecbY",
  authDomain: "dormease-303e2.firebaseapp.com",
  projectId: "dormease-303e2",
  storageBucket: "dormease-303e2.appspot.com",
  messagingSenderId: "653442274990",
  appId: "1:653442274990:web:b9cb12b4f057804d787f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;