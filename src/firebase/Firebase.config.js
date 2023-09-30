// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeWf81s1gHDIjm4wIKstcHdp8MkRim4jY",
  authDomain: "react-firebase-login-form.firebaseapp.com",
  projectId: "react-firebase-login-form",
  storageBucket: "react-firebase-login-form.appspot.com",
  messagingSenderId: "1045500919889",
  appId: "1:1045500919889:web:8a3d8d03b2cfb196a63870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;