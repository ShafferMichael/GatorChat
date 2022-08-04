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
    <body id="page">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <form id="login">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="UF email"></input>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password"></input>
            </div>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-primary" onClick={signInWithGoogle}>Log in</button>
              <button type="button" class="btn btn-primary"
                onClick ={() => {
                navigate("/chatroom");
                }}> Enter Chatroom
              </button>
            </div>
          
          <p class="register-link fs-6">Don't have an account? <a href="#!" onClick={signInWithGoogle} class="link-info">Register here</a></p>
          </form>
        </div>

        <div class="col-sm-6">
          <img src="landing-image.jpg" alt="img" width="500" height="500"></img>
        </div>
      </div>

      </div>
    </body>
    
  );
}
export default Home;