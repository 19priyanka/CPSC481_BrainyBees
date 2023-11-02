import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
import ShowPath from "../Showpath.jsx"
function LoopPracticeProblems(props) {
  //change this later, just an example right now
  const links = [
    { link: "/PracticeProblems/Loops/WhileLoop", name: "While Loop" },
    { link: "/PracticeProblems/Loops/ForLoop", name: "For Loop" },
    { link: "/PracticeProblems/Loops/DoLoop", name: "Do Loop" },
    { link: "/PracticeProblems/Loops/NestedLoop", name: "Nested Loop" },
  ];
  return (
    <>
    <ShowPath></ShowPath>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="BrainyBees Loop Practice Problems"
      />
    </>
  );
}

export default LoopPracticeProblems;
