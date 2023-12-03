import React from "react";
// import Genericresultsection from "./Genericresultsection";
import { CircularProgress } from "@mui/material";
import ShowPath from "../Showpath";
import { red } from "@mui/material/colors";
import { bottom } from "@popperjs/core";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import "./Quiz.css";

export default function Results() {
  const Solutions = [
    {
      question: "What does a 'for loop' do in C++ programming?",
      choice1: "Tells the computer to stop",
      choice2: "Repeats a set of instructions a specific number of times",
      choice3: " Displays a message on the screen",
      correct: "Repeats a set of instructions a specific number of times",
      solution: "Repeats a set of instructions a specific number of times",
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
      solution: "5 times",
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
  const totalQuestions = Solutions.length;
  const correctAnswers = Solutions.filter(
    (question) => question.correct === question.solution
  ).length;
  const percentCorrect = (correctAnswers / totalQuestions) * 100;

  return (
    <>
      <ShowPath />
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
          value={percentCorrect}
        />
        <h3 style={{ display: "inline" }}>{percentCorrect.toFixed(2)}%</h3>
      </div>
      <br />
      <br />

      <Genericresultsection questions={Solutions} />
    </>
  );
}

function Genericresultsection({ questions }) {
  return (
    <>
      {questions.map((question, index) => {
        const isSolution = question.correct === question.solution;
        const isWrongSolution =
          !isSolution && question.solution === question.choice1;

        return (
          <div
            key={index}
            style={{
              border: isSolution ? "2px solid #55c455" : "2px solid red",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <FormControl>
              <FormLabel id={`demo-radio-buttons-group-label-${index}`}>
                {question.question}
              </FormLabel>
              <RadioGroup
                aria-labelledby={`demo-radio-buttons-group-label-${index}`}
                defaultValue={question.choice2}
                name={`radio-buttons-group-${index}`}
              >
                {[question.choice1, question.choice2, question.choice3].map(
                  (choice, choiceIndex) => (
                    <FormControlLabel
                      key={choiceIndex}
                      value={choice}
                      control={
                        <Radio
                          disabled={
                            choice !== question.correct &&
                            choice !== question.solution
                          }
                          className={`${
                            isSolution && choice === question.correct
                              ? "correct-choice"
                              : ""
                          } ${isWrongSolution ? "wrong-solution" : ""}`}
                        />
                      }
                      label={choice}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          </div>
        );
      })}
    </>
  );
}
