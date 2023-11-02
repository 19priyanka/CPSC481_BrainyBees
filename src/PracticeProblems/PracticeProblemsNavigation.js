import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
function PracticeProblemNavigation(props) {
  //change this later, just an example right now
  const links = [
    { link: "/PracticeProblem/Loops", name: "Loops" },
    { link: "/PracticeProblem/Variables", name: "Variables" },
    { link: "/PracticeProblem/Conditionals", name: "Conditionals" },
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
        title="BrainyBees PracticeProblemNavigation"
      />
    </>
  );
}

export default PracticeProblemNavigation;
