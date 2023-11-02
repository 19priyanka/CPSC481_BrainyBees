import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";

export default function LessonsLanding() {
  const links = [
    { link: "/Lessons/Loops", name: "Loops" },
    { link: "/Lessons/Variables", name: "Variables" },
    { link: "/Lessons/Conditionals", name: "Conditionals" },
    { link: "/Lessons/Conditionals", name: "Lists" },
    { link: "/Lessons/Conditionals", name: "Pointers" },
    { link: "/Lessons/Conditionals", name: "Inheritance" },
    { link: "/Lessons/Conditionals", name: "I/O" },
  ];
  return (
    <>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="Lessons"
      />
    </>
  );
}
