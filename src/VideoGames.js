import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from './components/Header/Header';

function VideoGames() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      VideoGames
    </div>
  )
}

export default VideoGames