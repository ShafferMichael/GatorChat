import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Chat.css"

function Chemistry() {
    let navigate = useNavigate();
  return (
    <div className='Chat'>
      <Header />
      <button
        onClick ={() => {
          navigate("/Chatroom");
          }}> Back to chat select
      </button>
      <hr />
      Chemistry
    </div>
  )
}

export default Chemistry