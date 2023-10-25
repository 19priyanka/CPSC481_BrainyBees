import React from 'react';
import {useNavigate} from "react-router-dom"

export default function LandingPage(props) {
  const navigate = useNavigate(); 

  return (
    <>
    <h1 style={{color:"blue"}}>landingPage</h1> 
    <button onClick={()=>navigate("/homescreen")}>Homescreen</button>
  
    </>
    );
  
   
}



