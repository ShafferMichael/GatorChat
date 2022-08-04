import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Chat.css"

function Chatroom(){

    let navigate = useNavigate();

    return (
        <div className="Chat">
            <Header />
            
            <div class="container">
            <div class="col-md-4">
            <button class="btn btn-primary"
                onClick ={() => {
                    navigate("/");
                    }}> Go back to Home 
            </button>
            </div>
            
    
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="chat-img" src="general_chat.png" ></img>
                            <div class="card-body">
                                <h5>General Chat</h5>
                                <p>General chat description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/generalchat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="chat-img" src="soccer_chat.jpg" ></img>
                            <div class="card-body">
                                <h5>Soccer Chat</h5>
                                <p>Soccer chat description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/soccerchat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="chat-img" src="chemistry_chat.jpg" ></img>
                            <div class="card-body">
                                <h5>Chemistry Chat</h5>
                                <p>Chemistry chat description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/chemistrychat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="chat-img" src="video_games_chat.png" ></img>
                            <div class="card-body">
                                <h5>Video Games Chat</h5>
                                <p>Video Games chat description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/videogameschat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="chat-img" src="photography_chat.ico" ></img>
                            <div class="card-body">
                                <h5>Photography Chat</h5>
                                <p>Photography description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/photographychat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="chat-img" src="hiking_chat.png" ></img>
                            <div class="card-body">
                                <h5>Hiking Chat</h5>
                                <p>Hiking chat description goes here</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/hikingchat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chatroom;