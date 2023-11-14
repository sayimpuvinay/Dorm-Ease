// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);

export { auth, app };
