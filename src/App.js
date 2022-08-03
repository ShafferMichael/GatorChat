import React from "react";
import "./App.css";
import { auths } from "./components/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Chatroom from "./Chatroom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home />}  />
        <Route path="/chatroom" element ={<Chatroom />}  /> 
      </Routes>
    </Router>
  );
}
export default App;