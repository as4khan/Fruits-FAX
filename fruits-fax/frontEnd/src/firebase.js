// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA3-ZpEkJCAB06F4tVjtqAjRuPWCMA8dY",
  authDomain: "fruits-fax.firebaseapp.com",
  projectId: "fruits-fax",
  storageBucket: "fruits-fax.appspot.com",
  messagingSenderId: "593490553415",
  appId: "1:593490553415:web:3c1161e0a259a6b5a91f62",
  measurementId: "G-Y7BY653K87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
