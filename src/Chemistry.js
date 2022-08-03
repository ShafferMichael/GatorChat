import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";

function Chemistry() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      Chemistry
    </div>
  )
}

export default Chemistry