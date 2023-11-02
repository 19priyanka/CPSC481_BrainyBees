import React from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

export default function WhileLoopQuestionSection({ questions }) {
  return (
    <>
      {questions.map((question) => {
        return (
          <div>
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
            <br />
          </div>
        );
      })}
      <Link to="/PracticeProblems/Loops/WhileLoop/WhileLoopSolutions">
      <Button style={{ background: "green" }} variant="contained">
        SOLUTIONS
      </Button>
      </Link>
    </>
  );
}
