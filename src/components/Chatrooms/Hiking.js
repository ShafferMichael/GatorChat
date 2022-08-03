import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

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
    </div>
  )
}

export default Hiking