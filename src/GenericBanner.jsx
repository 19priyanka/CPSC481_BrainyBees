import * as React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GenericBanner.css";
import Button from "@mui/material/Button";
// links should be an array of objects in this format {link:'link', name:'name'} handle change is how to handle the change in the language
function GenericBanner() {
  const navigate = useNavigate();
  const [userName,setUserName] = useState(null)

  useEffect(()=> {
    // could use local storage instead of session storage if we want it to persist after closing the browser
    const userName = sessionStorage.getItem("userName")
    if(userName !== null){
      setUserName(userName)
    }
  
  }, [])


  return (
    <div className="banner">
    <Button variant="contained" onClick={() => navigate("/homescreen")}>
                Home
    </Button>
    {
        userName !== null ? <Button variant="contained" onClick={() => navigate("/profile")}>Welcome {userName}</Button> 
        : <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
    }
      
    </div>
  );
}

export default GenericBanner;