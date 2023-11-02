import React from "react";
import Genericresultsection from "./Genericresultsection";
import { CircularProgress } from "@mui/material";
import { red } from "@mui/material/colors";
import { bottom } from "@popperjs/core";

export default function Results() {
  const Solutions = [
    {
      question: "What does a 'for loop' do in C++ programming?",
      choice1: "Tells the computer to stop",
      choice2: "Repeats a set of instructions a specific number of times",
      choice3: " Displays a message on the screen",
      correct: true,
    },
    {
      question: "How do you write a 'for loop' in C++?",
      choice1: "'if (condition) { /* code here */ }'",
      choice2: "'while (condition) { /* code here */ }'",
      choice3:
        "'for (initialization; condition; increment) { /* code here */ }'",
      solution: "choice3",
      correct: false,
    },
    {
      question:
        "How many times will this 'for loop' repeat in C++: for (int i = 0; i < 5; i++) { /* code here */ }",
      choice1: "5 times",
      choice2: "4 times",
      choice3: "6 times",
      solution: "choice1",
      correct: true,
    },
    {
      question:
        "What is the result of this 'for loop' in C++: for (int i = 0; i < 3; i++) { cout << 'Hello'; }",
      choice1: "'Hello'",
      choice2: "'HelloHello'",
      choice3: "'Hello' printed 3 times",
      solution: false,
    },
  ];
  return (
    <>
      <h1 style={{ color: "blue" }}>RESULTS</h1>
      <div
        style={{
          display: "inline",
          position: "relative",
        }}
      >
        <CircularProgress
          style={{ color: "red" }}
          variant="determinate"
          value={45}
        />
        <h3 style={{ display: "inline" }}>45%</h3>
      </div>
      <br />
      <br />

      <Genericresultsection questions={Solutions} />
    </>
  );
}
