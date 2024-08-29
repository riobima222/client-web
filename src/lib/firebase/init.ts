import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJDFf_oVE5jBfYQPxkuUx9K7OV5Pg_RN0",
  authDomain: "web-client1-83a90.firebaseapp.com",
  projectId: "web-client1-83a90",
  storageBucket: "web-client1-83a90.appspot.com",
  messagingSenderId: "760943980256",
  appId: "1:760943980256:web:7c627adf77a123c732ea85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };

