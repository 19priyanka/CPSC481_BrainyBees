import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";
import ShowPath from "../Showpath";

export default function QuizLoops() {
  const links = [
    { link: "/Quizzes/Loops/ForLoopQuiz", name: "For Loops" },
    { link: "/", name: "While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
  ];
  return (
    <>
      <ShowPath></ShowPath>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="Quizzes"
      />
    </>
  );
}
