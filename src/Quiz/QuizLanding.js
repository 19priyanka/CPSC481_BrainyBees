import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";

export default function QuizLanding() {
  const links = [
    { link: "/quizloops", name: "Loops" },
    { link: "/", name: "Variables" },
    { link: "/", name: "Conditionals" },
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
