import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";

export default function QuizLanding() {
  const links = [
    { link: "/quizloops", name: "For Loops" },
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
