import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";

function General() {
    let navigate = useNavigate();
  return (
    <div>
      <Header />
      General
    </div>
  )
}

export default General