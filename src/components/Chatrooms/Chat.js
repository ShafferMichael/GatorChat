import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';

function Chat(){

    let navigate = useNavigate();
    return (
        <ChatEngine>
            height = "100vh"
            projectID ="aa650646-d01e-47fa-b8e7-760f5207c1d3"
            userName = "Najul"
            userSecret = "najul"
        </ChatEngine>

    );
}

export default Chat;