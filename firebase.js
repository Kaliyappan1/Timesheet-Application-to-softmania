import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0PpvyuT53G9O2neIA2Ihq2qFUvPs5oUs",
  authDomain: "softmania-timesheet.firebaseapp.com",
  projectId: "softmania-timesheet",
  storageBucket: "softmania-timesheet.appspot.com",
  messagingSenderId: "489018279790",
  appId: "1:489018279790:web:048d4dc376ff8cb14f237f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
