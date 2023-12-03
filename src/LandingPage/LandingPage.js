import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import "./LandingPage.css";
import FancyBeeFacingLeft from "../bee_icon/png/FancyBeeFacingLeft.png";
import FancyBeeFacingRight from "../bee_icon/png/FancyBeeFacingRight.png";

export default function LandingPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={1} className="header">
        <Grid container spacing={1}>
          <Grid item xs={2} className="beeIconFacingRight">
            <img
              src={FancyBeeFacingRight}
              alt=""
              width="150"
              height="150"
            ></img>
          </Grid>
          <Grid item xs={8} className="title">
            <h1>BrainyBees</h1>
          </Grid>
          <Grid item xs={2} className="beeIconFacingLeft">
            <img src={FancyBeeFacingLeft} alt="" width="148" height="148"></img>
          </Grid>
          <Grid item xs={12} className="subtitle">
            <h1>
              {" "}
              <em>Where Learning Takes Flight</em>{" "}
            </h1>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className="paperContainer">
                <Paper
                  onClick={() => navigate("/homescreen")}
                  elevation={3}
                  className="paper"
                >
                  <h1>Java</h1>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="paperContainer">
                <Paper
                  onClick={() => navigate("/homescreen")}
                  elevation={3}
                  className="paper"
                >
                  <h1>C++</h1>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="paperContainer">
                <Paper
                  onClick={() => navigate("/homescreen")}
                  elevation={3}
                  className="paper"
                >
                  <h1>Python</h1>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
