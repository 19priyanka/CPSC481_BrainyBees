import React from "react";
import Genericquestionsection from "./Genericquestionsection";

export default function QuizPage() {
  const loopQns = [
    {
      question: "What does a 'for loop' do in C++ programming?",
      choice1: "Tells the computer to stop",
      choice2: "Repeats a set of instructions a specific number of times",
      choice3: " Displays a message on the screen",
    },
    {
      question: "How do you write a 'for loop' in C++?",
      choice1: "'if (condition) { /* code here */ }'",
      choice2: "'while (condition) { /* code here */ }'",
      choice3:
        "'for (initialization; condition; increment) { /* code here */ }'",
    },
    {
      question:
        "How many times will this 'for loop' repeat in C++: for (int i = 0; i < 5; i++) { /* code here */ }",
      choice1: "5 times",
      choice2: "4 times",
      choice3: "6 times",
    },
    {
      question:
        "What is the result of this 'for loop' in C++: for (int i = 0; i < 3; i++) { cout << 'Hello'; }",
      choice1: "'Hello'",
      choice2: "'HelloHello'",
      choice3: "'Hello' printed 3 times",
    },
  ];
  return (
    <>
      <h1 style={{ color: "blue" }}>LOOPS</h1>
      <Genericquestionsection questions={loopQns} />;
    </>
  );
}
