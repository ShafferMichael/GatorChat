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
            <hr />
            <button onClick ={() => {navigate("/generalchat")}}>General Chat</button>
            <button onClick ={() => {navigate("/soccerchat")}}>Soccer Chat</button>
            <button onClick ={() => {navigate("/chemistrychat")}}>Chemistry Chat</button>
            <hr />
            <button onClick ={() => {navigate("/videogameschat")}}>Video Games Chat</button>
            <button onClick ={() => {navigate("/photographychat")}}>Photography Chat</button>
            <button onClick ={() => {navigate("/hikingchat")}}>Hiking Chat</button>
        </div>
    )
}

export default Chatroom;