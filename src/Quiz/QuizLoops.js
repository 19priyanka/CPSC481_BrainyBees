import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";

export default function QuizLoops() {
  const links = [
    { link: "/quizpage", name: "For Loops" },
    { link: "/", name: "While Loops" },
    { link: "/", name: "Do-While Loops" },
  ];
  return (
    <>
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
