// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU3Eajr1V-CvM_6NcBaifCq5QgLilHx2M",
  authDomain: "alibaba-e2c2b.firebaseapp.com",
  projectId: "alibaba-e2c2b",
  storageBucket: "alibaba-e2c2b.appspot.com",
  messagingSenderId: "830576147079",
  appId: "1:830576147079:web:2be2ce77c4baf01ca19622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;