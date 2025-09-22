// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (from your project settings)
const firebaseConfig = {
  apiKey: "AIzaSyDkYTo98IbVMXAzpqTMQ0dWjY8gpzGI1Gk",
  authDomain: "apexmotion-8f0dd.firebaseapp.com",
  projectId: "apexmotion-8f0dd",
  storageBucket: "apexmotion-8f0dd.firebasestorage.app",
  messagingSenderId: "981522040678",
  appId: "1:981522040678:web:95028c29edd3c06cbaeaa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);