import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from './components/Header/Header'

function Soccer() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      Soccer
    </div>
  )
}

export default Soccer