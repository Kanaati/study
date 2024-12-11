// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKj3jcW_UN13Qv5N3lCVJWUP7EWbfWVDA",
  authDomain: "studyapp-7a1e8.firebaseapp.com",
  databaseURL: "https://studyapp-7a1e8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studyapp-7a1e8",
  storageBucket: "studyapp-7a1e8.firebasestorage.app",
  messagingSenderId: "427061690387",
  appId: "1:427061690387:web:0857a3c8f7fc835efe7fe6",
  measurementId: "G-3EPVX02PNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in with Google
window.googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // User info
      const user = result.user;
      console.log(`Welcome ${user.displayName}`);
      // Redirect to chat or another page
      window.location.href = "chat.html";
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
    });
};

