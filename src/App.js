import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Chatroom from "./components/Chatrooms/Chatroom";
import General from "./components/Chatrooms/General";
import Soccer from "./components/Chatrooms/Soccer";
import Chemistry from "./components/Chatrooms/Chemistry";
import VideoGames from "./components/Chatrooms/VideoGames";
import Photography from "./components/Chatrooms/Photography";
import Hiking from "./components/Chatrooms/Hiking";

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