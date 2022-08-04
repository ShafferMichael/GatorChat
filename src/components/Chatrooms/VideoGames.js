import React from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../Header/Header'
import { ChatEngine } from 'react-chat-engine';

function VideoGames() {
    let navigate = useNavigate();
  return (
    <div className='Chat'>
      <Header />
      <button type="button" class="btn btn-primary"
        onClick ={() => {
          navigate("/Chatroom");
          }}> Back to chat select
      </button>
      <hr />
      <p class="title">Video Games</p>
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

export default VideoGames