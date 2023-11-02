import React from "react";
import WhileLoopSolutionsSection from "./WhileLoopSolutionsSection";

export default function WhileLoopSolutions() {
  const loopQns = [
    {
      question: "What is the purpose of a while loop in coding?",
      choice1: "To repeat a block of code as long as a certain condition is true"
    },
    {
      question: "How do you know when to stop a while loop from running?",
      choice1: "When a specific condition becomes false"
    },
    {
      question:
        "What does the 'while' keyword do in a while loop?",
      choice1: "Tells the computer to repeat a set of instructions as long as a condition is true"
    },
    {
      question:
        "Which of the following is the worst use for a while loop?",
      choice1: "Playing video games"
    },
  ];
  return (
    <>
      <h1 style={{ color: "blue" }}>WHILE LOOPS SOLUTIONS</h1>
      <WhileLoopSolutions questions={loopQns} />;
    </>
  );
}
