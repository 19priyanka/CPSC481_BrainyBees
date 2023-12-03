import React, { useState, useEffect } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Quiz.css";

export default function Genericquestionsection({ questions, title }) {
  const [time, setTime] = useState(1800);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId); // Stop the interval when time reaches 0
        } else if (prevTime === 60) {
          setBlink(true); // Start blinking when there's one minute left
        }

        return prevTime - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const buttonStyle = {
    background: blink ? "red" : "transparent",
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>{title}</h1>
      <Button id="timer" className="m-4" variant="outlined" style={buttonStyle}>
        {formatTime(time)} MINUTES 🕑
      </Button>
      {questions.map((question, index) => {
        return (
          <div key={question.id}>
            {" "}
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                {question.question}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={question.choice1}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={question.choice1}
                  control={<Radio />}
                  label={question.choice1}
                />
                <FormControlLabel
                  value={question.choice2}
                  control={<Radio />}
                  label={question.choice2}
                />
                <FormControlLabel
                  value={question.choice3}
                  control={<Radio />}
                  label={question.choice3}
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
          </div>
        );
      })}
      <Button
        style={{ background: "green" }}
        variant="contained"
        className={blink ? "blink" : ""}
      >
        <Link
          to="/Quizzes/Loops/ForLoopQuiz/Results"
          style={{
            textDecoration: "none",
            textTransform: "none",
            color: "white",
          }}
        >
          SUBMIT
        </Link>
      </Button>
    </>
  );
}
