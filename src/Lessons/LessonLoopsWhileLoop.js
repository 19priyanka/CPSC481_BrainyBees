import { Grid, Button } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowPath from "../Showpath.jsx";
import "./LessonLoopsForLoops.css";

function LessonLoopsWhileLoop() {
    const navigate = useNavigate();

    useEffect(() => {
      const username = sessionStorage.getItem('userName');
      localStorage.setItem("whileLoopsVisited"+username, "true");

    }, []);
 
    return (
      <>
       <ShowPath></ShowPath>
       <Grid container spacing={2}>
          {/* Title */}s
          <Grid item xs={12} >
          <div className="Padding"> 
            <h1>While Loop</h1>
            </div>
          </Grid>
  
          {/* Video */}
          <Grid item xs={12} justifyContent="center">
              <div className="Padding">
              <div className="video"> 
            {/* Embed your video component here */}
            <iframe
              title="Loop Video"
              width="75%"
              height="400"
              src="https://www.youtube.com/embed/E-Vuvo4cUbM"
        
                allowfullscreen
                light={true}
            ></iframe>
            </div>
            </div>
          </Grid>
  
          {/* Summary Text */}
          <Grid item xs={12}>
          <div className="Padding"> 
            <p>
              Here's a brief summary of the video content. Loops are powerful
              control structures that allow you to repeat a sequence of
              instructions multiple times based on a specific condition.
            </p>
            </div>
          </Grid>
  
         
  
          {/* Download Video Notes Button */}
          <Grid item xs={6}>
          <div className="Padding"> 
            <Button variant="contained" color="primary">
              Download Video Notes
            </Button>
            </div>
          </Grid>
  
          {/* While Loops Arrow Button */}
          <Grid item xs={6} container justifyContent="flex-end">
                <div className="PaddingRight"> 
            <Button
              variant="outlined"
              color="primary"
              startIcon={<span>&#8594;</span>}
              onClick = {()=>navigate("/Lessons/Loops/ForLoop")}
            >
              Do While Loops
            </Button>
            </div>
          </Grid>
        </Grid>
      </>
    );
}

export default LessonLoopsWhileLoop;
