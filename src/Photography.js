import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from './components/Header/Header';

function Photography() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      Photography
    </div>
  )
}

export default Photography