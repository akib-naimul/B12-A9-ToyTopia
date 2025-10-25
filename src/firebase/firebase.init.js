// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cuWqeNB7ORHVz5JH-PPgoJ-w3MVfKL0",
  authDomain: "assignment-9-d8b44.firebaseapp.com",
  projectId: "assignment-9-d8b44",
  storageBucket: "assignment-9-d8b44.firebasestorage.app",
  messagingSenderId: "933583627330",
  appId: "1:933583627330:web:e8d086a4e659632ddcb9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);