// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ3tW9DVPLcwLH2IzyVL00bxA3DVuzPzU",
  authDomain: "hci-final-ca24f.firebaseapp.com",
  projectId: "hci-final-ca24f",
  storageBucket: "hci-final-ca24f.appspot.com",
  messagingSenderId: "201297470253",
  appId: "1:201297470253:web:44684def6c82940f63e9a4",
  measurementId: "G-F9TN38XDKK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
