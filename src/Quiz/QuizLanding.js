import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";
import ShowPath from "../Showpath";
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx";

export default function QuizLanding() {
  const accordionCategories = [
    {
      name: "Operators",
      children: [],
      Summary: "Operators summary",
    },
    {
      name: "Loops",
      children: [
        { link: "/Quizzes/Loops/ForLoopQuiz", name: "For Loops" },
        { link: "", name: "While Loops" },
        { link: "", name: "Do While Loops" },
        { link: "", name: "Nested Loops" },
        { link: "", name: "Hashmap loops" },
        { link: "", name: "Infinite loops" },
      ],
      Summary:
        "Loops are control structures in programming that allow you to execute a block of code repeatedly based on a certain condition. In programming, loops are like a magic spell that lets your computer do the same thing over and over again. Imagine you have a list of chores, like washing dishes or sweeping the floor. Instead of telling your computer to do each chore one by one, you can use loops to make your computer do them all with just a few lines of code.",
    },
    {
      name: "File IO",
      children: [],
      Summary: "File IO summary",
    },
    {
      name: "Conditionals",
      children: [],
      Summary: "Conditionals summary",
    },
  ];
  const links = [
    { link: "/Quizzes/Loops/ForLoopQuiz", name: "For Loops" },
    { link: "/", name: "While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
  ];

  return (
    <>
      <ShowPath></ShowPath>
      <GenericAccordionSelectionPage
        grid
        accordionCategories={accordionCategories}
        handleLanguageChange={(value) => {
          console.log(value);
        }}
        title="Quizzes"
      />
    </>
  );
}
