import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAjv4saEAmulygX6dtsIYOYG0Mt5UtU6OE",
  authDomain: "hci-final-dfee9.firebaseapp.com",
  projectId: "hci-final-dfee9",
  storageBucket: "hci-final-dfee9.appspot.com",
  messagingSenderId: "409920422207",
  appId: "1:409920422207:web:4065b0bbecd23ec931538a",
  measurementId: "G-R14BN9YDGV",
});
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithEmailAndPassword = () => {
    const provider = new firebase.auth.signInWithEmailAndPassword();
    auth.signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithEmailAndPassword}>Sign in with Google</button>
  );
}

export default App;
