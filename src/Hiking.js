import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";

function Hiking() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      Hiking
    </div>
  )
}

export default Hiking