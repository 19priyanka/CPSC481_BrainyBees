import * as React from "react";
import "./WhileLoopQuestions.css";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
function WhileLoopQuestions(props) {
  //change this later, just an example right now
  const links = [
    { link: "/PracticeProblems/Loops/WhileLoop/questions", name: "Question1" },
    { link: "/PracticeProblems/Loops/ForLoop", name: "For Loop" },
    { link: "/PracticeProblems/Loops/DoLoop", name: "Do Loop" },
    { link: "/PracticeProblems/Loops/NestedLoop", name: "Nested Loop" },
    { link: "/landingpage", name: "Test2" },
    { link: "/genericselectionpage", name: "Test3" },
  ];
  return (
    <>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="BrainyBees While Loop Questions"
      />
    </>
  );
}

export default WhileLoopQuestions;
