import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
function LoopPracticeProblems(props) {
  //change this later, just an example right now
  const links = [
    { link: "/PracticeProblems/Loops/WhileLoop", name: "WhileLoop" },
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
        title="BrainyBees LoopPracticeProblems"
      />
    </>
  );
}

export default LoopPracticeProblems;
