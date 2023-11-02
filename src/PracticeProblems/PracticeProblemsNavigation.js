import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
import ShowPath from "../Showpath.jsx"

function PracticeProblemNavigation(props) {
  //change this later, just an example right now
  const links = [
    { link: "/PracticeProblems/Loops", name: "Loops" },
    { link: "/PracticeProblems/Variables", name: "Variables" },
    { link: "/PracticeProblems/Conditionals", name: "Conditionals" },
  ];
  return (
    <>
      <ShowPath></ShowPath>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="BrainyBees Practice Problem Navigation"
      />
    </>
  );
}

export default PracticeProblemNavigation;
