import React from "react";
import GenericSelectionPage from "../GenericSelectionPage";
import ShowPath from "../Showpath";
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx"

export default function QuizLanding() {
  const accordionCategories = [
    {
      name:'Operators',
      children:[


      ],
      Summary:'Operators summary'

    },
    {
      name:'Loops',
      children:[
        {link:"/Quizzes/Loops/ForLoopQuiz",name:'For Loops'},
        {link:"",name:'While Loops'},
      {link:"",name:'Do While Loops'}, 
      {link:"",name:'Nested Loops'}, 
      {link:'',name:'Hashmap loops'}
      ,{link:'',name:'Infinite loops'}],
      Summary:'Loops Summary'

    },
    {
      name:'File IO',
      children:[],
      Summary:'File IO summary'

    },
    {
      name:'Conditionals',
      children:[],
      Summary:'Conditionals summary'

    },


  ]
  const links = [
    { link: "/Quizzes/Loops/ForLoopQuiz", name: "For Loops" },
    { link: "/", name: "While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
    { link: "/Quizzes", name: "Do-While Loops" },
  ];

  return (
    <>
      <ShowPath></ShowPath>
      <GenericAccordionSelectionPage accordionCategories={accordionCategories} handleLanguageChange={(value)=> {console.log(value)}} title="Quizzes"/>

    </>
  );
}
