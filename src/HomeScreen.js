import * as React from 'react';
import {useNavigate} from "react-router-dom"

function HomeScreen(props) {
    const navigate = useNavigate(); 
  
  return (
    <>
    <h1 style={{color:"blue"}}>BrainyBees HomeScreen</h1> 
    <button onClick={()=>navigate("/")}>Back to Landing</button> 
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
    
  )
   
}


export default HomeScreen;