import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowPath from "../Showpath";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import "./Quiz.css";

// ... (your imports)

export default function Genericquestionsection() {
  const navigate = useNavigate();
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
      choice3: "1 time",
      correct: "5 times",
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

  const [time, setTime] = useState(7);
  const [blink, setBlink] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [flashBackground, setFlashBackground] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          handleAutoSubmit(); // Call the auto-submit function
        } else if (prevTime === 1) {
          handleAutoSubmit();
        } else if (prevTime <= 60) {
          setBlink(true);
        } else {
          setBlink(false);
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlashBackground((prev) => !prev); // Toggle the background every 1 second
    }, 500);

    return () => clearInterval(flashInterval);
  }, [time]);

  useEffect(() => {
    // Check the 'submitted' state and navigate accordingly
    if (submitted) {
      navigate("/Quizzes/Loops/ForLoopQuiz/Results", {
        state: { questions: getUpdatedQuestions() },
      });
    }
  }, [submitted]);

  const handleAnswerChange = (index, answer) => {
    // Allow changing answers only if not submitted
    if (!submitted) {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[index] = answer;
      setSelectedAnswers(newSelectedAnswers);
    }
  };

  const handleQuizSubmit = () => {
    setSubmitted(true);
  };

  const handleAutoSubmit = () => {
    setSubmitted(true);
  };

  const getUpdatedQuestions = () => {
    // Ensure the solution fields are set before navigating
    const updatedQuestions = questions.map((question, index) => ({
      ...question,
      solution: selectedAnswers[index] || "",
    }));
    return updatedQuestions;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const buttonStyle = {
    background: blink ? "red" : "transparent",
  };

  const pageStyle = {
    backgroundColor:
      flashBackground && time <= 10 ? "#ff222214" : "transparent",
  };

  return (
    <>
      <ShowPath></ShowPath>
      <section className="mainSection mx-4 mb-4 p-2 rounded" style={pageStyle}>
        <h1 style={{ color: "blue" }}>{title}</h1>
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
            <div key={index}>
              {" "}
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  {question.question}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={selectedAnswers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  name={`radio-buttons-group-${index}`}
                >
                  <FormControlLabel
                    value={question.choice1}
                    control={<Radio disabled={submitted} />}
                    label={question.choice1}
                  />
                  <FormControlLabel
                    value={question.choice2}
                    control={<Radio disabled={submitted} />}
                    label={question.choice2}
                  />
                  <FormControlLabel
                    value={question.choice3}
                    control={<Radio disabled={submitted} />}
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
          onClick={handleQuizSubmit}
        >
          {submitted ? "VIEW RESULTS" : "SUBMIT"}
        </Button>
      </section>
    </>
  );
}
