import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { auths } from "./components/firebase-config";
import Header from "./components/Header/Header";

function Home() {
    let navigate = useNavigate();
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
      <Header />
      <button 
      onClick={signInWithGoogle}>Sign In
      </button>
      <hr />
      <button 
              onClick ={() => {
                navigate("/chatroom");
                }}> Enter Chatroom
        </button>
    </div>

  );
}
export default Home;