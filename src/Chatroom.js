import React from "react";
import { useNavigate } from "react-router-dom";

function Chatroom(){

    let navigate = useNavigate();

    return (
        <div>
            <button 
              onClick ={() => {
                navigate("/");
                }}> Go back to Home 
            </button>
            <hr />
            <div>Select the chat room you wish to join below!</div>
        </div>
    )
}

export default Chatroom;