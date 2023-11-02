import React from "react";
import WhileLoopQuestionSection from "./WhileLoopQuestionsSection";

export default function WhileLoopQuestions() {
  const loopQns = [
    {
      question: "What is the purpose of a while loop in coding?",
      choice1: "To make the computer do jumping jacks",
      choice2: "To repeat a block of code as long as a certain condition is true",
      choice3: " To bake a virtual pizza",
    },
    {
      question: "How do you know when to stop a while loop from running?",
      choice1: "When a specific condition becomes false",
      choice2: "When you see a shooting star",
      choice3:
        "When you're hungry",
    },
    {
      question:
        "What does the 'while' keyword do in a while loop?",
      choice1: "Makes the computer dance",
      choice2: "Tells the computer to repeat a set of instructions as long as a condition is true",
      choice3: "Tells the computer to repeat a set of instructions as long as a condition is false",
    },
    {
      question:
        "Which of the following is the worst use for a while loop?",
      choice1: "Drawing a spiral",
      choice2: "Playing video games",
      choice3: "Counting apples",
    },
  ];
  return (
    <>
      <h1 style={{ color: "blue" }}>WHILE LOOPS</h1>
      <WhileLoopQuestionSection questions={loopQns} />;
    </>
  );
}
