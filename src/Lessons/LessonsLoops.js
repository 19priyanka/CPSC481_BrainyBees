import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
import ShowPath from "../Showpath.jsx";

function LessonsLoops() {
  //change this later, just an example right now
  const links = [
    { link: "/Lessons/Loops/ForLoop", name: "For Loop" },
    { link: "/Lessons/Loops/WhileLoop", name: "While Loop" },
    { link: "/Lessons/Loops/DoLoop", name: "Do Loop" },
    { link: "/Lessons/Loops/NestedLoop", name: "Nested Loop" },
  ];
  return (
    <>
     <ShowPath></ShowPath>
      <GenericSelectionPage
        links={links}
        handleChange={(value) => {
          console.log(value);
        }}
        title="Loops"
       lessonsLoops
       grid={true}
      

      />
    </>
  );
}

export default LessonsLoops;
