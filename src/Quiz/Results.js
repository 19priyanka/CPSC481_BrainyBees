import React from "react";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ShowPath from "../Showpath";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import "./Quiz.css";

export default function Results() {
  const location = useLocation();
  const { questions: updatedQuestions } = location.state || [];
  const totalQuestions = updatedQuestions.length;
  const correctAnswers = updatedQuestions.filter(
    (question) => question.correct === question.solution
  ).length;
  const percentCorrect = Math.trunc((correctAnswers / totalQuestions) * 100);

  const correct = "✅";
  const wrong = "❌";

  return (
    <>
      <ShowPath></ShowPath>

      <h1 style={{ color: "#ffa700" }}>RESULTS</h1>
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
        <h3 style={{ display: "inline" }}>{percentCorrect}%</h3>
      </div>
      <br />
      <br />
      {updatedQuestions &&

      <Genericresultsection questions={updatedQuestions} /> }
    </>
  );
}

function Genericresultsection({ questions }) {
  const correct = "✅";
  const wrong = "❌";

  return (
    <>
      {questions.map((question, index) => {
        const isSolution = question.correct === question.solution;

        return (
          <div
            className="rounded"
            key={index}
            style={{
              backgroundColor: isSolution ? "#F0FFF0" : "#ff1a0012",
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
                          } ${!isSolution ? "wrong-solution" : ""}`}
                        />
                      }
                      label={
                        choice === question.correct
                          ? `${choice} ${correct} `
                          : !isSolution && choice === question.solution
                          ? `${choice} ${wrong}`
                          : choice
                      }
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
