// Import Firebase from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

// Sign in with Google function
window.googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`Welcome ${user.displayName}`);
      window.location.href = "chat.html"; // Redirect on success
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
    });
};
