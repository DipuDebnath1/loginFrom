// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJLgSl2czndWC1UdOE6P9TmpNy8gcacM",
  authDomain: "email-authentication-40dbb.firebaseapp.com",
  projectId: "email-authentication-40dbb",
  storageBucket: "email-authentication-40dbb.appspot.com",
  messagingSenderId: "829109880412",
  appId: "1:829109880412:web:2fa7baa1dab7b271324899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;