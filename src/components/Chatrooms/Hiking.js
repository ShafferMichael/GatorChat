import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { ChatEngine } from 'react-chat-engine';

function Hiking() {
    let navigate = useNavigate();
  return (
    <div className='Chat'>
      <Header />
      <button
        onClick ={() => {
          navigate("/Chatroom");
          }}> Back to chat select
      </button>
      <hr/>
      Hiking
      <hr/>
      <ChatEngine>
        height = "100vh"
        projectID ="aa650646-d01e-47fa-b8e7-760f5207c1d3"
        userName = "Najul"
        userSecret = "najul"
      </ChatEngine>
    </div>
  )
}

export default Hiking