import React, { useState, useEffect } from "react";
import ShowPath from "../Showpath";

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

export default function Genericquestionsection() {
  const questions = [
    {
      question: "What does a 'for loop' do in C++ programming?",
      choice1: "Tells the computer to stop",
      choice2: "Repeats a set of instructions a specific number of times",
      choice3: " Displays a message on the screen",
      correct: "Repeats a set of instructions a specific number of times",
      solution: "",
    },
    {
      question: "How do you write a 'for loop' in C++?",
      choice1: "'if (condition) { /* code here */ }'",
      choice2: "'while (condition) { /* code here */ }'",
      choice3:
        "'for (initialization; condition; increment) { /* code here */ }'",
      correct:
        "'for (initialization; condition; increment) { /* code here */ }'",
      solution: "",
    },
    {
      question:
        "How many times will this 'for loop' repeat in C++: for (int i = 0; i < 5; i++) { /* code here */ }",
      choice1: "5 times",
      choice2: "4 times",
      choice3: "6 times",
      correct:
        "'for (initialization; condition; increment) { /* code here */ }'",
      solution: "",
    },
    {
      question:
        "What is the result of this 'for loop' in C++: for (int i = 0; i < 3; i++) { cout << 'Hello'; }",
      choice1: "'Hello'",
      choice2: "'HelloHello'",
      choice3: "'Hello' printed 3 times",
      correct: "'Hello' printed 3 times",
      solution: "",
    },
  ];

  const title = "LOOPS";

  const [time, setTime] = useState(1800);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
        } else if (prevTime === 60) {
          setBlink(true);
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
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
      <ShowPath></ShowPath>
      <section className="mainSection mx-4 mb-4">
        <h1 style={{ color: "#ffa700" }}>{title}</h1>
        <Button
          id="timer"
          className="m-4"
          variant="outlined"
          style={buttonStyle}
        >
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
      </section>
    </>
  );
}
