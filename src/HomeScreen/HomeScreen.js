import * as React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import GenericSelectionPage from "../GenericSelectionPage.jsx";
function HomeScreen(props) {
  const navigate = useNavigate();
  //change this later, just an example right now
  //change this later, just an example right now
  //change this later, just an example right now
  const links = [
    { link: "/Lessons", name: "Lessons" },
    { link: "/PracticeProblems", name: "Practice Problems" },
    { link: "/Quizzes", name: "Quiz Yourself" },
    { link: "/games", name: "Games" },
    { link: "/supplmentarydocs", name: "Supplementary Docs" },
  ];
  return (

    <div style={{ marginTop: "1em" }}>
     <Button
        variant="outlined"
        color="primary"
        startIcon={<span>&#8592;</span>}
         onClick={()=>navigate("/")}>Back To Landing Page </Button>
      <GenericSelectionPage
        links={links}
        grid={true}
        handleLanguageChange={(value) => {
          console.log(value);
        }}
        title="Learn All About "
      />
      
    </div>
  );
}

export default HomeScreen;
