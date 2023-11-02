import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

export default function WhileLoopSolutionsSection({ questions }) {
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
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
