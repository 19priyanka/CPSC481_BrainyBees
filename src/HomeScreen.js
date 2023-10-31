import * as React from "react";
import GenericSelectionPage from "./GenericSelectionPage.jsx";
function HomeScreen(props) {
    //change this later, just an example right now
  //change this later, just an example right now
  const links = [
    { link: "/praticeproblems", name: "Practice Problems" },
    { link: "/quizlanding", name: "Quiz Landing" },
    { link: "/games", name: "Games" },
    { link: "/lessons", name: "Lessons" },
    { link: "/supplmentarydocs", name: "Supplementary docs" },
  ];
  return (
    <div style={{marginTop:'1em'}}>
      <GenericSelectionPage
        links={links}
        grid={true}
        handleChange={(value) => {
          console.log(value);
        }}
        title="BrainyBees HomeScreen"
      />
    </div>
  );
}

export default HomeScreen;
