import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";
import ShowPath from "../Showpath";

export default function QuizLanding() {
  const links = [
    { link: "/Loops", name: "Loops" },
    { link: "/", name: "Variables" },
    { link: "/", name: "Conditionals" },
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
