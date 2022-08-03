import React from "react";
import "./App.css";
import { auths } from "./components/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Chatroom from "./Chatroom";
import General from "./General";
import Soccer from "./Soccer";
import Chemistry from "./Chemistry";
import VideoGames from "./VideoGames";
import Photography from "./Photography";
import Hiking from "./Hiking";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home />}  />
        <Route path="/chatroom" element ={<Chatroom />}  /> 
        <Route path="/generalchat" element ={<General />}  />
        <Route path="/soccerchat" element ={<Soccer />}  />
        <Route path="/chemistrychat" element ={<Chemistry />}  />
        <Route path="/videogameschat" element ={<VideoGames />}  />
        <Route path="/photographychat" element ={<Photography />}  />
        <Route path="/hikingchat" element ={<Hiking />}  />
      </Routes>
    </Router>
  );
}
export default App;