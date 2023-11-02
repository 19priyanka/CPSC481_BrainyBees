import * as React from "react";
import GenericSelectionPage from "./GenericSelectionPage.jsx";
function HomeScreen(props) {
  //change this later, just an example right now
  //change this later, just an example right now
  const links = [
    { link: "/homescreen", name: "Test1" },
    { link: "/landingpage", name: "Test2" },
    { link: "/PracticeProblem", name: "Practise Problems" },
    { link: "/Quizzes", name: "Quiz Landing" },
    { link: "/games", name: "Games" },
    { link: "/Lessons", name: "Lessons" },
    { link: "/supplmentarydocs", name: "Supplementary docs" },
  ];
  return (
    <div style={{ marginTop: "1em" }}>
      <GenericSelectionPage
        links={links}
        grid={true}
        handleLanguageChange={(value) => {
          console.log(value);
        }}
        title="BrainyBees HomeScreen"
      />
    </div>
  );
}

export default HomeScreen;
