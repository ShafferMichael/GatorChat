import React from "react";
import "./App.css";
import { auths } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auths, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Click Me</button>
    </div>
  );
}
export default App;
