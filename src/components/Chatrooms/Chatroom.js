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
                            <img class="card-img-top chat-img" src="general_chat.png" ></img>
                            <div class="card-body">
                                <h5 class="card-title">General Chat</h5>
                                <p class="card-text">A room where all UF students can come together and socialze.</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/generalchat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="card-img-top chat-img" src="soccer_chat.png" ></img>
                            <div class="card-body">
                                <h5>Soccer Chat</h5>
                                <p>A room where soccer fans to discuss the sport and find others to play with.</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/soccerchat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="card-img-top chat-img" src="chemistry_chat.jpg" ></img>
                            <div class="card-body">
                                <h5>Chemistry Chat</h5>
                                <p>Come on in and discuss chemistry with us, maybe find your next study partner!</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/chemistrychat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top chat-img" src="video_games_chat.png" ></img>
                            <div class="card-body">
                                <h5>Video Games Chat</h5>
                                <p>A room for gamers of all backgrounds to discuss and find others to play with.</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/videogameschat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="card-img-top chat-img" src="photography_chat.ico" ></img>
                            <div class="card-body">
                                <h5>Photography Chat</h5>
                                <p>A place where photography fans can share their pictures and discuss.</p>
                                <button class="btn btn-primary" onClick ={() => {navigate("/photographychat")}}>Join chatroom</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                            <img class="card-img-top chat-img" src="hiking_chat.png" ></img>
                            <div class="card-body">
                                <h5>Hiking Chat</h5>
                                <p>Come find the hottest hiking trails and make some friends to go with!</p>
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