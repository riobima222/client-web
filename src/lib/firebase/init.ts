import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU57lHMntyR3F1Cx_pPaplAk4xSHKYsMI",
  authDomain: "client-web-f8d5c.firebaseapp.com",
  projectId: "client-web-f8d5c",
  storageBucket: "client-web-f8d5c.appspot.com",
  messagingSenderId: "539564115760",
  appId: "1:539564115760:web:8567e99cc12f58d6516af5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
