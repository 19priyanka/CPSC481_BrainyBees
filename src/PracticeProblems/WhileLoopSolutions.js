import React from "react";
import WhileLoopSolutionsSection from "./WhileLoopSolutionsSection";
import ShowPath from "../Showpath.jsx"

export default function WhileLoopSolutions() {
  const solutions = [
    {
      question: "What is the purpose of a while loop in coding?",
      choice1: "To repeat a block of code as long as a certain condition is true",
      solution:"Explanation: In coding, a while loop is like a rule that tells the computer to do something again and again, but only if a special condition is met. It's a bit like saying,'Keep doing this as long as the rule says yes!' These loops are great because they help you make the computer do things many times without writing the same stuff over and over."
    },
    {
      question: "A __________ continues to execute as long as a certain condition remain true",
      choice1:"while loop",
      solution:"Explanation: To know when to stop a while loop from running, you should pay attention to a special rule. The loop will keep going as long as that rule is true. But once that rule becomes false, it's time to stop the loop and move on to something else."
    },
    {
      question:
        "What does the 'while' keyword do in a while loop?",
      choice1: "Tells the computer to repeat a set of instructions as long as a condition is true",
      solution:"Explanation: In a while loop, the 'while' keyword acts as a command that instructs the computer to perform a specific task many times. This task will continue only if a specific condition remains true."
    },
    {
      question:
        "Which of the following is the worst use for a while loop?",
      choice1: "Playing video games",
      solution:"Explanation: You can infact count, and draw spirals with loops, but it would be very difficult to play a game with one!"
    },
  ];
  return (
    <>
      <ShowPath></ShowPath>
      <h1 style={{ color: "blue" }}>WHILE LOOPS SOLUTIONS</h1>
      <WhileLoopSolutionsSection questions={solutions} />;
    </>
  );
}
