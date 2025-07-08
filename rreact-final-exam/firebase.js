
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqrJO4F29aStfIw_nWA1YrvR_P5gq7z98",
  authDomain: "react-final-exam-647c6.firebaseapp.com",
  projectId: "react-final-exam-647c6",
  storageBucket: "react-final-exam-647c6.firebasestorage.app",
  messagingSenderId: "902875660091",
  appId: "1:902875660091:web:b041a4359d0d083854811e",
  measurementId: "G-PF3F8RV2F0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();