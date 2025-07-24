// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8_qZM-4vqsiYKKi1pagJcHFE0crtCmCw",
  authDomain: "soil-farming-agent-f4eaf.firebaseapp.com",
  projectId: "soil-farming-agent-f4eaf",
  storageBucket: "soil-farming-agent-f4eaf.firebasestorage.app",
  messagingSenderId: "819521756153",
  appId: "1:819521756153:web:85893500576b969c0e3b28",
  measurementId: "G-HCC2BVL2QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
