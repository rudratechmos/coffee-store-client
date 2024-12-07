// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_9wCEwFwxRmjQAhFhKs5T24gvYzFWU70",
  authDomain: "coffee-store-5fbec.firebaseapp.com",
  projectId: "coffee-store-5fbec",
  storageBucket: "coffee-store-5fbec.firebasestorage.app",
  messagingSenderId: "764835130374",
  appId: "1:764835130374:web:8fe0dcdc0b1e7f91df2787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
