import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { textTransform } from "@mui/system";

export default function Genericquestionsection({ questions }) {
  return (
    <>
      <Button style={{ background: "red", margin: "2%" }} variant="contained">
        START
      </Button>
      <Button variant="outlined">30 MINUTES 🕑</Button>
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
      <Button style={{ background: "green" }} variant="contained">
        <Link
          to="/quizresults"
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
