import * as React from 'react';
import {useNavigate} from "react-router-dom"
import GenericSelectionPage from "./GenericSelectionPage.jsx"
function HomeScreen(props) {
    const navigate = useNavigate(); 
    //change this later, just an example right now
    const links = [{link:'/homescreen',name:'Test1'},{link:'/landingpage',name:'Test2'},{link:'/genericselectionpage',name:'Test3'}]
  return (
    <>
    <h1 style={{color:"blue"}}>BrainyBees HomeScreen</h1> 
    <button onClick={()=>navigate("/")}>Back to Landing</button> 
    <button onClick={()=>navigate(-1)}>Back</button>
    <GenericSelectionPage links={links} handleChange={(value)=> {console.log(value)}}/>
    </>
    
  )
   
}


export default HomeScreen;