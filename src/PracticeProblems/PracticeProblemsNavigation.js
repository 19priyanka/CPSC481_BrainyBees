import * as React from "react";
import GenericSelectionPage from "../GenericSelectionPage.jsx";
import ShowPath from "../Showpath.jsx"
import GenericAccordionSelectionPage from "../GenericAccordionSelectionPage.jsx"

function PracticeProblemNavigation(props) {
  //change this later, just an example right now
  /*const links = [
    { link: "/PracticeProblems/Loops", name: "Loops" },
    { link: "/PracticeProblems/Variables", name: "Variables" },
    { link: "/PracticeProblems/Conditionals", name: "Conditionals" },
  ];*/
  const links = [
    { link: "/PracticeProblems/Loops/WhileLoop", name: "While Loop" },
    { link: "/PracticeProblems/Loops/ForLoop", name: "For Loop" },
    { link: "/PracticeProblems/Loops/DoLoop", name: "Do Loop" },
    { link: "/PracticeProblems/Loops/NestedLoop", name: "Nested Loop" },
  ];
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
        {link:"/PracticeProblems/Loops/ForLoop",name:'For Loops '},
        {link:"/PracticeProblems/Loops/WhileLoop",name:'While Loops '},
      {link:"/PracticeProblems/Loops/DoLoop",name:'Do While Loops '}, 
      {link:"/PracticeProblems/Loops/NestedLoop",name:'Nested Loops'}, 
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
  return (
    <>
      <ShowPath></ShowPath>
      <GenericAccordionSelectionPage accordionCategories={accordionCategories} handleLanguageChange={(value)=> {console.log(value)}} title="BrainyBees Practice Problem Navigation"/>
    </>
  );
}

export default PracticeProblemNavigation;
