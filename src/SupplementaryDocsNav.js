import * as React from 'react';
import {useNavigate} from "react-router-dom"

function SupplementaryDocsNav(props) {
    const navigate = useNavigate(); 
  return (
    <>
    <h1 style={{color:"blue"}}>Supplementary Documents</h1> 
    <button onClick={()=>navigate("/")}>Variables</button> 
    <button onClick={()=>navigate("/")}>Conditional Statements</button> 
    <button onClick={()=>navigate("/")}>Loops</button> 
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default SupplementaryDocsNav;